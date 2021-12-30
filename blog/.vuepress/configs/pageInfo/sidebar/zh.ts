import type { SidebarConfig } from "vuepress-theme-gungnir";

export const zh: SidebarConfig = {
  '/docs/play/': [
    {
      text: '捣鼓分享',
      children: [
        "/docs/play/README.md",
        "/docs/play/mac.md",
        "/docs/play/vscode.md",
        "/docs/play/chrome.md",
      ],
    }
  ],
  '/docs/fontend/': [
    {
      text: '前端日常',
      children: [
        '/docs/fontend/README.md',
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
