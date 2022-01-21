import type { Plugin, PluginObject } from "@vuepress/core";
import { logger, path } from "@vuepress/utils";

export interface SearchConsolePluginOptions {
  /**
   * @description: baidu 统计id
   * @requires: true
   * @see: https://tongji.baidu.com/web/help/article?id=175&type=0&from_query=%E4%BB%A3%E7%A0%81%E8%8E%B7%E5%8F%96&index=0
   */
  idBaidu: string;
  /**
   * @description: 是否开启百度自动推送 | 即页面自动推送收录建议
   * @default: true
   */
   baiduAutoPush?: boolean;
  /**
   * @tip: 填写id和文件名后自动开启自动推送 | 由于默认360自动推送采用https，使用http网页不会生成
   * @description: 360 自动推送js文件名
   * @see: https://zhanzhang.so.com/sitetool/auto_include
   */
   filename360?: string;
  /**
   * @description: 360 自动推送id
   * @see: https://zhanzhang.so.com/sitetool/auto_include
   */
  id360?: string;
}

export const searchConsolePlugin: Plugin<SearchConsolePluginOptions> = ({ idBaidu, baiduAutoPush = true, filename360, id360 }, app) => {
  const plugin: PluginObject = {
    name: "vuepress-plugin-china-search-console"
  };

  if (!idBaidu) {
    logger.warn(`[${plugin.name}] 'baidu tongji id' is required`);
    return plugin;
  }
  if (!id360) {
    id360 = ""
  } else if (!filename360)  {
    logger.warn(`[${plugin.name}] 'filename360' autopush js file name is required, see: https://zhanzhang.so.com/sitetool/auto_include`);
    return plugin;
  }

  if (app.env.isDev) {
    return plugin;
  }

  return {
    ...plugin,

    clientAppEnhanceFiles: path.resolve(__dirname, "../client/clientAppEnhance.js"),

    define: {
      __BA_ID__: idBaidu,
      __360_ID__: id360,
      __360_FILE__: filename360,
      __BA_AUTOPUSH__: baiduAutoPush
    }
  };
};
