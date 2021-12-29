import type { HeadConfig, AppOptions } from 'vuepress'
import { path } from '@vuepress/utils';
import type { GungnirThemeOptions } from "vuepress-theme-gungnir";
import * as navbar from './navbar'
import * as sidebar from './sidebar'

const isProd = process.env.NODE_ENV === "production";
export const lang = 'zh-CN'

export const base = `/`

export const title = `Qbenben (Qiubin Zheng)`

export const description = 'Qbenben blog. Record my life'

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

export const themeConfig: Partial<GungnirThemeOptions> = {
  repo: 'https://github.com/Zhengqbbb/',
  docsDir: 'blog',
  docsBranch: 'blog',
  hitokoto: "https://v1.hitokoto.cn?c=d&c=i", // enable hitokoto (一言) or not?
  personalInfo: {
    name: "Qbenben",
    avatar: "/images/avatar.png",
    description: "在前端世界里打怪升级.",
    sns: {
      github: "Zhengqbbb",
      // instagram: "https://www.instagram.com/qbqiubin",
      email: "1074059947@qq.com"
    } as any
  },
  homeHeaderImages: [
    {
      path: "/images/home/1.jpg",
      mask: "rgba(40, 57, 101, .2)"
    },
    {
      path: "/images/home/2.jpg",
      mask: "rgb(251, 170, 152, .2)"
    },
    {
      path: "/images/home/3.jpg",
      mask: "rgba(68, 74, 83, .2)"
    }
  ],
  themePlugins: {
    // only enable git plugin in production mode
    git: isProd,
    katex: true,
    giscus: {
      repo: "This-is-an-Apple/blog-giscus-comments",
      repoId: "R_kgDOGl2SjQ",
      category: "Announcements",
      categoryId: "DIC_kwDOGl2Sjc4CAcxK"
    },
    // mdPlus: {
    //   all: true
    // },
    // ga: "G-HCQSX53XFG",
    // ba: "75381d210789d3eaf855fa16246860cc"
  },
  footer: `
    &copy; <a href="https://github.com/Zhengqbbb" target="_blank">Zhengqbbb</a> 2021-2021
    <br>
    Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
    <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a> |
    <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备19092669号</a>
  `,
  pages: {
    tags: {
      subtitle: "Black Sheep Wall",
      bgImage: {
        path: "/img/pages/tags.jpg",
        mask: "rgba(211, 136, 37, .5)"
      }
    },
    links: {
      subtitle:
        "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
      bgImage: {
        path: "/img/pages/links.jpg",
        mask: "rgba(64, 118, 190, 0.5)"
      }
    }
  },
  locales: {
    // "/en/": {
      // navbar: navbar.en,
      // sidebar: sidebar.en,
      // editLinkText: "Edit this page on GitHub"
    // },
    "/": {
      navbar: navbar.zh,
      selectLanguageName: "简体中文",
      selectLanguageText: "选择语言",
      selectLanguageAriaLabel: "选择语言",
      sidebar: sidebar.zh,
      editLink: false,
      editLinkText: "在 GitHub 上编辑此页",
      lastUpdatedText: "上次更新",
      contributorsText: "贡献者",
      tagsText: "标签",
      linksText: "链接",
      showAllTagsText: "全部",
      info: "信息",
      tip: "提示",
      warning: "注意",
      danger: "警告",
      notFound: [
        "这里什么都没有",
        "我们怎么到这来了？",
        "这是一个 404 页面",
        "看起来我们进入了错误的链接"
      ],
      backToHome: "$ cd /home/",
      openInNewWindow: "在新窗口打开",
      toggleDarkMode: "切换夜间模式",
      toggleSidebar: "切换侧边栏"
    }
  },
  sidebarDepth: 1,
  logo: '/images/logo.png',
  docsRepo: 'https://github.com/Zhengqbbb/vuepress-next-template',
  editLinkPattern: ':repo/',
}

