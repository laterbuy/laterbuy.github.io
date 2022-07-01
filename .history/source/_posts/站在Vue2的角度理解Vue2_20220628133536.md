---
title: 站在Vue2的角度理解Vue2
description: 站在Vue2的角度理解Vue2
date: 2022/05/17
updated: 2022/05/17
tags: 
  - Vue
categories:
  - Vue
---

### 前言

Vue 最独特的特性之一，是其非侵入性的响应式系统。数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新。

### 核心原理

Vue2的核心原理相对简单些，主要通过`Object.defineProperty` 对数据进行拦截，一个简单的数据拦截例子如下，会拦截Person对象上的name属性进行处理。

```jsx
let Person = {}
let temp = null
Object.defineProperty(Person, 'name', {
  get: function () {
    return temp
  },
  set: function (val) {
    temp = val
  }
})
```

![Untitled](%E7%AB%99%E5%9C%A8Vue2%E7%9A%84%E8%A7%92%E5%BA%A6%E7%90%86%E8%A7%A3Vue2%20913d53e2b7ad411384eb1e1cf88b5778/Untitled.png)

### 自定义实现代码

自定义vuejs部分

<details><summary>点击展开</summary>
    
```JavaScript
class Vue {
  constructor(obj_instance) {
    this.$data = obj_instance.data;
    Observer(this.$data);
    Complie(obj_instance.el, this);
  }
}

// 递归数据劫持
function Observer(data_instance) {
  if (!data_instance || typeof data_instance !== "object") return;
  const dependency = new Dependency();
  Object.keys(data_instance).forEach((key) => {
    // 使用defineProperty后属性里的值会被修改 需要提前保存属性的值
    let value = data_instance[key];
    Observer(value);
    Object.defineProperty(data_instance, key, {
      enumerable: true,
      configurable: true,
      // 收集数据依赖
      get() {
        Dependency.temp && dependency.addSub(Dependency.temp);
        return value;
      },
      // 触发视图更新
      set(newVal) {
        value = newVal;
        // 处理赋值是对象时的情况
        Observer(newVal);
        dependency.notify();
      },
    });
  });
}

//模板解析 —— 替换DOM内容 把vue实例上的数据解析到页面上
function Complie(element, vm) {
  console.log('compile')
  vm.$el = document.querySelector(element);
  const fragment = document.createDocumentFragment();
  let child;
  while ((child = vm.$el.firstChild)) {
    fragment.appendChild(child);
  }
  fragment_compile(fragment);
  function fragment_compile(node) {
    const pattern = /\{\{\s*(\S+)\s*\}\}/;  // {{}}
    if (node.nodeType === 3) {
      // 提前保存文本内容 否则文本在被替换一次后 后续的操作都会不生效
      const texts = node.nodeValue;
      const result_regex = pattern.exec(node.nodeValue);
      if (result_regex) {
        const arr = result_regex[1].split("."); // more.salary => ['more', 'salary']
        // 使用reduce归并获取属性对应的值 = vm.$data['more'] => vm.$data['more']['salary']
        const value = arr.reduce((total, current) => total[current], vm.$data);
        node.nodeValue = texts.replace(pattern, value);
        // 在节点值替换内容时 即模板解析的时候 添加订阅者
        // 在替换文档碎片内容时告诉订阅者如何更新 即告诉Watcher如何更新自己
        new Watcher(vm, result_regex[1], (newVal) => {
          node.nodeValue = texts.replace(pattern, newVal);
        });
      }
    }
    // 替换绑定了v-model属性的input节点的内容
    if (node.nodeType === 1 && node.nodeName === "INPUT") {
      const attr = Array.from(node.attributes);
      attr.forEach((item) => {
        if (item.nodeName === "v-model") {
          const value = item.nodeValue
            .split(".")
            .reduce((total, current) => total[current], vm.$data);
          node.value = value;
          new Watcher(vm, item.nodeValue, (newVal) => {
            node.value = newVal;
          });
          node.addEventListener("input", (e) => {
            // ['more', 'salary']
            const arr1 = item.nodeValue.split(".");
            // ['more']
            const arr2 = arr1.slice(0, arr1.length - 1);
            // vm.$data.more
            const final = arr2.reduce(
              (total, current) => total[current],
              vm.$data
            );
            // vm.$data.more['salary'] = e.target.value
            final[arr1[arr1.length - 1]] = e.target.value;
          });
        }
      });
    }
    node.childNodes.forEach((child) => fragment_compile(child));
  }
  vm.$el.appendChild(fragment);
}

//依赖 —— 实现发布-订阅模式 用于存放订阅者和通知订阅者更新
class Dependency {
  constructor() {
    this.subscribers = []; // 用于收集依赖data的订阅者信息
  }
  addSub(sub) {
    this.subscribers.push(sub);
  }
  notify() {
    this.subscribers.forEach((sub) => sub.update());
  }
}

// 订阅者
class Watcher {
  constructor(vm, key, callback) {
    this.vm = vm;
    this.key = key;
    this.callback = callback;
    //临时属性 —— 触发getter 收集数据依赖
    Dependency.temp = this;
    key.split(".").reduce((total, current) => total[current], vm.$data);
    // 防止订阅者多次加入到依赖实例数组里
    Dependency.temp = null;
  }
  update() {
    const value = this.key
      .split(".")
      .reduce((total, current) => total[current], this.vm.$data);
    this.callback(value);
  }
}
```
</details>  

相关html

- 点击展开
    
    ```jsx
    <!DOCTYPE html>
    <html lang="en">
    <body>
        <div id="app">
            <span>name {{name}}</span>
            <input type="text" v-model="name" />
            <span>desc {{more.desc}}</span>
            <input type="text" v-model="more.desc" />
        </div>
    </body>
    </html>
    
    <script src="./vue.js"></script>
    
    <script>
        const vm = new Vue({
            el: '#app',
            data: {
                name: 'test',
                more: {
                    desc: 1000
                }
            }
        })
        window.vm = vm
    </script>
    ```
    

### 参考

1. [Vue.js 数据双向绑定的原理及实现](https://www.bilibili.com/video/BV1934y1a7MN?spm_id_from=333.999.0.0)