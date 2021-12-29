import type { NavbarConfig } from "vuepress-theme-gungnir";
import { version } from "../meta";

export const en: NavbarConfig = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "Tags",
    link: "/tags/"
  },
  {
    text: "Docs",
    link: "/docs/"
  },
  {
    text: `v${version}`,
    children: [
      {
        text: "GitHub",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir"
      },
      {
        text: "Changelog",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/CHANGELOG.md"
      },
      {
        text: "v2.x",
        link: "/docs/"
      },
      {
        text: "v0.x",
        link: "https://vuepress-theme-gungnir.vercel.app"
      }
    ]
  }
];
