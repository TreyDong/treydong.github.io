import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
 
    // "slides",
  ],
  "/java/": [
    {
      text: "Java基础",
      icon: "note",
      prefix: "/",
      children: "structure",
    },
    // "slides",
  ],

});
