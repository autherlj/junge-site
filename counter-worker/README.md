# 访客计数器 Worker 部署指南

## 前提条件

1. 已安装 Wrangler CLI：
   ```bash
   npm install -g wrangler
   ```

2. 已登录 Cloudflare 账号：
   ```bash
   wrangler login
   ```

3. 博客已托管在 Cloudflare Pages

---

## 部署步骤

### Step 1：创建 KV 命名空间

在 Cloudflare Dashboard 中操作：

1. 进入 **Workers & Pages** → **KV**
2. 点击 **Create a namespace**
3. 名称填写 `VISITOR_COUNTER`
4. 创建后会获得一个 **Namespace ID**，复制它

### Step 2：配置 wrangler.toml

编辑 `wrangler.toml`，将 `<YOUR_KV_NAMESPACE_ID>` 替换为上一步获取的 ID：

```toml
kv_namespaces = [
  { binding = "VISITOR_COUNTER", id = "这里填你的Namespace ID" }
]
```

### Step 3：部署 Worker

```bash
cd counter-worker
wrangler deploy
```

部署成功后，会返回一个 Worker URL，例如：
```
https://junge-visitor-counter.<your-subdomain>.workers.dev
```

### Step 4：验证 Worker

```bash
curl https://junge-visitor-counter.<your-subdomain>.workers.dev
```

应返回：
```json
{"count":1,"formatted":"1"}
```

---

## Step 5：修改博客模板（计数器展示）

在首页横幅下方添加访客计数展示。

编辑 `content/zh/_index.md`，在 `{{% blocks/lead ...%}}` 之前插入：

```html
<!-- 访客计数器 -->
<div id="visitor-counter" style="
  text-align: center;
  padding: 12px 0;
  font-size: 1.1rem;
  color: rgba(255,255,255,0.85);
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(8px);
  margin: 0;
">
  <span id="counter-text">🚀 正在加载访问数据...</span>
</div>

<script>
(function() {
  const COUNTER_API = 'https://junge-visitor-counter.<your-subdomain>.workers.dev';

  async function updateCounter() {
    try {
      const res = await fetch(COUNTER_API);
      const data = await res.json();
      document.getElementById('counter-text').textContent =
        '🚀 已陪伴 ' + data.formatted + ' 位访客走过旅途';
    } catch(e) {
      document.getElementById('counter-text').textContent = '🚀 记录每一次相遇';
    }
  }
  updateCounter();
})();
</script>
```

**注意**：将 `https://junge-visitor-counter.<your-subdomain>.workers.dev` 替换为实际 Worker URL。

### Step 6：推送并验证

```bash
cd /root/.openclaw/workspace/junge-site
git add content/zh/_index.md
git commit -m "feat: 添加访客计数器"
git push
```

Cloudflare Pages 自动构建后，访问 [https://jungelife.me/zh/](https://jungelife.me/zh/) 查看效果。

---

## 常见问题

**Q: 计数显示比预期快很多？**
A: 当前配置是每次页面加载计数 +1，这是 PV（页面浏览量）。如需改为 UV（独立访客），需要用 Cookie 或 IP 去重。

**Q: 如何重置计数？**
A: 在 Cloudflare Dashboard → Workers & Pages → KV 中手动删除 `homepage_visitors` 键。

**Q: Worker 费用？**
A: 每天 10 万次免费请求，个人博客够用。超出部分按用量计费，量很小。

---

## 文件清单

```
counter-worker/
├── index.js      # Worker 源码
├── wrangler.toml # 部署配置
└── README.md     # 本文件
```
