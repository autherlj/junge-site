---
title: "Kubernetes GPU 虚拟化实战：HAMi DRA 模式完整指南"
slug: "hami-dra-gpu-virtualization-guide"
date: 2026-05-15
description: "从安装到验证的完整实践——在 K8s 1.34+ 上部署 HAMi DRA 模式，通过原生 ResourceClaim 和 DevicePlugin 兼容两种方式实现 GPU 显存与算力的细粒度切分。"
categories: ["技术", "云原生"]
tags: ["Kubernetes", "GPU", "HAMi", "DRA", "虚拟化", "vGPU"]
featured: false
cover: "/images/blog/hami-dra-gpu-virtualization-guide/featured-title.png"
---

<style>
/* ===== junge-site 通用文章样式 ===== */
.td-content { max-width: 900px; margin: 0 auto; }
.lead-quote {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white; padding: 2.5rem 2rem; border-radius: 12px;
    margin: 2rem 0 3rem 0; font-size: 1.25rem; font-weight: 600;
    line-height: 1.6; box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    position: relative; overflow: hidden;
}
.lead-quote::before {
    content: '"'; position: absolute; top: -20px; left: 10px;
    font-size: 120px; opacity: 0.1; font-family: Georgia, serif;
}
.info-box {
    background: #f8f9fa; padding: 1.5rem;
    border-left: 4px solid #667eea; border-radius: 8px; margin: 2rem 0;
}
.highlight-box {
    background: linear-gradient(135deg, #fff5f5 0%, #fffaf0 100%);
    border: 2px solid #ed8936; border-radius: 12px;
    padding: 1.5rem; margin: 2rem 0;
    box-shadow: 0 4px 12px rgba(237, 137, 54, 0.1);
}
.stats-box {
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    color: white; padding: 2rem; border-radius: 12px;
    margin: 2rem 0; text-align: center;
}
.stats-box .number {
    font-size: 2.5rem; font-weight: 800; color: #667eea; display: block;
}
.numbered-list { list-style: none; padding: 0; margin: 1.5rem 0; }
.numbered-list li {
    padding: 0.75rem 0 0.75rem 2.5rem; position: relative;
    line-height: 1.6; border-bottom: 1px solid #f0f0f0;
}
.numbered-list li:last-child { border-bottom: none; }
.numbered-list .num {
    position: absolute; left: 0; top: 0.75rem;
    width: 28px; height: 28px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.85rem; font-weight: 700; flex-shrink: 0;
}
.inline-quote {
    background: #f0f4ff; padding: 1.5rem 2rem; margin: 2rem 0;
    border-radius: 12px; position: relative; font-style: italic; color: #4a5568;
}
.inline-quote::before {
    content: '"'; position: absolute; top: 5px; left: 12px;
    font-size: 48px; color: #667eea; opacity: 0.2; font-family: Georgia, serif;
}
.section-divider {
    display: flex; align-items: center; margin: 3rem 0; gap: 12px;
}
.section-divider .line {
    flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, #667eea, transparent);
}
.section-divider .dot {
    width: 6px; height: 6px; background: #667eea; border-radius: 50%; opacity: 0.5;
}
.outro-box {
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    color: white; padding: 2.5rem; border-radius: 16px;
    margin: 3rem 0; text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
.outro-box strong { color: #667eea !important; }
.td-content h2 {
    font-size: 1.8rem; font-weight: 700; color: #1a202c;
    margin-top: 3.5rem; margin-bottom: 1.5rem;
    padding-bottom: 0.8rem; border-bottom: 3px solid #667eea; position: relative;
}
.td-content h2::before {
    content: ''; position: absolute; left: 0; bottom: -3px;
    width: 60px; height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
}
.td-content strong { color: #667eea; font-weight: 600; }
.td-content p { margin-bottom: 1.5rem; }
.td-content img {
    border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    margin: 2.5rem 0; width: 100%;
    transition: transform 0.3s ease;
}
.td-content img:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18); }
.td-content pre { border-radius: 12px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); margin: 2rem 0; }
.td-content table {
    border-collapse: collapse; width: 100%; margin: 2rem 0;
    border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.td-content table th {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white; padding: 12px 16px; font-weight: 600;
}
.td-content table td { padding: 10px 16px; border-bottom: 1px solid #f0f0f0; }
.td-content table tr:last-child td { border-bottom: none; }
@media (max-width: 768px) {
    .lead-quote { padding: 1.5rem 1rem; font-size: 1.1rem; }
    .stats-box .number { font-size: 2rem; }
    .numbered-list li { padding-left: 2rem; }
}
</style>

一块 A10 24GB 显存的 GPU，在传统模式下只能给一个 Pod 用。但如果跑的是 batch 推理任务，很可能只用到了 10GB 显存和 30% 算力——剩下 14GB 就这么空着。

**如果能把一块物理 GPU 按显存和算力细粒度地切分，让多个 Pod 共享呢？**

这就是 HAMi 要解决的问题。

<div class="lead-quote">
HAMi 是当前 Kubernetes 上最活跃的开源 vGPU 方案，能够将一块物理 GPU 按显存和算力细粒度地切分为多个虚拟 GPU，供不同 Pod 共享。它也是 CNCF 的 Sandbox 项目，被收录于 CNCF 技术全景图和 CNAI 技术全景图。
</div>

本文聚焦 **HAMi DRA 模式的部署与使用**。Kubernetes 在 1.34 中正式 GA 了 DRA（Dynamic Resource Allocation），让调度器参与资源分配，在 Pod 调度阶段就精确匹配设备属性。HAMi 的 2.9 版本已经正式接入了 DRA。

---

## 什么是 HAMi

HAMi（异构 AI 计算虚拟化中间件）是一个用于管理 Kubernetes 集群中异构 AI 计算设备的开源平台，前身为 k8s-vGPU-scheduler。

### 核心能力

| 能力 | 说明 |
|------|------|
| 多设备支持 | 兼容多种异构 AI 计算设备（GPU、NPU 等） |
| 共享访问 | 多个容器可同时共享设备，提高资源利用率 |
| 硬限制 | 在容器内强制执行严格的内存限制，防止资源冲突 |
| 动态分配 | 根据工作负载需求按需分配设备内存 |
| 灵活单位 | 支持按 MB 或占总设备内存百分比的方式指定内存分配 |
| 类型选择 | 可请求特定类型的异构 AI 计算设备 |
| UUID 定向 | 使用设备 UUID 精确指定特定设备 |
| 工作负载透明 | 容器内无需修改代码 |
| 简单部署 | 使用 Helm 轻松安装和卸载 |
| 社区驱动 | 由互联网、金融、制造业、云服务等多领域组织联合发起 |

### DRA 模式的两条路径

DRA 的核心改进在于：调度器在 Pod 调度阶段就能精确匹配设备属性，避免了 DevicePlugin"调度到节点后才发现资源不够"的问题。

HAMi DRA 提供了两种使用模式：

| 模式 | ResourceClaim 创建 | 适用场景 |
|------|-------------------|---------|
| **原生 DRA 模式** | 手动创建 ResourceClaim | 新业务，精细化控制 |
| **DevicePlugin 兼容模式** | Webhook 自动转换 | 存量业务零改造迁移 |

两种模式的**底层调度与切分逻辑完全一致**，差异仅在于 ResourceClaim 的创建方式。

---

## 环境要求

| 要求 | 说明 |
|------|------|
| Kubernetes | 1.34+，需开启 `DRAConsumableCapacity` Feature Gate |
| Container Runtime | 必须开启 CDI |
| NVIDIA 驱动 | 440 及以上版本 |

> ⚠️ **特别注意**：`DRAConsumableCapacity` 在 1.36 才默认开启，1.34、1.35 需手动配置 Feature Gate。

---

## HAMi 安装

### 第一步：安装 GPU Operator（关闭 DevicePlugin）

```bash
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia && helm repo update

helm upgrade --install --wait gpu-operator \
  -n gpu-operator --create-namespace \
  nvidia/gpu-operator \
  --version=v26.3.1 \
  --set driver.enabled=true \
  --set devicePlugin.enabled=false
```

关键参数 `--set devicePlugin.enabled=false`：关闭 DevicePlugin，避免与后续安装的 DRA Driver 冲突。

### 第二步：安装 cert-manager

HAMi DRA Webhook 需要 TLS 证书，因此需要提前安装 cert-manager 用于自动签发。

```bash
helm repo add cert-manager https://charts.jetstack.io
helm repo update
helm install cert-manager cert-manager/cert-manager \
  -n cert-manager --create-namespace \
  --set crds.enabled=true
```

### 第三步：Helm 安装 HAMi

先为节点打标签，未标记的节点不会被 HAMi 接管：

```bash
kubectl label nodes {nodeid} gpu=on
```

然后安装 HAMi：

```bash
helm repo add hami-charts https://project-hami.github.io/HAMi/

helm -n hami-system install hami hami-charts/hami \
  --set dra.enabled=true \
  --create-namespace
```

> ⚠️ 注意：DRA 模式与传统模式不兼容，请勿同时启用。如果 GPU 驱动是主机预装（非 GPU Operator 安装），则需额外指定 `--set hami-dra.drivers.nvidia.containerDriver=false`。

### 验证安装

正常情况下，会在 `hami-system` 命名空间下启动以下 Pod：

```
NAME                                          READY   STATUS    RESTARTS   AGE
hami-dra-driver-kubelet-plugin-hflbh          1/1     Running   0          2m49s
hami-hami-dra-monitor-7b484d5f95-rlkcg        1/1     Running   0          22m
hami-hami-dra-webhook-64bfdc6b86-d4nlr        1/1     Running   0          22m
```

查看 ResourceSlice 确认 dra-driver 正常发布资源：

```bash
kubectl get resourceslice
```

![通过 ResourceSlice 确认 GPU 资源已注册到集群](/images/blog/hami-dra-gpu-virtualization-guide/resourceslice.png)

ResourceSlice 的详情中记录了 GPU 的架构、型号、显存等信息，用 `-oyaml` 查看完整字段：

```yaml
apiVersion: resource.k8s.io/v1
kind: ResourceSlice
metadata:
  name: ecs-a10-sh-hami-core-gpu.project-hami.io-hnn6d
spec:
  devices:
  - attributes:
      architecture:
        string: Ampere
      brand:
        string: Nvidia
      productName:
        string: NVIDIA A10
      cudaComputeCapability:
        version: 8.6.0
      driverVersion:
        version: 550.144.3
      type:
        string: hami-gpu
      uuid:
        string: GPU-f1c7d08c-ae21-13e7-0de0-9eb14ff71eaf
    capacity:
      cores:
        value: "100"
      memory:
        value: 23028Mi
    name: hami-gpu-0
  driver: hami-core-gpu.project-hami.io
  nodeName: ecs-a10-sh
```

![ResourceSlice 详情截图](/images/blog/hami-dra-gpu-virtualization-guide/resourceslice.png)

---

## 使用：两种模式实战

### 原生 DRA 模式

先创建 ResourceClaim 声明资源需求，再创建 Pod 引用该 Claim：

```yaml
# 申请 10G 显存 + 50 cores 的 A10 GPU
apiVersion: resource.k8s.io/v1
kind: ResourceClaim
metadata:
  name: gpu-half-claim
spec:
  devices:
    requests:
    - name: gpu
      exactly:
        deviceClassName: hami-core-gpu.project-hami.io
        allocationMode: ExactCount
        count: 1
        capacity:
          requests:
            cores: 50
            memory: "10Gi"
---
apiVersion: v1
kind: Pod
metadata:
  name: gpu-test-dra-native
spec:
  containers:
  - name: cuda
    image: nvidia/cuda:13.0.1-base-ubi9
    command: ["sleep", "3600"]
    resources:
      claims:
      - name: gpu
  resourceClaims:
  - name: gpu
    resourceClaimName: gpu-half-claim
  restartPolicy: Never
```

查看 ResourceClaim 的分配状态：

```bash
kubectl get resourceclaim gpu-half-claim -oyaml
```

关键输出：

```yaml
status:
  allocation:
    devices:
      results:
      - consumedCapacity:
          cores: "50"
          memory: 10Gi
        device: hami-gpu-0
        driver: hami-core-gpu.project-hami.io
        pool: ecs-a10-sh
        request: gpu
        shareID: 6108e68f-a7ec-4a30-9782-634885c0c728
```

进入 Pod 执行 `nvidia-smi`，可以看到显存限制为我们申请的 10G：

![原生 DRA 模式：显存已从物理 23028Mi 限制到申请的 10240Mi](/images/blog/hami-dra-gpu-virtualization-guide/native-nvidia-smi.jpg)

显存从物理的 23028Mi 限制到了申请的 10240Mi——**HAMi 生效了**。

### DevicePlugin 兼容模式

原生 DRA 模式需要手动创建 ResourceClaim，对存量业务不够友好。为了便于迁移，HAMi 提供了兼容模式：

用户仍然像传统方式在 `resources` 中申请资源，由 HAMi DRA Webhook **自动拦截并转换为 ResourceClaim**。

```yaml
# 申请 1 块 GPU，10Gi 显存 + 50% 算力
apiVersion: v1
kind: Pod
metadata:
  name: gpu-test-compatible
spec:
  containers:
  - name: cuda
    image: nvidia/cuda:13.0.1-base-ubi9
    command: ["sleep", "3600"]
    resources:
      limits:
        nvidia.com/gpu: 1
        nvidia.com/gpumem: 10240
        nvidia.com/gpucores: 50
  restartPolicy: Never
```

HAMi 会根据 `nvidia.com/gpumem`、`nvidia.com/gpucores` 自动生成 ResourceClaim：

```bash
kubectl get resourceclaim
NAME                              STATE               AGE
default-gpu-test-compatible-cuda  allocated,reserved  2m47s
```

Webhook 转换的映射关系：

| Pod 配置 | ResourceClaim 中的值 |
|----------|-------------------|
| `nvidia.com/gpu: 1` | `count: 1`, 选择器 `type == "hami-gpu"` |
| `nvidia.com/gpumem: 10240` | `memory: "10737418240"` (10Gi 的字节值) |
| `nvidia.com/gpucores: 50` | `cores: "50"` |

Pod 中执行 `nvidia-smi`，同样验证显存限制生效：

![兼容模式：同样限制到 10240Mi，无需手动创建 ResourceClaim](/images/blog/hami-dra-gpu-virtualization-guide/compatible-nvidia-smi.jpg)

兼容模式也正常生效了，存量业务零改造即可迁移。

---

## 小结

<div class="outro-box">
本文围绕 HAMi DRA 模式完成了从安装到验证的完整实践。两种模式的核心差异在于 ResourceClaim 的创建方式——原生模式手动管理、兼容模式自动生成，底层调度与切分逻辑完全一致。
</div>

对于已在用 DevicePlugin 方式的存量业务，**兼容模式提供了零改造的迁移路径**，只需安装 HAMi DRA 后，原有的 GPU 资源申请方式就能自动转换为 DRA 模式运行。

对于新业务，**原生 DRA 模式提供了更精细化的控制能力**，可以在 ResourceClaim 中精确指定显存、算力甚至特定 GPU UUID。

<div class="info-box">
相关资源：
- [HAMi 项目](https://github.com/Project-HAMi/HAMi)
- [Kubernetes Feature Gates](https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/)
- [DRA 系列 - 从部署到使用的完整体验](#)
- [DRA P2 - ResourceSlice、Claim、Class 三角关系](#)
- [开源 vGPU 方案 HAMi - 细粒度 GPU 切分](#)
- [HAMi Core & Memory 隔离测试](#)
</div>
