# 隽戈的科技生活馆 | Junge's Tech Life

[![Hugo](https://img.shields.io/badge/Hugo-Extended-blue.svg)](https://gohugo.io/)
[![Theme](https://img.shields.io/badge/Theme-Docsy-gold.svg)](https://www.docsy.dev/)
[![License](https://img.shields.io/badge/License-CC%20BY%204.0-green.svg)](https://creativecommons.org/licenses/by/4.0)

这是一个记录技术沉淀与生活瞬间的个人站点。基于 [Hugo](https://gohugo.io) 静态网站生成器构建，采用了高度定制化的 [Docsy](https://www.docsy.dev) 主题，融合了技术文档、博客文章与生活方式展示。

## 🌟 特色功能 (Features)

- **📚 数字图书馆 (Digital Library)**
  - 包含独立的统计看板视图，展示藏书量与热门推荐。
  - 优化的书籍卡片布局，支持状态标记（连载中/已完结）。

- **🏙️ 沉浸式架构演示 (Architecture Visualization)**
  - 特有的 [LDC 架构演进之路](/html/LDC架构演进之路.html) 演示。
  - 结合 SVG 动画与深度文章，直观展示技术架构演变。

- **🎨 生活方式 (Lifestyle)**
  - 独立的 Lifestyle 板块，采用定制化布局。
  - **摄影**: 瀑布流/网格展示光影瞬间。
  - **Vlog**: 视频卡片展示生活记录。
  - **职场**: 杂志风格的职场感悟文章。

- **💬 互动社区**
  - 全站集成 **Giscus** 评论系统，基于 GitHub Discussions，无广告且体验流畅。
  - 支持在技术文档、博客及生活板块进行讨论。

- **🌍 多语言架构**
  - 原生支持中文 (zh) 与英文 (en) 双语内容切换。

## 📂 项目结构

主要内容目录结构如下：

`	ext
content/
├── zh/                     # 中文内容根目录
│   ├── blog/              # 技术博客文章
│   ├── docs/              # 技术书籍与文档库
│   │   └── datacenter-arch/ # LDC架构演进系列
│   ├── lifestyle/         # 生活方式板块
│   │   ├── photography/   # 摄影作品
│   │   ├── vlog/          # 视频日志
│   │   └── workplace/     # 职场感悟
│   └── about/             # 关于我
└── en/                     # 英文内容根目录
``n
## 🚀 快速开始 (Quick Start)

### 环境要求

- **Hugo**: 需要安装 [Hugo Extended](https://gohugo.io/installation/) 版本 (v0.110.0+)。
- **Node.js**: 用于安装 PostCSS 等前端依赖。
- **Go**: 用于管理 Hugo Modules。

### 本地运行

1. **克隆仓库**

   `ash
   git clone https://github.com/autherlj/junge-site.git
   cd junge-site
   ``n
2. **安装依赖**

   `ash
   npm install
   ``n
3. **启动开发服务器**

   `ash
   hugo server
   ``n
   打开浏览器访问 \http://localhost:1313\ 即可预览。

## 🛠️ 定制说明

本项目在 Docsy 主题基础上进行了以下关键定制：

- **Layouts**:
  - \layouts/lifestyle/list.html\: 定制的 Lifestyle 聚合页模板。
  - \layouts/docs/library.html\: 数字图书馆看板模板。
  - \layouts/partials/comments.html\: Giscus 评论组件封装。
  - \layouts/partials/hooks/body-end.html\: 自动注入评论系统的 Hook 逻辑。

- **Configuration**:
  - 核心配置位于 \hugo.yaml\。
  - 样式定制位于 \ssets/scss/_styles_project.scss\。

## 🤝 参与贡献

欢迎提交 Issue 或 Pull Request 来改进内容或代码。

## 📄 版权说明

本站内容采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) 协议进行许可。
基于 [Docsy](https://github.com/google/docsy) 主题二次开发。
