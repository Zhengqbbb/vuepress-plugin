import type { PluginConfig } from "vuepress";
import type { ClipboardOptions } from 'vuepress-plugin-clipboard'
import type { SearchConsolePluginOptions } from 'vuepress-plugin-china-search-console'

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

/**
 * @description: China Search Console Plugin
 * @see: https://www.qbenben.com/docs/play/vuepress-plugin-china-search-console
 */
 export const searchConsolePlugin: PluginConfig = [
  'vuepress-plugin-china-search-console',
  {
    idBaidu: "dbf4327a921eac36c68ec119c80f31b9",
    id360: "sozz",
    filename360: "ab77b6ea7f3fbf79"
  } as SearchConsolePluginOptions,
]
