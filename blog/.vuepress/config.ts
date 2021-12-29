import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { pageInfo, bunderInfo } from './configs';
import pagePlugins from './plugins';

export default defineUserConfig<DefaultThemeOptions>({
  title: pageInfo.title,
  description: pageInfo.description,
  head: pageInfo.headConfig,
  lang: pageInfo.lang,
  base: pageInfo.base,

  bundler: bunderInfo.bundler,

  plugins: pagePlugins,
  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  },
  extendsMarkdown: (md) => {
    md.use(require("markdown-it-task-lists"));
  },

  theme: "vuepress-theme-gungnir",
  themeConfig: pageInfo.themeConfig,
});
