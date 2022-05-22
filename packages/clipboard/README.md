# vuepress-plugin-clipboard

<p>
<a href="https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#community-plugins">
<img style="display: inline-block;margin-right: 0.4rem;" alt="awesome-vuepress" src="https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg"/>
<a href="https://github.com/Zhengqbbb/zhengqbbb.github.io/tree/main/packages/clipboard">
<img style="display: inline-block;margin-right: 0.4rem;" alt="npm" src="https://img.shields.io/github/stars/zhengqbbb/zhengqbbb.github.io?style=social"/>
</a>
<br>
<a href="https://www.npmjs.com/package/vuepress-plugin-clipboard">
<img style="display: inline-block;margin-right: 0.4rem;" alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-clipboard?style=flat-square&logo=npm"/>
<img style="display: inline-block;margin-right: 0.4rem;" alt="npm-download" src="https://img.shields.io/npm/dm/vuepress-plugin-clipboard.svg?style=flat-square&logo=npm"/>
<img style="display: inline-block;margin-right: 0.4rem;" alt="npm-size" src="https://img.shields.io/bundlephobia/min/vuepress-plugin-clipboard?style=flat-square&logo=npm"/>
</a>
</p>

Home: https://www.qbenben.com/docs/play/vuepress-plugin-clipboard

Source: [Github](https://github.com/Zhengqbbb/zhengqbbb.github.io/tree/main/packages/clipboard)

Vuepress2 code-copy plugin

## Install

```bash
yarn add -D vuepress-plugin-clipboard
# or
npm install -D vuepress-plugin-clipboard
```

## Use JS:

```js
// .vuepress/config.js
import { clipboardPlugin } from "vuepress-plugin-clipboard";
module.exports = {
  plugins: [
    clipboardPlugin({
      // options ...
    })
  ]
}
```

## Use TS:
```ts
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { clipboardPlugin } from "vuepress-plugin-clipboard";

export default defineUserConfig({
  plugins: [
    clipboardPlugin({
      // options ...
    })
  ]
});
```

## Options:
```ts
export interface ClipboardOptions {
    /**
     * @description: Copy icon is only visible when hovering over code block or is always visible.
     * @description: 复制按钮是否设置为悬停时可见
     * @default: false
     */
    staticIcon: boolean;

    /**
     * @description: This option describes the vertical position of the copy button component as well as the `successText`
     * @description: 设置复制按钮和成功提示的垂直位置
     * @default: "bottom"
     */
    align: "top" | "bottom";

    /**
     * @description: This is the CSS selector to which the copy button component will be attached.
     * @description: 目标代码块的CSS选择器
     * @default: 'div[class*="language-"]'
     */
    selector: string;

    /**
     * @description: Page animation delay(ms). Affect the generation of buttons when rendering
     * @description: 页面动画的延迟毫秒, 这会影响到渲染时的按钮生成
     * @default: 400
     */
    delay: number;

    /**
     * @description: This sets the color of the copy button and can take any hex code.
     * @description: 复制按钮的颜色, 可以使用任意的十六进制颜色代码
     * @default: "var(--c-brand)"
     */
    color: string;

    /**
     * @description: Enables the background transition animation of the attached code block when a user presses the copy button.
     * @description: 点击复制按钮时是否启动过渡动画
     * @default: true
     */
    backgroundTransition: boolean;

    /**
     * @description: This sets the color of the background transition animation and can take any hex code.
     * @description: 过渡动画背景颜色, 可以使用任意的十六进制颜色代码
     * @default: "var(--code-bg-color)"
     */
    backgroundTransitionColor: string;

    /**
     * @description: This sets the text that displays when a user presses the copy button.
     * @description: 复制成功后的提示词
     * @default: "Copied!"
     */
    successText: string;

    /**
     * @description: This sets the color of the text that displays when a user presses the copy button and can take any hex code.
     * @description: 设置提示词的颜色, 可以使用任意的十六进制颜色代码
     * @default: "var(--c-brand-light)"
     */
    successTextColor: string;
}



```
## License

[MIT](https://github.com/Zhengqbbb/zhengqbbb.github.io/blob/main/packages/clipboard/LICENSE)
Copyright (c) 2022-present Qiubin Zheng <zhengqbbb@gmail.com> (https://github.com/Zhengqbbb)

> I just try my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/zhengqbbb.github.io) to encourage me ?
