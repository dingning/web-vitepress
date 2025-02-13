import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "COMPANY NAME",
  description: "COMPANY DESCRIPTION",
  lang: 'ZH-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'product', link: '/product/p1' },
      { text: 'data', link: '/data/p1' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
      '/product/': [
        {
          text: 'Product Section',
          items: [
            { text: 'Index', link: '/product/p1' },
            { text: 'One', link: '/product/p1' },
            { text: 'Two', link: '/product/p3' }
          ]
        }
      ],
      '/data/': [
        {
          text: 'data Section',
          items: [
            { text: 'Index', link: '/data/d1' },
            { text: 'One', link: '/data/d1' },
            { text: 'Two', link: '/data/d3' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'gitee', link: 'https://gitee.com/' },
      { icon: 'taobao', link: 'https://gitee.com/' },
      { icon: 'bilibili', link: 'https://gitee.com/' },
    ],

    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present 梦和远方",
    },
  }
})
