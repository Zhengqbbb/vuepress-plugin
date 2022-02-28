import type { NavbarConfig } from "vuepress-theme-gungnir";

export const zh: NavbarConfig = [
  {
    text: "首页",
		icon: "fa-fort-awesome",
    link: "/"
  },
  {
    text: "标签",
		icon: "fa-tag",
    link: "/tags/",
  },
  {
		text: "文档",
		icon: "ri-book-2-fill",
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
