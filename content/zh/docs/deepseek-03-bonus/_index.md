---
title: "普通人如何抓住 DeepSeek 红利"
linkTitle: "DeepSeek-抓住红利"
weight: 12
description: "清华大学第三弹：普通人 AI 时代的机遇与挑战。"
date: 2024-02-03
params:
  author: "清华大学"
  state: "PDF 电子书"
  cover_icon: "fas fa-chart-line"
toc: false
html_class: td-page--no-left
---

<style>
/* --- 布局调整：移除左侧栏，扩展内容区 --- */

/* 1. 隐藏左侧边栏 (搜索框 & 导航) */
.td-sidebar {
    display: none !important;
}

/* 1.1 隐藏右侧 TOC 栏 (新增，彻底释放右侧空间) */
.td-sidebar-toc {
    display: none !important;
}

/* 2. 重置主内容区宽度，使其利用左右侧空间 */
@media (min-width: 768px) {
    /* 针对中等屏幕及以上 */
    main {
        /* 强制 flex-grow 占满剩余空间 */
        flex: 1 0 0% !important; 
        max-width: 100% !important;
        width: auto !important;
        padding-left: 0 !important;
        padding-right: 0 !important; /* 移除右侧间距，让PDF全宽 */
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

<div class="alert alert-light border shadow-sm mb-4">
    <div class="d-flex align-items-center">
        <div class="flex-shrink-0 text-success me-3">
            <i class="fas fa-chart-line fa-3x"></i>
        </div>
        <div class="flex-grow-1">
            <h5 class="alert-heading fw-bold mb-1">普通人如何抓住 DeepSeek 红利</h5>
            <p class="mb-0 text-muted small">清华大学出品 · 第三弹</p>
        </div>
        <div class="flex-shrink-0 ms-3">
            <a href="/books/清华大学第三弹：普通人如何抓住DeepSeek红利.pdf" class="btn btn-primary" target="_blank" download>
                <i class="fas fa-download me-2"></i>下载 PDF
            </a>
        </div>
    </div>
</div>

<embed src="/books/清华大学第三弹：普通人如何抓住DeepSeek红利.pdf" type="application/pdf" width="100%" height="1000px" class="border rounded shadow-sm" />
