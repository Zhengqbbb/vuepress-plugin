import type { PluginConfig } from '@vuepress/core'
import type { ClipboardOptions } from 'vuepress-plugin-clipboard'

const codeCopyPlugin: PluginConfig = [
  'vuepress-plugin-clipboard',
  {
    align: "top",
    staticIcon: true,
  } as ClipboardOptions,
]

export default codeCopyPlugin;