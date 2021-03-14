const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Welcome to Ayush World',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'About Me',
        link: 'https://apgapg.github.io/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Hindi Stories',
          collapsable: false,
          children: [
            '/guide/stories/train-ka-safar',
            '/guide/stories/zindagi-kuch-aisi-bhi',
            '/guide/stories/aaj-ki-duniya',
          ]
        },
        {
          title: 'Daily Journal',
          collapsable: false,
          children: [
            '/guide/daily-journel/march-2021',
          ]
        },
        {
          title: 'My Paintings',
          collapsable: false,
          children: [
            '/guide/paintings/dream-bike',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
