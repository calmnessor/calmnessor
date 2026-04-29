import { hopeTheme } from "vuepress-theme-hope";

import { navbar } from "./navbar/index.js";
import { sidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://calmnessor.github.io",

  author: {
    name: "可可西",
  },

  logo: "/logo.svg",

  repo: "calmnessor/calmnessor",

  docsDir: "src",

  blog: {
    medias: {
      GitHub: "https://github.com/calmnessor",
      Email: "mailto:386327447@qq.com",
    },
  },

  locales: {
    "/": {
      navbar,
      sidebar,

      footer: "可可西的博客",

      displayFooter: true,

      blog: {
        description: "记录学习与生活",
        intro: "/intro.html",
      },
    },
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    spoiler: true,
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    blog: true,

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
