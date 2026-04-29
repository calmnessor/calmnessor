import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/calmnessor/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "可可西的博客",
      description: "记录学习与生活",
    },
  },

  theme,
});
