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
    baiduId: "dbf4327a921eac36c68ec119c80f31b9",
    toutiaoAutoPushId: "3dcbba9b816cb647a31f0b393b5c1830e236e2c357573edc072b52b73042d4dc30632485602430134f60bc55ca391050b680e2741bf7233a8f1da9902314a3fa"
  } as SearchConsolePluginOptions,
]
