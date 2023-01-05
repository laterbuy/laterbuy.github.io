---
title: TypeScript类型基础1
description: TypeScript类型基础1
date: 2022/12/29
updated: 2022/12/29
tags:
  - typescript
  - 前端
categories:
  - typescript
---

### 如何类型檫除

1.  esbuild (快 不检查ts语法)

```bash
npm i -g esbuild
esbuild 1.ts > 1.js
```

1.  swc (快 不检查ts语法)

```bash
npm i -g @swc/cli @swc/core
swc 1.ts -o 1.js
```

1.  typescript(慢 检查ts语法)

```bash
npm i -g typescript
tsc 1.ts
```

1.  bable(慢 检查ts语法)

```bash
npm i @babel/core @babel/cli @babel/preset-typescript
babel --presets @babel/preset-typescript 1.ts
```

### 数据类型

js八种数据类型 `null`、`undefined`、`string`、`number` `boolean` `bigint` `symbol` `object`

ts类型 js的类型加上： `void` `never` `enum` `unkonwn` `any` `type` `interface`

# 用类型签名和Record描述对象

```typescript
type A = {
  [k: string]: number //  索引签名
}

type A1 = Record<string, number> // 泛型

const a: Object = 1;  // 包装对象的原因导致这里不报错
```

由于Object太不精确，ts一般使用索引签名和Record泛型描述普通对象。

### 用 \[] 和Array泛型描述数组

```typescript
type A = string[]

type A1 = Array<string>

type A2 = [string string]
```

### 描述函数对象

```typescript
type FnA = (a: number) => number

type FnVoid = () => void // 没有返回值  一般没有返回值用这种写法

type FnUndefined = () => undefined // 必须返回undefined

```

由于Function太不精确，ts一般使用()=>?描述函数。

### 描述其他对象

```typescript
const d: Date = new Date()
const r: RegExp = /ab+c/
const m:Map<string, number> = new Map()
const wm: WeakMap<{name: string}, number> = new WeakMap()
const s: Set<number> = new Set()
const ws: WeakSet<string[]> = new WeakSet()

```

### any\&unknown

-   可以将任何东西赋给 `unknown` 类型，但在进行类型检查或类型断言之前，不能对 `unknown` 进行操作
-   可以把任何东西分配给`any`类型，也可以对`any`类型进行任何操作

一般不用`any`，推荐用`unknown`, 因为使用 `unknown` 类型前，必须进行类型断言

```typescript
const a: any = 1;
a.toFixed(2)

const b: unknown = 2;
(b as number).toFixed(2) // 使用前必须进行断言处理
```

### 枚举和位操作

```typescript
enum Permission {
  Read = 1 << 0, // 0001
  Write = 1 << 2, // 0010
  Delete = 1 << 3, // 0100
  Manage = Read | Write | Delete, // 0111
}

const user: {perssion: Permission} = {perssion: 0b0101};

if ((user.perssion & Permission.Write) === Permission.Write) {
  console.log('有写权限')
}

```

### type与interface的前两个区别

带有属性的函数的声明方式

```typescript
type FnWithProp = {
  (a: number, b: number): number;
  prop: string;
};

const f: FnWithProp = (x, y) => {
  return x * y;
};

f.prop = "a";

```

type & interface 相同点

```typescript
interface X {
  age: number
}

type A = Array<string> & {name: string} & X

interface A2 extends Array<string> , X {
  name: string
}


```

区别：

1.  type 描述所有数据 interface 只描述对象
2.  type 只是别名 interface 是类型声明
3.  对外API 尽量用interface方便扩展；对内API尽量用type 防止代码分散

```typescript
declare global {
  interface String {
    padZero(x: string) :void
  }
}

const a = 'hello';
a.padZero()
```
