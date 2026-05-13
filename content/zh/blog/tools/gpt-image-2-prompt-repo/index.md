---
title: "GPT Image 2 提示词仓库，我只推荐这一个"
slug: "gpt-image-2-prompt-repo"
date: 2026-05-13
description: "GitHub 上一个 1.8k Star 的 GPT Image 2 提示词仓库，每条 prompt 都是能直接交稿的水平。附 7 个精选 prompt 案例与改造思路。"
categories: ["工具推荐", "AI实践"]
tags: ["GPT Image 2", "AI绘图", "Prompt Engineering", "GitHub"]
featured: true
# cover 由同级目录 featured-title.png 自动识别
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

**GPT Image 2 发布十多天了，网上教程铺天盖地，但真正好用的东西往往藏在 GitHub 上。** 有人已经把精心打磨的提示词整理成公开仓库，全部免费，复制粘贴就能用。

我翻遍了 GitHub 上几个 Image 2 提示词仓库，最后留下的只有一个——[Awesome-GPT-Image-2-API-Prompts](https://github.com/Anil-matcha/Awesome-GPT-Image-2-API-Prompts)。

<div class="lead-quote">
这个仓库的核心价值不在于让你照抄，而是提供了一套可改造的结构化模板。一条好 prompt 不是给你照搬的，是给你拆解学习的。
</div>

上面这张杭州春季海报，就是从仓库里的一条 prompt 改的。Charles River 换成西湖，Beacon Hill 换成雷峰塔，1 分钟出片，不用 Photoshop，不用找设计师。

<div class="section-divider">
  <span class="line"></span>
  <span class="dot"></span>
  <span class="line"></span>
</div>

## 一、这个仓库为什么值得推荐

仓库 1.8k Star——星数不是重点，重点是**它每条 prompt 都是「能直接交稿」的水平**。

![杭州春季海报](hangzhou-spring-poster.jpg)

仓库将 prompt 分为 **6 大类**：

<ul class="numbered-list">
  <li><span class="num">1</span>人像摄影</li>
  <li><span class="num">2</span>海报插画</li>
  <li><span class="num">3</span>游戏截图</li>
  <li><span class="num">4</span>UI/UX 设计</li>
  <li><span class="num">5</span>角色设计</li>
  <li><span class="num">6</span>信息图排版</li>
</ul>

<div class="info-box">
每条 prompt 都是精心设计的结构化模板，你只需要替换关键元素——地标、品牌名、配色——就能产出自己的专业级图片。
</div>

<div class="section-divider">
  <span class="line"></span>
  <span class="dot"></span>
  <span class="line"></span>
</div>

## 二、7 个最值得收藏的 Prompt

### 1. 城市春季海报 — 结构化模板的典范

仓库里最让我惊艳的一条，是 **Boston Spring**。它的构图极其巧妙：左下角一艘小船划过水面，水流顺着画面向上走，把整个城市的标志性元素——天际线、街道、桥、地标——全部融进河流形状的构图里。

![Boston Spring 海报](boston-spring-poster.jpg)

我把它改成了杭州春季。你可以完全套用这个模板改造你的城市：

- **上海** → 黄浦江 + 外滩 + 武康大楼
- **苏州** → 运河 + 园林 + 平江路
- **西安** → 护城河 + 兵马俑 + 钟楼

**这就是这个仓库的精髓：结构化模板可改造。** 一条好 prompt 不是给你照抄的，是给你拆解学习的。

### 2. 宋朝社交媒体 — 穿越梗自带传播

这条 prompt 超级有趣——让 AI 生成「**假如宋朝人有微信朋友圈**」。苏东坡的头像、贬到黄州后发自制东坡肉、王安石点了「呵呵」、司马光评论「还是那个味道」。

![宋朝社交媒体](song-dynasty-wechat.jpg)

Prompt 结构很巧妙：把现代社交 App 的所有元素（头像、用户名、点赞、评论）都列出来了，但内容全部替换成宋朝语境。**套到唐朝、明朝、民国，都能复用。**

写历史科普类、文化类内容的人，这条必须收藏。

### 3. 山河茶饮海报 — 新中式国潮设计

新中式虽然卷成红海，但这条 prompt 真能跑出能用的图。

![山河茶饮海报](tea-poster.jpg)

核心是 **文字层级的精确控制**。一张茶饮海报需要哪些信息？品牌名、产品名、系列名、上市标语、限时价格、活动期、二维码区——这条 prompt 全部列出，让模型按设计师的方式排版。

<div class="highlight-box">
颜色用墨绿、米白、金色，强调宣纸质感、留白、山水点缀。适合茶饮、白酒、护肤品、文创产品的品牌方使用。品牌名、配色一换，就是你的物料。
</div>

### 4. 博物馆藏品信息图 — 教程类配图天花板

这是我用着最顺手的一条。Prompt 让 AI 生成「**博物馆解说牌风格**」的信息图——主体写实图、结构拆解图、材质工艺、纹样含义、色彩说明，全部图文结合排版。

![博物馆藏品信息图](museum-infographic.jpg)

风格不是海报，不是商品页，不是动漫——是**顶级博物馆展板级别**。prompt 里有个关键词 `automatically determine the most appropriate subject structure`，你只要给个主题，剩下的 AI 自己排版。

### 5. 35mm 便利店夜景人像 — 摄影级长 prompt

这条 prompt 长得离谱，但是它展示了 GPT Image 2 真正的强大之处。

![便利店夜景人像](convenience-store-portrait.jpg)

摄影细节被精确控制到令人发指的程度：
- 35mm 胶片摄影
- 便利店冷白荧光灯混外面霓虹灯
- 玻璃门反光
- 真实皮肤质感，不要塑料感
- 真实微毛孔细节

这种 prompt 在 Midjourney 时代根本没法用——关键词堆叠永远做不到这种精度。**但 GPT Image 2 吃这一套，500 字它都能消化。** 仓库里这种超长写实 prompt 有四五条，每一条都是把 prompt 当一份摄影 brief 来写。

### 6. 咖啡溯源信息图 — 教程范本

如果你做内容、写公众号，这条 prompt 必须收藏。

![咖啡溯源信息图](coffee-infographic.jpg)

它把「一杯咖啡是怎么来的」拆成 5 步：种植 → 处理 → 烘焙 → 研磨 → 萃取，每步都有具体数据。出来的图是一张完整的信息长图，路径箭头、数据框、图标、模块卡，一应俱全。

<div class="stats-box">
  <span class="number">30秒</span>
  vs
  <span class="number">半天</span>
  <br>
  AI 出图时间 vs 自己用 Figma 拉图
</div>

把咖啡换成奶茶、葡萄酒、巧克力、面包、寿司，**同一条 prompt 模板，能产出十几张不同主题的科普长图。**

### 7. 16 面板表情网格 — 角色设计省 80% 时间

最后这条给做 IP 的人。

![16 面板表情网格](expression-grid.jpg)

一张图生成同一个角色的 **16 种不同表情**——开心、悲伤、愤怒、惊讶、害羞、无语、坏笑、思考、好奇、骄傲、委屈、不屑、困惑、害怕、哭泣、爱心。

关键是 **面部、发型、服装在 16 个面板里必须保持高度一致**。这是 GPT Image 2 的角色一致性能力，扩散模型时代根本做不到。适合做漫画、IP 形象设计、表情包系列的人——一次生成等于一周工作量。

<div class="section-divider">
  <span class="line"></span>
  <span class="dot"></span>
  <span class="line"></span>
</div>

## 三、3 步抄出专业级图片

仓库介绍完，用法简单得离谱：

<ul class="numbered-list">
  <li><span class="num">1</span><strong>去仓库找一条接近你需求的 prompt 复制下来</strong></li>
  <li><span class="num">2</span><strong>替换具体内容</strong>——地标、品牌名、标语、配色。比如杭州海报模板里的 Charles River 改成西湖，crimson and gold 改成你的品牌色</li>
  <li><span class="num">3</span><strong>扔给 ChatGPT 或 Codex 出图</strong></li>
</ul>

整个流程不到 10 分钟，比从零写 prompt 快 10 倍，效果还更好。

<div class="section-divider">
  <span class="line"></span>
  <span class="dot"></span>
  <span class="line"></span>
</div>

## 四、写在最后

可能有人会觉得这有点「投机取巧」。但我恰恰认为，**AI 时代最稀缺的能力不是「从零创造」，而是「会站在巨人的肩膀上」**。

以前一个普通人想做一张专业海报，要不就花三千块请设计师，要不就自己学三个月 Photoshop。现在你只需要会复制粘贴、会替换关键词。门槛塌方式下降，但能跨过这个门槛的人依然不多。

<div class="outro-box">
<strong>多数人的本能反应还是「我要自己学怎么写 prompt」「我要从头摸索」</strong>——这是上一代图像模型留下来的肌肉记忆。网上一堆人花了大量时间精心写出来的 prompt，公开放在那里，随便用。你只要愿意去抄、去改、去玩。<br><br>
<strong>会抄的人，不丢人。懂得用别人的肩膀，反而是这个时代最稀缺的清醒。</strong>
</div>

**仓库地址：** [Awesome-GPT-Image-2-API-Prompts](https://github.com/Anil-matcha/Awesome-GPT-Image-2-API-Prompts)
