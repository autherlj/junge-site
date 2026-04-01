/**
 * Cloudflare Worker - 隽戈博客访客计数器
 * 
 * 功能：
 * - GET /：读取计数 + 返回当前值
 * - 每次调用计数 +1
 * - 支持 CORS，允许 jungelife.me 调用
 */

export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://jungelife.me",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // 处理 CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "GET") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const kv = env.VISITOR_COUNTER;
    const KEY = "homepage_visitors";

    try {
      // 读取当前计数
      let count = await kv.get(KEY, "number");
      if (count === null) {
        count = 0;
      }

      // 计数 +1
      count = count + 1;

      // 写回 KV（异步，不阻塞响应）
      ctx.waitUntil(kv.put(KEY, count.toString()));

      // 返回 JSON
      return new Response(
        JSON.stringify({
          count: count,
          formatted: count.toLocaleString("zh-CN"),
        }),
        {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Service unavailable", count: 0 }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
  },
};
