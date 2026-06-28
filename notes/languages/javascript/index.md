# Javascript (ES6)

> 2026-6-27

## Javascript是什么？

JavaScript 是互联网上最流行的脚本语言，这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。

## Javascript和ES6的关系

ES6，全称 [ECMAScript 6.0](https://www.dengruicode.com/classes?uuid=04682448c47b45e980e57d476918d740) ，是 JavaScript 的下一个版本标准，2015.06 发版。

## 基础语法

### 变量和常量

- **let**：声明一个变量，可重新赋值，只在 let 命令所在的代码块内有效。

```js
let name = "wuliu"
```

- **const**：声明一个只读的常量，一旦声明，常量的值就不能改变。

```js
const name = "wuliu"
```

### 数据类型

```text
  JS 类型
  ├── 原始类型（不是对象）
  │   ├── string
  │   ├── number
  │   ├── boolean
  │   ├── null
  │   ├── undefined
  │   ├── symbol
  │   └── bigint
  │
  └── 对象类型（都是对象）
      ├── Object       ← 普通对象 {}
      ├── Array        ← 数组 []
      ├── Function     ← 函数
      ├── Date
      ├── RegExp       ← 正则 /abc/
      ├── Map / Set
      ├── Promise
      └── ...一切 typeof 返回 "object" 或 "function" 的
```

- **字符串 (string)**：字符串类型用于存储字符序列。
- **数字 (number)**：用于存储数字, 可以表示整数、浮点数。
- **布尔类型 (boolean)**：布尔类型只能取两个值,true(真) 和 false(假)。
- **对象 (object)**：对象是一种复合的数据类型, 可以通过键值对的方式存储多个值。
- **Map**：Map 是一种特殊的数据结构,用于存储键值对的有序集合。

```js
let girl = new Map([
    ["name", "Luna"],
    ["age", 20],
    ["weight", 50.5]
])
```

- **Set**：Set 是一种特殊的数据结构, 用于存储无序且唯一的值的集合。

```js
let number = new Set([1, 2, 3, 4, 5]) //定义了一个包含5个"不重复"的整数的集合
```

- **数组 (array)**：数组是一种有序集合, 可以包含不同类型的元素，并且数组的长度是可变的。
- **函数 (function)**：函数是一段可重复执行的代码块，可以接收输入参数并返回一个值或执行某些操作。

```js
function add(a, b) {
   return a + b
}
```
- **类 (class)**：类是一种蓝图或模板，用于创建具有相同属性和方法的对象。

```js
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    info() {
        console.log("姓名", this.name, "年龄", this.age)
    }
}
const person = new Person("瑶瑶", 20)
```

### 对象

只要类型属于对象，就可以使用对象的所有方法 (如挂载静态值和方法)，如函数调用、挂值、挂方法互不影响。

```js
function add(a, b){ //定义一个add函数
    return a + b
}

add.value = 1   // 给函数挂静态属性
console.log(add.value)

add.method = function (){   // 给函数挂方法
    console.log('方法')
}
add.method()
```