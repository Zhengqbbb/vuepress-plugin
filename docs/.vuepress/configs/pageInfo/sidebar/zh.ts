import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '首页',
      children: [
        'README.md',
      ],
    },
  ],
  '/play/': [
    {
      text: '捣鼓分享',
      children: [
        "/play/README.md",
        "/play/mac.md",
        "/play/vscode.md",
        "/play/chrome.md",
      ],
    }
  ],
  '/fontend/': [
    {
      text: '前端日常',
      children: [
        '/fontend/README.md',
      ],
    }
  ],
  '/shell/': [
    {
      text: 'Shell 点滴',
      children: [
        '/shell/README.md',
      ],
    }
  ],
}
