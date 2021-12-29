import type { PluginConfig } from '@vuepress/core'

const docSearchPlugin: PluginConfig  = [
  '@vuepress/plugin-docsearch',
  {
    apiKey: 'dd1cbbb79a132fe023c59224395dc215',
    indexName: 'x-cmd',
    appId: 'CXZ8IP0O5G',
    placeholder: '搜索',
  },
]

export default docSearchPlugin;