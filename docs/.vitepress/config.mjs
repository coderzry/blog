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
      { text: '开发提效', link: '/内网开发提效指南' }
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

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
