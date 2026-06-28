import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人数据库",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '知识库', link: '/notes/languages/' },
      { text: '项目', link: '/projects/' }
    ],

    sidebar: {
      '/notes/': [
        {
          text: '编程/语言',
          link: '/notes/languages/', // 标题跳转
          collapsed: true,  // 默认折叠
          items: [
            {
              text: 'Javascript (ES6)',
              link: '/notes/languages/javascript/',
              collapsed: true,
              items: [
                { text: 'Shiki库', link: '/notes/languages/javascript/shiki' },
              ]                
            },
            {
              text: 'Python',
              link: '/notes/languages/python/',
              collapsed: true,
              items: [
                { text: 'pandas库', link: '/notes/languages/python/pandas' },
              ]             
            },
            {
              text: 'Markdown',
              link: '/notes/languages/markdown/' 
            }
          ]
        },
        {
          text: '工具框架',
          link: '/notes/tools/',
          collapsed: true,
          items: [
            { text: 'Vitepress', link: '/notes/tools/vitepress/' }
          ]
        }
      ],

      '/projects/': [
        {
          text: '项目',
          items: [
            { text: '001', link: '' },
            { text: '002', link: '' }
          ]
        }
      ]
    },

    // 页面导航
    outline: {
      level: [2, 3],    // ← 显示 h2 + h3，h3 会缩进在 h2 下面
      label: '本页目录',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
