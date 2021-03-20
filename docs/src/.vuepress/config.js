const { description } = require("../../package");

module.exports = {
  base: "/vuepress-diary/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Welcome to Ayush World",
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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/apgapg/vuepress-diary",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    smoothScroll: true,
    docsBranch: "main",
    docsDir: "docs/src",
    lastUpdated: "Last Updated", // string | boolean
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "About Me",
        link: "https://apgapg.github.io/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Hindi Stories",
          collapsable: false,
          children: [
            "/guide/stories/train-ka-safar",
            "/guide/stories/zindagi-kuch-aisi-bhi",
            "/guide/stories/aaj-ki-duniya",
          ],
        },
        {
          title: "Daily Blogs",
          collapsable: false,
          children: [
            "/guide/daily-blogs/connect-asana-and-github",
            "/guide/daily-blogs/migrate-iit-jee-notes-to-vuepress",
          ],
        },
        {
          title: "My Thoughts",
          collapsable: false,
          children: ["/guide/thoughts/astrophile"],
        },
        {
          title: "My Paintings",
          collapsable: false,
          children: ["/guide/paintings/dream-bike"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "sitemap",
      {
        hostname: "https://apgapg.github.io/vuepress-diary/",
      },
    ],
  ],
};
