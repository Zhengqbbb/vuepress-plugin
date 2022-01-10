import type { PluginConfig } from "vuepress";
import type { ClipboardOptions } from 'vuepress-plugin-clipboard'

/**
 * @description: Code Copy Plugin
 * @see: https://www.qbenben.com/docs/play/vuepress-plugin-clipboard
 */
export const codeCopyPlugin: PluginConfig = [
  'vuepress-plugin-clipboard',
  {
    align: "top",
    staticIcon: true,
  } as ClipboardOptions,
]
