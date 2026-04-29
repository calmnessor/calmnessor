import { navbar as defineNavbar } from "vuepress-theme-hope";

export const navbar = defineNavbar([
  "/",
  {
    text: "每日反思",
    icon: "calendar-check",
    link: "/posts/daily/",
  },
  "/intro",
]);
