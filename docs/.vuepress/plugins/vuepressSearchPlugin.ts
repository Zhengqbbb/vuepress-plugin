import type { Page, PluginConfig } from 'vuepress'

const vuepressSearchPlugin: PluginConfig  =  [
  '@vuepress/plugin-search',
  {
    // 排除首页
    isSearchable: (page: Page) => page.path !== '/',
    locales: {
      '/': {
        placeholder: '搜索',
      },
    },
  }
]

export default vuepressSearchPlugin;