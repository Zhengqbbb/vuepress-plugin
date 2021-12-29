---
title: plugin-reading-time
date: 2021-12-12
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-reading-time/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-reading-time/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/reading-time" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--reading--time-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

Plugin `@renovamen/vuepress-plugin-reading-time@next` for counting words and estimating reading time in [VuePress 2](https://v2.vuepress.vuejs.org/). Compare to other similar VuePress plugins, this plugin supports:

- Setting reading speed for English and Chinese separately
- Excluding all content inside code blocks or tex blocks


## Install

```bash
yarn add @renovamen/vuepress-plugin-reading-time@next
# or
npm install @renovamen/vuepress-plugin-reading-time@next
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      "@renovamen/vuepress-plugin-reading-time"
    ]
  ]
}
```


## Usage

The `readingTime` data can be accessed by:

```js
import { pageData } from "@vuepress/client";
console.log(pageData.readingTime);
```

An example `readingTime` data:

```js
{
  minutes: 12,
  words: 3500
}
```

You can override by specifying `readingTime` data in frontmatter

```yaml
title: Hello Word
readingTime: { minutes: 3, words: 1500 }
```


## Options

### excludes

Exclude pages by their path via a regular expression.

- Type: `Array<string>`
- Default: `[]`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      excludes: ["/about", "/tag/.*"]
    }
  ]
]
```

### wordsPerMinuteCN

The number of Chinese words per minute a user can read.

- Type: `int`
- Default: `300`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      wordsPerMinuteCN: 500
    }
  ]
]
```

### wordsPerMinuteEN

The number of English words per minute a user can read.

- Type: `int`
- Default: `160`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      wordsPerMinuteEN: 200
    }
  ]
]
```

### excludeCodeBlock

Exclude all content inside code blocks or not.

- Type: `boolean`
- Default: `false`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      excludeCodeBlock: true
    }
  ]
]
```

### excludeTexBlock

Exclude all content inside tex blocks or not.

- Type: `boolean`
- Default: `false`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      excludeTexBlock: true
    }
  ]
]
```


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE)
