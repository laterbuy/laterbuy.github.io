---
title: 初始化一个ts-jest项目
description: 初始化一个ts-jest项目
date: 2022/07/26
updated: 2022/07/26
tags:
  - typescript
  - nodejs
categories:
  - typescript
---

### 全局安装typescript

```bash
npm install -g typescript
```

### 初始化typescript配置

```bash
tsc --init
```

### 配置类型声明和构建后目录

```tsx
// tsconfig.json
"types": ["node", "jest"],
"outDir": "./dist",
```

### 添加jest和ts-node等依赖

```shell
npm i -D jest typescript
npm i -D ts-jest @types/jest
# Creating config
npx ts-jest config:init
# run test
npx jest
```