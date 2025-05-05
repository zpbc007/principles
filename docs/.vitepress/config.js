export default {
  title: 'Principles',
  description: 'A VitePress Site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
}
