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
  baiduId: "21f490689f6e0886d4a314695c85c028"
});
