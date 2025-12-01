---
title: "Docker 实战手册"
linkTitle: "Docker 手册"
weight: 4
description: "容器化技术的入门与进阶实战，DevOps 工程师必读。"
date: 2022-11-11
params:
  author: "Docker Fans"
  state: "已完结"
  cover_icon: "fab fa-docker"
---

## 前言：Build, Ship, and Run Any App, Anywhere

Docker 的出现彻底改变了软件交付的方式。它通过标准化的容器格式，消除了“在我的机器上能跑”的经典问题，是现代云原生架构的基石。本书从基础概念讲起，涵盖了 Dockerfile 编写、网络存储、镜像优化到容器编排的全方位知识。

## 第一部分：容器化革命

### 1. 核心概念
*   **镜像 (Image)**：只读的模板，分层存储原理 (OverlayFS)
*   **容器 (Container)**：镜像的运行实例，进程隔离 (Namespace) 与资源限制 (Cgroups)
*   **仓库 (Registry)**：Docker Hub 与私有仓库搭建 (Harbor)

### 2. 常用命令实战
*   生命周期管理：run, start, stop, rm
*   信息查询：ps, logs, inspect, stats
*   容器交互：exec, attach, cp

## 第二部分：镜像构建与优化

### 3. Dockerfile 最佳实践
*   **指令详解**：COPY vs ADD, CMD vs ENTRYPOINT
*   **多阶段构建 (Multi-stage builds)**：大幅减小镜像体积
*   **缓存利用**：合理安排指令顺序加速构建

### 4. 镜像安全
*   最小化基础镜像：Alpine vs Distroless
*   非 Root 用户运行
*   镜像扫描与漏洞修复

## 第三部分：进阶应用

### 5. 网络与存储
*   **网络模式**：Bridge, Host, None, Overlay 详解
*   **数据卷 (Volumes)**：持久化存储方案，Bind Mount vs Volume
*   **容器互联**：DNS 解析与 link 机制

### 6. Docker Compose 编排
*   `docker-compose.yaml` 语法详解
*   服务依赖管理 (depends_on)
*   实战：一键部署 LAMP/LNMP 栈，微服务开发环境搭建

## 第四部分：生产环境实践

*   **Docker Swarm**：内置的集群编排工具简介
*   **日志管理**：ELK 栈集成
*   **监控告警**：Prometheus + Grafana + cAdvisor
*   **CI/CD 集成**：在 Jenkins/GitLab CI 中使用 Docker
