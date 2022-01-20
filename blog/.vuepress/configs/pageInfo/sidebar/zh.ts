import type { SidebarConfig } from "vuepress-theme-gungnir";

export const zh: SidebarConfig = {
  '/docs/play/': [
    {
      text: '捣鼓分享',
      children: [
        "/docs/play/mac.md",
        "/docs/play/vscode.md",
        "/docs/play/chrome.md",
      ],
    },
    {
      text: '捣鼓文档',
      children: [
        "/docs/play/terminal-plugin-qb.md",
        "/docs/play/vuepress-plugin-clipboard.md",
      ],
    }
  ],
  '/docs/fontend/': [
    {
      text: 'Fontend',
      children: [
        '/docs/fontend/README.md',
      ],
    },
    {
      text: '前端工程化',
      children: [
        '/docs/fontend/husky.md',
      ],
    }
  ],
  '/docs/shell/': [
    {
      text: 'Shell 点滴',
      children: [
        '/docs/shell/README.md',
      ],
    }
  ],
};
