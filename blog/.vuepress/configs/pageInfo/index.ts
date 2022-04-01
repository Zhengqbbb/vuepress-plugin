import type { HeadConfig, AppOptions } from 'vuepress'
import type { GungnirThemeOptions } from "vuepress-theme-gungnir";
import { i18n } from "vuepress-theme-gungnir";
import * as navbar from './navbar'
import * as sidebar from './sidebar'

const isProd = process.env.NODE_ENV === "production";

export const lang = 'zh-CN'

export const base = `/`

export const title = `Qbenben`

export const description = 'Qbenben blog. Record my life | 在代码世界里打怪升级的小靓仔'

export const headConfig: HeadConfig[] = [
  [ 'meta', { name: 'google-site-verification', content: 'bmaXCuUg4k9-nZLe3yIz1yQb0WO4_h8wHhkhBOl3Dec' } ],
  [ 'meta', { name: 'application-name', content: 'Qbenben' } ],
  [ 'meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' } ],
  [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ],
  [ 'meta', { name: 'msapplication-TileColor', content: '#f5a214' } ],
  [ "meta", { name: "twitter:title", content: "qbenben - blog" } ],
  [ "meta", { name: "twitter:description", content: "Qbenben blog. Record my life | 在代码世界里打怪升级的小靓仔" } ],
  [ "meta", { name: "twitter:creator", content: "@zhengqbbb" } ],
  [ "meta", { name: "twitter:site", content: "@zhengqbbb" } ],
  [ "meta", { name: "twitter:card", content: "summary" } ],
  [ "meta", { name: "twitter:image", content: "https://www.qbenben.com/images/logo.png" } ],
  [ "meta", { name: "twitter:image:alt", content: "blog-logo" } ],
  [ "meta", { name: "og:title", content: "qbenben - blog" } ],
  [ "meta", { name: "og:description", content: "Qbenben blog. Record my life | 在代码世界里打怪升级的小靓仔" } ],
  [ "meta", { name: "og:url", content: "https://www.qbenben.com/" } ],
  [ "meta", { name: "og:type", content: "article" } ],
  [ "meta", { name: "og:locale", content: "zh-CN" } ],
  [ "meta", { name: "og:image", content: "https://www.qbenben.com/images/logo.png" } ],
  [ 'meta', { name: 'theme-color', content: '#f5a214' } ],
  [ 'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' } ],

  [ 'link', { rel: 'icon', href: `/images/favicon.ico` } ],
  [ 'link', { rel: 'manifest', href: `/manifest.webmanifest` } ],
  [ 'link', { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "152x152", href: `/images/icons/android-chrome-192x192` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "180x180", href: `/images/icons/android-chrome-192x192` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "167x167", href: `/images/icons/android-chrome-192x192` } ],
]

export const themeConfig: Partial<GungnirThemeOptions> = {
  repo: 'https://github.com/Zhengqbbb/',
  docsDir: 'blog',
  docsBranch: 'blog',
  hitokoto: "https://v1.hitokoto.cn?c=d&c=i", // enable hitokoto (一言) or not?
  personalInfo: {
    name: "Qbenben",
    avatar: "/images/avatar.png",
    description: "🤯 > /dev/null",
    sns: {
      github: "Zhengqbbb",
      twitter: "zhengqbbb",
      instagram: {
        icon: "ri-instagram-line",
        iconScale: 1.1,
        link: "https://www.instagram.com/qbqiubin/"
      },
      discord: {
        icon: "si-discord",
        iconScale: 1.2,
        link: "https://discordapp.com/users/902369403818094593"
      },
      email: "zhengqbbb@gmail.com"
    }
  },
  homeHeaderImages: [
    {
      path: "https://tva2.sinaimg.cn/large/6ccee0e1gy1gxuxje4ampj21z4140agb.jpg",
      mask: "rgba(40, 57, 101, .2)"
    },
    {
      path: "https://tva3.sinaimg.cn/large/6ccee0e1gy1gxuxkqi0qyj217c0jwqd2.jpg",
      mask: "rgb(251, 170, 152, .2)"
    },
    {
      path: "https://tva3.sinaimg.cn/large/6ccee0e1gy1gxuxl4mzaij21hc0u0tfo.jpg",
      mask: "rgba(68, 74, 83, .2)"
    }
  ],
  themePlugins: {
    // only enable git plugin in production mode
    git: isProd,
    katex: true,
    mermaid: true,
    giscus: {
      repo: "Zhengqbbb/zhengqbbb.github.io",
      repoId: "MDEwOlJlcG9zaXRvcnkxODM4OTUyNTQ",
      category: "Announcements",
      categoryId: "DIC_kwDOCvYE1s4CAdr1"
    },
    mdPlus: {
      all: true
    },
    ga: "G-8R2K3ZRCY6",
    pwa: true,
    search: false
  },
  footer: `
    &copy; <a href="https://github.com/Zhengqbbb" target="_blank">Zhengqbbb</a> 2021-2022
    <br>
    Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
    <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a> |
    <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备19092669号</a>
  `,
  pages: {
    tags: {
      subtitle: "Black Sheep Wall",
      bgImage: {
        path: "https://tva2.sinaimg.cn/large/6ccee0e1gy1gxuz06pfdpj21hc0mv78v.jpg",
        mask: "rgba(211, 136, 37, .5)"
      }
    },
    links: {
      subtitle:
        "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
      bgImage: {
        path: "https://tvax3.sinaimg.cn/large/6ccee0e1gy1gxuz0kflemj22an0i3q5s.jpg",
        mask: "rgba(64, 118, 190, 0.5)"
      }
    }
  },
  locales: {
    "/": {
      navbar: navbar.zh,
      sidebar: sidebar.zh,
      ...i18n.zh
    }
  },
  sidebarDepth: 1,
  logo: '/images/logo.png',
  docsRepo: 'https://github.com/Zhengqbbb/vuepress-next-template',
  editLinkPattern: ':repo/'
}

