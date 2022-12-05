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

### go基本命令

- go get: 获取远程包（需要提取安装git或gh）
- go run: 直接运行程序
- go build: 测试编译，检查编译是否有错误
- go fmt: 格式化源码
- go install: 编译包文件并编译整个程序
- go test: 运行测试文件（文件以_test.go结尾的默认为测试文件）
- go doc: 查看文档

### Go modules

```shell
# 启用 Go Modules 功能
export GO111MODULE=on
# 配置 GOPROXY 环境变量
export GOPROXY=https://goproxy.io
```
### new

`new()` 内建函数取指针，相当于结构体初始化后取指针，写法更简洁一些。

```go
type DB struct {
	name1 uint64
	name2 uint64
}

func TestNew(t *testing.T) {
	p0 := new(DB)
	var p1 DB
	p2 := &p1
	t.Log(unsafe.Offsetof(p0.name1))
	t.Log(unsafe.Offsetof(p0.name2))
	t.Log(unsafe.Offsetof(p2.name1))
	t.Log(unsafe.Offsetof(p2.name2))
}
```

### ****互斥锁****

`sync.Mutex`是一个互斥锁，可以由不同的goroutine加锁和解锁。

Go标准库提供了`sync.Mutex`互斥锁类型以及两个方法分别是`Lock`加锁和`Unlock`释放锁。可以通过在代码前调用`Lock`方法，在代码后调用`Unlock`方法来保证一段代码的互斥执行，也可以使用`defer`语句来保证互斥锁一定会被解锁。当一个`goroutine`调用`Lock`方法获得锁后，其它请求的`goroutine`都会阻塞在`Lock`方法直到锁被释放。

一个互斥锁只能同时被一个`goroutine`锁定，其它`goroutine`将阻塞直到互斥锁被解锁，也就是重新争抢对互斥锁的锁定。需要注意的是，对一个未锁定的互斥锁解锁时将会产生运行时错误。

`sync.Mutex`不区分读写锁，只有`Lock()`和`Lock()`之间才会导致阻塞的情况。

有互斥锁

```go
package test

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

var m sync.Mutex
var set = make(map[int]bool, 0)

func printOnce(index int, num int) {
	if _, ok := set[num]; !ok {
		fmt.Println(index, num)
	}
	set[num] = true
}

func TestPrint(t *testing.T) {
	for i := 0; i < 10; i++ {
		go printOnce(i, 100)
	}
	time.Sleep(time.Second)
}
// 0 100
// 2 100
```

没有互斥锁

```go
package test

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

var m sync.Mutex
var set = make(map[int]bool, 0)

func printOnce(index int, num int) {
	m.Lock()
	defer m.Unlock()
	if _, ok := set[num]; !ok {
		fmt.Println(index, num)
	}
	set[num] = true
}

func TestPrint(t *testing.T) {
	for i := 0; i < 10; i++ {
		go printOnce(i, 100)
	}
	time.Sleep(time.Second)
}
// 0 100
```
