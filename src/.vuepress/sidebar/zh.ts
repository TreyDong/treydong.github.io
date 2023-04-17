import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
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
    }],
"/tester/": "structure",
"/middleware/": "structure",
"/database/": "structure",
"/python/": "structure",
  
 

});
