import type { PluginConfig } from '@vuepress/core'

const codeCopyPlugin: PluginConfig = [
  '@zhengqbbb/vuepress-plugin-clipboard',
  {
    align: "top",
    staticIcon: true,
  },
]

export default codeCopyPlugin;