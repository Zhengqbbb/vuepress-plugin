---
lang: zh-CN
title: Vuepress2插件 — 百度360统计收录
description: vuepress-plugin-china-search-console，vuepress2 插件内含百度统计，百度自动收录，360自动收录 | Qbenben blog. Record my life | 在代码世界里打怪升级的小靓仔
lastUpdated: true
sidebarDepth: 2
---
> [**Vuepress2**](https://v2.vuepress.vuejs.org/) 插件  - 针对Vuepress2的国内搜索引擎的SEO增强：包含 **百度统计，页面自动推送百度收录，页面自动推送360收录**。

> [**Vuepress2**](https://v2.vuepress.vuejs.org/) plugin: For the **Chinese** search engine console, include baidu analytics, vuepress page auto push baidu search engine and auto push 360 search engine.

# vuepress-plugin-china-search-console

---
<br>
<p>
<a href="https://github.com/Zhengqbbb/zhengqbbb.github.io/tree/main/packages/china-search-console">
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="github" src="https://img.shields.io/github/stars/zhengqbbb/zhengqbbb.github.io?style=social"/>
</a>
<br>
<a href="https://www.npmjs.com/package/vuepress-plugin-china-search-console">
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-china-search-console?style=flat-square&logo=npm"/>
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="npm-download" src="https://img.shields.io/npm/dm/vuepress-plugin-china-search-console.svg?style=flat-square&logo=npm"/>
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="npm-size" src="https://img.shields.io/bundlephobia/min/vuepress-plugin-china-search-console?style=flat-square&logo=npm"/>
</a>
</p>

![description](https://tva4.sinaimg.cn/large/6ccee0e1gy1gylxqsjhspj21cg08g7f4.jpg)

- 借鉴了 Vuepress2官方插件 - [google分析](https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html#install)
- 本来该插件是只想做百度分析，但是自动推送收录这个随便一起集成了。
- 其实目前来看最省心的 SEO 是设置 `sitemap` 站点地图 和 `robots.txt` 爬虫辅助文件，Vuepress官方也正在提交审核阶段，我也正在参与相信很快就会有了，[plugin-sitemap](https://github.com/vuepress/vuepress-next/pull/277)。推出后大家就可以去各个站长平台提交自己的 `sitemap` 地址了。

## Install

<CodeGroup>
<CodeGroupItem title="NPM" active>

```bash
npm install -D vuepress-plugin-china-search-console
```

</CodeGroupItem>

<CodeGroupItem title="YARN">

```bash
yarn add -D vuepress-plugin-china-search-console
```

</CodeGroupItem>
</CodeGroup>

## Use:

<CodeGroup>
<CodeGroupItem title="JS" active>

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

</CodeGroupItem>

<CodeGroupItem title="TS">

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

</CodeGroupItem>
</CodeGroup>


## Options:
| options | type | default | info |
|---|----|----|----|
| idBaidu | string | / `require` | baidu 统计id|
| baiduAutoPush | boolean | true | 是否开启百度自动推送 \| 即页面自动推送收录建议|
| id360 | string | / | 360 自动推送id |
| filename360 | string | / | 360 自动推送js文件名 |



## Other
### 如何获取百度统计id：
- 进入百度站长页面
![讲解图](https://user-images.githubusercontent.com/40693636/150633498-f46b8220-f67a-43de-af81-4b7803e3b417.png)
### 如何获取360自动推送id和文件名
- 进入360站长页面
![讲解图](https://user-images.githubusercontent.com/40693636/150633516-3a1af533-fb11-4faa-99a0-1ba551c2ae35.png)

## License

[MIT](https://github.com/Zhengqbbb/zhengqbbb.github.io/blob/main/packages/clipboard/LICENSE)

> 喜欢给[项目](https://github.com/Zhengqbbb/zhengqbbb.github.io)一个star~~~


> 我是 Qbenben，一个在沉浸在代码世界打怪升级的深圳小靓仔，目前正在开发维护 [X-Cmd](https://x-cmd.com/) Shell开源工具库，感谢您的阅读。[Github](https://github.com/Zhengqbbb) · [Blog](https://www.qbenben.com/)