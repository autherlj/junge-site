---
title: 关于我
linkTitle: 关于我
---

<style>
.tech-header-container {
    background: #1e293b; /* 深蓝灰背景 */
    background-image: 
        linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
    padding: 4rem 1rem;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 3rem;
    border: 1px solid rgba(56, 189, 248, 0.2);
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
    position: relative;
    overflow: hidden;
}

/* 顶部装饰条 */
.tech-header-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, transparent, #38bdf8, transparent);
}

.tech-typing-wrapper {
    display: inline-block;
}

.tech-typing-text {
    font-family: 'Courier New', monospace;
    font-size: 2.5rem;
    font-weight: bold;
    color: #e2e8f0;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 4px solid #38bdf8;
    animation: 
        typing 2s steps(10) forwards,
        blink-caret 0.75s step-end infinite;
    width: 0; /* 初始宽度 */
    max-width: 9em; /* 最终宽度限制 */
    text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

@keyframes typing {
    from { width: 0 }
    to { width: 9em } /* 刚好容纳文字的宽度 */
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #38bdf8 }
}
</style>

<div class="tech-header-container">
    <div class="tech-typing-wrapper">
        <div class="tech-typing-text">你好，我是隽戈。</div>
    </div>
</div>

<div class="row">
<div class="col-lg-4 text-center">
<!-- 请将你的头像命名为 me.jpg 并放入 static/images/ 目录中 -->
<img src="me.gif" class="rounded-circle mb-4" alt="隽戈的头像" width="200" height="200" style="object-fit: cover; border: 4px solid #eee; background-color: #f8f9fa;">
<h4 class="mt-2">隽戈</h4>
<p class="text-muted">云原生工程师 / 影像创作者</p>
<div class="mt-3">
<!-- 请替换为你真实的链接 -->
<a href="https://github.com/autherlj" target="_blank" class="btn btn-sm btn-outline-secondary me-2"><i class="fab fa-github"></i> Github</a>
<a href="mailto:your-email@example.com" class="btn btn-sm btn-outline-primary"><i class="fas fa-envelope"></i> Email</a>
</div>
</div>
<div class="col-lg-8">
<h2 class="h3">👋 个人简介</h2>
<p class="lead" style="font-size: 1.1rem;">
我专注于 <strong>云原生技术领域</strong>，长期从事基础设施运维工作。
</p>
<p>
目前就职于 <strong>金融行业</strong>，致力于推动人工智能与云原生的深度融合，擅长构建智能化、可持续的 <strong>AIOps</strong> 体系，负责前沿技术的落地实践。
</p>
<p>
工作之余，我热衷于 <strong>影像创作</strong>，持续制作技术主题 Vlog 并进行深度经验分享。
</p>

<h3 class="h4 mt-5">🎯 这里的目的</h3>
<ul class="list-unstyled">
<li class="mb-2">📚 <strong>记录学习笔记</strong>：沉淀技术积累，构建知识体系。</li>
<li class="mb-2">💡 <strong>分享技术见解</strong>：探讨行业趋势，复盘实战经验。</li>
<li class="mb-2">📷 <strong>分享生活点滴</strong>：记录奇闻趣事，展示影像创作。</li>
</ul>
</div>
</div>

<div class="mt-5 pt-4 border-top">
<h3 class="text-center mb-4">🛠 技能与兴趣</h3>

<div class="row text-center">
<div class="col-md-4 mb-3">
<div class="p-3 border rounded h-100 bg-light">
<i class="fab fa-docker fa-2x text-primary mb-3"></i>
<h5 class="h6">云原生 & 运维</h5>
<p class="small text-muted mb-0">Kubernetes, Docker, Service Mesh, CI/CD</p>
</div>
</div>
<div class="col-md-4 mb-3">
<div class="p-3 border rounded h-100 bg-light">
<i class="fas fa-brain fa-2x text-success mb-3"></i>
<h5 class="h6">AIOps & 智能化</h5>
<p class="small text-muted mb-0">LLM 应用落地, 智能监控, 数据分析</p>
</div>
</div>
<div class="col-md-4 mb-3">
<div class="p-3 border rounded h-100 bg-light">
<i class="fas fa-video fa-2x text-danger mb-3"></i>
<h5 class="h6">内容创作</h5>
<p class="small text-muted mb-0">Vlog 拍摄, 视频剪辑, 技术写作</p>
</div>
</div>
</div>
</div>
