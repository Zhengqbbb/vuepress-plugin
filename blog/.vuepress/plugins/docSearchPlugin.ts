import type { PluginConfig } from '@vuepress/core'

const docSearchPlugin: PluginConfig  = [
  '@vuepress/plugin-docsearch',
  {
    apiKey: '4fae99166456a832a0775eef6e61cae0',
    indexName: 'qbenben',
    appId: 'BUM16EKLGN',
    placeholder: '搜索',
  },
]

export default docSearchPlugin;