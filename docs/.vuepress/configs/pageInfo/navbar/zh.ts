import type { NavbarConfig } from "@vuepress/theme-default";

export const zh: NavbarConfig = [
	{
		text: "Home",
		link: "/",
	},
	{
		text: "List",
		link: "/list.md",
	},
	{
		text: "Nav",
		children: [
			{
				text: "打怪升级",
				children: [
					{
						text: "Fontend",
						link: "/fontend/README.md"
					},
					{
						text: "Shell",
						link: "/shell/README.md"
					},
				]
			},
			{
				text: "打野休息",
				children: [
					{
						text: "软件插件鼓捣分享",
						link: "/play/README.md"
					}
				]
			}

		],
	},
];
