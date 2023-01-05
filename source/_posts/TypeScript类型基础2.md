---
title: TypeScript类型基础2
description: TypeScript类型基础2
date: 2023/01/05
updated: 2023/01/05
tags:
  - typescript
  - 前端
categories:
  - typescript
---

### 类型收窄

1.  使用typeof区分类型

局限性: 数组对象、普通对象、日期对象、`null`都返回 `'object'`

```typescript
const f = (a: number | string) => {
  if (typeof a === "number") {
    a.toFixed(2);
  } else {
    a.split(",");
  }
};

```

1.  使用instanceof区分类型

局限性：不支持`string`  `number` `boolean`等基本类型和不支持ts独有的类型

```typescript
const f = (a: Array<Date> | Date) => {
  if (a instanceof Date) {
    a.toISOString()
  } else if (a instanceof Array) {
    a[0].toDateString()
  } else {
    throw new Error('never do this')
  }
}
```

1.  使用 in 来收窄类型：只适用部分对象

```typescript
type Person = {
  name: string;
};

const f = (a: Person | Person[]) => {
  if ("name" in a) {
    a; // Person
  } else {
    a; // Person[]
  }
};
```

1.  类型谓词 is

有点：支持所有的ts类型

缺点：麻烦

```typescript
type Rect = {
  height: number;
  width: number;
};
type Circle = {
  center: [number, number];
  radius: number;
};

function isRect(x: Rect | Circle): x is Rect { // 不能是箭头函数也不能返回boolean类型
  return "height" in x && "width" in x;
}

const f = (a: Rect | Circle) => {
  if (isRect(a)) {
    a // Rect
  }
}
```

1.  可辨别联合 x.kind

联合类型有一个同名、可辨别的简单类型

```typescript
type Rect = {
  height: number;
  width: number;
  kind: 'rect'
};
type Circle = {
  center: [number, number];
  radius: number;
  kind: 'circle'
};


const f = (a: Rect | Circle) => {
  if (a.kind === 'rect') {
    a // Rect
  }
}

```

### 重新看待any\&unknown

any是所有的类型，随用随变，用了相当于没有用

```typescript
const f = (a: any) => {
  a.toFixed()
  a.split()
};
```

unkown 是所有类型的联合

```typescript
const f = (a: unknown) => {
  if (typeof a === "string") {
    a // string
  }
};
```

### 交叉类型的特殊场景

类型交叉时，属性冲突，属性取交集

```typescript
type Person = {
  name: string
  id: string
}

type User = Person & {
  id: number
}

const u:User = {
  id: 1, // never
}

```

interface不能继承时，属性不能冲突，会报错

```typescript
interface Person {
  name: string
  id: string
}

interface User extends Person  { // 报错
  id: number
}

```

### 函数重载

态度：重载没什么特别的用处，正常起两个函数名字就可以

如果封装的是一个底层的库，重载相当于把复杂度留给了自己，方便了使用者；具体用不用，要看想把复杂度留给谁去处理。

```typescript
// 声明：
function add(arg1: string, arg2: string): string
function add(arg1: number, arg2: number): number
// 实现 参数类型兼容声明中的所有写法：
function add(arg1: string | number, arg2: string | number): string | number {
   // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
   if(typeof arg1 === 'string' && typeof arg2 === 'string') {
       return arg1 + arg2;
  } else if(typeof arg1 === 'number' && typeof arg2 === 'number') {
       return arg1 + arg2;
  }
}

```

### 类型兼容

普通对象(属性少的兼容属性多的)

```typescript
type A = {
  name: string
}

type B = {
  name: string
  age: number
}

let a: B = {
  name: '',
  age: 12,
}

let b:A = a

```

接口兼容(子接口兼容父接口|属性多的接口兼容属性少的接口)

```typescript
interface P {
  name: string;
}

interface C extends P {
  age: number;
}

let p: P;
let c: C = {
  name: '',
  age: 12
};

p = c
```

函数兼容

参数少的函数可以赋值给参数多的函数， 反之不行

```typescript
let a = (a: number, b: string) => {};
let b = (a: number) => {};
a = b
```

参数要求少的兼容参数要求多的，反之不行

```typescript
interface P {
  name: string;
}

interface C extends P {
  age: number;
}
let a = (a: P) => {};
let b = (a: C) => {};
b = a
```

返回值属性少的兼容返回值属性多的，反之不行

```typescript
let a = () => ({name: ''})
let b = () => ({name: '', age: 12})

a = b
```

### 声明函数的4种方式

```typescript
// 1.先写类型再赋值
type F1 = (a: number, b: number) => number;
const f1: F1 = (a, b) => a + b;
// 2. 先实现箭头函数 再获取类型
const f2 = (a: number, b: number): number => a + b;

// 3. 先实现普通函数再获取类型
function f3(this: unknown, a: number, b: number) {
  return a + b;
}
type F3 = typeof f3;

// 4. 先实现匿名普通函数 再获取类型
const f4 = function (this: unknown, a: number, b: number) {
  return a + b;
};
type F4 = typeof f4;
```

### 深入对象语法

```typescript
// 索引签名
type Hash1= {
  [k: string]: unknown
  length: number
}

type List1   = {
  [k: number]: unknown
  length: number
}
// 映射类型
type Hash = {
  [k in string]: unknown
}

type List   = {
  [k in number]: unknown
}

```

### 泛型入门

基本使用

```typescript
type Union<A, B> = A | B
type C = Union<string, number>


interface List<A> {
  [index: number] : A
}

type D = List<string>
// 代入法
// interface List<string> {
//   [index: number] : string
// }

```

条件类型

在泛型中使用extends

```typescript
type LikeString<T> = T extends string ? true : false
type LikeNumber<T> = T extends number ? 1 : 2

type R1 = LikeString<'hi'> // true
type R2 = LikeString<2> // false

type S1 = LikeNumber<33> // 1
type S2 = LikeNumber<false> // 2

```

-   若T为联合类型 , 则类型分开计算

```typescript
type ToArray<T> = T extends unknown ? T[] : never;

type Result = ToArray<string | number>;
type Result1 = string extends unknown
  ? string[]
  : never | number extends unknown
  ? number[]
  : never;
type Result2 = string[] | number[];

```

-   若T为`never`，则表达式的值为`never`

```typescript
type ToArray<T> = T extends unknown ? T[] : never;

type Result = ToArray<never>; // never
```

-   在泛型中使用 keyof

```typescript
type Person = {name: string, age: number}
type GetKeys<T> = keyof T


type Result = GetKeys<Person>

const r:Result = 'name' // name age
```

-   型约束 在泛型中使用 extends keyof

```typescript
type Person = {name: string, age: number}
type GetKeyType<T, K extends keyof T> = T[K]


type Result = GetKeyType<Person, 'age'> // number 这里可以约束key

type X = Person['name'] // string 这里不能约束key
```

### 泛型进阶

```typescript
type Person = { id: number; name: string };

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
type A = MyReadonly<Person>; // {readonly id: number, readonly name: string}

type MyPartial<T> = {
  [K in keyof T]?: T[K];
};
type B = MyPartial<Person>; // {id?: number, name?: string}

type Person1 = { id?: number; name?: string };
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};
type C = MyRequired<Person1>; // {id: number, name: string}

type MyRecord<K extends string | number | symbol, V> = {
  [k in K]: V;
};
type D = MyRecord<string, number>; // {[k: string]: number}

type MyExclude<A, B> = A extends B ? never : A;
type E = MyExclude<1 | 2 | 3, 1 | 2>;  // 3
//代入法 推导过程 前边分配后边不分配（分配定律）
// type E1 = (1 | 2 | 3) extends (1 | 2) ? never : (1 | 2 | 3)
type E2 =   (1  extends 1 | 2  ? never : 1)
          | (2  extends 1 | 2  ? never : 2)
          | (3  extends 1 | 2  ? never : 3)  // 3
type E3 = never | never | 3

type MyExtract<A, B> = A extends B ? A : never;
type F = MyExtract<1 | 2 | 3, 1 | 2> // 1 | 2

type MyOmit<T, Key> = {
  [K in keyof T as (K extends Key ? never : K)] : T[K]
}
type G = MyOmit<Person, 'name'> // {id: number}


type MyPick1<T, Key> = {
  [K in keyof T as (K extends Key ? K : never)] : T[K]
}
type MyPick2<T, Key extends keyof T> = {
  [K in Key] : T[K]
}
type H1 = MyPick1<Person, 'name'> // {name: string}
type H2 = MyPick2<Person, 'name'> // {name: string}

type Person2 = {
  readonly name: string
  readonly id: number
}
type MyMutable<T> = {
  -readonly [K in keyof T]: T[K]
}
type I = MyMutable<Person2> // {name: string, id: number}


```
