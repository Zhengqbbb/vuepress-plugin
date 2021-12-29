import { path } from '@vuepress/utils'
import type { PluginConfig } from '@vuepress/core'

const docSearchPlugin: PluginConfig  = [
  '@vuepress/register-components',
  {
    components: {
      HomePage: path.resolve(__dirname, '../components/HomePage.vue'),
    },
  },
]


export default docSearchPlugin;