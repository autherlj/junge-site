---
title: "Claude Code 源码深度拆解：ULTRAPLAN & Agent Swarm——分布式 AI 编排"
slug: "ultraplan-swarm"
date: 2026-05-27
description: "当单 Agent 不够用时，Anthropic 怎么用工程手段把规划、执行、审批、团队协作拆成一套分布式系统。四个关键词：ULTRAPLAN、Agent Swarm、Remote CCR、浏览器审批流。"
categories: ["技术", "AI实践"]
tags: ["Claude Code", "ULTRAPLAN", "Agent Swarm", "分布式编排", "源码分析", "AI Agent"]
featured: true
cover: "/images/blog/ultraplan-swarm/featured-title.png"
---

<style>
.td-content { max-width: 900px; margin: 0 auto; }

.lead-quote {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white; padding: 2.5rem 2rem; border-radius: 12px;
    margin: 2rem 0 3rem 0; font-size: 1.25rem; font-weight: 600;
    line-height: 1.6; box-shadow: 0 10px 30px rgba(102,126,234,0.3);
    position: relative; overflow: hidden;
}
.lead-quote::before {
    content: '"'; position: absolute; top: -20px; left: 10px;
    font-size: 100px; opacity: 0.15; font-family: Georgia, serif;
}

.info-box {
    background: #f0f4ff; border-left: 4px solid #667eea;
    padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;
    box-shadow: 0 2px 8px rgba(102,126,234,0.1);
}
.info-box strong { color: #667eea; }

.highlight-box {
    background: #fff8f0; border-left: 4px solid #f0a030;
    padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;
    box-shadow: 0 2px 8px rgba(240,160,48,0.1);
}
.highlight-box strong { color: #d99000; }

.stats-box {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: white; padding: 2rem; border-radius: 12px;
    margin: 1.5rem 0; text-align: center;
}
.stats-box .stat-number { font-size: 2.5rem; font-weight: 700; color: #667eea; display: block; }
.stats-box .stat-label { font-size: 0.9rem; opacity: 0.8; }

.numbered-list { counter-reset: item; }
.numbered-list li { 
    list-style: none; position: relative; padding-left: 50px; 
    margin-bottom: 1.5rem; line-height: 1.8;
}
.numbered-list li::before {
    counter-increment: item; content: counter(item);
    position: absolute; left: 0; top: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white; width: 36px; height: 36px; border-radius: 50%;
    text-align: center; line-height: 36px; font-weight: 700; font-size: 0.9rem;
}

.inline-quote {
    background: #e8f4fd; border-radius: 8px; padding: 1.5rem 1.5rem 1.5rem 3rem;
    margin: 1.5rem 0; position: relative;
}
.inline-quote::before {
    content: '"'; position: absolute; left: 15px; top: 10px;
    font-size: 40px; color: #667eea; opacity: 0.3; font-family: Georgia, serif;
}

.section-divider {
    height: 2px; background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
    margin: 3rem 0; position: relative;
}
.section-divider::before {
    content: "◆"; position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%); background: white; padding: 0 10px;
    color: #667eea; font-size: 0.8rem;
}

.outro-box {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: white; padding: 2.5rem; border-radius: 12px;
    margin: 2rem 0; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
.outro-box strong { color: #667eea; }

.tech-table {
    width: 100%; border-collapse: collapse; margin: 1.5rem 0;
    font-size: 0.95rem; border-radius: 8px; overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.tech-table th {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white; padding: 12px 16px; text-align: left; font-weight: 600;
}
.tech-table td { padding: 10px 16px; border-bottom: 1px solid #e8e8e8; }
.tech-table tr:nth-child(even) { background: #f8f9fa; }
.tech-table tr:hover { background: #f0f4ff; }

.content-image { margin: 2rem 0; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
.image-caption { text-align: center; color: #888; font-size: 0.9rem; margin-top: 0.5rem; }
</style>

> 当单 Agent 不够用时，Anthropic 怎么用工程手段把规划、执行、审批、团队协作拆成一套分布式系统。四个关键词：ULTRAPLAN、Agent Swarm、Remote CCR、浏览器审批流。

前几篇发出去之后，收到最多的一个问题就是："单 Agent 既然有上下文爆炸、串行阻塞这么多问题，Claude Code 有没有更大规模的方案？"

有。而且不止一套。

这期我们聊四个关键词——**ULTRAPLAN、Agent Swarm、Remote CCR、浏览器审批流**。它们是 Claude Code 从"单兵作战"进化到"分布式编排"的四大支柱。

---

## 一、ULTRAPLAN：把"想"和"做"彻底拆开

### 为什么需要它？

AI 编程最常见的一种死法是什么？

还没搞清楚要做什么，就开始改代码了。

你说了句"帮我把认证迁移到 OAuth"，Claude 二话不说开始改文件。改到一半发现理解错了，回滚重来。改了三个文件之后发现漏了一个依赖，再回滚。来回几轮，token 烧了几万，时间花了几个小时——还不如别干。

**这个失败模式的根因是："想"和"做"没分开。**

ULTRAPLAN 的思路很简单——把这两个阶段分别放在两个完全不同的环境里执行：

<div class="info-box">
<strong>⚡ 规划阶段</strong> → 云端执行（claude.ai/code 网页端）<br/>
<strong>⚡ 执行阶段</strong> → 本地执行（你的终端）
</div>

### 架构设计：为什么规划可以在云端？

Anthropic 工程师 Thariq 的解释非常到位：**"实现代码需要本地环境和交互性，但规划阶段完全可以放到云端，因为它本质上就是读代码和理解意图。"**

这个拆分的背后有一个更深的洞察：**规划是"尴尬并行"（embarrassingly parallelizable）的**。它不涉及文件系统，不涉及编译错误，纯粹是阅读和推理。而**实现是天然串行的**，需要本地环境一步步来。

ULTRAPLAN 的云端规划流程：

{{< figure src="ultraplan-flow.png" alt="ULTRAPLAN 云端规划流程图" class="content-image" caption="ULTRAPLAN 云端规划流程图" >}}

### 浏览器审批流：不只是"看一眼再执行"

ULTRAPLAN 最惊艳的设计不是技术架构，而是**交互体验**。

传统 `/plan` 模式在终端里看方案，文本是线性的，你只能上下滚动。如果方案涉及五六个文件、十几个步骤，在终端里阅读体验极差。

网页端就不一样了：

- **侧边栏导航**：跳转到任意章节
- **代码高亮**：结构化展示代码片段
- **可编辑文本**：选中任意文本给 Claude 留评论，形成审阅→反馈→修改的闭环
- **两种执行方式**：「Run on web」在云端直接执行 / 「Approve & teleport to terminal」传回本地

审批通过后回到终端，Claude 会问你怎么执行：

1. **Implement here**：把方案注入当前对话，就地开干
2. **Start new session**：清掉当前上下文，只带方案开新会话
3. **Cancel**：先不执行，方案存着回头再说

### 和 /plan 的区别：不止是换了个 UI

<table class="tech-table">
<thead>
<tr><th>维度</th><th>/plan</th><th>/ultraplan</th></tr>
</thead>
<tbody>
<tr><td>方案展示</td><td>终端文本（线性）</td><td>网页端（结构化 + 导航）</td></tr>
<tr><td>可编辑性</td><td>不可编辑</td><td>选中文本直接留评论</td></tr>
<tr><td>审批流程</td><td>无</td><td>审阅→评论→修改→批准闭环</td></tr>
<tr><td>执行方式</td><td>仅本地</td><td>云端 or 本地二选一</td></tr>
<tr><td>远程执行</td><td>❌</td><td>手机审阅→本地执行</td></tr>
</tbody>
</table>

<div class="highlight-box">
<strong>💡 Token 消耗方面</strong>，ul-traplan 和 plan 模式差不多——规划阶段本身不消耗执行阶段的 token。
</div>

---

## 二、Agent Swarm：带协议的团队协作

### 从 Coordinator 到 Swarm——思维的跃迁

第一篇文章里，我们拆了 Coordinator 模式——协调者派 Worker，Worker 干活，结果回传。这是**中心化调度**。

Swarm 不一样。

Swarm 是**去中心化团队协议**。每个队友都是一个独立的 Agent，有自己的终端面板，队友之间可以直接发消息，团队有自己的配置文件（TeamFile），有颜色编码，有独立的 worktree。

中心化 vs 去中心化的核心区别：

```text
Coordinator 模式：
  ┌─────────┐      ┌────────┐
  │  User   │◄────►│Coord.  │
  └─────────┘      └───┬────┘
                      ┌─┼─┐
                    ┌─┘ │ └─┐
                    ▼   ▼   ▼
                  W1   W2   W3  （W互不通信）

Swarm 模式：
  ┌─────────┐
  │  User   │
  └────┬────┘
       │
    ┌──▼──┐
    │Lead │←──── 可互发消息 ────→┐
    └──┬──┘                     │
    ┌──┼──┐                   ┌─┴──┐
    │  │  │                   │Team│
    ▼  ▼  ▼                   │File│
    A1 A2 A3                  └────┘
    （队友可互发消息）
```

{{< figure src="swarm-vs-coordinator.png" alt="Swarm vs Coordinator 对比图" class="content-image" caption="Swarm vs Coordinator 对比图" >}}

### 三种 Backend：tmux / iTerm2 / In-Process

Swarm 的队友执行有三种后端，检测优先级是：

```text
1. 在 tmux 里 → 直接用 tmux（即使在 iTerm2 中也优先）
2. 在 iTerm2 + 有 it2 CLI → 用 iTerm2 原生分屏
   （如果之前选了 preferTmux，跳过）
3. 在 iTerm2 + 无 it2 → 提示安装，继续往下
4. tmux 可用 → 创建外部 tmux session
5. 都没有 → 抛错，提示安装 tmux
```

**In-Process 模式**由 `isInProcessEnabled()` 决定：

- `teammateMode = 'in-process'` → 始终 in-process
- `teammateMode = 'tmux'` → 始终用 pane backend
- `teammateMode = 'auto'`（默认）→ 非交互 session 强制 in-process；在 tmux/iTerm2 里用 pane；否则 in-process

pane 模式下，每个队友都有**独立终端面板**，你可以看着每个 Agent 实时在干什么。in-process 模式零进程开销，但失去独立面板的体验。

<div class="info-box">
<strong>🎯 关键判断：</strong>pane 后端让 Claude Code 更像一个真实的开发团队——每个队友都在自己的"工位"上干活。但它的核心价值不是"是不是独立进程"，而是 TeamFile、mailbox、SendMessage 这套显式建模的团队协议。
</div>

### TeamFile：团队的配置文件中心

Swarm 不像 Coordinator 那样每个 Worker 从零开始。它有 **TeamFile**——一个 JSON 文件定义整个团队的配置：

```typescript
type TeamFile = {
  name: string
  leadAgentId: string
  leadSessionId?: string
  teamAllowedPaths?: TeamAllowedPath[]
  members: Array<{
    agentId: string
    name: string
    model?: string      // 每个队友可以选不同模型
    color?: string      // 颜色编码，视觉区分
    planModeRequired?: boolean
    tmuxPaneId: string
    cwd: string
    worktreePath?: string
    subscriptions: string[]
    backendType?: BackendType
    isActive?: boolean
    mode?: PermissionMode
  }>
}
```

注意几个精妙的设计：

1. **按角色配置模型**——Leader 用 Opus 做决策，Worker 用 Sonnet 做执行
2. **颜色编码**——每个队友可以指定颜色，终端面板一眼识别
3. **teamAllowedPaths**——团队共享的允许路径，队友启动时自动同步权限

### 权限冒泡：集中审批，分布执行

Swarm 里队友需要权限确认时，不是自己弹对话框。它通过 **Leader Permission Bridge** 把权限请求"冒泡"到 Leader：

```text
In-Process 队友需要权限时：
  1. 通过 bridge 获取 leader 的 setToolUseConfirmQueue
  2. 把权限请求推到 leader 的队列
  3. leader 审批后，结果回流到队友

Pane 模式队友需要权限时：
  1. 写入 pending request 到 mailbox
  2. leader 轮询 mailbox，回复审批意见
  3. 队友读取回复后继续执行
```

双路径设计的源码：

```typescript
// 注册 leader 的审批队列
export function registerLeaderToolUseConfirmQueue(
  setter: SetToolUseConfirmQueueFn
): void { registeredSetter = setter }

// 队友获取 leader 的审批队列
export function getLeaderToolUseConfirmQueue(): SetToolUseConfirmQueueFn | null {
  return registeredSetter
}
```

in-process 走 UI bridge（实时），pane 模式下走 mailbox（异步）。最终目标一致：**审批集中在 Leader 这一侧，队友只管执行。**

### 团队记忆同步：Scratchpad 共享白板

Worker 之间没有直接通信通道，但它们需要一个共享空间来交换中间结果。方案就是 **Scratchpad 目录**：

<div class="info-box" style="border-left-color: #22c55e; background: #f0fdf4;">
<strong>📋</strong> 所有 Worker 可读写的共享目录，不需要权限提示。<br/>
用于跨 Worker 的持久化知识存续——无论是结构化文件、中间分析结果还是临时笔记。
</div>

**Agent Summary** 是另一个精巧的设计——每 30 秒 fork 一次 Worker 的对话，让 LLM 用 3-5 个词描述当前动作。用户可以看到"Worker 1: Investigating auth.ts... / Worker 2: Running test suite..."：

```typescript
const SUMMARY_INTERVAL_MS = 30_000

function buildSummaryPrompt(previousSummary: string | null): string {
  return `Describe your most recent action in 3-5 words using
    present tense (-ing). Name the file or function, not the branch.
    Do not use tools.`
}
```

摘要 fork 共享 Worker 的 prompt cache——工具定义保留在请求中（cache key 一致），但通过 `canUseTool` 回调全部 deny。模型看得到工具但不能用。

### 队友的 Prompt 增补

每个队友的系统 prompt 会额外追加一段，告诉它通信规则：

> "You are running as an agent in a team. To communicate with anyone on your team: use the SendMessage tool. Just writing a response in text is not visible to others on your team."

这个设计向模型明确了一个关键约束：**你的文本输出别人看不到，必须通过工具通信。** 简单但致命——如果不加这一句，模型会天真地以为它输出的文字队友能看见，然后全部失联。

---

## 三、Remote CCR：远程责任链与控制反转

### 架构原理：本地执行 + 远程操控

2026 年 2 月，Anthropic 向 Claude Max 用户推送了 **Remote Control** 功能。

它的架构非常特别：不是传统的"远程桌面"（把你的桌面传给手机），而是**本地执行 + 远程操控**的混合架构。

{{< figure src="remote-ccr-arch.png" alt="Remote CCR 架构图" class="content-image" caption="Remote CCR 架构图——本地执行 + 远程操控" >}}

关键设计要点：

- ✅ 所有计算和文件操作依然是本地执行
- ✅ 手机仅作为远程操控界面
- ✅ 代码不离本地，兼顾隐私与效率
- ✅ 上下文、自定义 Skill、MCP 服务器全部保留

### CCR：Chain of Responsibility（责任链）

Remote Control 的底层安全模型是一套完整的 **Chain of Responsibility**：

{{< figure src="ccr-security.png" alt="CCR 安全模型——责任链" class="content-image" caption="CCR 安全模型——多层责任链防护" >}}

这个设计回答了安全问题：**"怎么保证我的手机控制电脑是安全的？"**

答案是把控制流建模成责任链——每个环节都有有限权限、有限时效、有限作用域，任何一个环节被攻破都不会导致全系统沦陷。

```bash
# 方式一：从 claude 会话内启动
/remote-control  # 或 /rc

# 方式二：命令行直接启动
claude remote-control
```

终端生成 QR 码 → 手机扫码 → 连接建立 → 开始远程操控。

连接中断时，系统会在 10 分钟内持续尝试重连，超时会话自动失效。

### 与 ULTRAPLAN 的组合：完整的分布闭环

把 ULTRAPLAN 和 Remote CCR 连起来看，就形成了一套完整的分布式工作流：

{{< figure src="ultraplan-ccr.png" alt="ULTRAPLAN + Remote CCR 完整闭环" class="content-image" caption="ULTRAPLAN + Remote CCR 完整分布闭环" >}}

<div class="info-box">
<strong>🚀</strong> 这就是 Anthropic 的"分布式 AI 编排"愿景——人不再需要坐在电脑前才能用 AI 写代码。
</div>

---

## 四、架构对比：什么时候用什么模式

现在把本系列文章涉及的所有模式放在一起对比：

<table class="tech-table">
<thead>
<tr><th>维度</th><th>Coordinator</th><th>Swarm</th><th>Fork</th><th>ULTRAPLAN</th><th>Remote CCR</th></tr>
</thead>
<tbody>
<tr><td>拓扑</td><td>中心化调度</td><td>弱中心化团队</td><td>父子进程</td><td>云+本地混合</td><td>本地+远程</td></tr>
<tr><td>执行环境</td><td>同进程异步</td><td>tmux/iTerm2 或 in-process</td><td>同进程异步</td><td>云端规划+本地执行</td><td>本地执行+远程操控</td></tr>
<tr><td>通信方式</td><td>XML task-notification</td><td>SendMessage + mailbox</td><td>无横向通信</td><td>网页审批链</td><td>HTTPS + 流式传输</td></tr>
<tr><td>上下文共享</td><td>完全隔离</td><td>基本隔离</td><td>完全继承</td><td>隔离（云端 vs 本地）</td><td>完整保留</td></tr>
<tr><td>典型场景</td><td>复杂多步骤工程</td><td>长期并行团队</td><td>快速并行探索</td><td>需人类审阅的大型任务</td><td>移动端远程开发</td></tr>
<tr><td>互斥关系</td><td>与 Fork 互斥</td><td>独立</td><td>与 Coord 互斥</td><td>独立</td><td>独立</td></tr>
</tbody>
</table>

### 选型决策树

{{< figure src="decision-tree.png" alt="分布式 AI 编排选型决策树" class="content-image" caption="分布式 AI 编排选型决策树" >}}

### 成本分析

<table class="tech-table">
<thead>
<tr><th>模式</th><th>Token 成本</th><th>通信开销</th><th>启动成本</th></tr>
</thead>
<tbody>
<tr><td>Fork</td><td>⭐ 最低</td><td>无</td><td>极低（复用 cache）</td></tr>
<tr><td>Coordinator</td><td>⭐⭐⭐ 中等</td><td>Worker 独立 prompt</td><td>中等</td></tr>
<tr><td>Swarm (pane)</td><td>⭐⭐⭐⭐ 高</td><td>全量独立会话</td><td>高</td></tr>
<tr><td>Swarm (in-process)</td><td>⭐⭐⭐ 中等</td><td>共享部分上下文</td><td>中等</td></tr>
<tr><td>ULTRAPLAN</td><td>⭐⭐ 低（规划云端）</td><td>仅最终方案传本地</td><td>中等</td></tr>
<tr><td>Remote CCR</td><td>⭐（终端 token 不变）</td><td>仅 UI 渲染</td><td>极低（接续会话）</td></tr>
</tbody>
</table>

从成本角度看，Fork 是最经济的多 Agent 方案（复用父级 prompt cache），而 Swarm 的全栈独立会话是最贵的。

---

## 五、源码工程启示

### 启示 1：规划是尴尬并行的

ULTRAPLAN 把规划扔到云端执行，背后是一个重要的工程洞察：**不涉及文件系统的纯推理任务，天然适合并行化和远程执行。** 这是设计任何 Agent 系统时的"杠杆点"——找到那些可以从主流程拆出来的、无副作用的推理步骤，把它们放到更便宜/更快/更方便的环境去跑。

### 启示 2：团队需要显式协议

Swarm 不是简单的"多个 Agent 跑在一起"。它有 TeamFile、有 mailbox、有 SendMessage、有颜色编码。**隐式的进程间通信（共享内存、全局变量）在多 Agent 系统中会引发混乱——必须把交互协议显式建模。**

```typescript
// Swarm 显式建模的团队协议：
// 1. TeamFile → 团队的宪法
// 2. mailbox → 消息总线
// 3. SendMessage → 通信原语
// 4. Leader Permission Bridge → 控制面
// 5. Scratchpad → 共享存储
```

### 启示 3：权限冒泡比分布式 ACL 更务实

Swarm 的权限设计选择了一条务实的路——不搞复杂的分布式访问控制列表（ACL），而是把审批权向上冒泡到 Leader。这让每一个队友的实现都极其简单：它不需要处理权限决策，只需要把请求往上抛。

### 启示 4：字节一致性就是钱

Fork 和 Agent Summary 都在追求同一个目标：**让子请求的 API 前缀字节级一致，最大化 prompt cache 命中。** 这不是优化，这是架构。设计时就考虑缓存友好，能让你的 token 账单直接打五折。

### 启示 5：安全以架构为前提

Remote CCR 的纯出站连接模型是一个很好的安全架构示例——它通过改变通信方向（从入站到出站），从根本上消除了端口暴露的风险。**安全不应该是后期加固的，而应该是架构设计时就内生的。**

---

## 结语：单 Agent 时代已经结束了

前面几篇文章，从 Multi-Agent 到 Tool System，再到 Fork Subagent & Prompt Cache 和 ULTRAPLAN & Agent Swarm，Claude Code 的源码给了一个清晰的信号：

**单 Agent 满足不了真实的工程场景。下一级复杂度必然是分布式编排。**

Anthropic 的可贵之处在于，它不是用一个"万能多 Agent 架构"解决所有问题，而是**根据不同场景设计了三种不同的多 Agent 模式 + 一套云端规划系统 + 一套远程控制机制**。每种方案在上下文共享策略、通信开销、启动成本、审批流程上做了不同的取舍。

<div class="outro-box">
<strong>💎 给所有构建 Agent 系统的人一个启示：</strong><br/>
不要问"我要不要加多 Agent"，要问"我的任务需要哪种编排模式"。
</div>

最后想说关于 Claude Code 的源码深度拆解课题结束了，后面我会计划把 Claude Code 的源码拿出来教大家如何本地部署，大家可以关注后期的动向。

声明：Claude Code 的源码不是专有 TypeScript 源代码的副本，它是一个对 Claude Code 行为进行洁净室（clean-room）Rust 重实现的项目。
