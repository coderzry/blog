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
      { 
        text: '学习记录',
        items: [
          { text: 'vue', link: '/study/vue/' },
          { text: 'react', link: '/study/react/' },
          { text: 'node', link: '/study/node/' },
        ]
      },
      {
        text: '年度总结',
        items: [
          { text: '2023年', link: '/summary/2023年度总结' }
        ]
      },
      {
        text: '100个vue小技巧',
        items: [
          { text: '被遗忘的功能', link: '/vue-tips/forgotten-features/' },
          { text: '插槽和可重用性', link: '/vue-tips/slots-and-reusability/' },
          { text: 'Logic Lore', link: '/vue-tips/logic-lore/' },
          { text: 'CSS Tips', link: '/vue-tips/css-tips/' },
          { text: 'Powerful Patterns', link: '/vue-tips/powerful-patterns/' },
          { text: 'Template Tidbits', link: '/vue-tips/template-tidbits/' },
          { text: 'All the Others', link: '/vue-tips/all-the-others/' },
        ]
      }
    ],

    sidebar: {
      '/skill/': [
        {
          text: '技术记录',
          items: [
            { text: '内网开发提效指南', link: '/skill/内网开发提效指南' },
            { text: '富文本编辑器改造', link: '/skill/富文本编辑器改造' }
          ]
        }
      ],
      '/summary/': [
        {
          text: '年度总结',
          items: [
            { text: '2023年度总结', link: '/summary/2023年度总结' }
          ]
        }
      ],
      '/vue-tips/': [
        {
          text: '100个vue小技巧',
          items: [
            { text: '被遗忘的功能', link: '/vue-tips/forgotten-features/' },
            { text: '插槽和可重用性', link: '/vue-tips/slots-and-reusability/' },
            { text: 'Logic Lore', link: '/vue-tips/logic-lore/' },
            { text: 'CSS Tips', link: '/vue-tips/css-tips/' },
            { text: 'Powerful Patterns', link: '/vue-tips/powerful-patterns/' },
            { text: 'Template Tidbits', link: '/vue-tips/template-tidbits/' },
            { text: 'All the Others', link: '/vue-tips/all-the-others/' },
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coderzry' }
    ]
  }
})
