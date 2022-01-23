---
lang: zh-CN
title: Vuepress2插件 — 代码剪贴板
description: vuepress-plugin-clipboard | vuepress2 代码复制粘贴，剪贴板 | Qbenben blog. Record my life | 在代码世界里打怪升级的小靓仔
lastUpdated: true
sidebarDepth: 2
---
> [**Vuepress2**](https://v2.vuepress.vuejs.org/) 插件：添加代码块复制按钮，代码一键复制

> [**Vuepress2**](https://v2.vuepress.vuejs.org/) plugin: generate code copy button | code clipboard
# vuepress-plugin-clipboard

---
<br>
<p>
<a href="https://github.com/Zhengqbbb/zhengqbbb.github.io/tree/main/packages/clipboard">
<img style="display: inline-block;margin: 0;margin-right: 0.4rem;" alt="github" src="https://img.shields.io/github/stars/zhengqbbb/zhengqbbb.github.io?style=social"/>
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
</CodeGroup>

## Use

<CodeGroup>
<CodeGroupItem title="JS" active>

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-clipboard", {
        // options...
      }
    ]
  ]
}
```

</CodeGroupItem>

<CodeGroupItem title="TS">

```ts
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import type { ClipboardOptions } from 'vuepress-plugin-clipboard'

export default defineUserConfig<DefaultThemeOptions>({
  plugins: [
    [
      'vuepress-plugin-clipboard',
      {
        // options...
      } as ClipboardOptions,
    ]
  ]
});
```

</CodeGroupItem>
</CodeGroup>

## Options

| option                    | type              | default                   | info                                                                                                         | 说明                                             |
| ------------------------- | ----------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| staticIcon                | boolean           | false                     | Copy icon is only visible when hovering over code block or is always visible.                                | 复制按钮是否设置为悬停时可见                     |
| align                     | "top" \| "bottom" | "bottom"                  | This option describes the vertical position of the copy button component as well as the `successText`        | 设置复制按钮和成功提示的垂直位置                 |
| selector                  | string            | 'div[class*="language-"]' | This is the CSS selector to which the copy button component will be attached.                                | 目标代码块的CSS选择器                            |
| delay                     | number            | 400                       | Page animation delay(ms). Affect the generation of buttons when rendering                                    | 页面动画的延迟毫秒, 这会影响到渲染时的按钮生成   |
| color                     | string            | "var(--c-brand)"          | This sets the color of the copy button and can take any hex code.                                            | 复制按钮的颜色, 可以使用任意的十六进制颜色代码   |
| backgroundTransition      | boolean           | true                      | Enables the background transition animation of the attached code block when a user presses the copy button.  | 点击复制按钮时是否启动过渡动画                   |
| backgroundTransitionColor | string            | "var(--code-bg-color)"    | This sets the color of the background transition animation and can take any hex code.                        | 过渡动画背景颜色, 可以使用任意的十六进制颜色代码 |
| successText               | string            | "Copied!"                 | This sets the text that displays when a user presses the copy button.                                        | 复制成功后的提示词                               |
| successTextColor          | string            | "var(--c-brand-light)"    | This sets the color of the text that displays when a user presses the copy button and                       | 设置提示词的颜色, 可以使用任意的十六进制颜色代码|

<br>
<br>

> 如果有帮助到你，给一个 [star](https://github.com/Zhengqbbb/zhengqbbb.github.io)~~~


> 我是 Qbenben，一个在沉浸在代码世界打怪升级的深圳小靓仔，目前正在开发维护 [X-Cmd](https://x-cmd.com/) Shell开源工具库，感谢您的阅读。[Github](https://github.com/Zhengqbbb) · [Blog](https://www.qbenben.com/)