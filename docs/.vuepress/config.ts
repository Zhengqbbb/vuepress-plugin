import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { pageInfo, bunderInfo } from './configs';
import pagePlugins from './plugins';

export default defineUserConfig<DefaultThemeOptions>({
  lang: pageInfo.lang,
  base: pageInfo.base,
  title: pageInfo.title,
  description: pageInfo.description,
  head: pageInfo.headConfig,

  bundler: bunderInfo.bundler,
  bundlerConfig: bunderInfo.bundlerConfig,

  plugins: pagePlugins,

  themeConfig: pageInfo.themeConfig,

  define: {
    __BASE__: "/vuepress-next-template/",
    __HOME_PAGE_TITLE__: "Qbenben-hello world",
  },
})