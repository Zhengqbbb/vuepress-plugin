---
lang: zh-CN
title: Vuepress2插件 — 站点SEO增强
description: vuepress-plugin-china-search-console，vuepress2 插件内含百度统计，百度自动收录，360搜索自动收录，头条搜索自动收录 | Qbenben blog. Record my life | 在代码世界里打怪升级的小靓仔
lastUpdated: true
sidebarDepth: 2
---
> [**Vuepress2**](https://v2.vuepress.vuejs.org/) 插件  - 针对Vuepress2的国内搜索引擎的SEO增强：包含 **百度统计，页面自动推送百度收录，页面自动推送360搜索收录, 页面自动推送头条搜索收录**。

> [**Vuepress2**](https://v2.vuepress.vuejs.org/) plugin: For the **Chinese** search engine console, include baidu analytics, vuepress page auto push baidu search engine, auto push 360 search engine and auto push toutiao(bytedance) search engine.

# vuepress-plugin-china-search-console

---
<br>
<p>
<a href="https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#community-plugins">
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="awesome-vuepress" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg"/>
</a>
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

![description](https://tva4.sinaimg.cn/large/6ccee0e1gy1gynwsvr1wmj227807adu2.jpg)

- 借鉴了 Vuepress2官方插件 - [google分析](https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html#install)
- **自动收录** ：就是借浪打浪的思想，利用用户访问你的网站，网站发起给搜索引擎，进而提高你网站的曝光度。至于有多少成效其实要看搜索引擎了。
- 其实目前来看最省心的 SEO 是设置 `sitemap` 站点地图 和 `robots.txt` 爬虫辅助文件，Vuepress官方也正在提交审核阶段，我也正在参与，相信很快就会有了，[plugin-sitemap](https://github.com/vuepress/vuepress-next/pull/277)。推出后大家就可以去各个站长平台提交自己的 `sitemap` 地址了。
- **国外的话：谷歌和bing** 都是采用提交sitemap 站点地图，然后你有两种方式去提高收录，一种是利用api 发起GET请求的方式通知搜索引擎，这时候就可以==写一个脚本通过curl或者github action==，在发布的时候进行通知。
- 国内的搜索引擎只能用两个字形容：难受。
  - 百度: 相比来说比较好，有多种方式，api手动收录，自动推送，代码集成等
  - 360：有支持自动推送和站点地图，但是托管在Gitee page pro的站点地图提交一直没下文...
  - 头条搜索： 有支持自动推送和站点地图，但是也不知道是不是Gitee page pro禁止了头条的ua及ip封禁，网站提交验证就一直验证不上...
  - 搜狗搜索：也是站点地图提交，但光是站点验证的流程就很复杂很复杂，Gitee page pro也是一直验证不上...
  - **由于百度和360自动收录是代码是固定的，但头条需要一个token，需要去站长平台进行查询，虽然自动推送比较方便但还是建议大家都去站点平台提交站点地图比较好。**
- 本来该插件是只想做百度分析，但是百度和360自动推送收录这个随便一起集成了。

::: tip 提示
建议在百度统计 [管理页面](https://tongji.baidu.com/sc-web/) 点击侧边栏的单页应用设置，开启单页应用数据统计
:::

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
import { searchConsolePlugin } from "vuepress-plugin-china-search-console";
module.exports = {
  plugins: [
    searchConsolePlugin({
      // options ...
    })
  ]
}
```

</CodeGroupItem>

<CodeGroupItem title="TS">

```ts
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { searchConsolePlugin } from "vuepress-plugin-china-search-console";

export default defineUserConfig({
  plugins: [
    searchConsolePlugin({
      // options ...
    })
  ]
});
```

</CodeGroupItem>
</CodeGroup>


## Options:
| options | type | default | info |
|---|----|----|----|
| baiduId | string | /  | 百度统计id|
| toutiaoAutoPushId | string | /  | 头条搜索自动收录id，填写后开启自动收录 \| 即页面自动推送收录建议 |
| autoPushBaiduSwitch | boolean | true | 是否开启百度自动推送 \| 即页面自动推送收录建议 |
| autoPush360Switch | boolean | false | 是否开启360自动推送 \| 即页面自动推送收录建议 |



## Other
### 如何获取百度统计id：
- 进入百度站长页面
![讲解图](https://user-images.githubusercontent.com/40693636/150633498-f46b8220-f67a-43de-af81-4b7803e3b417.png)
### 如何获取头条自动推送id
- 进入头条站长页面
![讲解图](https://user-images.githubusercontent.com/40693636/150680807-47ecc4c1-e99b-4b1c-8ec1-88bf59f7ebf2.png)

### 获得360自动收录回复，v2.0.1目前默认值已调整为false
> 您好，由于业务调整，站长平台自动收录功能于2021年5月10日下线关闭，详情可参看：https://bbs.360.cn/thread-15979727-1-1.html

 

## License

[MIT](https://github.com/Zhengqbbb/zhengqbbb.github.io/blob/main/packages/clipboard/LICENSE)

> I just try my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/zhengqbbb.github.io) to encourage me ?

> 我是 Qbenben，一个爱折腾在沉浸在代码世界打怪升级的深圳小靓仔，感谢您的阅读。[Github](https://github.com/Zhengqbbb) · [Blog](https://www.qbenben.com/)