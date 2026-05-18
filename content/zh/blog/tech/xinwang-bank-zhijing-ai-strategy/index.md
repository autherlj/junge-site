---
title: "新网银行"智擎AI+"战略升级：10类数字员工、77个智能助手如何落地？"
slug: "xinwang-bank-zhijing-ai-strategy"
date: 2026-05-18
description: "新网银行发布2025年年报，详解"智擎AI+"战略：10类数字员工、77个智能助手、AI Agent平台落地实践、异构算力底座建设。金融AI从工具走向员工，银行业智能化转型的全景实录。"
categories: ["技术", "金融科技"]
tags: ["AI", "金融科技", "数字银行", "AI Agent", "大模型", "AIOps", "智能客服"]
featured: true
cover: "/images/blog/xinwang-bank-zhijing-ai-strategy-cover.jpg"
---

<style>
/* ===== junge-site 通用文章样式 ===== */
.td-content {
    max-width: 900px;
    margin: 0 auto;
}

/* ---- 卡片组件 ---- */

/* 引言卡片：紫蓝渐变 + 白色文字 + 阴影 */
.lead-quote {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2.5rem 2rem;
    border-radius: 12px;
    margin: 2rem 0 3rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.6;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;
}
.lead-quote::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 10px;
    font-size: 120px;
    opacity: 0.1;
    font-family: Georgia, serif;
}

/* 信息框：浅色背景 + 左侧蓝色边框 */
.info-box {
    background: #f8f9fa;
    padding: 1.5rem;
    border-left: 4px solid #667eea;
    border-radius: 8px;
    margin: 2rem 0;
}

/* 重点提示框：暖色背景 + 橙色边框 */
.highlight-box {
    background: linear-gradient(135deg, #fff5f5 0%, #fffaf0 100%);
    border: 2px solid #ed8936;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2rem 0;
    box-shadow: 0 4px 12px rgba(237, 137, 54, 0.1);
}

/* 数据卡片：深色背景 + 大号数字 */
.stats-box {
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    text-align: center;
}
.stats-box .number {
    font-size: 2.5rem;
    font-weight: 800;
    color: #667eea;
    display: block;
}

/* ---- 序号列表：带彩色编号圆徽章 ---- */
.numbered-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
}
.numbered-list li {
    padding: 0.75rem 0 0.75rem 2.5rem;
    position: relative;
    line-height: 1.6;
    border-bottom: 1px solid #f0f0f0;
}
.numbered-list li:last-child {
    border-bottom: none;
}
.numbered-list .num {
    position: absolute;
    left: 0;
    top: 0.75rem;
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
    flex-shrink: 0;
}

/* ---- 引用卡片（正文内嵌引用） ---- */
.inline-quote {
    background: #f0f4ff;
    padding: 1.5rem 2rem;
    margin: 2rem 0;
    border-radius: 12px;
    position: relative;
    font-style: italic;
    color: #4a5568;
}
.inline-quote::before {
    content: '"';
    position: absolute;
    top: 5px;
    left: 12px;
    font-size: 48px;
    color: #667eea;
    opacity: 0.2;
    font-family: Georgia, serif;
}
.inline-quote .author {
    display: block;
    margin-top: 0.5rem;
    font-style: normal;
    font-weight: 600;
    color: #667eea;
    font-size: 0.9rem;
}

/* ---- 视觉分隔器 ---- */
.section-divider {
    display: flex;
    align-items: center;
    margin: 3rem 0;
    gap: 12px;
}
.section-divider .line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, #667eea, transparent);
}
.section-divider .dot {
    width: 6px;
    height: 6px;
    background: #667eea;
    border-radius: 50%;
    opacity: 0.5;
}

/* ---- 结尾典藏框 ---- */
.outro-box {
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    color: white;
    padding: 2.5rem;
    border-radius: 16px;
    margin: 3rem 0;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
.outro-box strong {
    color: #667eea !important;
}

/* ---- 标题样式 ---- */
.td-content h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1a202c;
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.8rem;
    border-bottom: 3px solid #667eea;
    position: relative;
}
.td-content h2::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
}

/* ---- 加粗文字主题色 ---- */
.td-content strong {
    color: #667eea;
    font-weight: 600;
}

/* ---- 段落样式 ---- */
.td-content p {
    margin-bottom: 1.5rem;
}

/* ---- 图片样式 ---- */
.td-content img {
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    margin: 2.5rem 0;
    width: 100%;
    transition: transform 0.3s ease;
}
.td-content img:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}

/* ---- 代码块 ---- */
.td-content pre {
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    margin: 2rem 0;
}

/* ---- 表格 ---- */
.td-content table {
    border-collapse: collapse;
    width: 100%;
    margin: 2rem 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.td-content table th {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 12px 16px;
    font-weight: 600;
}
.td-content table td {
    padding: 10px 16px;
    border-bottom: 1px solid #f0f0f0;
}
.td-content table tr:last-child td {
    border-bottom: none;
}

/* ---- 响应式 ---- */
@media (max-width: 768px) {
    .lead-quote {
        padding: 1.5rem 1rem;
        font-size: 1.1rem;
    }
    .stats-box .number {
        font-size: 2rem;
    }
    .numbered-list li {
        padding-left: 2rem;
    }
}
</style>

<div class="lead-quote">
当一家数字银行将 AI 从"工具"升级为"员工"，它所构建的不仅仅是技术能力，而是一整套人机协同的运营体系。新网银行用 10 类数字员工和 77 个智能助手，给你演示了金融 AI 的未来形态。
</div>

近日，新网银行发布 2025 年年度报告，最引人注目的并非传统的财务数据，而是其"智擎 AI+"战略的落地成果——**10 类数字员工、77 个智能助手、日均百万级 API 调用**。这组数据意味着，AI 已经不再只是银行后台的辅助工具，而是直接嵌入到了从客户触达到风险决策的每一个业务环节。

## 从试点到全员覆盖：AI 能力的三年演进

新网银行的 AI 之路清晰地分为三个阶段：

<div class="stats-box">
<span class="number">2023</span>
引入基础大模型，开展技术探索
</div>

<div class="stats-box">
<span class="number">2024</span>
试点首个智能体应用，围绕十余项业务痛点实践
</div>

<div class="stats-box">
<span class="number">2025</span>
"智擎AI+"战略全面升级，提出"人人AI，处处AI"目标
</div>

这种演进路径并非特立独行，但它**从试点到全员覆盖的推进速度**值得关注。2024 年还只是围绕十余项业务痛点做小范围试点，到了 2025 年，已经形成了覆盖客户触达、风险评估、内部办公等领域的智能化应用矩阵。

<div class="section-divider">
  <span class="line"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="line"></span>
</div>

## 算力底座：异构融合的 AI 云基础设施

支撑规模化 AI 应用的，是一套扎实的底层基础设施。新网银行打造了**异构融合的 AI 云算力底座**，技术选型上选择了容器化 + 算力池化的路线：

<div class="info-box">
<strong>核心特征</strong>：基于容器技术构建算力池化与智能调度能力，实现算力资源统一纳管、动态分配和精细化利用。通过算力热力图实时监控资源分配及利用效率，推动算力利用率整体提升 30% 以上。
</div>

如果你关注过 AI Infra 领域，会意识到这背后的技术难度——异构算力的池化管理、热力图监控、动态调度，这些都和 Kubernetes 生态的 GPU 管理能力密切相关。30% 的利用率提升在金融级生产环境中是一个相当不错的成绩。

## 数字员工矩阵：10 类 + 77 个智能助手

"数字员工"和"智能助手"这两个概念，代表了不同的 AI 应用形态：

<div class="highlight-box">
<strong>数字员工</strong>：具备完整业务流程执行能力的 AI 实体，可独立完成端到端任务。<br><br>
<strong>智能助手</strong>：嵌入具体业务场景的 AI 能力单元，辅助人类员工完成特定操作。
</div>

两者构成了一个能力分层体系——数字员工负责流程闭环，智能助手负责能力点支撑。

### 应用场景覆盖

| 业务领域 | AI 应用形态 | 核心能力 |
|---------|------------|---------|
| **客户服务** | 大小模型结合的智能客服 | 小模型处理标准化问题，大模型处理复杂语义 |
| **风险决策** | 大模型风险特征解析 | 非结构化数据挖掘，隐性关联关系识别 |
| **内部运营** | 10 余个大模型助手 | 编码、测试用例生成、研发提效 |
| **贷后管理** | AI Agent 自动化流程 | 文件识别、信息抽取、系统录入 |
| **安全态势** | 大模型检索分析 | 多源数据融合，风险早发现早预防 |

### 查冻扣场景的智能体实践

一个值得深入的技术案例是**查冻扣文件识别**场景。在这个场景中，新网银行构建了由 AI Agent 驱动的完整信息抽取流程：

<ul class="numbered-list">
<li><span class="num">1</span><strong>视觉识别</strong>：计算机视觉模型识别保护性止付、涉案止付、财产查询、财产冻结解冻四类文件</li>
<li><span class="num">2</span><strong>语义理解</strong>：大模型提取结构化信息，覆盖文书类型、涉案主体、涉及金额、处置方式等 13 类信息</li>
<li><span class="num">3</span><strong>系统录入</strong>：AI Agent 将信息录入核心系统，对名单人员进行分级管控</li>
<li><span class="num">4</span><strong>数据同步</strong>：信息同步至数仓形成报表，便于统计分析</li>
</ul>

据新网银行副行长李秀生透露，**大模型细分识别查冻扣文件中的嫌疑人、受害人准确率达 100%**，而且文件中涉及的非本行客户也会录入系统，确保可在后续服务时提前预判风险。

<div class="inline-quote">
智能体将成为银行业务运行的载体，是提升银行服务的核心竞争力。未来，多智能体协作将推动银行业务从图形用户界面（GUI）向语言用户界面（LUI）演进。
<div class="author">—— 李秀生，新网银行副行长</div>
</div>

## 金融科技人才战略

AI 战略的落地离不开人才。新网银行首席信息官毛航的人才理念很务实：

<div class="info-box">
<strong>毛航的观点</strong>：科技应该先行投入，与业务同步或者略微超前发展，科技人员占比可以不预设目标。金融科技需要在规范发展和紧随业务发展的基础上探索新技术应用。
</div>

在具体执行层面，新网银行正开展**金融科技及风险专项培训生计划**，定向培养兼具金融业务理解与技术研发能力的复合型科技人才，参与人工智能、大模型、大数据等金融场景的落地。

## 专利与技术储备

2025 年，新网银行围绕 AI 技术申报了 **13 件发明专利**和 **6 件软件著作权**，其中几个值得关注：

| 专利名称 | 技术方向 |
|---------|---------|
| 基于智能体工作流的影像文件信息自动化抽取方法与系统 | AI Agent + 视觉识别 |
| 一种基于大模型的银行智能客服问答方法及系统 | 大模型 + 客服 |
| 一种提高大模型多轮对话可控性和可解释性的方法及系统 | 大模型可控生成 |

其中，"基于智能体工作流的影像文件信息自动化抽取方法与系统"这套方案的技术亮点在于——**依托视觉模型的高精度文字识别能力，结合 AI Agent 大模型的知识泛化能力，在无需标注数据的情况下实现高效、准确的信息抽取**，同时智能体还能根据任务需求动态优化抽取过程。

## 写在最后

<div class="outro-box">
<strong>数字银行的 AI 竞赛已经进入"全员 AI"阶段。</strong><br><br>
新网银行的案例展示了一条清晰的路径：<strong>算力底座 → 数字员工 → 智能体平台 → 全员覆盖</strong>。<br><br>
日均百万级 API 调用的背后，是 AI 从"锦上添花"到"核心生产力"的角色跃迁。对于同样在探索 AI 转型的金融机构而言，这组数据既是一张成绩单，也是一张路线图。
</div>

---

*本文信息来源于新网银行 2025 年年度报告及相关公开报道。*

*更多内容请访问 [jungelife.me](https://jungelife.me/zh/)*
