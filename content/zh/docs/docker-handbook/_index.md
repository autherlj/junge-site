---
title: "Docker 实战手册"
linkTitle: "Docker 手册"
weight: 4
description: "容器化技术的入门与进阶实战，内附 wangchujiang Docker 实战教程完整内嵌阅读。"
date: 2022-11-11
params:
  author: "Docker Fans"
  state: "持续更新"
  cover_icon: "fab fa-docker"
---
<style>
/* --- 布局调整：移除左侧栏，扩展内容区 --- */

/* 1. 隐藏左侧边栏 (搜索框 & 导航) */
.td-sidebar {
    display: none !important;
}

/* 2. 重置主内容区宽度，使其利用左侧空间 */
@media (min-width: 768px) {
    /* 针对中等屏幕及以上 */
    main {
        /* 强制 flex-grow 占满剩余空间 (扣除右侧 TOC) */
        flex: 1 0 0% !important; 
        max-width: 100% !important;
        width: auto !important;
        padding-left: 0 !important; /* 移除左侧原有的内边距 */
        padding-right: 2rem !important; /* 保持右侧与 TOC 的间距 */
    }
    
    /* 确保内容容器本身也是宽的 */
    .td-content {
        width: 100% !important;
        max-width: 100% !important;
    }
}

/* --- 排版美化：阅读最佳视角 --- */

.td-content {
    /* 使用系统字体栈，确保清晰度 */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 18px; /* 增大字号，提升阅读体验 */
    line-height: 1.8; /* 增加行高，让视线更舒适 */
    color: #2d3748; /* 使用深灰蓝 (#2d3748) 代替纯黑，减少视觉疲劳 */
    letter-spacing: 0.01em;
}

/* 段落优化 */
.td-content p {
    margin-bottom: 1.8rem; /* 增加段落间距 */
    text-align: justify; /* 两端对齐，版面更整洁 */
}

/* 标题优化 */
.td-content h1, .td-content h2, .td-content h3, .td-content h4 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1a202c; /* 标题使用更深的颜色 */
    margin-top: 3rem; /* 增加标题上方留白 */
    margin-bottom: 1.5rem;
    line-height: 1.3;
}

.td-content h1 { font-weight: 800; letter-spacing: -0.02em; }
.td-content h2 { 
    font-weight: 700; 
    border-bottom: 1px solid #e2e8f0; 
    padding-bottom: 0.5rem; 
    font-size: 2rem;
}
.td-content h3 { font-weight: 600; font-size: 1.5rem; }

/* 列表优化 */
.td-content ul, .td-content ol {
    margin-bottom: 1.8rem;
    padding-left: 2rem;
}
.td-content li {
    margin-bottom: 0.8rem; /* 列表项之间也增加间距 */
}

/* --- 组件美化 --- */

/* 面包屑导航精致化 */
nav[aria-label="breadcrumb"] .breadcrumb {
    background: linear-gradient(to right, #f8fafc, #ffffff);
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 0.8rem 1.2rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02);
}

.breadcrumb-item {
    font-size: 0.95rem;
    font-weight: 500;
}

.breadcrumb-item a {
    color: #4a5568;
    text-decoration: none;
    transition: all 0.2s;
}

.breadcrumb-item a:hover {
    color: #3182ce;
    background-color: #ebf8ff;
    padding: 2px 6px;
    border-radius: 4px;
    margin: -2px -6px;
}

.breadcrumb-item.active {
    color: #a0aec0;
}

/* 自定义分隔符 */
.breadcrumb-item + .breadcrumb-item::before {
    content: "›";
    color: #cbd5e0;
    font-size: 1.2em;
    vertical-align: -1px;
    padding: 0 0.5rem;
}

/* 隐藏不需要的组件 */
.feedback--link, .td-page-meta {
    display: none !important;
}
</style>

## 前言：Build, Ship, and Run Any App, Anywhere

Docker 的出现彻底改变了软件交付的方式。它通过标准化的容器格式，消除了"在我的机器上能跑"的经典问题，是现代云原生架构的基石。本书从基础概念讲起，涵盖了 Dockerfile 编写、网络存储、镜像优化到容器编排的全方位知识。

> 📌 **配套实战教程**：页面底部内嵌了 [wangchujiang/docker-tutorial](https://wangchujiang.com/docker-tutorial/) 开源教程完整内容，涵盖从安装到生产实战的每个环节。阅读本书提纲后，可直接在此页滚动到底部跟随教程动手操作，无需跳转。

## 第一部分：容器化革命

### 1. 核心概念
*   **镜像 (Image)**：只读的模板，分层存储原理 (OverlayFS)
*   **容器 (Container)**：镜像的运行实例，进程隔离 (Namespace) 与资源限制 (Cgroups)
*   **仓库 (Registry)**：Docker Hub 与私有仓库搭建 (Harbor)
*   **配套章节**：[什么是 Docker](https://wangchujiang.com/docker-tutorial/#什么是-docker) · [基本概念](https://wangchujiang.com/docker-tutorial/#基本概念)

### 2. 常用命令实战
*   生命周期管理：run, start, stop, rm
*   信息查询：ps, logs, inspect, stats
*   容器交互：exec, attach, cp
*   **配套章节**：[Docker 命令介绍](https://wangchujiang.com/docker-tutorial/#docker-命令介绍)

## 第二部分：镜像构建与优化

### 3. Dockerfile 最佳实践
*   **指令详解**：COPY vs ADD, CMD vs ENTRYPOINT
*   **多阶段构建 (Multi-stage builds)**：大幅减小镜像体积
*   **缓存利用**：合理安排指令顺序加速构建
*   **配套章节**：[创建镜像](https://wangchujiang.com/docker-tutorial/#创建镜像) · [Dockerfile](https://wangchujiang.com/docker-tutorial/#dockerfile)

### 4. 镜像安全
*   最小化基础镜像：Alpine vs Distroless
*   非 Root 用户运行
*   镜像扫描与漏洞修复
*   **配套章节**：[使用 Docker 实战](https://wangchujiang.com/docker-tutorial/#使用-docker-实战)

## 第三部分：进阶应用

### 5. 网络与存储
*   **网络模式**：Bridge, Host, None, Overlay 详解
*   **数据卷 (Volumes)**：持久化存储方案，Bind Mount vs Volume
*   **容器互联**：DNS 解析与 link 机制
*   **配套章节**：[网络配置](https://wangchujiang.com/docker-tutorial/#网络配置) · [数据管理](https://wangchujiang.com/docker-tutorial/#数据管理)

### 6. Docker Compose 编排
*   `docker-compose.yaml` 语法详解
*   服务依赖管理 (depends_on)
*   实战：一键部署 LAMP/LNMP 栈，微服务开发环境搭建
*   **配套章节**：[Docker Compose](https://wangchujiang.com/docker-tutorial/#docker-compose)

## 第四部分：生产环境实践

*   **Docker Swarm**：内置的集群编排工具简介
*   **日志管理**：ELK 栈集成
*   **监控告警**：Prometheus + Grafana + cAdvisor
*   **CI/CD 集成**：在 Jenkins/GitLab CI 中使用 Docker
*   **配套章节**：[使用 Docker 实战](https://wangchujiang.com/docker-tutorial/#使用-docker-实战) · [在 CI 中使用 Docker](https://wangchujiang.com/docker-tutorial/#在-ci-中使用-docker)

---

## 附录：Docker 实战教程（内嵌阅读）

以上四个部分建立了完整的 Docker 知识框架。下方内嵌了 [wangchujiang/docker-tutorial](https://wangchujiang.com/docker-tutorial/) 开源实战教程——这是 GitHub 上广受好评的中文 Docker 教程，内容覆盖安装配置、镜像管理、网络存储、Compose 编排到生产实战，与本书提纲一一对应：

- **第一部分** → 教程「基本概念」「Docker 命令介绍」章节
- **第二部分** → 教程「创建镜像」「Dockerfile」章节
- **第三部分** → 教程「网络配置」「数据管理」「Docker Compose」章节
- **第四部分** → 教程「使用 Docker 实战」「在 CI 中使用 Docker」章节

以下为教程完整内容，可直接在此页动手跟读：

<style>
.docker-iframe-wrap {
    position: relative;
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.07);
    margin: 1.5rem 0 2rem;
}
.docker-iframe-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0db7ed;
    padding: 0.55rem 1rem;
    font-size: 0.82rem;
    color: #fff;
}
.docker-iframe-bar a {
    color: rgba(255,255,255,0.85);
    text-decoration: none;
    font-size: 0.78rem;
}
.docker-iframe-bar a:hover { color: #fff; text-decoration: underline; }
.docker-iframe-wrap iframe {
    width: 100%;
    height: 80vh;
    min-height: 600px;
    border: none;
    display: block;
}
</style>

<div class="docker-iframe-wrap">
  <div class="docker-iframe-bar">
    <span><i class="fab fa-docker" style="margin-right:0.4rem;"></i> wangchujiang.com · Docker 实战教程（开源）</span>
    <a href="https://wangchujiang.com/docker-tutorial/" target="_blank" rel="noopener">
      <i class="fas fa-external-link-alt" style="margin-right:0.3rem;"></i>在新标签页打开
    </a>
  </div>
  <iframe
    src="https://wangchujiang.com/docker-tutorial/#使用-docker-实战"
    title="Docker 实战教程"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms">
  </iframe>
</div>
