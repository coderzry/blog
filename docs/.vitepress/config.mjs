import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/内网开发提效指南' }
    ],

    sidebar: [
      {
        text: '案例',
        items: [
          { text: '内网开发提效指南', link: '/内网开发提效指南' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
