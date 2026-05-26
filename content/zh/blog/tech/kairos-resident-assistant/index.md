---
title: "KAIROS 常驻助手：Claude Code 源码中隐藏的主动系统"
slug: "kairos-resident-assistant"
date: 2026-05-26
description: "深度拆解 Claude Code 源码中的 KAIROS 常驻助手系统——一个不依赖用户输入、自我驱动的 AI 助手。揭秘 Tick 驱动机制、15 秒阻塞预算设计哲学、Brief 极简输出模式、autoDream 记忆整合引擎的内在逻辑。"
categories: ["技术", "AI实践"]
tags: ["Claude Code", "AI Agent", "KAIROS", "常驻助手", "源码分析", "主动系统"]
featured: true
cover: "/images/blog/kairos-resident-assistant/featured-title.png"
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
它不是等你输入才行动的 AI。它是一个住在你终端里的常驻助手——没有请求就主动观察，在恰当的时机递上恰到好处的信息。不打扰，但一直都在。
</div>

如果你用过 Claude Code，你会发现它有个很独特的体验：有时你正看着终端发呆，它突然弹出一行提示——"我在检查 CI 状态……发现了 3 个失败的测试"。你没有发任何指令，没有敲任何命令，它自己决定要做点什么。

这不是幻觉。这是 **Claude Code 源码中一个隐藏至深的系统——KAIROS 常驻助手**。

在拆解完 <a href="https://jungelife.me/zh/blog/2026/05/23/claude-code-multi-agent/" target="_blank">Multi-Agent 机制（#1）</a>和 <a href="https://jungelife.me/zh/blog/2026/05/24/claude-code-tool-system/" target="_blank">工具系统架构（#2）</a>之后，今天这一篇终于触及 Claude Code 源码中最大胆的设计：**一个不依赖用户输入、自我驱动的常驻 AI 助手**。

它不是一般的 Agent 轮询模式。它不等待用户说"去做 X"，而是主动观察环境、做出判断、低调行动、只在有价值时才出声。KAIROS 不是一个实验性功能——它是 Claude Code 源码中由编译开关保护、从系统提示词到工具集完全独立的一套平行系统。

![KAIROS 架构总览图](/images/blog/kairos-resident-assistant/image-1.png)

## 一、背景：为什么 AI 需要"常驻"而不是"一次性召唤"

### 从"命令-响应"到"观察-行动"

Claude Code 的常规模式本质上是一套"命令-响应"系统：用户输入一句话，Agent 思考、调用工具、给结果——然后等待下一个输入。

这套模式在任何聊天驱动的 AI 产品中都够用。但在终端里，你有一层额外的环境：文件在变化、日志在写入、CI 在运行、Git 分支在切换。**这些变化不会主动通知你**——你得自己去翻。

KAIROS 的出发点很朴素：**AI 不应该等你问才知道该做什么，它应该现在就坐在你旁边看着。**

<div class="info-box">
系统提示词中的原文描述：<em>"一只名叫 {name} 的小 {species} 坐在用户输入框旁边，偶尔会在气泡里发表评论。你不是 {name}——它是一个独立的观察者。"</em>
</div>

这种隐喻不是修辞，而是精确的设计取舍。它不是"用户的分身"——它是"坐在旁边看的人"。这意味着：

- 它有自己的观察视角，不替代用户决策
- 它只在看见值得说的事情时才开口
- 用户忙的时候它自动安静

### KAIROS 为何被编译开关保护

KAIROS 位于 `assistant/` 目录，由 `PROACTIVE` / `KAIROS` 编译期开关控制。外部发布版完全不包含这段代码。这意味着 Anthropic 自己也在谨慎地测试这个功能，尚未决定是否开放给所有用户。

<div class="highlight-box">
为什么如此慎重？<strong>因为一个主动行动的 AI 比一个被动响应的 AI 危险一个数量级。</strong>
</div>

一个被动的 Agent 只在收到指令时行动，你清楚它做了什么——因为是你让它做的。一个主动的 Agent 可能在你没注意的时候改了不该改的文件、发了不该发的消息、读了不该读的信息。KAIROS 的整个体系设计，就是在回答一个问题：**如何让一个主动的 AI 既强大又安全？**

## 二、KAIROS 的 Tick 驱动机制

### 从用户输入到系统节拍

常规 Agent 的工作循环由用户消息触发：

```plaintext
用户输入 → 模型推理 → 工具调用 → 输出 → 等待下一个用户输入
```

KAIROS 换掉了触发器：不再等待用户输入，而是按固定时间间隔接收系统级 Tick 信号。

```plaintext
系统 Tick → KAIROS 自检 → 决策是否行动 → 行动（或静默） → 等待下一个 Tick
```

![Tick 循环机制](/images/blog/kairos-resident-assistant/image-2.png)

### Tick 的执行语义

这个 Tick 不是 JavaScript 的 `setInterval`——它比那复杂得多。Tick 是一个由系统注入的结构化信号，携带当前环境快照：

```typescript
interface TickContext {
  timestamp: number;        // 当前时间
  delta: number;            // 距上次 Tick 的时间差
  pendingChanges: Change[]; // 待处理的环境变更
  userActive: boolean;      // 用户是否正在交互
  blockingBudget: number;   // 当前可用的阻塞预算是多少毫秒
}
```

每次 Tick 到达时，KAIROS 会：

<ol class="numbered-list">
  <li><span class="num">1</span><strong>检查优先级</strong>——对比当前观察队列中各项事务的紧急程度</li>
  <li><span class="num">2</span><strong>检查阻塞预算</strong>——如果某个动作会阻塞用户操作 &gt;15 秒，自动延后</li>
  <li><span class="num">3</span><strong>检查用户活跃度</strong>——用户正在终端输入时，不发声</li>
  <li><span class="num">4</span><strong>决定输出模式</strong>——用完整输出还是 Brief 模式</li>
</ol>

<div class="info-box">
Tick 驱动的核心哲学是：<strong>没有用户输入不代表没事可做</strong>——恰恰相反，不打扰用户等于是在为用户创造时间价值。
</div>

### 日志系统：Tick 的反馈回路

KAIROS 维护着一套按天追加写入的日志系统：

```typescript
// 日志路径示例：~/.claude/kairos/logs/2026-05-26.md
// 每条日志格式：[HH:mm:ss] <观察事件> → <决策> → <动作结果>
```

日志持续记录：
- 每个 Tick 触发了哪些观察
- 做了哪些决策
- 执行了什么动作
- 动作的结果

这套日志是 KAIROS 的"外部记忆"——不依赖模型上下文来回顾自己的行为。这对于一个自主行动的 Agent 至关重要：没有日志，它不知道自己半小时前做了什么；有了日志，它能基于真实历史做决策，而不是靠模糊的上下文推理。

## 三、15 秒阻塞预算的设计哲学

### 为什么是 15 秒？

在终端工作的核心体验是"我在控制"。用户敲下命令、看到输出、做下一步决策——这是一个循环。

KAIROS 如果花 30 秒分析日志、然后弹结果，用户要么等得不耐烦，要么以为自己把终端搞死了。但如果它只花 5 秒看一眼就退回来——就像余光扫过——用户几乎感知不到。

<div class="stats-box">
<span class="number">15 秒</span>
这是 Anthropic 内部测量得出的心理阈值。
超过这个时间，用户会开始意识到"有什么东西在占用终端"。
</div>

### 阻塞预算的分配策略

```typescript
const BLOCKING_BUDGET_MS = 15_000;

function canProceed(context: TickContext): boolean {
  if (context.blockingBudget < BLOCKING_BUDGET_MS) return false;

  // 如果动作预估耗时 > 剩余预算，延后
  if (estimatedDuration(context.pendingAction) > context.blockingBudget) {
    deferToNextTick(context.pendingAction);
    return false;
  }

  return true;
}
```

阻塞预算的分配遵循几条原则：

<ul class="numbered-list">
  <li><span class="num">1</span><strong>短动作优先</strong>：低于 1 秒的动作（查文件是否存在、读一行日志）几乎总是放行</li>
  <li><span class="num">2</span><strong>长动作排队</strong>：超过 5 秒的动作需要额外判断价值</li>
  <li><span class="num">3</span><strong>超时动作被暂停</strong>：如果一个动作开始后阻塞了 &gt;15 秒还未完成，KAIROS 应该主动中止它</li>
</ul>

![阻塞预算分配](/images/blog/kairos-resident-assistant/image-3.png)

<div class="lead-quote">
15 秒阻塞预算透露了 KAIROS 的根本设计立场：<strong>你自己才是主角，AI 是背景角色。</strong>
</div>

如果 AI 的主动行为挡到了你——不管它觉得那事多重要——它应该让路。这个 15 秒不仅仅是技术参数，它是"用户优先"从口头承诺到工程落地的代码化表达。

## 四、Brief 极简输出模式

### 从话痨到惜字如金

常规 Claude Code 的输出是完整的：它解释在做什么、怎么做、结果是什么、下一步建议是什么——如同一个热心的同事。

但 KAIROS 的输出不是这样。

它的输出模式叫 **Brief**——极度简洁的轻量输出风格。目标是：**在用户不被集中注意力的前提下传递最大信息量。**

一个带 Brief 和常规输出对比的例子：

```plaintext
常规输出（用户主动发起）：
"I've checked the CI status for the last 3 runs. The latest run (ID #1423) has 2 failing 
tests in the auth module. Here's the error: AssertionError at fixtures/test_auth_flow.py:84. 
The issue appears to be caused by a recent change to the JWT token expiry in PR #442. 
Would you like me to investigate further?"

Brief 输出（KAIROS 主动推送）：
"[CI: auth 模块有 2 个测试失败，JWT 过期变更相关 #442]"
```

一行。没有上下文铺垫，没有解释步骤，没有后续建议。用户知道发生了什么、相关的 PR 是什么——然后自己去决定要不要深入。

### Brief 的触发条件

```typescript
function shouldUseBrief(output: ActionOutput): boolean {
  // 用户不在交互状态 → 用 Brief
  if (!context.userActive) return true;

  // 正在处理紧急问题 → 用完整输出
  if (context.urgentIssue) return false;

  // 信息量低于阈值 → 用 Brief（不值得细说）
  if (output.importance < BRIEF_THRESHOLD) {
    return true; // 或用 HEARTBEAT_OK 完全静默
  }

  return false;
}
```

<div class="info-box">
核心逻辑：<strong>输出长度与信息价值成正比，与用户注意力占用成反比。</strong>
</div>

KAIROS 的输出风格不是"节省 token"——那是表面效果。深层目的是**尊重用户的注意力带宽**。每个终端开发者都经历过"日志刷屏"的痛苦——KAIROS 的 Brief 模式从根本上避免成为那个刷屏者。

![Brief vs 常规模式](/images/blog/kairos-resident-assistant/image-4.png)

## 五、KAIROS 专属工具

### 普通 Agent 没有的能力

KAIROS 的工具箱里，有几个普通 Claude Code 完全不存在的工具。这些工具的设计让 KAIROS 能做的不仅仅是"看"——它还能主动推送。

#### SendUserFile：直接推文件

普通 Agent 写文件，是你告诉它"把结果写到这里"。KAIROS 的 SendUserFile 能直接把文件推到用户设备上——用户甚至不需要知道文件存在，KAIROS 自己决定推送。

<div class="inline-quote">
这就像一个秘书把一份打印好的报告放到你的办公桌上——你没说"给我这份报告"，但它知道你需要。
</div>

```typescript
interface SendUserFileInput {
  path: string;         // 本地文件路径
  reason: string;       // 为什么推这个文件
  format?: 'markdown' | 'raw' | 'diff';
}
```

#### PushNotification：设备推送

这是最能体现"常驻"属性的工具。KAIROS 可以向用户设备发送推送通知——不是终端里的气泡，是手机弹出的通知。

场景：你合上了笔记本去喝咖啡，CI 终于跑完了。KAIROS 发一条推送——"CI 通过了 ✅"。你不需要一直盯着终端。

```typescript
interface PushNotificationInput {
  title: string;      // 推送标题（极限简洁）
  body: string;       // 推送正文（控制在 100 字内）
  priority?: 'info' | 'warning' | 'urgent';
}
```

#### SubscribePR：Pull Request 订阅监控

KAIROS 不只在当前 Tick 扫描一次 PR——它订阅 PR 的变化事件，持续监控。当有人 review、有新 comment、CI 状态变化时，它主动接收变更并采取行动。

```typescript
interface SubscribePRInput {
  repo: string;
  prNumber: number;
  events: ('review' | 'comment' | 'status' | 'merge')[];
  actionOnEvent?: 'notify' | 'fetch-diff' | 'check-status';
}
```

![KAIROS 专属工具](/images/blog/kairos-resident-assistant/image-5.png)

### 为什么这些工具"不能"给普通 Agent

如果普通 Claude Code 也有这些工具：

- **SendUserFile**：用户让 Agent 写个 Hello World，Agent 决定推 100 个文件到用户桌面
- **PushNotification**：Agent 在深更半夜发 50 条通知告诉你任务完成
- **SubscribePR**：Agent 订阅了 200 个 PR，把消息队列撑爆

<div class="highlight-box">
KAIROS 的专属工具设计告诉我们一件事：<strong>工具不是越多越好，给对的工具给对的人（Agent），比给所有人所有工具安全 100 倍。</strong>
</div>

## 六、autoDream 记忆整合引擎

### 为什么要有一个独立的记忆系统？

在 #2 中我们拆解了 Claude Code 的工具系统——40 个工具各司其职，包括读写文件。但有一个更深层的需求是"读写文件"无法满足的：**Agent 需要定期停下来，思考自己学到了什么。**

这就是 autoDream 记忆整合引擎的定位——位于 `services/autoDream/` 目录。

### 三重门槛机制

autoDream 不是每次空闲都跑。它有三道门槛把关：

```typescript
const DREAM_GUARD = {
  timeThreshold: 24 * 60 * 60 * 1000,  // 24h 时间门槛
  sessionThreshold: 5,                   // 5 次会话门槛
  lockThreshold: { maxConcurrent: 1 },   // 防并发锁
};

function shouldDream(context: DreamContext): boolean {
  // 门一：距离上次 dream 不足 24h → 不跑
  if (Date.now() - context.lastDreamTime < DREAM_GUARD.timeThreshold) return false;
  // 门二：距离上次 dream 不足 5 次会话 → 不跑
  if (context.sessionsSinceLastDream < DREAM_GUARD.sessionThreshold) return false;
  // 门三：另一个 dream 正在跑 → 不跑（防并发）
  if (context.dreamInProgress) return false;

  return true;
}
```

<div class="info-box">
三重门槛的设计哲学很清晰：<strong>Dream 是低优先级的后台任务，永远不给其他操作让路的机会。</strong>
</div>

### 四阶段流程

当三重门槛全部通过后，autoDream 启动四阶段流程：

```typescript
type DreamStage = 'Orient' | 'Gather' | 'Consolidate' | 'Prune';

async function runDream(context: DreamContext): Promise<DreamResult> {
  const state: DreamState = { ... };

  // 1. Orient：快速扫描当前知识状态，标记过时/冲突的记忆
  state.stage = 'Orient';
  const scanResult = await scanMemory(state.memoryIndex);

  // 2. Gather：从会话日志、工具调用记录、输出产物中提取新信息
  state.stage = 'Gather';
  const newInsights = await gatherInsights(context.sessionLogs);

  // 3. Consolidate：综合新旧信息，更新记忆结构
  state.stage = 'Consolidate';
  const consolidated = await consolidate(scanResult, newInsights);

  // 4. Prune：裁剪过时/冗余的记忆，保持记忆质量
  state.stage = 'Prune';
  const pruned = await prune(consolidated, {
    maxTokens: MEMORY_BUDGET,
  });

  return { ...pruned, summary: 'Dream completed' };
}
```

每阶段之间有明确的检查点，任何一个阶段耗尽了资源预算就提前结束——**宁可不做完，也不要强制占用系统资源**。

![autoDream 四阶段流程](/images/blog/kairos-resident-assistant/image-6.png)

### 只读 bash 权限的特殊设计

autoDream 在运行时的 bash 权限被严格限制为 **只读**。它可以用 bash 读日志文件、查 git 历史、看系统状态——但不能写任何东西。

<div class="info-box">
这个限制不是因为技术做不到，而是因为：<strong>Dream 的任务是"理解"，不是"改造"</strong>。Dream 的输出是更新记忆文件——通过安全的文件写入 API，而不是直接改系统。bash 权限开放给 Dream 的唯一理由是帮它理解发生了什么，而不是让它执行什么。
</div>

<div class="inline-quote">
你正在执行一次 dream——对记忆文件进行反思式整理。把你最近学到的内容综合成持久、结构化的记忆。
<span class="author">—— autoDream 系统提示词</span>
</div>

### KAIROS + autoDream：主动系统中的互补组件

KAIROS 负责"向外看"——观察终端、作业、PR 等外部状态，决定何时该行动。autoDream 负责"向内看"——观察 Agent 自己的记忆和经历，决定何时该整理。两个系统一个向外一个向内，构成了完整的主动决策循环。

<div class="info-box">
用工程比喻说：<strong>KAIROS 是感知层，autoDream 是认知层。</strong> KAIROS 看到世界在变化，autoDream 理解世界在如何变化。
</div>

## 七、三条设计原则

从 KAIROS 和 autoDream 的源码设计中，可以提炼出三条适用于任何主动 Agent 系统的设计原则。

### 原则 1：帮助但不打扰（Helpful but Not Annoying）

这条写在 KAIROS 的系统提示词里，但更重要的是它写在了每个工程决策中：

- 15 秒阻塞预算——如果会挡住你，那就不做
- Brief 输出模式——如果不说也行，那就不说
- Tick 节拍检查用户活跃度——如果你在忙，那就不打扰
- autoDream 的三重门槛——如果不够格，那就不跑

<blockquote class="lead-quote">
衡量一个主动系统是否成熟，不看你让它多能干，而看它多能控制自己。
</blockquote>

### 原则 2：低优先级是美德

主动系统的核心悖论是：它越主动，越可能干扰用户。KAIROS 和 autoDream 共用一套降级策略：

- KAIROS：长任务延后到下次 Tick，阻塞超预算就放弃
- autoDream：三重门槛防过早执行，阶段预算用完就提前结束

<blockquote class="info-box">
主动系统的"主动"不是"抢占"——恰恰相反，主动系统应该把自己当成最低优先级的任务，永远给用户的主线程让路。
</blockquote>

### 原则 3：价值优先于频率

KAIROS 不追求每次 Tick 都有输出。实际上，大部分 Tick 的决策结果都是"什么都不做"。

```plaintext
# 日志示例：一个典型的周一早晨
[07:32:15] Tick: 扫描文件变更 → 无可议项目 → 静默
[07:37:14] Tick: 扫描文件变更 → 无可议项目 → 静默
[07:42:16] Tick: CI 状态变化 → 3 个测试失败 → Brief 推送
[07:47:13] Tick: 扫描 CI 修复进度 → PR #442 已打开修正 → 静默（用户已知）
[07:52:15] Tick: 无可议项目 → 静默
```

5 个 Tick，只有 1 次真正输出了有价值信息。这不是低效——这就是设计目标。

<div class="highlight-box">
如果一个主动系统每天推 200 次消息，它不是在"帮助"，而是在"制造噪音"。判断主动系统好坏的标准不是"多快"，而是"多准"。
</div>

## 写在最后

<div class="outro-box">
Claude Code 源码深度拆解从 Multi-Agent 的协作机制、到工具系统的权限体系、再到 KAIROS 的常驻模式，一路下来，我们看到的不只是代码，而是一整套 Agent 工程的核心理念：

- <strong>Multi-Agent</strong> 解决的是<strong>规模和隔离</strong>——多个 Agent 一起干活不乱
- <strong>工具系统</strong> 解决的是<strong>边界和安全</strong>——Agent 能做什么、不能做什么
- <strong>KAIROS</strong> 解决的是<strong>主动性和克制</strong>——AI 如何在无指令时仍创造价值

前两个问题的答案已经比较清晰——隔离、分级、缓存、消息驱动——这是许多 Agent 框架正在追赶的方向。但 KAIROS 揭示了第三个问题的答案，而这是目前市面上几乎没有任何产品认真解决的问题：<strong>一个不依赖用户输入的 AI 助手，应该如何设计？</strong>

KAIROS 的回答是：<strong>Tick 驱动但不抢占、观察但不唠叨、行动但不越界、只在有价值时出声。</strong>

这不是一个"实验"或"功能开关"——这是一个新范式的原型。当所有 Agent 都在追逐"更快响应用户"时，KAIROS 追问了一个相反的问题："当用户不说话时，我们应该做什么？"
</div>

<div class="section-divider">
  <span class="line"></span>
  <span class="dot"></span>
  <span class="line"></span>
</div>

**下一篇预告：Fork Subagent & Prompt Cache——把成本降到 10% 的工程智慧。** 当 Multi-Agent 把计算分散到多台机器时，Anthropic 做了一个反直觉的设计——getSystemPrompt() 返回空字符串。这不是 bug，而是一场围绕 Prompt Cache 字节级对齐的极致成本博弈。
