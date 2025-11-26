---
title: About Me
linkTitle: About Me
menu:
  main:
    weight: 10
---

<style>
.tech-header-container {
    background: #1e293b;
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
        typing 2s steps(18) forwards,
        blink-caret 0.75s step-end infinite;
    width: 0;
    max-width: 18ch;
    text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

@keyframes typing {
    from { width: 0 }
    to { width: 18ch }
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #38bdf8 }
}
</style>

<div class="tech-header-container">
    <div class="tech-typing-wrapper">
        <div class="tech-typing-text">Hello, I'm Junge.</div>
    </div>
</div>

<div class="row">
<div class="col-lg-4 text-center">
<!-- Ensure me.gif is in the same directory -->
<img src="me.gif" class="rounded-circle mb-4" alt="Junge's Avatar" width="200" height="200" style="object-fit: cover; border: 4px solid #eee; background-color: #f8f9fa;">
<h4 class="mt-2">Junge</h4>
<p class="text-muted">Cloud Native Engineer / Creator</p>
<div class="mt-3">
<a href="https://github.com/autherlj" target="_blank" class="btn btn-sm btn-outline-secondary me-2"><i class="fab fa-github"></i> Github</a>
<a href="mailto:your-email@example.com" class="btn btn-sm btn-outline-primary"><i class="fas fa-envelope"></i> Email</a>
</div>
</div>
<div class="col-lg-8">
<h2 class="h3">👋 Introduction</h2>
<p class="lead" style="font-size: 1.1rem;">
I focus on <strong>Cloud Native Technology</strong> and have long been engaged in infrastructure operations.
</p>
<p>
Currently working in the <strong>Financial Industry</strong>, dedicated to promoting the deep integration of AI and Cloud Native. I specialize in building intelligent and sustainable <strong>AIOps</strong> systems and implementing cutting-edge technologies.
</p>
<p>
In my spare time, I am passionate about <strong>Video Creation</strong>, continuously producing tech-themed Vlogs and sharing in-depth experiences.
</p>

<h3 class="h4 mt-5">🎯 Purpose Here</h3>
<ul class="list-unstyled">
<li class="mb-2">📚 <strong>Learning Notes</strong>: Accumulating technical knowledge.</li>
<li class="mb-2">💡 <strong>Tech Insights</strong>: Discussing industry trends and practical experience.</li>
<li class="mb-2">📷 <strong>Life & Vlogs</strong>: Recording interesting moments and creative works.</li>
</ul>
</div>
</div>

<div class="mt-5 pt-4 border-top">
<h3 class="text-center mb-4">🛠 Skills & Interests</h3>

<div class="row text-center">
<div class="col-md-4 mb-3">
<div class="p-3 border rounded h-100 bg-light">
<i class="fab fa-docker fa-2x text-primary mb-3"></i>
<h5 class="h6">Cloud Native & Ops</h5>
<p class="small text-muted mb-0">Kubernetes, Docker, Service Mesh, CI/CD</p>
</div>
</div>
<div class="col-md-4 mb-3">
<div class="p-3 border rounded h-100 bg-light">
<i class="fas fa-brain fa-2x text-success mb-3"></i>
<h5 class="h6">AIOps & AI</h5>
<p class="small text-muted mb-0">LLM Applications, Intelligent Monitoring, Data Analysis</p>
</div>
</div>
<div class="col-md-4 mb-3">
<div class="p-3 border rounded h-100 bg-light">
<i class="fas fa-video fa-2x text-danger mb-3"></i>
<h5 class="h6">Content Creation</h5>
<p class="small text-muted mb-0">Vlog Shooting, Video Editing, Tech Writing</p>
</div>
</div>
</div>
</div>
