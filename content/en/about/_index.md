---
title: About Me
linkTitle: About Me
---

<style>
/* Resume Style */
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

/* Typing Animation */
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
max-width: 7em;
text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

@keyframes typing {
from { width: 0 }
to { width: 7em }
}

@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: #38bdf8 }
}

/* Capability Tags */
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

/* Pipeline Flow */
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
<!-- Left Column: Profile, Capabilities, Skills -->
<div class="col-lg-4">

<!-- Profile Card -->
<div class="resume-section">
<div class="info-card profile-card">
<div class="avatar-wrapper mb-3">
<img src="me.gif" alt="隽戈" width="160" height="160" class="rounded-circle" style="border: 4px solid #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.1); object-fit: cover;">
</div>
<h1 class="profile-name">隽戈</h1>
<div class="profile-role">Cloud-Native Architect / SRE Engineer / Tech Blogger</div>
<div class="profile-intro">
A <strong>hybrid profile</strong> combining <strong>SRE, Cloud-Native, Observability, Data Engineering, Machine Learning</strong> and <strong>Platform Development</strong>. Long-term focus on large-scale distributed system stability governance and AIOps platform construction, with strong platform engineering capabilities to independently complete AIOps system architecture design, core module development, and stability assurance.
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

<!-- Core Capabilities -->
<div class="resume-section">
<h3 class="section-title">Core Capabilities</h3>
<div class="info-card">
<div class="mb-3">
<span class="capability-tag sre">🛡️ SRE Stability Governance</span>
<span class="capability-tag cloud">☁️ Cloud-Native Architecture</span>
</div>
<div class="mb-3">
<span class="capability-tag" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); color: #5c5470;">📊 Observability Platform</span>
<span class="capability-tag data">📐 Data Engineering</span>
</div>
<div>
<span class="capability-tag ml">🤖 Machine Learning</span>
<span class="capability-tag" style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); color: #5c5470;">🔧 Platform Development</span>
</div>
</div>
</div>

<!-- Tech Stack -->
<div class="resume-section">
<h3 class="section-title">Tech Stack</h3>
<div class="info-card">

<!-- Programming Languages -->
<div class="skill-category">
<div class="skill-category-title">Languages</div>
<span class="skill-tag highlight">Python</span>
<span class="skill-tag highlight">Golang</span>
<span class="skill-tag">Java</span>
<span class="skill-tag">JavaScript</span>
<span class="skill-tag">Terraform</span>
<span class="skill-tag">Ansible</span>
</div>

<!-- Core Domains -->
<div class="skill-category">
<div class="skill-category-title">Core Domains</div>
<span class="skill-tag core">Kubernetes</span>
<span class="skill-tag core">AIOps</span>
<span class="skill-tag">Prometheus</span>
<span class="skill-tag">OpenTelemetry</span>
<span class="skill-tag">Grafana</span>
<span class="skill-tag">Platform Engineering</span>
</div>

<!-- Observability -->
<div class="skill-category">
<div class="skill-category-title">Observability</div>
<span class="skill-tag">Metric</span>
<span class="skill-tag">Log</span>
<span class="skill-tag">Trace</span>
<span class="skill-tag">Event</span>
<span class="skill-tag">ELK</span>
<span class="skill-tag">Skywalking</span>
</div>

<!-- Data & Messaging -->
<div class="skill-category">
<div class="skill-category-title">Data & Messaging</div>
<span class="skill-tag">Kafka</span>
<span class="skill-tag">Flink</span>
<span class="skill-tag">ClickHouse</span>
<span class="skill-tag">Elasticsearch</span>
</div>

<!-- DevOps Tools -->
<div class="skill-category">
<div class="skill-category-title">CI/CD & DevOps</div>
<span class="skill-tag">Jenkins</span>
<span class="skill-tag">GitLab CI</span>
<span class="skill-tag">ArgoCD</span>
<span class="skill-tag">Helm</span>
<span class="skill-tag">Kustomize</span>
</div>

</div>
</div>

<!-- Community -->
<div class="resume-section">
<h3 class="section-title">Community & Open Source</h3>
<div class="info-card">
<h6 class="fw-bold mb-3">Active Communities</h6>
<ul class="list-unstyled community-list mb-4">
<li>Expert Ops Community</li>
<li>HAMI Project Community</li>
<li>Xinference Community</li>
<li>CNCF Cloud-Native Southwest China</li>
<li>ArkSphere AI Community</li>
</ul>

<h6 class="fw-bold mb-3">Open Source Experience</h6>
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

<!-- Right Column: Typing, Background, Projects -->
<div class="col-lg-8">

<!-- Typing Animation -->
<div class="tech-header-container">
<div class="tech-typing-wrapper">
<div class="tech-typing-text">Hi, I'm JunGe.</div>
</div>
</div>

<!-- Engineering Philosophy -->
<div class="resume-section">
<h3 class="section-title">My Engineering Philosophy</h3>
<div class="info-card" style="background: #f8fafc;">
<p class="mb-3" style="color: #475569; line-height: 1.7;">
In the AI era, a developer's role shifts from writing code to making <strong>strategic design</strong> decisions.
AI is your tactical executor—it writes code, runs tests, and refactors—but <strong>strategic-level decisions</strong> must be made by humans.
The following four principles are the underlying logic behind my engineering decisions:
</p>
<div class="row g-3">
<div class="col-md-6">
<div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; height: 100%; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#38bdf8';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.transform='translateY(0)'">
<h6 style="color: #1e293b; font-weight: 700; margin-bottom: 0.5rem;">🔷 I Design, Not Pile Up</h6>
<p style="font-size: 0.85rem; color: #64748b; margin-bottom: 0; line-height: 1.6;">
A <strong>Deep Module</strong>—rich in functionality but simple in interface—beats a sea of shallow, fragmented code.
Encapsulate complexity behind the interface, so each interaction only requires understanding the interface, not every detail.
</p>
</div>
</div>
<div class="col-md-6">
<div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; height: 100%; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#38bdf8';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.transform='translateY(0)'">
<h6 style="color: #1e293b; font-weight: 700; margin-bottom: 0.5rem;">🔷 I Unify, Not Guess</h6>
<p style="font-size: 0.85rem; color: #64748b; margin-bottom: 0; line-height: 1.6;">
People, code, and AI speak the same vocabulary. A <strong>Ubiquitous Language</strong> isn't documentation—it's the engineering discipline of eliminating ambiguity.
In the AI era, this value is amplified tenfold.
</p>
</div>
</div>
<div class="col-md-6">
<div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; height: 100%; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#38bdf8';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.transform='translateY(0)'">
<h6 style="color: #1e293b; font-weight: 700; margin-bottom: 0.5rem;">🔷 I Think First, Then Act</h6>
<p style="font-size: 0.85rem; color: #64748b; margin-bottom: 0; line-height: 1.6;">
Let the design be interrogated before writing code. <strong>Dependencies, edge cases, data models</strong>—
AI won't make decisions for you; it only accelerates the decisions you've already made. If you haven't thought it through, AI only accelerates the chaos.
</p>
</div>
</div>
<div class="col-md-6">
<div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; height: 100%; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#38bdf8';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.transform='translateY(0)'">
<h6 style="color: #1e293b; font-weight: 700; margin-bottom: 0.5rem;">🔷 I Verify, Then Deliver</h6>
<p style="font-size: 0.85rem; color: #64748b; margin-bottom: 0; line-height: 1.6;">
Every step is verifiable. In an era where AI generates hundreds of lines of code, <strong>TDD's role shifts from quality assurance to process control</strong>—keeping every step within control and correcting deviations the moment they appear.
</p>
</div>
</div>
</div>
<div class="mt-3 pt-3 border-top" style="font-size: 0.85rem; color: #94a3b8; text-align: center;">
These principles aren't new inventions—they come from <em>Domain-Driven Design</em>, <em>A Philosophy of Software Design</em>, and Extreme Programming. In the AI era, they haven't been made obsolete—they've become more important.
</div>
</div>
</div>

<!-- Career Background -->
<div class="resume-section">
<h3 class="section-title">Career Background</h3>
<div class="mb-4">
<p>
Held a key technical leadership role in <strong>Singapore Telecom Smart City Project</strong>, driving the complete infrastructure evolution from early <strong>Mesos</strong> to modern <strong>Kubernetes</strong> cloud-native architecture.
</p>
<p>
During tenure at <strong>Ant Group</strong> and leading internet banks, deeply involved in cloud-native transformation of financial-grade core systems. Focused on high-availability infrastructure and platform engineering capabilities, significantly improving delivery efficiency and system elasticity while maintaining financial-grade stability.
</p>
</div>
</div>

<!-- Projects -->
<div class="resume-section">
<h3 class="section-title">Featured Projects</h3>

<div class="mb-4">
<h5 class="fw-bold">Enterprise DevOps Platform</h5>
<div class="text-muted mb-2 small">Architecture / Implementation / DevOps Level 3 Certification</div>
<p class="project-item">
Built enterprise-class private R&D workflow platform from scratch based on <strong>GitOps + CI/CD + Kubernetes</strong>. Standardized pipelines and automated delivery systems significantly shortened development cycles. Led platform to achieve <strong>DevOps Level 3 Certification</strong>, establishing industry-leading engineering standards.
</p>
<div class="text-center mt-3">
<img src="cicd.webp" alt="Enterprise DevOps Platform architecture diagram" loading="lazy" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
</div>
</div>

<div class="mb-4">
<h5 class="fw-bold">AI Heterogeneous Computing Infrastructure</h5>
<div class="text-muted mb-2 small">HAMi / vLLM / sglang / GPU Scheduling</div>
<p class="project-item">
Built high-performance heterogeneous computing platform based on <strong>HAMi + Kubernetes</strong>, achieving vGPU resource pooling and dynamic elastic scheduling. Successfully deployed <strong>vLLM / sglang</strong> LLM containerization solutions, providing unified, efficient, and scalable computing infrastructure for multi-scenario inference tasks.
</p>
<div class="text-center mt-3">
<img src="aiinfra.webp" alt="AI Heterogeneous Computing Infrastructure architecture diagram" loading="lazy" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
</div>
</div>

<div class="mb-4">
<h5 class="fw-bold">Next-Gen AIOps System</h5>
<div class="text-muted mb-2 small">Dify / OpenClaw / Harness / n8n / LLM Application</div>
<p class="project-item">
Explored deep LLM applications in operations domain using <strong>Dify</strong> / <strong>OpenClaw</strong> / <strong>Harness</strong> / <strong>n8n</strong> framework. Implemented intelligent log attribution analysis, automated fault diagnosis, and self-service ops chatbot, building an AIOps closed-loop system from reactive response to proactive governance.
</p>
<div class="text-center mt-3">
<img src="aiopsinfra.webp" alt="Next-Gen AIOps System architecture diagram" loading="lazy" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
</div>
</div>

<div class="mb-4">
<h5 class="fw-bold">Data Center Equipment Management System (Vibe Coding)</h5>
<div class="text-muted mb-2 small">Codex / Claude Code / Windsurf / Redfish / DCIM</div>
<p class="project-item">
Using <strong>Vibe Coding</strong> (AI-assisted development with <strong>Codex / Claude Code / Windsurf</strong>), built a Data Center Infrastructure Management (DCIM) system from scratch. It covers full-category <strong>asset management</strong>—unified multi-brand management of rack equipment, security appliances, storage devices, and network devices; integrates <strong>out-of-band BMC</strong> data via the standard <strong>Redfish</strong> protocol and automated crawlers for automated collection and ops workflow optimization; and provides <strong>data-center rack topology visualization</strong>, combined with <strong>MAC address</strong>-based automatic network link tracing, significantly improving asset visibility and operational efficiency.
</p>
</div>

</div>

<!-- Personal Vision -->
<div class="resume-section">
<h3 class="section-title">Personal Vision</h3>
<p>Beyond work, committed to connecting with the community through <strong>video content creation</strong> and technical sharing. Continuously producing high-quality tech Vlogs, sharing practical experience in a visual and systematic way to promote cloud-native and AI technology adoption.</p>
<div class="mt-3">
<ul class="list-inline mt-2">
<li class="list-inline-item me-3">📚 <strong>Knowledge:</strong> Building systematic tech knowledge base</li>
<li class="list-inline-item me-3">💡 <strong>Insights:</strong> Sharing industry trend perspectives</li>
<li class="list-inline-item">📷 <strong>Life:</strong> Documenting colorful moments beyond technology</li>
</ul>
</div>
</div>
</div>
</div>
</div>