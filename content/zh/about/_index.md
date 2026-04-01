---
title: 关于我
linkTitle: 关于我
---

<style>
/* 简历风格样式 */
.resume-container {
max-width: 1200px; /* 增加宽度以适应侧边栏布局 */
margin: 0 auto;
padding-top: 100px; /* 增加顶部内边距，防止被顶部导航栏遮挡 */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
color: #334155;
}

.resume-section {
margin-bottom: 2rem;
}

.section-title {
position: relative;
font-size: 1.25rem;
font-weight: 600;
color: #1e293b;
margin-bottom: 1rem;
padding-left: 0.75rem;
border-left: 3px solid #38bdf8;
}

.info-card {
background: #f8fafc;
border: 1px solid #e2e8f0;
border-radius: 8px;
padding: 1.5rem;
height: 100%;
transition: all 0.3s ease;
}

.info-card:hover {
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(0,0,0,0.05);
border-color: #38bdf8;
}

.profile-card {
text-align: center;
}

.profile-name {
font-size: 1.75rem;
font-weight: 700;
color: #1e293b;
margin: 1rem 0 0.5rem;
}

.profile-role {
font-size: 1rem;
color: #64748b;
margin-bottom: 1rem;
font-weight: 500;
}

.profile-intro {
font-size: 0.95rem;
color: #475569;
line-height: 1.6;
margin-bottom: 1.5rem;
text-align: left;
}

.skill-tag {
display: inline-block;
padding: 0.35rem 0.8rem;
margin: 0 0.5rem 0.5rem 0;
background: #fff;
border: 1px solid #cbd5e1;
border-radius: 6px;
font-size: 0.85rem;
color: #475569;
}

.skill-tag.highlight {
background: #e0f2fe;
border-color: #7dd3fc;
color: #0284c7;
}

.project-item {
margin-bottom: 1rem;
padding-left: 1rem;
border-left: 2px solid #cbd5e1;
}

.community-list li {
margin-bottom: 0.5rem;
display: flex;
align-items: center;
font-size: 0.95rem;
}

.community-list li::before {
content: "•";
color: #38bdf8;
font-weight: bold;
margin-right: 0.5rem;
}

/* 打字机动画样式 */
.tech-header-container {
background: #1e293b;
background-image: 
linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
background-size: 30px 30px;
padding: 3rem 2rem;
border-radius: 12px;
margin-bottom: 2.5rem;
border: 1px solid rgba(56, 189, 248, 0.2);
box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
position: relative;
overflow: hidden;
display: flex;
align-items: center;
}

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
font-size: 2rem;
font-weight: bold;
color: #e2e8f0;
display: inline-block;
overflow: hidden;
white-space: nowrap;
border-right: 4px solid #38bdf8;
animation: 
typing 2s steps(10) forwards,
blink-caret 0.75s step-end infinite;
width: 0;
max-width: 9em;
text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

@keyframes typing {
from { width: 0 }
to { width: 9em }
}

@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: #38bdf8 }
}

@media (max-width: 768px) {
.tech-typing-text {
font-size: 1.5rem;
}
.section-title {
text-align: left;
}
}
</style>

<div class="resume-container">

<div class="row">
<!-- 左侧栏：个人信息、技术与社区 -->
<div class="col-lg-4">

<!-- 个人概况卡片 -->
<div class="resume-section">
<div class="info-card profile-card">
<div class="avatar-wrapper mb-3">
<img src="me.gif" alt="隽戈" width="160" height="160" class="rounded-circle" style="border: 4px solid #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.1); object-fit: cover;">
</div>
<h1 class="profile-name">隽戈</h1>
<div class="profile-role">云原生架构师 / 技术博主</div>
<div class="profile-intro">
资深云原生技术专家，专注于大规模基础设施工程与平台架构。在金融级场景下，致力于通过 AIOps 与异构算力调度（AI Infra）推动技术栈的智能化演进，实现从传统虚拟化到云原生及大模型底座的全面转型。
</div>
<div class="social-links">
<a href="https://github.com/autherlj" target="_blank" class="btn btn-outline-dark btn-sm me-2 mb-2">
<i class="fab fa-github"></i> autherlj
</a>
<a href="mailto:your-email@example.com" class="btn btn-outline-primary btn-sm mb-2">
<i class="fas fa-envelope"></i> Email
</a>
</div>
</div>
</div>

<!-- 技能栈 -->
<div class="resume-section">
<h3 class="section-title">技术栈</h3>
<div class="info-card">
<h6 class="fw-bold mb-3">编程语言</h6>
<div class="mb-4">
<span class="skill-tag highlight">Python</span>
<span class="skill-tag highlight">Java</span>
<span class="skill-tag">HTML</span>
<span class="skill-tag">JavaScript</span>
</div>

<h6 class="fw-bold mb-3">核心领域</h6>
<div>
<span class="skill-tag">Kubernetes</span>
<span class="skill-tag">AIOps</span>
<span class="skill-tag">AI Infrastructure</span>
<span class="skill-tag">Platform Engineering</span>
</div>
</div>
</div>

<!-- 社区与开源 -->
<div class="resume-section">
<h3 class="section-title">社区与开源</h3>
<div class="info-card">
<h6 class="fw-bold mb-3">活跃社区</h6>
<ul class="list-unstyled community-list mb-4">
<li>高效运维社区</li>
<li>HAMI 社区</li>
<li>Xinference 社区</li>
<li>CNCF 云原生西南社区</li>
<li>ArkSphere AI 社区</li>
</ul>

<h6 class="fw-bold mb-3">开源项目经验</h6>
<div>
<span class="skill-tag">kubeasz</span>
<span class="skill-tag">Project-HAMi</span>
<span class="skill-tag">higress</span>
<span class="skill-tag">vllm</span>
<span class="skill-tag">sglang</span>
<span class="skill-tag">xinference</span>
</div>
</div>
</div>
</div>

<!-- 右侧栏：打字机动画、经历与项目 -->
<div class="col-lg-8">

<!-- 打字机动画区域 -->
<div class="tech-header-container">
<div class="tech-typing-wrapper">
<div class="tech-typing-text">你好，我是隽戈。</div>
</div>
</div>

<!-- 职业背景 -->
<div class="resume-section">
<h3 class="section-title">职业背景</h3>
<div class="mb-4">
<p>
拥有 <strong>新加坡电信智慧城市项目</strong> 的核心项目管理经验，作为技术骨干，主导了基础设施从早期 <strong>Mesos</strong> 到现代 <strong>Kubernetes</strong> 云原生体系的完整技术演进与架构升级。
</p>
<p>
在 <strong>蚂蚁金服</strong> 及头部互联网银行任职期间，深度参与金融级核心系统的云原生化转型。重点聚焦底层基础设施的高可用性建设与平台工程化能力，在保障金融级稳定性的前提下，显著提升了研发交付效率与系统弹性。
</p>
</div>
</div>

<!-- 代表项目 -->
<div class="resume-section">
<h3 class="section-title">代表项目实践</h3>

<div class="mb-4">
<h5 class="fw-bold">企业级研运一体化平台 (DevOps Platform)</h5>
<div class="text-muted mb-2 small">架构设计 / 落地实施 / DevOps 三级认证</div>
<p class="project-item">
基于 <strong>GitOps + CI/CD + Kubernetes</strong> 理念，从 0 到 1 构建企业级私有化研发流程平台。通过标准化流水线与自动化交付体系，大幅缩短研发周期，并主导平台通过 <strong>DevOps 三级认证</strong>，确立了行业领先的工程化标准。
</p>
</div>

<div class="mb-4">
<h5 class="fw-bold">AI 异构算力底座建设 (AI Infrastructure)</h5>
<div class="text-muted mb-2 small">HAMi / vLLM / sglang / GPU Scheduling</div>
<p class="project-item">
构建基于 <strong>HAMi + Kubernetes</strong> 的高性能异构算力平台，实现 vGPU 资源的池化管理与动态弹性调度。成功落地基于 <strong>vLLM / sglang</strong> 的大模型容器化部署方案，为企业内部多场景推理任务提供了统一、高效、可扩展的算力底座。
</p>
</div>

<div class="mb-4">
<h5 class="fw-bold">下一代智能运维体系 (AIOps)</h5>
<div class="text-muted mb-2 small">Dify / OpenClaw / n8n / LLM Application / Intelligent Operations</div>
<p class="project-item">
探索 <strong>LLM</strong> 在运维领域的深度应用，基于 <strong>Dify</strong> + <strong>OpenClaw</strong> + <strong>n8n</strong> 框架落地智能运维场景。实现了日志智能归因分析、系统故障自动诊断及自助式运维客服，构建了从被动响应到主动治理的 <strong>AIOps</strong> 闭环体系，有效降低了运维人力成本。
</p>
</div>
</div>

<!-- 个人兴趣 -->
<div class="resume-section">
<h3 class="section-title">个人愿景</h3>
<p>工作之余，致力于通过 <strong>影像创作</strong> 与技术分享连接社区。持续制作高质量技术 Vlog，以可视化、系统化的方式复盘实战经验，推动云原生与 AI 技术的普及与传播。</p>
<div class="mt-3">
<ul class="list-inline mt-2">
<li class="list-inline-item me-3">📚 <strong>沉淀：</strong> 构建系统化技术知识库</li>
<li class="list-inline-item me-3">💡 <strong>洞察：</strong> 分享行业前沿趋势见解</li>
<li class="list-inline-item">📷 <strong>生活：</strong> 记录技术之外的多彩瞬间</li>
</ul>
</div>
</div>
</div>
</div>
</div>
