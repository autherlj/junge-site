---
title: "Docker 实战手册"
linkTitle: "Docker 手册"
weight: 4
description: "容器化技术的入门与进阶实战，DevOps 工程师必读。"
date: 2022-11-11
params:
  author: "Docker Fans"
  state: "已完结"
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

Docker 的出现彻底改变了软件交付的方式。它通过标准化的容器格式，消除了“在我的机器上能跑”的经典问题，是现代云原生架构的基石。本书从基础概念讲起，涵盖了 Dockerfile 编写、网络存储、镜像优化到容器编排的全方位知识。

## 第一部分：容器化革命

### 1. 核心概念
*   **镜像 (Image)**：只读的模板，分层存储原理 (OverlayFS)
*   **容器 (Container)**：镜像的运行实例，进程隔离 (Namespace) 与资源限制 (Cgroups)
*   **仓库 (Registry)**：Docker Hub 与私有仓库搭建 (Harbor)

### 2. 常用命令实战
*   生命周期管理：run, start, stop, rm
*   信息查询：ps, logs, inspect, stats
*   容器交互：exec, attach, cp

## 第二部分：镜像构建与优化

### 3. Dockerfile 最佳实践
*   **指令详解**：COPY vs ADD, CMD vs ENTRYPOINT
*   **多阶段构建 (Multi-stage builds)**：大幅减小镜像体积
*   **缓存利用**：合理安排指令顺序加速构建

### 4. 镜像安全
*   最小化基础镜像：Alpine vs Distroless
*   非 Root 用户运行
*   镜像扫描与漏洞修复

## 第三部分：进阶应用

### 5. 网络与存储
*   **网络模式**：Bridge, Host, None, Overlay 详解
*   **数据卷 (Volumes)**：持久化存储方案，Bind Mount vs Volume
*   **容器互联**：DNS 解析与 link 机制

### 6. Docker Compose 编排
*   `docker-compose.yaml` 语法详解
*   服务依赖管理 (depends_on)
*   实战：一键部署 LAMP/LNMP 栈，微服务开发环境搭建

## 第四部分：生产环境实践

*   **Docker Swarm**：内置的集群编排工具简介
*   **日志管理**：ELK 栈集成
*   **监控告警**：Prometheus + Grafana + cAdvisor
*   **CI/CD 集成**：在 Jenkins/GitLab CI 中使用 Docker
