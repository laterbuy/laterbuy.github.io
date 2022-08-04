---
title: go学习笔记
description: go学习笔记
date: 2022/07/11
updated: 2022/07/11
tags:
  - go
  - 学习笔记
categories:
  - go

---

#### go基本命令

- go get: 获取远程包（需要提取安装git或gh）
- go run: 直接运行程序
- go build: 测试编译，检查编译是否有错误
- go fmt: 格式化源码
- go install: 编译包文件并编译整个程序
- go test: 运行测试文件（文件以_test.go结尾的默认为测试文件）
- go doc: 查看文档

#### Go modules

```shell
# 启用 Go Modules 功能
export GO111MODULE=on
# 配置 GOPROXY 环境变量
export GOPROXY=https://goproxy.io
```

