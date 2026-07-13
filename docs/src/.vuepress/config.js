import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { seoPlugin } from "@vuepress/plugin-seo";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";

export default defineUserConfig({
  bundler: viteBundler(),

  title: "Welcome to Ayush World",
  description: "Official Vuepress diary of Ayush P Gupta",

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { name: "google-site-verification", content: "KMvqVAD_cV9Q9gOpJjkQf8RUsCMqBVPpgD2-wYJaC8s" }],
  ],

  theme: defaultTheme({
    colorMode: "light",
    colorModeSwitch: false,
    repo: "https://github.com/apgapg/vuepress-diary",
    repoLabel: "Contribute!",
    editLink: true,
    editLinkText: "Help us improve this page!",
    docsBranch: "main",
    docsDir: "docs/src",
    lastUpdated: true,
    navbar: [
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
          text: "DIY Blogs",
          collapsible: false,
          children: [
            "/blogs/diy-blogs/speed-o-meter",
            "/blogs/diy-blogs/replacing-car-door-gun",
          ],
        },
        {
          text: "Short Stories & Poems",
          collapsible: false,
          children: [
            "/stories/train-ka-safar",
            "/stories/zindagi-kuch-aisi-bhi",
            "/stories/aaj-ki-duniya",
            "/stories/expectation",
            "/stories/chalo-chat-par-chale",
            "/stories/lekhak",
            "/stories/bada-mangal",
            "/stories/behti-nadi",
            "/stories/rx100",
            "/stories/saath",
            "/stories/bageecha",
            "/stories/college",
            "/stories/khudi",
            "/stories/neend",
            "/stories/taala-chabi",
            "/stories/pocket"
          ],
        },
        {
          text: "Hindi Shayaris",
          collapsible: false,
          children: [
            "/hindi-shayari/aakhein-aur-sharab",
            {
              text: "My Shayari Website",
              link: "https://www.ayushpgupta.com/my_hindi_shayari/",
            },
          ],
        },
        {
          text: "My Thoughts",
          collapsible: false,
          children: ["/thoughts/astrophile"],
        },
        {
          text: "My Paintings",
          collapsible: false,
          children: [
            "/paintings/dream-bike",
            "/paintings/kid-yawning",
          ],
        },
        {
          text: "Tech Blogs",
          collapsible: false,
          children: [
            "/blogs/tech-blogs/connect-asana-and-github",
            "/blogs/tech-blogs/migrate-iit-jee-notes-to-vuepress",
            "/blogs/tech-blogs/introduction-to-microservices",
          ],
        },
      ],
      "/projects/": [
        {
          text: "Dev Projects",
          collapsible: false,
          children: [
            "/projects/dev-projects/my-hindi-shayari",
            "/projects/dev-projects/connect-it",
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({
      // options
    }),
    seoPlugin({
      hostname: "https://diary.ayushpgupta.com",
    }),
    sitemapPlugin({
      hostname: "https://diary.ayushpgupta.com",
    }),
  ],
});
