export default {
  title: '方法论',
  description: '大霸哥收集的各种方法论',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '时间管理', link: '/time_management/' },
    ],
    sidebar: {
      '/time_management/': [
        {
          text: '时间管理',
          items: [
            { text: '四象限', link: '/time_management/four_quadrant/' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zpbc007/principles-valut' }
    ]
  }
}
