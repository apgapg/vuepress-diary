const { description } = require("../../package");

module.exports = {
  // base: "/vuepress-diary/",
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
    ["meta", { name: "google-site-verification", content: "KMvqVAD_cV9Q9gOpJjkQf8RUsCMqBVPpgD2-wYJaC8s" }],
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
        text: "My Writings",
        link: "/intro.html",
      },
      {
        text: "About Me",
        link: "https://apgapg.github.io/",
      },
    ],
    sidebar: {
      "/": [
        {
          title: "DIY Blogs",
          collapsable: false,
          children: [
            "/blogs/diy-blogs/speed-o-meter",
            "/blogs/diy-blogs/replacing-car-door-gun",
          ],
        },
       
        {
          title: "Short Stories & Poems",
          collapsable: false,
          children: [
            "/stories/train-ka-safar",
            "/stories/zindagi-kuch-aisi-bhi",
            "/stories/aaj-ki-duniya",
            "/stories/expectation",
            "/stories/chalo-chat-par-chale"
          ],
        },
        {
          title: "Hindi Shayaris",
          collapsable: false,
          children: [
            "/hindi-shayari/aakhein-aur-sharab",
            ["https://www.ayushpgupta.com/my_hindi_shayari/","My Shayari Website"]
          ],
        },
        {
          title: "My Thoughts",
          collapsable: false,
          children: ["/thoughts/astrophile"],
        },
        {
          title: "My Paintings",
          collapsable: false,
          children: [
            "/paintings/dream-bike",
            "/paintings/kid-yawning",
          ],
        },
         {
          title: "Tech Blogs",
          collapsable: false,
          children: [
            "/blogs/tech-blogs/connect-asana-and-github",
            "/blogs/tech-blogs/migrate-iit-jee-notes-to-vuepress",
            "/blogs/tech-blogs/introduction-to-microservices",
          ],
        },
      ],
      "/projects/":[
        {
          title: "Dev Projects",
          collapsable: false,
          children: [
            "/projects/dev-projects/my-hindi-shayari",
            "/projects/dev-projects/connect-it",
          ],
        }
      ]
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
        hostname: "https://diary.ayushpgupta.com/",
      },
    ],
    ['seo', { /* options */ }]
  ],
};
