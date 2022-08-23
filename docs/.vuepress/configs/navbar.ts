import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from './meta'

export const navbar: NavbarConfig = [
  {
    text: 'clipboard',
    link: '/clipboard/',
  },
  {
    text: 'china-search-console',
    link: '/china-search-console/',
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'Changelog',
        link: '/changelog/',
      },
    ],
  },
]
