import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "算法",  link: "/guide/" },
  { text: "Java", link: "/java/" },
  { text: "Python",  link: "/python/" },
  { text: "数据库",  link: "/database/" },
  { text: "中间件",  link: "/middleware/" },
  { text: "测试开发",  link: "/tester/" },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/",},
    { text: "OnJava8",  link: "https://treydong.github.io/OnJava8/" },
]);
