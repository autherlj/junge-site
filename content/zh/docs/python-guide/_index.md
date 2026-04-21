---
title: "Python 全栈指南"
linkTitle: "Python 指南"
weight: 3
description: "从基础语法到 Web 开发的完整学习路线，内附 Python 3.14 官方新特性速览。"
date: 2023-05-20
params:
  author: "OpenSource"
  state: "持续更新"
  cover_icon: "fab fa-python"
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
## 前言：人生苦短，我用 Python

Python 以其简洁优雅的语法和庞大的生态系统，成为了当今最流行的编程语言之一。无论是 Web 开发、数据分析、人工智能还是自动化运维，Python 都能游刃有余。本书汇总了作者多年的 Python 开发经验，旨在帮助读者从零开始，掌握全栈开发能力。

> 📌 **本书与时俱进**：页面底部内嵌了 [Python 3.14 官方新特性文档](https://docs.python.org/zh-cn/3/whatsnew/3.14.html)，你可以在读完基础章节后，直接在此页阅读最新版本带来的语言变化——包括改进的错误提示、`t-string` 模板字符串、自由线程构建（Free-Threaded CPython）等重量级特性，无需跳转。

## 第一部分：Python 核心基础

### 1. 基础语法精讲
*   **变量与数据类型**：动态类型的奥秘，List/Dict/Set 的底层实现
*   **控制流**：if/else, for/while, match-case (Python 3.10+)
*   **函数**：参数传递机制，lambda 表达式，闭包
*   **3.14 新增**：[PEP 758](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#pep-758-allow-except-and-except-expressions-without-parentheses) 允许不带圆括号的 `except` 表达式；[PEP 765](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#pep-765-disallow-return-break-continue-outside-finally) 禁止在 `finally` 中使用 `return/break/continue`

### 2. 面向对象编程 (OOP)
*   **类与对象**：self 的含义，构造函数 `__init__`
*   **三大特性**：封装、继承、多态
*   **魔术方法**：`__str__`, `__getitem__`, `__call__` 等黑魔法
*   **3.14 新增**：[PEP 649 & PEP 749](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#pep-649-pep-749-deferred-evaluation-of-annotations) 标注（Annotation）迟延求值——类型标注不再在定义时立即计算，对大型代码库性能提升明显

## 第二部分：Python 进阶编程

### 3. 高级特性
*   **装饰器 (Decorator)**：从原理到实战，编写通用的日志/重试装饰器
*   **迭代器与生成器**：`yield` 关键字详解，处理大规模数据流
*   **上下文管理器**：`with` 语句与 `contextlib`
*   **3.14 新增**：[PEP 750 模板字符串字面值（t-string）](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#pep-750-template-string-literals)——比 f-string 更安全的字符串插值方式，支持自定义处理逻辑，可有效防范 SQL 注入等安全问题

### 4. 并发编程
*   **多线程 vs 多进程**：GIL (全局解释器锁) 的影响与绕过
*   **协程 (Asyncio)**：`async/await` 语法，构建高并发网络应用
*   **并发库实战**：`threading`, `multiprocessing`, `concurrent.futures`
*   **3.14 重大突破**：[自由线程模式改进](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#free-threaded-cpython)（Free-Threaded CPython）——GIL 可选关闭，真正释放多核性能；[PEP 734](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#pep-734-multiple-interpreters-in-the-stdlib) 标准库多解释器支持，`asyncio` 内省能力同步增强；[增量式垃圾回收](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#incremental-garbage-collection)降低 GC 停顿

## 第三部分：Web 开发实战

### 5. 主流框架解析
*   **Django**：全功能框架，ORM, Admin 后台，MVT 架构
*   **Flask**：微框架，灵活的扩展机制，Blueprint 蓝图
*   **FastAPI**：基于 Type Hints 的高性能 API 框架，自动生成 Swagger 文档
*   **3.14 新增**：[PEP 749 标注迟延求值](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#pep-649-pep-749-deferred-evaluation-of-annotations) 使 FastAPI/Pydantic 的 Type Hints 性能进一步提升，运行时标注处理开销大幅减少

### 6. 数据库与 ORM
*   **SQLAlchemy**：Core 与 ORM 模式详解
*   **数据库设计**：一对多，多对多关系设计，索引优化
*   **Redis**：缓存策略与 Session 管理
*   **3.14 安全提升**：配合 [t-string](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#pep-750-template-string-literals) 构造 SQL 语句，从语言层面杜绝拼接注入风险；`sqlite3` 模块同步获得改进

## 第四部分：工程化与部署

*   **包管理**：Pip, Poetry, Conda 对比
*   **代码质量**：Type Hints (Mypy), Flake8, Black 格式化
*   **测试**：PyTest 框架与 Mock 测试
*   **部署**：Docker 容器化，Gunicorn/Uvicorn 配置
*   **3.14 构建变化**：[自由线程版 Python 已获官方支持](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#free-threaded-python-is-officially-supported)，可在 Docker 镜像中选用 `python:3.14t`；[实验性 JIT 编译器](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#an-experimental-just-in-time-jit-compiler)开始提供二进制发布版本；新增 [build-details.json](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#build-details-json) 规范构建产物元信息；[PEP 768](https://docs.python.org/zh-cn/3/whatsnew/3.14.html#pep-768-safe-external-debugger-interface-for-cpython) 提供安全的外部调试器接口，方便 CI/CD 中的远程调试

---

## 附录：Python 3.14 官方新特性（内嵌阅读）

学完本书的四个部分，你已经具备了扎实的 Python 全栈基础。接下来，是时候跟上语言本身的演进了。

Python 3.14 是一个里程碑版本，带来了若干激动人心的改变：

- **PEP 750 `t-string`**：比 f-string 更安全、可组合的字符串插值，与第三部分数据库安全直接呼应
- **PEP 649 & 749 标注迟延求值**：解决第三部分 FastAPI/Pydantic 的 Type Hints 性能瓶颈
- **PEP 734 多解释器 + 自由线程改进**：从根本上突破第二部分并发编程的 GIL 限制
- **PEP 758 & 765 控制流改进**：第一部分基础语法的自然延续——更简洁的异常语法，更安全的 finally 语义
- **PEP 768 安全调试接口 + JIT 编译器**：第四部分工程化与部署的重要升级，对调试和性能优化均有直接价值
- **改进的错误提示 + 新默认交互式 Shell**：全书通用，让开发体验更流畅

以下为官方中文文档原文，可直接在此阅读，无需离开本页：

<style>
.py-iframe-wrap {
    position: relative;
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.07);
    margin: 1.5rem 0 2rem;
}
.py-iframe-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1e40af;
    padding: 0.55rem 1rem;
    font-size: 0.82rem;
    color: #fff;
}
.py-iframe-bar a {
    color: #bfdbfe;
    text-decoration: none;
    font-size: 0.78rem;
}
.py-iframe-bar a:hover { color: #fff; text-decoration: underline; }
.py-iframe-wrap iframe {
    width: 100%;
    height: 80vh;
    min-height: 600px;
    border: none;
    display: block;
}
</style>

<div class="py-iframe-wrap">
  <div class="py-iframe-bar">
    <span><i class="fab fa-python" style="margin-right:0.4rem;"></i> docs.python.org · Python 3.14 新特性</span>
    <a href="https://docs.python.org/zh-cn/3/whatsnew/3.14.html" target="_blank" rel="noopener">
      <i class="fas fa-external-link-alt" style="margin-right:0.3rem;"></i>在新标签页打开
    </a>
  </div>
  <iframe
    src="https://docs.python.org/zh-cn/3/whatsnew/3.14.html"
    title="Python 3.14 新特性"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms">
  </iframe>
</div>
