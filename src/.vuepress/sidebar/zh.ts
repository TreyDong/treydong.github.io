import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    // "slides",
  ],
  "/java/": [
    {
      text: "Java基础",
      icon: "note",
      children:[
        ""
      ]
    },
    {
      text: "Spring框架",
      icon: "note",
      children: [
        "spring/Spring",
        "spring/SpringBoot",
        "spring/SpringMVC",
      ]
    },

    // "slides",
  ],

});
