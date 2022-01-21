# vuepress-plugin-china-search-console

<p>
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

**Vuepress2** plugin: For the **Chinese** search engine console, include baidu analytics, vuepress page auto push baidu search engine and auto push 360 search engine.

---

针对Vuepress2的SEO增强插件：包含 **百度统计，页面自动推送百度收录，页面自动推送360收录**。

![description](https://tva4.sinaimg.cn/large/6ccee0e1gy1gylxqsjhspj21cg08g7f4.jpg)

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
   * @description: 360 自动推送id
   * @see: https://zhanzhang.so.com/sitetool/auto_include
   */
  id360?: string;
  /**
   * @description: 360 自动推送js文件名
   * @see: https://zhanzhang.so.com/sitetool/auto_include
   */
   filename360?: string;
}
```

## Other
- 借鉴了 Vuepress2官方插件 - [google分析](https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html#install)
- 本来该插件是只想做百度分析，但是自动推送收录这个随便一起集成了。
- 其实目前来看最省心的 SEO 是设置 `sitemap` 和 `robots.txt`，vuepress官方也正在提交审核阶段，相信很快就会有了。[plugin-sitemap](https://github.com/vuepress/vuepress-next/pull/277)。推出后大家就可以去各个站长平台提交自己的 `sitemap` 地址了。
### 如何获取百度统计id：
- 进入百度站长页面
![讲解图](https://tvax1.sinaimg.cn/large/6ccee0e1gy1gylwrxvtf7j216a0ms7cm.jpg)
### 如何获取360自动推送id和文件名
- 进入360站长页面
![讲解图](https://tvax4.sinaimg.cn/large/6ccee0e1gy1gylwqqixsaj21cm0l6jw3.jpg)

## License

[MIT](https://github.com/Zhengqbbb/zhengqbbb.github.io/blob/main/packages/clipboard/LICENSE)

> 喜欢给[项目](https://github.com/Zhengqbbb/zhengqbbb.github.io)一个star~~~
