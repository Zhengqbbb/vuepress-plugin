import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: 'hello',
      children: [
        '/helloword.md',
      ],
    },
  ],
  '/helloword/': [
    {
      text: 'Hello',
      children: [
        '/helloword/README.md',
        '/helloword/helloword.md',
      ],
    }
  ],
}
