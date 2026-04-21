---
title: "OpenClaw 官方文档"
linkTitle: "OpenClaw"
weight: 15
description: "OpenClaw 开源项目的官方中文文档导览。"
date: 2025-04-21
params:
  author: "OpenClaw 团队"
  state: "在线文档"
  cover_icon: "fas fa-paw"
  cover_image: "cover.webp"
  cover_mode: "book"
toc: false
html_class: td-page--no-left
---

<style>
/* 隐藏侧边栏，扩展内容区 */
.td-sidebar, .td-sidebar-toc { display: none !important; }
@media (min-width: 768px) {
    main { flex: 1 0 0% !important; max-width: 100% !important; width: auto !important; padding-left: 0 !important; padding-right: 0 !important; }
    .td-content { width: 100% !important; max-width: 100% !important; }
}
.feedback--link, .td-page-meta { display: none !important; }

/* 封面卡片 */
.oc-hero {
    margin: 2rem auto 3rem;
    max-width: 900px;
    background: #ffffff;
    color: #0f172a;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    padding: 3.5rem 2.5rem;
    text-align: center;
    box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.12);
    position: relative;
    overflow: hidden;
}
.oc-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 15% 10%, rgba(255, 90, 54, 0.08), transparent 55%),
                radial-gradient(circle at 85% 90%, rgba(15, 23, 42, 0.06), transparent 55%);
    pointer-events: none;
}
.oc-hero > * { position: relative; z-index: 1; }
.oc-logo {
    max-width: 420px;
    width: 80%;
    height: auto;
    margin: 0 auto 1.2rem;
    display: block;
}
.oc-hero .oc-sub {
    font-size: 1.1rem;
    color: #475569;
    margin-bottom: 2rem;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
}
.oc-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: #FF5A36;
    color: #fff !important;
    font-weight: 700;
    padding: 0.95rem 2.2rem;
    border-radius: 999px;
    text-decoration: none !important;
    font-size: 1.05rem;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
    box-shadow: 0 8px 20px -4px rgba(255, 90, 54, 0.4);
}
.oc-cta:hover {
    transform: translateY(-2px);
    background: #e84a28;
    box-shadow: 0 12px 24px -4px rgba(255, 90, 54, 0.55);
    color: #fff !important;
}
.oc-cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 0.8rem;
    color: #475569 !important;
    text-decoration: none !important;
    font-size: 0.95rem;
    padding: 0.95rem 1.4rem;
    border-radius: 999px;
    border: 1px solid #e2e8f0;
    transition: background 0.2s, color 0.2s;
}
.oc-cta-secondary:hover { background: #f1f5f9; color: #0f172a !important; }

/* 特性网格 */
.oc-features {
    max-width: 900px;
    margin: 0 auto 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
}
.oc-feat {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.4rem;
    transition: transform 0.2s, box-shadow 0.2s;
}
.oc-feat:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -6px rgba(0,0,0,0.08);
}
.oc-feat i {
    color: #3730a3;
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
}
.oc-feat h4 {
    font-size: 1.05rem !important;
    margin: 0 0 0.4rem !important;
    color: #1e293b;
}
.oc-feat p {
    font-size: 0.9rem;
    color: #475569;
    margin: 0 !important;
    line-height: 1.6;
}

.oc-note {
    max-width: 900px;
    margin: 0 auto 2rem;
    padding: 1rem 1.25rem;
    background: #fef3c7;
    border-left: 4px solid #f59e0b;
    border-radius: 6px;
    color: #78350f;
    font-size: 0.92rem;
    line-height: 1.6;
}
.oc-note i { margin-right: 0.4rem; }
</style>

<div class="oc-hero">
  <img class="oc-logo" src="cover.webp" alt="OpenClaw" />
  <div class="oc-sub">
    访问 OpenClaw 官方中文文档，了解项目架构、快速上手、API 参考与最佳实践。
  </div>
  <a href="https://docs.openclaw.ai/zh-CN" target="_blank" rel="noopener" class="oc-cta">
    <i class="fas fa-external-link-alt"></i> 前往官方文档
  </a>
  <a href="https://docs.openclaw.ai/zh-CN" target="_blank" rel="noopener" class="oc-cta-secondary">
    <i class="fas fa-book-open"></i> docs.openclaw.ai
  </a>
</div>

<div class="oc-features">
  <div class="oc-feat">
    <i class="fas fa-rocket"></i>
    <h4>快速上手</h4>
    <p>5 分钟跑通第一个示例，零门槛体验核心能力。</p>
  </div>
  <div class="oc-feat">
    <i class="fas fa-cubes"></i>
    <h4>架构总览</h4>
    <p>深入了解 OpenClaw 的模块划分、数据流与扩展点。</p>
  </div>
  <div class="oc-feat">
    <i class="fas fa-code"></i>
    <h4>API 参考</h4>
    <p>完整的接口定义与调用示例，开发者友好。</p>
  </div>
  <div class="oc-feat">
    <i class="fas fa-lightbulb"></i>
    <h4>最佳实践</h4>
    <p>来自社区的真实落地案例与性能调优建议。</p>
  </div>
</div>

<div class="oc-note">
  <i class="fas fa-info-circle"></i>
  由于官方文档站点设置了同源访问策略（<code>X-Frame-Options: DENY</code>），无法直接在本页内嵌显示。点击上方按钮在新标签页中打开官方文档。
</div>
