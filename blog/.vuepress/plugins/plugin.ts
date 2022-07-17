import { clipboardPlugin } from "vuepress-plugin-clipboard";
import { searchConsolePlugin } from "vuepress-plugin-china-search-console";

/**
 * @description: Code Copy Plugin
 * @see: https://blog.qbb.sh/docs/play/vuepress-plugin-clipboard
 */
export const codeCopyPlugin = clipboardPlugin({
  align: "top",
  staticIcon: true,
});

/**
 * @description: China Search Console Plugin
 * @see: https://blog.qbb.sh/docs/play/vuepress-plugin-china-search-console
 */
export const searchCNConsolePlugin = searchConsolePlugin({
  baiduId: "dbf4327a921eac36c68ec119c80f31b9",
  toutiaoAutoPushId:
    "3dcbba9b816cb647a31f0b393b5c1830e236e2c357573edc072b52b73042d4dc30632485602430134f60bc55ca391050b680e2741bf7233a8f1da9902314a3fa",
});
