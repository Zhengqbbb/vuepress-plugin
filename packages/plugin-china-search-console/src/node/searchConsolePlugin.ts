import type { Plugin, PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'

export interface SearchConsolePluginOptions {
  /**
   * @description: baidu 统计id | 填写后开启百度统计分析
   * @see: https://tongji.baidu.com/web/help/article?id=175&type=0&from_query=%E4%BB%A3%E7%A0%81%E8%8E%B7%E5%8F%96&index=0
   */
  baiduId?: string
  /**
   * @tip: 由于默认头条自动推送采用https，使用http网页不会生成
   * @description: 头条搜索 自动推送id | 填写后开启头条搜索自动推送
   * @see: https://zhanzhang.toutiao.com/page/inner/link/auto_include
   */
  toutiaoAutoPushId?: string
  /**
   * @description: 是否开启百度自动推送 | 即页面自动推送收录建议
   * @default: true
   */
  autoPushBaiduSwitch?: boolean
  /**
   * @tip: 由于默认360自动推送采用https，使用http网页不会生成
   * @description: 是否开启360自动推送 | 即页面自动推送收录建议
   * @default: true
   */
  autoPush360Switch?: boolean
}

export const searchConsolePlugin
  = ({
    baiduId = '',
    toutiaoAutoPushId = '',
    autoPushBaiduSwitch = true,
    autoPush360Switch = false,
  }: SearchConsolePluginOptions): Plugin =>
    (app) => {
      const plugin: PluginObject = {
        name: 'vuepress-plugin-china-search-console',
      }

      if (app.env.isDev)
        return plugin

      return {
        ...plugin,

        clientConfigFile: path.resolve(__dirname, '../client/config.js'),

        define: {
          __BA_ID__: baiduId,
          __TT_ID__: toutiaoAutoPushId,
          __BA_AUTOPUSH__: autoPushBaiduSwitch,
          __360_AUTOPUSH__: autoPush360Switch,
        },
      }
    }
