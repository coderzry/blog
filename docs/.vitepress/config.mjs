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
          { text: 'Forgotten Features', link: '/vue-tips/forgotten-features/' },
          { text: 'Slots and Reusability', link: '/vue-tips/slots-and-reusability/' },
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
      ]
    },

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coderzry' }
    ]
  }
})
