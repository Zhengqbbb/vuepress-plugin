import type { NavbarConfig } from "vuepress-theme-gungnir";

export const zh: NavbarConfig = [
  {
    text: "首页",
    link: "/"
  },
  {
    text: "标签",
    link: "/tags/"
  },
  {
		text: "文档",
		children: [
			{
				text: "打怪升级",
				children: [
					{
						text: "Fontend",
						link: "/zh/docs/fontend/README.md"
					},
					{
						text: "Shell",
						link: "/zh/docs/shell/README.md"
					},
				]
			},
			{
				text: "打野休息",
				children: [
					{
						text: "软件插件鼓捣分享",
						link: "/zh/docs/play/README.md"
					}
				]
			}
		],
	},
];
