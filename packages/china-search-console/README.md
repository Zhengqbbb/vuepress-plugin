# vuepress-plugin-china-search-console

<p>
<a href="https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#community-plugins">
<img style="display: inline-block;margin-right: 0.4rem;" alt="awesome-vuepress" src="https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg"/>
<a href="https://github.com/Zhengqbbb/zhengqbbb.github.io/tree/main/packages/china-search-console">
<img style="display: inline-block;margin-right: 0.4rem;" alt="npm" src="https://img.shields.io/github/stars/zhengqbbb/zhengqbbb.github.io?style=social"/>
</a>
<br>
<a href="https://www.npmjs.com/package/vuepress-plugin-china-search-console">
<img style="display: inline-block;margin-right: 0.4rem;" alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-china-search-console?style=flat-square&logo=npm"/>
<img style="display: inline-block;margin-right: 0.4rem;" alt="npm-download" src="https://img.shields.io/npm/dm/vuepress-plugin-china-search-console.svg?style=flat-square&logo=npm"/>
<img style="display: inline-block;margin-right: 0.4rem;" alt="npm-size" src="https://img.shields.io/bundlephobia/min/vuepress-plugin-china-search-console?style=flat-square&logo=npm"/>
</a>
</p>

Home: https://www.qbenben.com/docs/play/vuepress-plugin-china-search-console

Source: [Github](https://github.com/Zhengqbbb/zhengqbbb.github.io/tree/main/packages/china-search-console)

**Vuepress2** plugin: For the **Chinese** search engine console, include baidu analytics, vuepress page auto push baidu search engine, auto push 360 search engine and auto push toutiao(bytedance) search engine.

---

针对Vuepress2的SEO增强插件：包含 **百度统计，页面自动推送百度收录，页面自动推送360搜索收录, 页面自动推送头条搜索收录**。

![description](https://tva4.sinaimg.cn/large/6ccee0e1gy1gynwsvr1wmj227807adu2.jpg)

## Install

```bash
yarn add -D vuepress-plugin-china-search-console
# or
npm install -D vuepress-plugin-china-search-console
```

## Use JS:

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-china-search-console", {options...}
    ]
  ]
}
```

## Use TS:
```ts
// .vuepress/config.ts
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import type { SearchConsolePluginOptions } from 'vuepress-plugin-china-search-console'

export default defineUserConfig<DefaultThemeOptions>({
  plugins: [
    [
      'vuepress-plugin-china-search-console',
      {
        // options...
      } as SearchConsolePluginOptions,
    ]
  ]
});
```

## Options:
```ts
export interface SearchConsolePluginOptions {
    /**
     * @description: baidu 统计id | 填写后开启百度统计分析
     * @see: https://tongji.baidu.com/web/help/article?id=175&type=0&from_query=%E4%BB%A3%E7%A0%81%E8%8E%B7%E5%8F%96&index=0
     */
    baiduId?: string;
    /**
     * @tip: 由于默认头条自动推送采用https，使用http网页不会生成
     * @description: 头条搜索 自动推送id | 填写后开启头条搜索自动推送
     * @see: https://zhanzhang.toutiao.com/page/inner/link/auto_include
     */
    toutiaoAutoPushId?: string;
    /**
     * @description: 是否开启百度自动推送 | 即页面自动推送收录建议
     * @default: true
     */
    autoPushBaiduSwitch?: boolean;
    /**
     * @tip: 2021-01-27 获得官方邮件回复，目前自动收录已不使用
     * @description: 是否开启360自动推送 | 即页面自动推送收录建议
     * @default: false
     */
    autoPush360Switch?: boolean;
}
```

## Other
- 借鉴了 Vuepress2官方插件 - [google分析](https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html#install)
- **自动收录** ：就是借浪打浪的思想，利用用户访问你的网站，网站发起给搜索引擎，进而提高你网站的曝光度。至于有多少成效其实要看搜索引擎了。
- **由于百度和360自动收录是代码是固定的，但头条需要一个token，需要去站长平台进行查询，虽然自动推送比较方便但还是建议大家都去站点平台提交站点地图比较好。**
- 其实目前来看最省心的 SEO 是设置 `sitemap` 和 `robots.txt`，vuepress官方也正在提交审核阶段，相信很快就会有了。[plugin-sitemap](https://github.com/vuepress/vuepress-next/pull/277)。推出后大家就可以去各个站长平台提交自己的 `sitemap` 地址了。
- 本来该插件是只想做百度分析，但是自动推送收录这个随便一起集成了。
- 建议在百度统计 管理页面点击侧边栏的单页应用设置，开启单页应用数据统计
### 如何获取百度统计id：
- 进入百度站长页面
![讲解图](https://tvax1.sinaimg.cn/large/6ccee0e1gy1gylwrxvtf7j216a0ms7cm.jpg)
### 如何获取头条自动推送id
- 进入头条站长页面
![讲解图](https://tva2.sinaimg.cn/large/6ccee0e1gy1gynwy4t0dbj22po14gdyy.jpg)

## License

[MIT](https://github.com/Zhengqbbb/zhengqbbb.github.io/blob/main/packages/clipboard/LICENSE)

Copyright (c) 2022-present Qiubin Zheng <zhengqbbb@gmail.com> (https://github.com/Zhengqbbb)

> I just try my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/zhengqbbb.github.io) to encourage me ?
