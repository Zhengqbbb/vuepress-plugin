# qbenben code-copy
base: [snippets](https://github.com/Snippetors/snippets)
Vuepress2 code-copy plugin
```bash
yarn add -D @zhengqbbb/vuepress-plugin-clipboard
```

Use:
```ts
import type { PluginConfig } from '@vuepress/core'

const codeCopyPlugin: PluginConfig = [
  '@zhengqbbb/vuepress-plugin-clipboard',
  {},
]

export default codeCopyPlugin;
```

option:
```js
selector: options.selector || 'div[class*="language-"]',
delay: options.delay || 400,
align: options.align || "bottom",
color: options.color || "#3aa675",
backgroundColor: options.backgroundColor || "#71cda3",
backgroundTransition: options.backgroundTransition !== false,
successText: options.successText || "Copied!",
successTextColor: options.successTextColor || options.color || "#349469",
staticIcon: options.staticIcon === true,
```
## License

[MIT](https://github.com/Snippetors/snippets/blob/main/LICENSE)
