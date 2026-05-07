---
title: 隽戈的科技生活馆
---

<style>
  .td-heading-self-link {
    display: none;
  }
  .td-cover-block {
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at 18% 22%, rgba(232, 74, 40, 0.34), transparent 28%),
      radial-gradient(circle at 80% 18%, rgba(37, 99, 235, 0.36), transparent 32%),
      radial-gradient(circle at 56% 78%, rgba(14, 165, 233, 0.24), transparent 34%),
      linear-gradient(135deg, #f7fbff 0%, #e5edff 46%, #fff2eb 100%) !important;
  }
  .td-cover-block::before,
  .td-cover-block::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .td-cover-block::before {
    z-index: 0;
    background-image:
      linear-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15, 23, 42, 0.065) 1px, transparent 1px);
    background-size: 42px 42px;
    mask-image: radial-gradient(circle at 50% 45%, #000 0%, transparent 70%);
  }
  .td-cover-block::after {
    z-index: 1;
    background:
      radial-gradient(circle at 50% 42%, rgba(255, 255, 255, 0.16), transparent 38%),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.06));
  }
  .home-holo {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }
  .home-holo::before {
    content: "";
    position: absolute;
    inset: -35%;
    background:
      linear-gradient(115deg, transparent 0 22%, rgba(255, 255, 255, 0.46) 24%, transparent 29% 100%),
      conic-gradient(from 150deg at 50% 50%, transparent 0deg, rgba(232, 74, 40, 0.2) 52deg, transparent 112deg, rgba(37, 99, 235, 0.24) 188deg, transparent 280deg);
    filter: blur(22px);
    opacity: 0.92;
    animation: home-holo-drift 19s ease-in-out infinite alternate;
  }
  .home-holo__canvas,
  .home-holo__aurora,
  .home-holo__sweep,
  .home-holo__scan {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .home-holo__canvas {
    z-index: 2;
  }
  .home-holo__aurora {
    z-index: 1;
    background:
      radial-gradient(ellipse at 28% 46%, rgba(232, 74, 40, 0.34), transparent 38%),
      radial-gradient(ellipse at 70% 54%, rgba(14, 165, 233, 0.32), transparent 42%);
    mix-blend-mode: multiply;
    animation: home-aurora-pulse 10s ease-in-out infinite alternate;
  }
  .home-holo__sweep {
    z-index: 3;
    background:
      linear-gradient(112deg, transparent 0%, rgba(255, 255, 255, 0.76) 43%, transparent 49%),
      repeating-linear-gradient(102deg, transparent 0 20px, rgba(37, 99, 235, 0.1) 21px, transparent 24px);
    opacity: 0.72;
    animation: home-prism-sweep 12s cubic-bezier(.45, 0, .2, 1) infinite;
  }
  .home-holo__scan {
    z-index: 4;
    height: 30%;
    background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.76) 50%, transparent 100%);
    opacity: 0.46;
    transform: translateY(-120%);
    animation: home-scan-fall 8s ease-in-out infinite;
  }
  .td-cover-block > .container,
  .td-cover-block > .td-cover-block__inner {
    position: relative;
    z-index: 5;
  }
  .td-cover-block h1,
  .td-cover-block .lead {
    color: #111827;
    text-shadow: 0 1px 18px rgba(255, 255, 255, 0.72);
  }
  .home-hero-panel {
    position: relative;
    z-index: 6;
    max-width: 820px;
    margin: 0 auto;
    padding: clamp(2rem, 4vw, 3.25rem);
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 28px;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.42)),
      radial-gradient(circle at 16% 18%, rgba(232, 74, 40, 0.13), transparent 30%),
      radial-gradient(circle at 82% 12%, rgba(37, 99, 235, 0.12), transparent 32%);
    box-shadow:
      0 24px 70px rgba(15, 23, 42, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(18px) saturate(1.15);
  }
  .home-hero-panel::before {
    content: "";
    position: absolute;
    inset: 12px;
    border: 1px solid rgba(255, 255, 255, 0.44);
    border-radius: 22px;
    pointer-events: none;
  }
  .home-hero-title {
    margin: 0;
    color: #0f172a;
    font-size: clamp(2.4rem, 6vw, 5rem);
    font-weight: 900;
    letter-spacing: -0.06em;
    line-height: 0.98;
    text-shadow: 0 1px 18px rgba(255, 255, 255, 0.72);
  }
  .home-hero-title span {
    color: #e84a28;
  }
  .home-hero-subtitle {
    max-width: 640px;
    margin: 1.2rem auto 0;
    color: #475569;
    font-size: clamp(1.05rem, 2vw, 1.35rem);
    line-height: 1.75;
  }
  .home-hero-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.9rem;
    margin-top: 2rem;
  }
  .home-hero-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 156px;
    padding: 0.9rem 1.25rem;
    border-radius: 999px;
    font-weight: 800;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .home-hero-btn:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }
  .home-hero-btn--primary {
    color: #fff;
    background: linear-gradient(135deg, #e84a28, #f97316);
    box-shadow: 0 14px 28px rgba(232, 74, 40, 0.26);
  }
  .home-hero-btn--primary:hover {
    color: #fff;
    box-shadow: 0 18px 36px rgba(232, 74, 40, 0.34);
  }
  .home-hero-btn--ghost {
    color: #0f172a;
    border: 1px solid rgba(15, 23, 42, 0.12);
    background: rgba(255, 255, 255, 0.58);
  }
  .home-hero-btn--ghost:hover {
    color: #0f172a;
    border-color: rgba(37, 99, 235, 0.28);
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.12);
  }
  .home-hero-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.7rem;
    margin-top: 1.6rem;
  }
  .home-hero-chip {
    padding: 0.46rem 0.8rem;
    border: 1px solid rgba(37, 99, 235, 0.13);
    border-radius: 999px;
    color: #334155;
    background: rgba(255, 255, 255, 0.5);
    font-size: 0.82rem;
    font-weight: 700;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
  }
  .home-lead-section {
    position: relative;
    overflow: hidden;
    margin-top: -1px;
    background:
      radial-gradient(circle at 22% 22%, rgba(232, 74, 40, 0.12), transparent 32%),
      radial-gradient(circle at 78% 20%, rgba(37, 99, 235, 0.11), transparent 34%),
      linear-gradient(135deg, #fff7ed 0%, #f8fafc 48%, #eef4ff 100%);
    color: #1e293b;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.72),
      inset 0 24px 44px rgba(37, 99, 235, 0.06);
  }
  .home-lead-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(15, 23, 42, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
    background-size: 36px 36px;
    mask-image: radial-gradient(circle at 50% 50%, #000 0%, transparent 74%);
    pointer-events: none;
  }
  .home-lead-section::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: min(1080px, 92vw);
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(232, 74, 40, 0.36), rgba(37, 99, 235, 0.32), transparent);
    transform: translateX(-50%);
    pointer-events: none;
  }
  .home-lead-section .container {
    position: relative;
    z-index: 1;
  }
  .home-lead-section p {
    max-width: 880px;
    margin-right: auto;
    margin-left: auto;
    color: #334155;
    font-weight: 700;
    line-height: 1.75;
  }
  .home-feature-section {
    position: relative;
    background:
      linear-gradient(180deg, #f8fafc 0%, #ffffff 120px);
    padding: 5rem 1rem;
  }
  .home-feature-section::before {
    content: "";
    position: absolute;
    top: -34px;
    left: 50%;
    width: min(980px, 88vw);
    height: 68px;
    border: 1px solid rgba(37, 99, 235, 0.1);
    border-bottom: 0;
    border-radius: 999px 999px 0 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(248, 250, 252, 0));
    box-shadow: 0 -18px 42px rgba(15, 23, 42, 0.06);
    transform: translateX(-50%);
    pointer-events: none;
  }
  .home-feature-section .container {
    position: relative;
    z-index: 1;
  }
  .home-feature-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    max-width: 1120px;
    margin: 0 auto;
  }
  .home-feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 260px;
    padding: 2.4rem 1.6rem;
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 24px;
    text-align: center;
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.5)),
      radial-gradient(circle at 18% 18%, rgba(232, 74, 40, 0.08), transparent 36%),
      radial-gradient(circle at 82% 16%, rgba(37, 99, 235, 0.08), transparent 38%);
    box-shadow:
      0 18px 44px rgba(15, 23, 42, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.86);
    backdrop-filter: blur(14px) saturate(1.08);
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  }
  .home-feature-card:hover {
    border-color: rgba(232, 74, 40, 0.2);
    box-shadow:
      0 24px 54px rgba(15, 23, 42, 0.12),
      0 8px 24px rgba(232, 74, 40, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    transform: translateY(-5px);
  }
  .home-feature-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin-bottom: 1.25rem;
    border-radius: 20px;
    color: #0f172a;
    font-size: 1.85rem;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(248, 250, 252, 0.64)),
      radial-gradient(circle at 30% 20%, rgba(232, 74, 40, 0.16), transparent 44%);
    box-shadow:
      0 12px 28px rgba(15, 23, 42, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }
  .home-feature-card h3 {
    margin-bottom: 0.8rem;
    color: #0f172a;
    font-size: 1.5rem;
    font-weight: 800;
  }
  .home-feature-card p {
    margin-bottom: 0;
    color: #475569;
    line-height: 1.75;
  }
  #td-block-2 + .td-box {
    position: relative;
    background:
      linear-gradient(180deg, #f8fafc 0%, #ffffff 120px);
  }
  #td-block-2 + .td-box::before {
    content: "";
    position: absolute;
    top: -34px;
    left: 50%;
    width: min(980px, 88vw);
    height: 68px;
    border: 1px solid rgba(37, 99, 235, 0.1);
    border-bottom: 0;
    border-radius: 999px 999px 0 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(248, 250, 252, 0));
    box-shadow: 0 -18px 42px rgba(15, 23, 42, 0.06);
    transform: translateX(-50%);
    pointer-events: none;
  }
  #td-block-2 + .td-box > .col > .row {
    position: relative;
    z-index: 1;
    gap: 1.5rem;
    justify-content: center;
  }
  #td-block-2 + .td-box .col-lg-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 280px;
    max-width: 360px;
    padding: 2rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 24px;
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.48)),
      radial-gradient(circle at 18% 18%, rgba(232, 74, 40, 0.08), transparent 36%),
      radial-gradient(circle at 82% 16%, rgba(37, 99, 235, 0.08), transparent 38%);
    box-shadow:
      0 18px 44px rgba(15, 23, 42, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.86);
    backdrop-filter: blur(14px) saturate(1.08);
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  }
  #td-block-2 + .td-box .col-lg-4:hover {
    border-color: rgba(232, 74, 40, 0.2);
    box-shadow:
      0 24px 54px rgba(15, 23, 42, 0.12),
      0 8px 24px rgba(232, 74, 40, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    transform: translateY(-5px);
  }
  #td-block-2 + .td-box .col-lg-4 > .mb-4 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 58px;
    margin-bottom: 1rem !important;
    border-radius: 18px;
    color: #0f172a;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.62)),
      radial-gradient(circle at 30% 20%, rgba(232, 74, 40, 0.16), transparent 44%);
    box-shadow:
      0 12px 28px rgba(15, 23, 42, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }
  #td-block-2 + .td-box .col-lg-4 h4 {
    color: #0f172a;
    font-weight: 800;
  }
  #td-block-2 + .td-box .col-lg-4 p {
    color: #475569;
    line-height: 1.75;
  }
  .home-feature-section .col,
  .home-feature-section [class*="col-"] {
    display: flex;
  }
  .home-feature-section .td-box--height-auto {
    height: 100%;
  }
  .home-feature-section .td-feature {
    width: 100%;
    padding: 2rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 24px;
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.48)),
      radial-gradient(circle at 18% 18%, rgba(232, 74, 40, 0.08), transparent 36%),
      radial-gradient(circle at 82% 16%, rgba(37, 99, 235, 0.08), transparent 38%);
    box-shadow:
      0 18px 44px rgba(15, 23, 42, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.86);
    backdrop-filter: blur(14px) saturate(1.08);
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  }
  .home-feature-section .td-feature:hover {
    border-color: rgba(232, 74, 40, 0.2);
    box-shadow:
      0 24px 54px rgba(15, 23, 42, 0.12),
      0 8px 24px rgba(232, 74, 40, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    transform: translateY(-5px);
  }
  .home-feature-section .td-feature .fa,
  .home-feature-section .td-feature .fas,
  .home-feature-section .td-feature .fab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 58px;
    margin-bottom: 1rem;
    border-radius: 18px;
    color: #0f172a;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.62)),
      radial-gradient(circle at 30% 20%, rgba(232, 74, 40, 0.16), transparent 44%);
    box-shadow:
      0 12px 28px rgba(15, 23, 42, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }
  .home-feature-section .td-feature h2,
  .home-feature-section .td-feature h3 {
    color: #0f172a;
    font-weight: 800;
  }
  .home-feature-section .td-feature p {
    color: #475569;
    line-height: 1.75;
  }
  @media (max-width: 575.98px) {
    .home-hero-panel {
      padding: 1.5rem;
      border-radius: 22px;
    }
    .home-hero-actions {
      gap: 0.7rem;
    }
    .home-hero-btn {
      width: 100%;
    }
    .home-feature-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 576px) and (max-width: 991.98px) {
    .home-feature-grid {
      grid-template-columns: 1fr;
      max-width: 560px;
    }
  }
  @keyframes home-holo-drift {
    from {
      transform: rotate(-7deg) scale(1);
    }
    to {
      transform: rotate(9deg) scale(1.13);
    }
  }
  @keyframes home-aurora-pulse {
    from {
      transform: translate3d(-2%, 1%, 0) scale(1);
      opacity: 0.72;
    }
    to {
      transform: translate3d(2%, -1%, 0) scale(1.08);
      opacity: 0.96;
    }
  }
  @keyframes home-prism-sweep {
    0%, 18% {
      transform: translateX(-42%) skewX(-13deg);
      opacity: 0;
    }
    48% {
      opacity: 0.72;
    }
    76%, 100% {
      transform: translateX(44%) skewX(-13deg);
      opacity: 0;
    }
  }
  @keyframes home-scan-fall {
    0%, 34% {
      transform: translateY(-130%);
      opacity: 0;
    }
    52% {
      opacity: 0.46;
    }
    82%, 100% {
      transform: translateY(430%);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .home-holo::before,
    .home-holo__aurora,
    .home-holo__sweep,
    .home-holo__scan {
      animation: none;
    }
  }
</style>

{{< blocks/cover title="" image_anchor="top" height="full" >}}
<div class="home-holo" aria-hidden="true">
  <canvas class="home-holo__canvas"></canvas>
  <div class="home-holo__aurora"></div>
  <div class="home-holo__sweep"></div>
  <div class="home-holo__scan"></div>
</div>
<div class="home-hero-panel">
  <h1 class="home-hero-title">隽戈的科技生活馆<span>.</span></h1>
  <p class="home-hero-subtitle">用工程视角记录技术、生活与长期成长，在实践、阅读和观察之间，沉淀可复用的经验。</p>
  <div class="home-hero-actions">
    <a class="home-hero-btn home-hero-btn--primary" href="/zh/blog/">
      进入技术笔记 <i class="fas fa-arrow-alt-circle-right ms-2"></i>
    </a>
    <a class="home-hero-btn home-hero-btn--ghost" href="/zh/lifestyle/">
      浏览生活记录 <i class="fas fa-arrow-alt-circle-right ms-2"></i>
    </a>
  </div>
  <div class="home-hero-chips">
    <span class="home-hero-chip">Cloud Native</span>
    <span class="home-hero-chip">AI Notes</span>
    <span class="home-hero-chip">Open Source</span>
    <span class="home-hero-chip">Photography</span>
  </div>
</div>
{{< blocks/link-down color="info" >}} {{< /blocks/cover >}}

<script>
document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.querySelector(".home-holo__canvas");
  var hero = document.querySelector(".home-holo");

  if (!canvas || !hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var ctx = canvas.getContext("2d");
  var pointer = { x: 0.5, y: 0.5, active: false };
  var time = 0;
  var width = 0;
  var height = 0;
  var dpr = 1;
  var animationFrame = null;

  function resize() {
    var rect = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawFacet(cx, cy, radius, sides, rotation, stroke, fill) {
    ctx.beginPath();

    for (var i = 0; i < sides; i++) {
      var angle = rotation + i * Math.PI * 2 / sides;
      var wobble = 1 + Math.sin(time * 1.7 + i * 1.31 + cx * 0.01) * 0.08;
      var x = cx + Math.cos(angle) * radius * wobble;
      var y = cy + Math.sin(angle) * radius * wobble;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
  }

  function render() {
    time += 0.0048;
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";

    var glow = ctx.createRadialGradient(width * pointer.x, height * pointer.y, 0, width * pointer.x, height * pointer.y, width * 0.5);
    glow.addColorStop(0, "rgba(255, 255, 255, 0.34)");
    glow.addColorStop(0.34, "rgba(232, 74, 40, 0.2)");
    glow.addColorStop(0.62, "rgba(37, 99, 235, 0.14)");
    glow.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "multiply";
    var columns = 7;
    var rows = 4;
    var cellW = width / columns;
    var cellH = height / rows;

    for (var y = 0; y <= rows; y++) {
      for (var x = 0; x <= columns; x++) {
        var nx = x / columns;
        var ny = y / rows;
        var dx = nx - pointer.x;
        var dy = ny - pointer.y;
        var pull = pointer.active ? Math.exp(-(dx * dx + dy * dy) * 10) : 0;
        var cx = x * cellW + Math.sin(time * 1.4 + y * 1.7) * 18 + dx * pull * 28;
        var cy = y * cellH + Math.cos(time * 1.2 + x * 1.3) * 16 + dy * pull * 24;
        var radius = Math.min(cellW, cellH) * (0.24 + Math.sin(time * 1.8 + x + y) * 0.025);
        var hueMix = (x + y) % 3;
        var stroke = hueMix === 0 ? "rgba(232, 74, 40, 0.28)" : hueMix === 1 ? "rgba(37, 99, 235, 0.26)" : "rgba(15, 23, 42, 0.12)";
        var fill = hueMix === 0 ? "rgba(232, 74, 40, 0.055)" : hueMix === 1 ? "rgba(37, 99, 235, 0.052)" : "rgba(255, 255, 255, 0.16)";

        drawFacet(cx, cy, radius, 5 + ((x + y) % 3), time + x * 0.42 + y * 0.31, stroke, fill);

        if (x < columns && y < rows) {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + cellW * 0.5 + Math.sin(time + y) * 12, cy + cellH * 0.38 + Math.cos(time + x) * 12);
          ctx.strokeStyle = "rgba(15, 23, 42, 0.07)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    ctx.globalCompositeOperation = "screen";
    for (var beam = 0; beam < 5; beam++) {
      var offset = ((time * 70 + beam * width * 0.24) % (width * 1.35)) - width * 0.2;
      var gradient = ctx.createLinearGradient(offset - 80, 0, offset + 120, height);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.32)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset + height * 0.34, height);
      ctx.stroke();
    }

    animationFrame = window.requestAnimationFrame(render);
  }

  var cover = hero.closest(".td-cover-block") || hero;

  cover.addEventListener("pointermove", function(event) {
    var rect = cover.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / rect.width;
    pointer.y = (event.clientY - rect.top) / rect.height;
    pointer.active = true;
  });

  cover.addEventListener("pointerleave", function() {
    pointer.active = false;
  });

  window.addEventListener("resize", resize);
  resize();
  render();

  document.addEventListener("visibilitychange", function() {
    if (document.hidden && animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
    } else if (!document.hidden && !animationFrame) {
      render();
    }
  });
});
</script>

<section class="home-lead-section py-5">
  <div class="container text-center">
    <p class="h4 mb-0">欢迎来到隽戈的科技生活馆！这里是我记录技术探索、生活点滴和思考感悟的地方。<br>希望这里的内容能对你有所启发。</p>
  </div>
</section>

<section class="home-feature-section">
  <div class="home-feature-grid">
    <article class="home-feature-card">
      <div class="home-feature-icon"><i class="fas fa-lightbulb"></i></div>
      <h3>技术分享</h3>
      <p>分享我在编程、云原生、AI 等领域的学习笔记和实战经验。</p>
    </article>
    <article class="home-feature-card">
      <div class="home-feature-icon"><i class="fab fa-github"></i></div>
      <h3>开源项目</h3>
      <p>查看我的开源项目和贡献。</p>
    </article>
    <article class="home-feature-card">
      <div class="home-feature-icon"><i class="fas fa-book"></i></div>
      <h3>读书笔记</h3>
      <p>分享我阅读过的书籍和精华笔记。</p>
    </article>
  </div>
</section>
