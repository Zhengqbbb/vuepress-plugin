import type { NavbarConfig } from "vuepress-theme-gungnir";

export const zh: NavbarConfig = [
  {
    text: "首页",
		icon: "fort-awesome",
    link: "/"
  },
  {
    text: "标签",
		icon: "tag",
    link: "/tags/",
		iconScale: 0.95
  },
  {
		text: "文档",
		icon: "book",
    iconScale: 1.1,
		children: [
			{
				text: "打怪升级",
				children: [
					{
						text: "Fontend",
						link: "/docs/fontend/README.md"
					},
					{
						text: "Shell",
						link: "/docs/shell/README.md"
					},
				]
			},
			{
				text: "打野休息",
				children: [
					{
						text: "软件插件鼓捣分享",
						link: "/docs/play/README.md"
					}
				]
			}
		],
	},
];
