import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "coderzry的小站",
  description: "A VitePress Site",
  // head解决无法加载在线图片
  head: [
    [
      "meta",
      {
        name:"referrer",
        content:"no-referrer"
      }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术记录', link: '/skill/内网开发提效指南' },
      { text: '年度总结', link: '/summary/2023年度总结' }
    ],

    sidebar: [
      {
        text: '技术记录',
        items: [
          { text: '内网开发提效指南', link: '/skill/内网开发提效指南' },
          { text: '富文本编辑器改造', link: '/skill/富文本编辑器改造' }
        ]
      },
      {
        text: '年度总结',
        items: [
          { text: '年度总结', link: '/summary/2023年度总结' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
