import type { HeadConfig, AppOptions } from 'vuepress'
import { path } from '@vuepress/utils';
import * as navbar from './navbar'
import * as sidebar from './sidebar'


export const lang = 'zh-CN'

export const base = `/`

export const title = `Qbenben`

export const description = 'mark your vuepress-next-template'

export const headConfig: HeadConfig[] = [
  [ 'meta', { name: 'application-name', content: 'Qbenben' } ],
  [ 'meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' } ],
  [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ],
  [ 'meta', { name: 'msapplication-TileColor', content: '#f5a214' } ],
  [ 'meta', { name: 'theme-color', content: '#f5a214' } ],
  [ 'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' } ],

  [ 'link', { rel: 'icon', href: `/images/favicon.ico` } ],
  [ 'link', { rel: 'manifest', href: `/manifest.webmanifest` } ],
  [ 'link', { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "152x152", href: `/images/icons/android-chrome-192x192` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "180x180", href: `/images/icons/android-chrome-192x192` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "167x167", href: `/images/icons/android-chrome-192x192` } ],
]

export const themeConfig: AppOptions["themeConfig"] = {
  navbar: navbar.zh,
  sidebar: sidebar.zh,
  sidebarDepth: 1,
  repo: 'https://github.com/Zhengqbbb/',
  logo: '/images/logo.png',
  lastUpdatedText: '更新时间',
  docsRepo: 'https://github.com/Zhengqbbb/vuepress-next-template',
  docsBranch: 'blog',
  docsDir: 'docs',
  editLinkPattern: ':repo/',
}

