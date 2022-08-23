import { defineUserConfig, viteBundler } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defaultTheme } from '@vuepress/theme-default'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { clipboardPlugin } from 'vuepress-plugin-clipboard'
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console'
import { head, navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'QB-VuePress',
      description: 'QBenben VuePress-next plugins | include chinaSearchConsole and clipboard(code copy) Vuepress-next 插件，复制按钮生成，百度统计，360统计，头条自动推送',
    },
  },

  plugins: [
    /** @see: https://vuepress.qbb.sh/clipboard/ */
    clipboardPlugin({
      staticIcon: true,
      align: 'top',
    }),

    /** @see: https://vuepress.qbb.sh/china-search-console/ */
    searchConsolePlugin({
      /** @example '8f73cb8b2d3fe504688fa20d62d00fxx' */
      baiduId: process.env.DOCS_BAIDU_ID ?? '',
    }),

    /** @see: https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html */
    googleAnalyticsPlugin({
      /** @example 'G-PKN44NEZXX' */
      id: process.env.DOCS_GA_ID ?? '',
    }),

    /** @see: https://vuepress-theme-hope.github.io/v2/sitemap/ */
    sitemapPlugin({
      hostname: 'https://vuepress.qbb.sh',
      excludeUrls: ['/changelog.html', '/404.html'],
    }),
  ],

  theme: defaultTheme({
    logo: '/hero.png',
    repo: 'Zhengqbbb/vuepress-plugin',
    docsDir: 'docs',

    locales: {
      '/': {
        // navbar
        navbar,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    },

    themePlugins: {
      git: isProd,
    },
  }),
  bundler: viteBundler(),
})
