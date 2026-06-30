# Vitepress

> 2026-06-27

## Vitepress是什么？

VitePress 是 Vue 团队出品的[静态站点生成器](https://vitepress.dev/zh/guide/what-is-vitepress)(SSG)，基于 Vite + Vue + [Markdown]()，专为文档场景设计。

## 部署

1. 前置

- Node.js 20 及以上版本。
- 命令行安装。

```bash
npm add -D vitepress@next
```

2. 安装向导

```bash
┌  Welcome to VitePress!
│
│   // VitePress 的 .vitepress/config.js 放在哪。
◇  Where should VitePress initialize the config?
│  ./
│
│   // .md 文件从哪里找。和上一条通常一致。
◇  Where should VitePress look for your markdown files?
│  ./
│
│   // 浏览器标签页显示的名字，也出现在导航栏左侧。
◇  Site title:
│  My Awesome Project
│
│   // 搜索引擎显示的简介文字，不影响页面内容。
◇  Site description:
│  A VitePress Site
│
│   // 主题选择。
◇  Theme:
│  Default Theme
│
│   // 配置文件用 .ts 还是 .js。
◇  Use TypeScript for config and theme files?
│  No
│
│   //  自动写入启动命令到 package.json。
◇  Add VitePress npm scripts to package.json?
│  Yes
│
│   // 命令要不要带前缀。
◇  Add a prefix for VitePress npm scripts?
│  No
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run npm run dev and start writing.
```

3. 运行

```bash
npm run dev
```

## 自定义样式

```text
//最小运行结构
  project/
  ├── .vitepress/
  │   └── config.js          ← 站点配置（必须）
  ├── index.md               ← 首页（必须）
  └── package.json           ← 依赖 + 启动脚本
```

### 页面独立侧边栏

**给每个页面定义单独的侧边栏**。在config.mjs文件里修改sidebar为对象，其中key 是路径前缀，value 是该路径专属的侧边栏配置。

```js
sidebar: {
    // /guide/ 路径下的页面显示这个侧边栏
    '/guide/': [     // [!code ++] 
        {
            text: '指南',   // 小标题
            items: [
                { text: '快速开始', link: '/guide/getting-started' },
                { text: '路由', link: '/guide/routing' },
                { text: 'Markdown 扩展', link: '/guide/markdown' },
            ]
        }
    ]
}
```

### 侧边栏标题折叠和跳转

**给侧边栏的标题添加折叠功能，跳转功能**。在config.mjs文件里给sidebar添加link和collapsed参数即可。

```js
sidebar: [
    {
        text: 'Examples',
        link: '/markdown-examples/', // 标题跳转     // [!code ++] 
        collapsed: true,  // 默认折叠    // [!code ++] 
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
    }    
]
```

### 侧边栏子标题折叠

**给侧边栏小标题下的子标题添加折叠功能**。在config.mjs文件里给sidebar-对象-items里的元素，再添加items数组，并添加collapsed参数。

```js
sidebar: [
    {
        text: 'Examples',
        items: [
          {
            text: 'Markdown Examples',
            link: '/markdown-examples',
            collapsed: true,     // [!code ++] 
            items: [     // [!code ++] 
                { text: 'Markdown Examples', link: '/markdown-examples' },   // [!code ++] 
                { text: 'Runtime API Examples', link: '/api-examples' }  // [!code ++] 
            ]    // [!code ++] 
          }
        ]
    }    
]
```

### 页面目录子标题显示

**让页面目录显示二级标题以下的标题**。在config.mjs文件里给themeConfig加上outline的参数。

```js
themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '知识库', link: '/notes/languages/' },
      { text: '项目', link: '/projects/' }
    ],

    outline: {   // [!code ++] 
        level: [2, 3],    // ← 显示 h2 + h3，h3 会缩进在 h2 下面     // [!code ++] 
        label: '本页目录',   // [!code ++] 
    }    // [!code ++] 
}
```

## 语法规则

### 路径

路径结尾有 / 代表文件夹，结尾没有 / 代表文件。

- 文件路径 = URL 路径。
```
index.md          →  /
guide/index.md    →  /guide/
guide/hello.md    →  /guide/hello
```

- VitePress 构建时 .md 会变成 .html，写 .md 进去链接会断掉。

```js
[点击这里](/notes/languages/javascript/)     ✅
[点击这里](/notes/languages/javascript)      ✅ 也认
[点击这里](/notes/languages/javascript.md)   ❌ 别写
```

- 目录首页 = index.md → 路径到目录名就够了

```text
路径写法                         实际指向
/guide/              →          /guide/index.md
/notes/languages/    →          /notes/languages/index.md
```

### 代码块标注

VitePress 使用 Shiki 作为语法高亮引擎，支持丰富的代码块标注。不同语言的标注写法可能有略微不同，不影响使用。

1. 基础：语言标识

```
    ```js   //声明该代码块使用js语法高亮
    ```
```

2. 高亮指定行 {行号}

```
    ```js{2,4}           // 高亮第 2 行和第 4 行
    function foo() {
        console.log('hi')    // ← 高亮
        return 1
        console.log('bye')   // ← 高亮
    }
    ```

    也支持行范围：
    ```js{2-4}          // 高亮第 2 到 4 行
    ```js{1,3-5,7}     // 混合写法
```

3. 显示行号 :line-numbers

```
    ```js:line-numbers
    const a = 1
    const b = 2
    const c = 3
    ```
```

4. 代码组（多 Tab 切换）

```
    ::: code-group
    ```js [foo.js]
    const a = 1
    ```

    ```ts [bar.ts]
    const a: number = 1
    ```

    ```py [baz.py]
    a = 1
    ```
    :::

    会渲染成可切换的标签页。
```

5. 聚焦行（其余变暗）// [!code focus]

```
    ```js
    const a = 1          // [!code focus]
    const b = 2
    const c = 3          // [!code focus]
    ```

    a 和 c 行高亮，其余行变暗。
```

6. Diff 着色 // [!code ++] / // [!code --]

```
    ```js
    const a = 1
    const b = 2          // [!code --]    ← 红色，表示删除
    const b = 42         // [!code ++]    ← 绿色，表示新增
    const c = 3
    ```
```

7. 警告 / 错误标注 // [!code warning] / // [!code error]

```
    ```js
    const x = 1          // [!code warning]    ← 黄色背景
    const y = null       // [!code error]      ← 红色背景
    ```
```
