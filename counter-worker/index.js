/**
 * Cloudflare Worker - 隽戈博客访客计数器
 * 使用 KV
 */

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://jungelife.me",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "GET") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const KEY = "count";
    let count = 0;
    let errorMsg = "";

    try {
      const val = await env.VISITOR_COUNTER.get(KEY);
      count = val ? parseInt(val, 10) : 0;
    } catch (e) {
      errorMsg = "KV read failed: " + e.message;
    }

    count = count + 1;

    try {
      await env.VISITOR_COUNTER.put(KEY, count.toString());
    } catch (e) {
      errorMsg = "KV write failed: " + e.message;
    }

    return new Response(
      JSON.stringify({
        count: count,
        formatted: count.toLocaleString("zh-CN"),
        error: errorMsg || null,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  },
};
