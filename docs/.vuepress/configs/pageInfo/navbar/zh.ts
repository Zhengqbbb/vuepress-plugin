import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: 'hello',
    link: '/',
  },
  {
    text: 'world',
    children: [
      {
        text: 'world template',
        children: [
          '/helloword.md',
        ],
      },
      {
        text: 'hello world',
        children: [
          '/helloword/README.md'
        ],
      },
    ],
  }
]
