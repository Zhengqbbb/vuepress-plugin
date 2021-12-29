import type { SidebarConfig } from "vuepress-theme-gungnir";

export const zh: SidebarConfig = {
  '/zh/docs/play/': [
    {
      text: '捣鼓分享',
      children: [
        "/zh/docs/play/README.md",
        "/zh/docs/play/mac.md",
        "/zh/docs/play/vscode.md",
        "/zh/docs/play/chrome.md",
      ],
    }
  ],
  '/zh/docs/fontend/': [
    {
      text: '前端日常',
      children: [
        '/zh/docs/fontend/README.md',
      ],
    }
  ],
  '/zh/docs/shell/': [
    {
      text: 'Shell 点滴',
      children: [
        '/zh/docs/shell/README.md',
      ],
    }
  ],
};
