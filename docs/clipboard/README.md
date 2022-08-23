---
lang: zh-CN
title: Vuepress2插件 — 代码剪贴板
description: vuepress-plugin-clipboard | vuepress-next 代码复制粘贴，剪贴板 | A VuePress v2 plugin to generate code copy button
lastUpdated: true
sidebarDepth: 2
sitemap:
  - priority: 0.8
head:
  - - meta
    - name: keywords
      content:
        - VuePress-next
        - code copy
        - clipboard
---
# Vuepress-Plugin-Clipboard

> [**Vuepress2**](https://v2.vuepress.vuejs.org/) 插件：添加代码块复制按钮，代码一键复制

> [**Vuepress2**](https://v2.vuepress.vuejs.org/) plugin: generate code copy button | code clipboard

---
<br>
<p>
<a href="https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#community-plugins">
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="awesome-vuepress" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg"/>
</a>
<a href="https://github.com/Zhengqbbb/vuepress-plugin/tree/main/packages/plugin-clipboard">
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="github" src="https://img.shields.io/github/stars/Zhengqbbb/vuepress-plugin?style=social"/>
</a>
<br>
<a href="https://www.npmjs.com/package/vuepress-plugin-clipboard">
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-clipboard?style=flat-square&logo=npm"/>
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="npm-download" src="https://img.shields.io/npm/dm/vuepress-plugin-clipboard.svg?style=flat-square&logo=npm"/>
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="npm-size" src="https://img.shields.io/bundlephobia/min/vuepress-plugin-clipboard?style=flat-square&logo=npm"/>
</a>
</p>


- vue3 + ts + setup 改进
- 减轻light主题中的过渡动画
- 添加了更多class，样式和响应式的支持 提供样式自定义

[Current Site Source Code(当前站点示例源码)](https://github.com/Zhengqbbb/vuepress-plugin/tree/main/docs)

## Install

<CodeGroup>
<CodeGroupItem title="NPM" active>

```bash
npm install -D vuepress-plugin-clipboard
```

</CodeGroupItem>

<CodeGroupItem title="YARN">

```bash
yarn add -D vuepress-plugin-clipboard
```

</CodeGroupItem>

<CodeGroupItem title="PNPM">

```bash
pnpm add -D vuepress-plugin-clipboard
```

</CodeGroupItem>
</CodeGroup>

## Usage

<CodeGroup>
<CodeGroupItem title="JS" active>

```js
// .vuepress/config.js
import { clipboardPlugin } from 'vuepress-plugin-clipboard'
module.exports = {
  plugins: [
    clipboardPlugin({
      // options ...
    })
  ]
}
```

</CodeGroupItem>

<CodeGroupItem title="TS">

```ts
// .vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import { clipboardPlugin } from 'vuepress-plugin-clipboard'

export default defineUserConfig({
  plugins: [
    clipboardPlugin({
      // options ...
    })
  ]
})
```

</CodeGroupItem>
</CodeGroup>

## Options

```js
const a = 1
```

<table style="font-size: 0.9rem;">
  <thead>
    <th>option</th>
    <th>type</th>
    <th>default</th>
    <th>info</th>
  </thead>
  <tr>
    <td>staticIcon</td>
    <td>boolean</td>
    <td>false</td>
    <td>Copy icon is only visible when hovering over code block or is always visible.<br><br>复制按钮是否设置为悬停时可见</td>
  </tr>
  <tr>
    <td>selector</td>
    <td>string</td>
    <td>'div[class*="language-"]'</td>
    <td>This is the CSS selector to which the copy button component will be attached.<br><br>目标代码块的CSS选择器</td>
  </tr>
  <tr>
    <td>delay</td>
    <td>number</td>
    <td>400</td>
    <td>Page animation delay(ms). Affect the generation of buttons when rendering<br><br>页面动画的延迟毫秒, 这会影响到渲染时的按钮生成</td>
  </tr>
  <tr>
    <td>color</td>
    <td>string</td>
    <td>"var(--c-brand)"</td>
    <td>This sets the color of the copy button and can take any hex code.<br><br>复制按钮的颜色, 可以使用任意的十六进制颜色代码</td>
  </tr>
  <tr>
    <td>backgroundTransition</td>
    <td>boolean</td>
    <td>true</td>
    <td>Enables the background transition animation of the attached code block when a user presses the copy button.<br><br>点击复制按钮时是否启动过渡动画</td>
  </tr>
  <tr>
    <td>backgroundTransitionColor</td>
    <td>string</td>
    <td>"var(--code-bg-color)"</td>
    <td>This sets the color of the background transition animation and can take any hex code.<br><br>过渡动画背景颜色, 可以使用任意的十六进制颜色代码</td>
  </tr>
  <tr>
    <td>successText</td>
    <td>string</td>
    <td>"Copied!"</td>
    <td>Setting the text that displays when a user presses the copy button. <br><br>复制成功后的提示词</td>
  </tr>
  <tr>
    <td>successTextColor</td>
    <td>string</td>
    <td>"var(--c-brand-light)"</td>
    <td>This sets the color of the text that displays when a user presses the copy button<br><br>设置提示词的颜色, 可以使用任意的十六进制颜色代码</td>
  </tr>
</table>

<br>
<br>

> I just try my best to make thing well, Could you give a [⭐ star ⭐](https://github.com/Zhengqbbb/vuepress-plugin) to encourage me ?
