import type { PluginConfig } from '@vuepress/core'

const docSearchPlugin: PluginConfig  = [
  '@vuepress/plugin-docsearch',
  {
    apiKey: 'a8b45d0e5d27d6ec39c687814b11fd0b',
    indexName: 'qbenben',
    appId: 'BUM16EKLGN',
    placeholder: '搜索',
  },
]

export default docSearchPlugin;