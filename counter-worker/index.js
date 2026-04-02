/**
 * Cloudflare Worker - 隽戈博客访客计数器
 * 数据源: Umami Cloud API
 */

const UMAMI_API_URL = 'https://api.umami.is/v1/websites/8ed4ed3c-7767-4476-8311-1c82fc83e5de/stats';
const UMAMI_API_KEY = 'api_UQ6xvEKIl4MVN965fmtRSQFZckKS4Re7';

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

    try {
      // 调用 Umami API 获取统计数据
      const umamiResponse = await fetch(
        `${UMAMI_API_URL}?startAt=1577836800000&endAt=1900000000000`,
        {
          headers: {
            "Accept": "application/json",
            "x-umami-api-key": UMAMI_API_KEY,
          },
        }
      );

      if (!umamiResponse.ok) {
        throw new Error(`Umami API error: ${umamiResponse.status}`);
      }

      const data = await umamiResponse.json();
      
      // 返回访问量数据
      return new Response(
        JSON.stringify({
          visitors: data.visitors || 0,
          pageviews: data.pageviews || 0,
          formatted: (data.visitors || 0).toLocaleString("zh-CN"),
        }),
        {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    } catch (error) {
      // 降级返回默认值
      return new Response(
        JSON.stringify({
          visitors: 0,
          pageviews: 0,
          formatted: "0",
          error: error.message,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }
  },
};
