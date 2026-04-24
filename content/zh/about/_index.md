---
title: 关于我
linkTitle: 关于我
---

<style>
/* 简历风格样式 */
.resume-container {
max-width: 1200px;
margin: 0 auto;
padding-top: 100px;
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
margin-bottom: 1.25rem;
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
box-shadow: 0 4px 12px rgba(0,0,0,0.08);
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
line-height: 1.7;
margin-bottom: 1.5rem;
text-align: left;
}

.skill-tag {
display: inline-block;
padding: 0.35rem 0.75rem;
margin: 0.25rem 0.3rem 0.25rem 0;
background: #fff;
border: 1px solid #cbd5e1;
border-radius: 6px;
font-size: 0.8rem;
color: #475569;
transition: all 0.2s ease;
}

.skill-tag:hover {
background: #e0f2fe;
border-color: #7dd3fc;
color: #0284c7;
}

.skill-tag.highlight {
background: #e0f2fe;
border-color: #7dd3fc;
color: #0284c7;
font-weight: 500;
}

.skill-tag.core {
background: #fef3c7;
border-color: #fcd34d;
color: #b45309;
}

.skill-category {
margin-bottom: 1.25rem;
}

.skill-category:last-child {
margin-bottom: 0;
}

.skill-category-title {
font-size: 0.85rem;
font-weight: 600;
color: #64748b;
margin-bottom: 0.5rem;
text-transform: uppercase;
letter-spacing: 0.5px;
}

.project-item {
margin-bottom: 1.25rem;
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

/* 能力雷达标签 */
.capability-tag {
display: inline-flex;
align-items: center;
gap: 0.35rem;
padding: 0.4rem 0.75rem;
margin: 0.2rem 0.25rem 0.2rem 0;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: #fff;
border-radius: 20px;
font-size: 0.8rem;
font-weight: 500;
}

.capability-tag.sre {
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.capability-tag.cloud {
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.capability-tag.data {
background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.capability-tag.ml {
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

/* 链路流程样式 */
.pipeline-flow {
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 0.5rem;
margin: 0.75rem 0;
}

.pipeline-step {
padding: 0.35rem 0.65rem;
background: #fff;
border: 1px solid #e2e8f0;
border-radius: 6px;
font-size: 0.8rem;
color: #475569;
}

.pipeline-arrow {
color: #38bdf8;
font-weight: bold;
font-size: 0.9rem;
}

@media (max-width: 768px) {
.tech-typing-text {
font-size: 1.5rem;
}
.section-title {
text-align: left;
}
.pipeline-flow {
flex-direction: column;
align-items: flex-start;
}
.pipeline-arrow {
transform: rotate(90deg);
}
}
</style>

<div class="resume-container">

<div class="row">
<!-- 左侧栏：个人信息、能力雷达、技术栈 -->
<div class="col-lg-4">

<!-- 个人概况卡片 -->
<div class="resume-section">
<div class="info-card profile-card">
<div class="avatar-wrapper mb-3">
<img src="me.gif" alt="隽戈" width="160" height="160" class="rounded-circle" style="border: 4px solid #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.1); object-fit: cover;">
</div>
<h1 class="profile-name">隽戈</h1>
<div class="profile-role">云原生架构师 / SRE 工程师 / 技术博主</div>
<div class="profile-intro">
具备 <strong>SRE、云原生、可观测性、数据工程、机器学习</strong> 与平台研发的复合背景。长期专注于大规模分布式系统稳定性治理和 AIOps 平台建设，拥有较强的平台工程能力，能够独立完成 AIOps 系统的架构设计、核心模块研发与稳定性保障。
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

<!-- 核心能力雷达 -->
<div class="resume-section">
<h3 class="section-title">核心能力</h3>
<div class="info-card">
<div class="mb-3">
<span class="capability-tag sre">🛡️ SRE 稳定性治理</span>
<span class="capability-tag cloud">☁️ 云原生架构</span>
</div>
<div class="mb-3">
<span class="capability-tag" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); color: #5c5470;">📊 可观测性平台</span>
<span class="capability-tag data">📐 数据工程</span>
</div>
<div>
<span class="capability-tag ml">🤖 机器学习应用</span>
<span class="capability-tag" style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); color: #5c5470;">🔧 平台研发</span>
</div>
</div>
</div>

<!-- 完整技术栈 -->
<div class="resume-section">
<h3 class="section-title">技术栈</h3>
<div class="info-card">

<!-- 编程语言 -->
<div class="skill-category">
<div class="skill-category-title">编程语言</div>
<span class="skill-tag highlight">Python</span>
<span class="skill-tag highlight">Golang</span>
<span class="skill-tag">Java</span>
<span class="skill-tag">JavaScript</span>
<span class="skill-tag">Terraform</span>
<span class="skill-tag">Ansible</span>
</div>

<!-- 核心领域 -->
<div class="skill-category">
<div class="skill-category-title">核心领域</div>
<span class="skill-tag core">Kubernetes</span>
<span class="skill-tag core">AIOps</span>
<span class="skill-tag">Prometheus</span>
<span class="skill-tag">OpenTelemetry</span>
<span class="skill-tag">Grafana</span>
<span class="skill-tag">平台工程</span>
</div>

<!-- 可观测性技术 -->
<div class="skill-category">
<div class="skill-category-title">可观测性技术</div>
<span class="skill-tag">Metric</span>
<span class="skill-tag">Log</span>
<span class="skill-tag">Trace</span>
<span class="skill-tag">Event</span>
<span class="skill-tag">ELK</span>
<span class="skill-tag">Skywalking</span>
</div>

<!-- 数据与消息 -->
<div class="skill-category">
<div class="skill-category-title">数据与消息</div>
<span class="skill-tag">Kafka</span>
<span class="skill-tag">Flink</span>
<span class="skill-tag">ClickHouse</span>
<span class="skill-tag">Elasticsearch</span>
</div>

<!-- 工程化工具 -->
<div class="skill-category">
<div class="skill-category-title">工程化工具</div>
<span class="skill-tag">Jenkins</span>
<span class="skill-tag">GitLab CI</span>
<span class="skill-tag">ArgoCD</span>
<span class="skill-tag">Helm</span>
<span class="skill-tag">Kustomize</span>
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
<span class="skill-tag">OpenKruise</span>
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

<!-- AIOps 完整链路 -->
<div class="resume-section">
<h3 class="section-title">AIOps 能力链路</h3>
<div class="info-card" style="background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);">
<p class="mb-3">熟悉从多源数据接入到智能运维闭环的完整链路：</p>
<div class="pipeline-flow">
<span class="pipeline-step">📥 Metric / Log / Trace / Event</span>
<span class="pipeline-arrow">→</span>
<span class="pipeline-step">🔔 告警收敛</span>
<span class="pipeline-arrow">→</span>
<span class="pipeline-step">🔍 异常检测</span>
<span class="pipeline-arrow">→</span>
<span class="pipeline-step">🎯 根因分析</span>
<span class="pipeline-arrow">→</span>
<span class="pipeline-step">📈 容量预测</span>
</div>
<div class="pipeline-flow">
<span class="pipeline-step">⚡ 自动化处置</span>
<span class="pipeline-arrow">→</span>
<span class="pipeline-step">📖 智能 Runbook</span>
<span class="pipeline-arrow">→</span>
<span class="pipeline-step">🧠 运维知识库</span>
<span class="pipeline-arrow">→</span>
<span class="pipeline-step">✅ 告警闭环</span>
</div>
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

<div class="mb-4">
<h5 class="fw-bold">大规模可观测性平台建设</h5>
<div class="text-muted mb-2 small">Prometheus / OpenTelemetry / Grafana / ELK / Kafka / Flink</div>
<p class="project-item">
主导设计并落地多租户 <strong>Prometheus + OpenTelemetry</strong> 可观测性平台，覆盖 <strong>Metric / Log / Trace / Event</strong> 全链路数据采集与分析。基于 <strong>Kafka + Flink</strong> 构建实时告警流处理引擎，实现告警收敛、异常检测与根因分析的自动化，支撑日均数十亿级指标数据的实时分析需求。
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