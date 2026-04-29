import { sidebar as defineSidebar } from "vuepress-theme-hope";

export const sidebar = defineSidebar({
  "/": [
    "",
    {
      text: "每日反思",
      icon: "calendar-check",
      prefix: "posts/daily/",
      children: "structure",
    },
    "intro",
  ],
});
