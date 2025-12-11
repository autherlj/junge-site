---
title: "Vlog 精彩生活"
date: 2023-12-03
type: "lifestyle"
---

<style>
  .vlog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 1rem 0;
    justify-items: center;
  }

  .vlog-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    width: 100%;
    max-width: 400px; /* 限制卡片最大宽度 */
    height: 380px;    /* 固定卡片高度，接近用户要求的 360 */
  }

  .vlog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .vlog-image-wrapper {
    position: relative;
    height: 200px; /* 固定图片区域高度 */
    overflow: hidden;
    flex-shrink: 0;
  }

  .vlog-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .vlog-card:hover .vlog-image-wrapper img {
    transform: scale(1.05);
  }

  .vlog-content {
    padding: 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .vlog-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1a202c;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .vlog-desc {
    font-size: 0.9rem;
    color: #4a5568;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 限制描述为2行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .vlog-meta {
    margin-top: auto;
    padding-top: 0.75rem;
    border-top: 1px solid #edf2f7;
    font-size: 0.8rem;
    color: #718096;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-view {
    background-color: #3182ce;
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.8rem;
    transition: background-color 0.2s;
  }

  .btn-view:hover {
    background-color: #2c5282;
    color: white;
    text-decoration: none;
  }
</style>

<div class="vlog-grid">
  <!-- 卡片 1 -->
  <div class="vlog-card">
    <div class="vlog-image-wrapper">
      <!-- 使用绝对路径确保图片加载正确，假设 content/zh 映射到 /zh -->
      <img src="/zh/lifestyle/vlog/images1.webp" alt="Vlog 1封面">
    </div>
    <div class="vlog-content">
      <h3 class="vlog-title">云原生社区成都站</h3>
      <p class="vlog-desc">在蓉城遇见未来，与前沿技术同行，共探云原生时代的无限可能。</p>
    </div>
  </div>

  <!-- 卡片 2 -->
  <div class="vlog-card">
    <div class="vlog-image-wrapper">
      <img src="/zh/lifestyle/vlog/images2.webp" alt="Vlog 2封面">
    </div>
    <div class="vlog-content">
      <h3 class="vlog-title">CICD Meeting in Singapore</h3>
      <p class="vlog-desc">汇聚狮城，以持续交付为纽带，连接全球开发者的智慧与创新。</p>
    </div>
  </div>

  <!-- 卡片 3 -->
  <div class="vlog-card">
    <div class="vlog-image-wrapper">
      <img src="/zh/lifestyle/vlog/images3.webp" alt="Vlog 3封面">
    </div>
    <div class="vlog-content">
      <h3 class="vlog-title">XCOPS智能运维 广州</h3>
      <p class="vlog-desc">于花城点亮运维新视野，让智能驱动稳定，用科技守护每一次高效交付。</p>
    </div>
  </div>
</div>
