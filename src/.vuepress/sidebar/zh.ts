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
    {
      text: "Java框架",
      icon: "note",
      prefix: "/",
      children: [
        {
          text: "Spring",
          icon: "note",
          prefix: "spring",
          children: "structure",
        },
        {
          text: "SpringMVC",
          icon: "note",
          prefix: "springmvc",
          children: "structure",
        }
      ]
    },
    
    

    // "slides",
  ],

});
