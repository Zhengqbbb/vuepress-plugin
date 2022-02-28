---
lang: zh-CN
title: cz-git 中文文档
description: cz-git 中文文档 | cz-git 是一款commitizen adapter(适配器)，拥有高度自定义，针对gitee commit issue支持，支持emoji的commit，与commitlint配合检查，可以有效减少commit错误，达到commit标准化规范，可针对monorepo前端工程化工具。
lastUpdated: true
sidebarDepth: 2
---

<p align="center">
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git">
        <img src="https://tva3.sinaimg.cn/large/6ccee0e1gy1gztgn21x8zj21uc0x648q.jpg" alt="cz-git-logo" width="400" data-width="400" data-height="400">
    </a>
</p>

<h1 align="center">cz-git</h1>

---

<p align="center">
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git">
      <img style="display:inline-block;margin:0.2em;" alt="Commitizen-Adapter" src="https://img.shields.io/badge/Commitizen-Adapter-red.svg?logo=git&style=flat">
    </a>
    <br/>
    <a target="_blank" href="http://commitizen.github.io/cz-cli/">
      <img style="display:inline-block;margin:0.2em;" alt="commitizen-friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?logo=github">
    </a>
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git">
      <img style="display:inline-block;margin:0.2em;" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zhengqbbb/cz-git?style=social">
    </a>
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git/actions/workflows/nodejs.yml">
      <img style="display:inline-block;margin:0.2em;" alt="test-ci" src="https://github.com/Zhengqbbb/cz-git/workflows/Node.js%20CI/badge.svg">
    </a>
    <br>
    <a href="https://www.npmjs.com/package/cz-git">
        <img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/cz-git?style=flat-square&logo=npm">
        <img style="display:inline-block;margin:0.2em;" alt="npm-download" src="https://img.shields.io/npm/dm/cz-git.svg?style=flat-square&logo=npm">
    </a>
    <br/>
</p>
<p align="center">
    <a href="https://github.com/Zhengqbbb/cz-git#readme">English doc</a>
    &nbsp; | &nbsp;
    <a href="https://www.qbenben.com/docs/play/cz-git">简体中文文档</a>
</p>

<!-- TOC -->

- [介绍](#介绍)
- [特点](#特点)
- [使用](#使用)
  - [项目中使用](#项目中使用)
  - [全局使用](#全局使用)
- [配置模板](#配置模板)
  - [默认模板](#默认模板)
  - [中英文对照模板](#中英文对照模板)
  - [纯汉化模板](#纯汉化模板)
  - [Emoji模板](#emoji模板)
  - [JSON模板](#json模板)
  - [TypeScript模板](#typescript模板)
- [配置说明](#配置说明)
  - [显示相关](#显示相关)
  - [工程化规范化相关](#工程化规范化相关)
- [常见问题](#常见问题)
  - [为什么做了这款插件](#为什么做了这款插件)
  - [windows 用户使用](#windows-用户使用)
  - [全局安装后无法找到命令](#全局安装后无法找到命令)
  - [终端无法显示Emoji符号](#终端无法显示emoji符号)
  - [为什么输出的 Emoji符号要放在 subject](#为什么输出的-emoji符号要放在-subject)
- [版权信息](#版权信息)

<!-- /TOC -->

## 介绍

一款工程性更强，高度自定义，标准输出格式的 [commitizen](https://github.com/commitizen/cz-cli) 适配器

![demo-gif](https://tva3.sinaimg.cn/large/6ccee0e1gy1gztghb579ig21nm0k8dnw.gif)

> 什么是commitizen：基于Node.js的 `git commit` 命令行工具，辅助生成标准化规范化的 commit message。<br>
> 什么是适配器：更换 commitizen 命令行工具的**交互方式**插件。

## 特点

- 友好型命令行工具，**“懒字优先”** ！支持在命令行搜索和选择，减少拼写错误。
- **高度自定义**, 但输出格式遵循标准的 [Angular commit](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) 规范。
- [更好维护 monorepo 工程化项目](#scopes) 与 **commitlint** 配合给予命令行的相关校验信息。
- 更好的与issue链接，尤其 [gitee](#issuePrefixs) | ✅ 支持在 commit 中添加 **emoji**。

## 使用

::: tip
建议[全局安装](#全局使用) `commitizen cz-git`,如此一来可以快速使用 `cz` 或 `git cz` 命令进行启动。
```bash
npm install -g commitizen cz-git
```
:::

### 项目中使用
只需要简单的三个步骤：

- **step 1:** 下载依赖
:::: code-group
::: code-group-item NPM
```bash
npm install -D cz-git
```
:::
::: code-group-item YARN
```bash
yarn add -D cz-git
```
:::
::::

- **step 2:** 修改 package.json 添加 `config` **指定使用的适配器，并添加启动命令**。
  - 完成配置修改后即可以尝试使用 `npm commit` 或 `yarn commit` 测试启动。
  
```json{3,5,6,7}
{
  "scripts": {
    "commit": "git cz"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }
}
```

- **step 3:** 添加自定义配置(可选，使用默认)
  - 有==两种==配置方式

<br>

**方式一: (推荐) cz-git 与 [commitlint](https://github.com/conventional-changelog/commitlint) 进行联动给予校验信息**，所以可以编写于 [commitlint](https://github.com/conventional-changelog/commitlint#config) 配置文件之中。<br>例如: ([⇒ 配置模板](#配置模板))
```js{2,7,8,9,10}
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rule: {
    ...
  },
  prompt: {
    useEmoji: true
    //option...
  }
}
```
**方式二:** 在 **package.json** 下 config.commitizen 下添加自定义配置，但过量的配置项会导致 package.json 臃肿，适合简单自定义。例如:

```json{8}
{
  "scripts": {
    "commit": "git cz"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git",
      "useEmoji": true
    }
  }
}
```

### 全局使用
> 全局安装的好处在于：在任何项目下都可以利用 `cz` 或 `git cz` 命令启动命令行工具，生成标准化 commit message

只需要简单的三个步骤：
- **step 1:** 下载全局依赖

```bash
npm install -g cz-git commitizen
```

- **step 2:** 全局配置适配器类型
```bash
echo '{ "path": "cz-git" }' > ~/.czrc
```

- **step 3:** 添加自定义配置(可选，使用默认配置)
    - 有 ==两种== 配置方式
<br>

**方式一:** 编辑 `~/.czrc` 文件以 ==json== 形式添加配置, 例如:
```json{3}
{
  "path": "cz-git",
  "useEmoji": true
}
```
**方式二: 与 [commitlint](https://github.com/conventional-changelog/commitlint) 配合**，在 `$HOME` 路径下创建配置文件 ([↓ 配置模板](#配置模板))

## 配置模板
### 默认模板

::: details .commitlintrc.js 完整 默认 配置模板
```js
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "Input ISSUES Prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34, #I972S:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above ?"
    },
    types: [
      { value: "feat", name: "feat:     A new feature", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      A bug fix", emoji: ":bug:" },
      { value: "docs", name: "docs:     Documentation only changes", emoji: ":memo:" },
      { value: "style", name: "style:    Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
      { value: "perf", name: "perf:     A code change that improves performance", emoji: ":zap:" },
      { value: "test", name: "test:     Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    Changes that affect the build system or external dependencies", emoji: ":building_construction:" },
      { value: "ci", name: "ci:       Changes to our CI configuration files and scripts", emoji: ":green_heart:" },
      { value: "chore", name: "chore:    Other changes that don't modify src or test files", emoji: ":hammer:" },
      { value: "revert", name: "revert:   Reverts a previous commit", emoji: ":rewind:" }
    ],
    useEmoji: false,
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    allowBreakingChanges: ['feat', 'fix'],
    upperCaseSubject: false,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
```
:::

### 中英文对照模板

::: details .commitlintrc.js 完整 中英文 配置模板
```js
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    messages: {
      type: "选择你的提交类型   | Select the type of change that you\'re committing:",
      scope: "选择一个模块范围(可选) | Denote the SCOPE of this change (optional)",
      customScope: "自定义修改模块名 | Denote the SCOPE of this change:",
      subject: '简短说明 | 使用"|"可换行 Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: '详细说明(可选) 使用"|"可换行 \n  Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: "非兼容性说明(可选) | List any BREAKING CHANGES (optional):\n",
      footerPrefixsSelect: "选择关联issue前缀 | Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "输入自定义issue前缀 | Input ISSUES Prefix:",
      footer: "列举关联issue (可选) 例如: #31, #I3244  List any ISSUES CLOSED by this change (optional) :\n",
      confirmCommit: "是否提交或修改commit | Are you sure you want to proceed with the commit above?"
    },
    types: [
      {value: 'feat',     name: 'feat:     新增功能 | A new feature'},
      {value: 'fix',      name: 'fix:      修复缺陷 | A bug fix'},
      {value: 'docs',     name: 'docs:     文档更新 | Documentation only changes'},
      {value: 'style',    name: 'style:    代码格式 | Changes that do not affect the meaning of the code'},
      {value: 'refactor', name: 'refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature'},
      {value: 'perf',     name: 'perf:     性能提升 | A code change that improves performance'},
      {value: 'test',     name: 'test:     测试相关 | Adding missing tests or correcting existing tests'},
      {value: 'build',    name: 'build:    构建相关 | Changes that affect the build system or external dependencies'},
      {value: 'ci',       name: 'ci:       持续集成 | Changes to our CI configuration files and scripts'},
      {value: 'revert',   name: 'revert:   回退代码 | Revert to a commit'},
      {value: 'chore',    name: 'chore:    其他修改 | Other changes that do not modify src or test files'},
    ],
    useEmoji: false,
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    allowBreakingChanges: ['feat', 'fix'],
    upperCaseSubject: false,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [
      // 如果使用 gitee 作为开发管理
      { value: "link", name: "link:     将任务状态更改为进行中"},
      { value: "closed", name: "closed:   ISSUES 已经解决" }
      ],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
```
:::

### 纯汉化模板

::: warning
不推荐使用纯中文进行commit，因为终端对于中文输入的支持并不是很友好，并且在使用搜索时没有英文交互来得自然。<br>
推荐使用中英文对照，可以很好给予团队的新人帮助。
:::

::: details .commitlintrc.js 完整 纯汉化 配置模板
```js
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    messages: {
      type: "选择你的提交类型:",
      scope: "选择一个模块范围(可选):",
      customScope: "自定义修改模块范围",
      subject: '简短说明 | 使用"|"可换行 \n',
      body: '详细说明(可选) 使用"|"可换行 \n',
      breaking: "非兼容性说明(可选)\n",
      footerPrefixsSelect: "选择关联issue前缀(可选):",
      customFooterPrefixs: "输入自定义issue前缀",
      footer: "列举关联issue (可选) 例如: #31, #I3244:\n",
      confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      {value: '特性', name: '特性:     新增一个功能'},
      {value: '修复', name: '修复:     修复缺陷'},
      {value: '文档', name: '文档:     文档更新'},
      {value: '格式',    name: '格式:     代码格式改动，且不影响整体代码的改动'},
      {value: '重构',    name: '重构:     代码重构'},
      {value: '性能',     name: '性能:     性能提升'},
      {value: '测试',     name: '测试:     添加疏漏测试或已有测试改动'},
      {value: '构建',    name: '构建:     构建过程，构建工具变动'},
      {value: '集成',       name: '集成:     持续集成，开发工具，脚本变动'},
      {value: '回退',   name: '回退:     回退代码'},
      {value: '其他',    name: '其他:     配置或辅助工具的变动'},
    ],
    useEmoji: false,
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "自定义",
    emptyScopesAlias: "为空",
    allowBreakingChanges: ['feat', 'fix'],
    upperCaseSubject: false,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [
      // 如果使用 gitee 作为开发管理
      { value: "关联", name: "关联:     将任务状态更改为进行中"},
      { value: "关闭", name: "关闭:     ISSUES 已经解决" }
      ],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "跳过",
    customIssuePrefixsAlias: "自定义",
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
```
:::

### Emoji模板

::: details .commitlintrc.js 完整 emoji 配置模板
```js{21-31,33}
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "Input ISSUES Prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34, #I972S:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above ?"
    },
    types: [
      { value: "feat", name: "feat:     ✨  A new feature", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      🐛  A bug fix", emoji: ":bug:" },
      { value: "docs", name: "docs:     📝  Documentation only changes", emoji: ":memo:" },
      { value: "style", name: "style:    💄  Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: ♻️   A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
      { value: "perf", name: "perf:     ⚡️  A code change that improves performance", emoji: ":zap:" },
      { value: "test", name: "test:     ✅  Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    🏗️   Changes that affect the build system or external dependencies", emoji: ":building_construction:" },
      { value: "ci", name: "ci:       💚  Changes to our CI configuration files and scripts", emoji: ":green_heart:" },
      { value: "chore", name: "chore:    🔨  Other changes that don't modify src or test files", emoji: ":hammer:" },
      { value: "revert", name: "revert:   ⏪️  Reverts a previous commit", emoji: ":rewind:" }
    ],
    useEmoji: true,
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    allowBreakingChanges: ['feat', 'fix'],
    upperCaseSubject: false,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
```
:::

### JSON模板
::: tip
推荐在项目中使用JavaScript进行配置文件，你可以结合`fs`和`path` 为生成动态模块选择[范围](#scopes)
:::

::: details json 配置模板
```json
// .czrc | package.json | .commitlintrc(need "prompt" key)
{
  "messages": {
    "type": "Select the type of change that you're committing:",
    "scope": "Denote the SCOPE of this change (optional):",
    "customScope": "Denote the SCOPE of this change:",
    "subject": "Write a SHORT, IMPERATIVE tense description of the change:\n",
    "body": "Provide a LONGER description of the change (optional). Use \"|\" to break new line:\n",
    "breaking": "List any BREAKING CHANGES (optional). Use \"|\" to break new line:\n",
    "footerPrefixsSelect": "Select the ISSUES type of changeList by this change (optional):",
    "customFooterPrefixs": "Input ISSUES Prefix:",
    "footer": "List any ISSUES by this change. E.g.: #31, #34, #I972S:\n",
    "confirmCommit": "Are you sure you want to proceed with the commit above ?"
  },
  "types": [
    { "value": "feat", "name": "feat:     A new feature", "emoji": ":sparkles:" },
    { "value": "fix", "name": "fix:      A bug fix", "emoji": ":bug:" },
    { "value": "docs", "name": "docs:     Documentation only changes", "emoji": ":memo:" },
    { "value": "style", "name": "style:    Changes that do not affect the meaning of the code", "emoji": ":lipstick:" },
    { "value": "refactor", "name": "refactor: A code change that neither fixes a bug nor adds a feature", "emoji": ":recycle:" },
    { "value": "perf", "name": "perf:     A code change that improves performance", "emoji": ":zap:" },
    { "value": "test", "name": "test:     Adding missing tests or correcting existing tests", "emoji": ":white_check_mark:" },
    { "value": "build", "name": "build:    Changes that affect the build system or external dependencies", "emoji": ":building_construction:" },
    { "value": "ci", "name": "ci:       Changes to our CI configuration files and scripts", "emoji": ":green_heart:" },
    { "value": "chore", "name": "chore:    Other changes that don't modify src or test files", "emoji": ":hammer:" },
    { "value": "revert", "name": "revert:   Reverts a previous commit", "emoji": ":rewind:" }
  ],
  "useEmoji": false,
  "scopes": [],
  "allowCustomScopes": true,
  "allowEmptyScopes": true,
  "customScopesAlign": "bottom",
  "customScopesAlias": "custom",
  "emptyScopesAlias": "empty",
  "allowBreakingChanges": ["feat", "fix"],
  "upperCaseSubject": false,
  "breaklineChar": "|",
  "skipQuestions": [],
  "issuePrefixs": [{ "value": "closed", "name": "closed:   ISSUES has been processed" }],
  "customIssuePrefixsAlign": "top",
  "emptyIssuePrefixsAlias": "skip",
  "customIssuePrefixsAlias": "custom",
  "confirmColorize": true,
  "minSubjectLength": 0,
  "defaultBody": "",
  "defaultIssues": "",
  "defaultScope": "",
  "defaultSubject": ""
}
```
:::

### TypeScript模板
:::warning
不推荐使用 TypeScript 定义配置，因为**这会影响命令行工具启动速度** <br>
并且使用 js 配置文件添加`@type` 注释可以很好提供在配置时的代码提示
:::

::: details .commitlintrc.ts 完整 默认 配置模板
```ts
// .commitlintrc.ts
import type { UserConfig } from "cz-git"
const config: UserConfig = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "Input ISSUES Prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34, #I972S:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above ?"
    },
    types: [
      { value: "feat", name: "feat:     A new feature", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      A bug fix", emoji: ":bug:" },
      { value: "docs", name: "docs:     Documentation only changes", emoji: ":memo:" },
      { value: "style", name: "style:    Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
      { value: "perf", name: "perf:     A code change that improves performance", emoji: ":zap:" },
      { value: "test", name: "test:     Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    Changes that affect the build system or external dependencies", emoji: ":building_construction:" },
      { value: "ci", name: "ci:       Changes to our CI configuration files and scripts", emoji: ":green_heart:" },
      { value: "chore", name: "chore:    Other changes that don't modify src or test files", emoji: ":hammer:" },
      { value: "revert", name: "revert:   Reverts a previous commit", emoji: ":rewind:" }
    ],
    useEmoji: false,
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    allowBreakingChanges: ['feat', 'fix'],
    upperCaseSubject: false,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};

export default config
```
:::

## 配置说明
### 显示相关
#### messages
- **描述** : 自定义命令行提问信息
- **例子** : `messages: { type: "type: "选择你的提交类型:" }`

#### types
- **描述** : 自定义选择**类型**提示
- **类型** : `Array<{ name: string; value: string; emoji?: string }>`
- **例子** : `types: [{value: 'feat',     name: 'feat:     新增功能 | A new feature', emoji: ':sparkles:'}]`

:::tip
如果要使用 Emoji 需要 ==开启== `userEmoji` 配置项。<br>
==并且需添加 Emoji Code==，可以在: [https://gitmoji.dev/](https://gitmoji.dev/) 查找相应的字符进行补充到 `emoji`。
:::

#### useEmoji
- **描述** : 是否开启 commit message 带有 Emoji 字符。
- **类型** : `boolean`
- **默认** : `false`

#### customScopesAlign
- **描述** : 设置 **选择范围** 中 为空选项(empty) 和 自定义选项(custom) 的 **位置**
- **类型** : `"top" | "bottom" | "top-bottom" | "bottom-top"`
- **默认** : `"bottom"`

#### customScopesAlias
- **描述** : 自定义 **选择范围** 中 自定义选项(custom) 在命令行中显示的 **名称**
- **类型** : `string`
- **默认** : `custom`

#### emptyScopesAlias
- **描述** : 自定义 **选择范围** 中 为空选项(empty) 在命令行中显示的 **名称**
- **类型** : `string`
- **默认** : `empty`

#### customIssuePrefixsAlign
- **描述** : 设置 **选择 issue 前缀** 中 跳过选项(skip) 和 自定义选项(custom) 的 **位置**
- **类型** : `"top" | "bottom" | "top-bottom" | "bottom-top"`
- **默认** : `"top"`

#### customIssuePrefixsAlias
- **描述** : 自定义 **选择 issue 前缀** 中 自定义选项(custom) 在命令行中显示的 **名称**
- **类型** : `string`
- **默认** : `custom`

#### emptyIssuePrefixsAlias
- **描述** : 自定义 **选择 issue 前缀** 中 跳过选项(skip) 在命令行中显示的 **名称**
- **类型** : `string`
- **默认** : `skip`

#### confirmColorize
- **描述** : 确定提交中模板 commit message 是否着色
- **类型** : `boolean`
- **默认** : `true`

#### defaultScope
- **描述** : 在自定义范围 中是否使用显示默认值
- **类型** : `string`
- **默认** : `""`
- **使用** : 当你想要命令行中出现的默认值只需要按下 "Enter" 键即可
#### defaultSubject
- **描述** : 在简短**描述** 中是否使用显示默认值
- **类型** : `string`
- **默认** : `""`
- **使用** : 当你想要命令行中出现的默认值只需要按下 "Enter" 键即可

#### defaultBody
- **描述** : 详细**描述** 中是否使用显示默认值
- **类型** : `string`
- **默认** : `""`
- **使用** : 当你想要命令行中出现的默认值只需要按下 "Enter" 键即可


#### defaultIssues
- **描述** : 自定义issue前缀 中是否使用显示默认值
- **类型** : `string`
- **默认** : `""`
- **使用** : 当你想要命令行中出现的默认值只需要按下 "Enter" 键即可

<Badge type="tip" text="提示" vertical="middle" /> 可以编写JavaScript逻辑利用回调返回相关输入的默认值<br>e.g : `defaultSubject: ()=> {return ...}`

### 工程化规范化相关
#### scopes
- **描述** : 自定义选择 **模块范围** 命令行显示信息
- **类型** : `string[] | Array<{ name: string, value?: string }>`
- **默认** : `[]`
::: tip
如果你使用 [commitlint](https://github.com/conventional-changelog/commitlint) 规则定义了 `scope-enum`，会自动引入。<br>

---

如果你需要管理多软件包获得更好的体验，比如使用: [pnpm](https://pnpm.io/) | [lerna.js](https://lerna.js.org/) 管理monorepo 可以利用 `path` 和 `fs` 模块动态定义 commit message 中的scopes(范围)显示
```js
// .commitlintrc.js 
const fs = require('fs')
const path = require('path')
const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))
module.exports = {
  prompt: { scopes: [...packages] }
}
```

---

当然如果你想给模块范围自定义添加 ****描述**信息** 显示在命令行中可以使用 name 和 value 来定义 <br>
e.g: `scopes: [{value: "theme", name: "theme : 风格主题"}]` <br>

:::

#### scopeOverrides
- **描述** : 自定义选择了特定**类型**后 **覆盖模块范围** 命令行显示信息
- **类型** : `{ [type: string]: string[] | Array<{ name: string, value?: string }> } | undefined`
- **默认** : `undefined`
- **例子** : `scopeOverrides: { "test": ['e2eTest, 'unitTest'] }`
- **使用** : 针对选择 ==特定== 的 commit **类型** `type` 后选择模块范围时显示 自定义的模块范围选择

:::tip
如果定义`scopeOverrides` 就要定义通用的 `scopes`
:::

#### allowCustomScopes
- **描述** : 是否在选择 **模块范围** 显示自定义选项(custom)
- **类型** : `boolean`
- **默认** : `true`
- **使用** : 没有使用 `commitlint`并且想在选择中关闭自定义选项

:::tip
会自动检测 [commitlint](https://github.com/conventional-changelog/commitlint) 规则 `scope-enum`的定义是否严格，自动不显示。
:::

#### allowEmptyScopes
- **描述** : 是否在选择 **模块范围** 显示为空选项(empty)
- **类型** : `boolean`
- **默认** : `true`


#### allowBreakingChanges
- **描述** : 允许出现 重大变更(BREAKING CHANGES)的特定 **type**
- **类型** : `string[]`
- **默认** : `['feat', 'fix']`

#### upperCaseSubject
- **描述** : 是否自动将简短描述(subject)第一个字符进行大写处理
- **类型** : `boolean`
- **默认** : `false`

#### breaklineChar
- **描述** : 详细描述(body)和重大变更(BREAKING CHANGES)中换行字符
- **类型** : `string`
- **默认** : `"|"`

#### skipQuestions
- **描述** : 自定义选择指定的问题不显示
- **类型** : `Array<"scope" | "body" | "breaking" | "footerPrefix" | "footer">`
- **默认** : `[]`

#### issuePrefixs
- **描述** : 自定义选择issue前缀
- **类型** : `Array<{ value: string, name: string }>`
- **默认** : `[{ value: "closed", name: "closed:   ISSUES has been processed" }]`

:::tip
国内用户如果使用 Gitee 作为项目管理，那么该工具可以很好 ==利用 commit message改变issue状态== <br>
详情： [Commit 关联Issue](https://gitee.com/help/articles/4141#article-header2) <br>
通过设置任务状态指令，即起issue状态变更的别名，通过选择别名和输入issue号，可以很好的关联管理issue
:::

#### maxHeaderLength
- **描述** : 定义commit message中的 header 长度, 给予在命令行中的校验信息
- **类型** : `number`
- **默认** : `Infinity`
- **使用** : 当没有使用 commitlint 并要使用规范化时
:::tip
如果使用 commitlint 会自动读取 `header-max-length` 进行设置给予在命令行中的提示
:::


#### maxSubjectLength
- **描述** : 定义commit message中的 subject 长度, 给予在命令行中的校验信息
- **类型** : `number`
- **默认** : `Infinity`
- **使用** : 当没有使用 commitlint，并要使用规范化时
:::tip
如果使用 commitlint 会自动读取 `subject-max-length` 进行设置给予在命令行中的提示 <br>
当然如果可以只定义 `maxHeaderLength` 即可达到目的
:::
#### minSubjectLength
- **描述** : 定义commit message中的 subject 长度, 给予在命令行中的校验信息
- **类型** : `number`
- **默认** : `0`
- **使用** : 当没有使用 commitlint，并要使用规范化时
:::tip
如果使用 commitlint 会自动读取 `subject-min-length` 进行设置给予在命令行中的提示
:::

## 常见问题
### 为什么做了这款插件
[cz-git 友好型 commitizen 的适配器，我的开发的心路历程](https://www.qbenben.com/post/2022/02/27/cz-git/)

### windows 用户使用
- windows用户建议不要使用 powershell, cmd 进行命令行的使用
- 因为他们不是基于 POSIX SHELL 规范，即不是标准终端环境
- 建议也不要使用 gitbash，因为该终端并不是交互型终端，上下选择会受到很大的使用体验
- **建议使用 Windows Terminal 结合 WSL ，你在日常的开发和使用中也应该如此**

### 全局安装后无法找到命令
- 输入命令 `npm prefix -g` 查看当中npm全局下载的路径是否为根目录下
- 大概率是因为使用 nvm 更改了 npm 的全局下载路径前缀
- 可以打开.zshrc 或者 .bashrc 将加载 nvm 先注释掉，重新开启终端检查

### 终端无法显示Emoji符号
- 终端无法Emoji符号，大概率是因为你的终端对于 emoji/unicode 字符支持较差，但是不影响提交
  因为最终输出提交的是 Emoji Code，可以考虑更换终端与[字体](https://github.com/ryanoasis/nerd-fonts)
### 为什么输出的 Emoji符号要放在 subject
- 我也知道会破坏最终输出格式的美观体验，但Emoji 放在 subject 是因为遵循 [Angular commit](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) 规范不能放于 type 中

## 版权信息
MIT
Copyright (c) 2022-present Qiubin Zheng <zhengqbbb@gmail.com> (https://github.com/Zhengqbbb)

> I just try my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/cz-git) to encourage me ?

> 我是 Qbenben，一个爱折腾在沉浸在代码世界打怪升级的深圳小靓仔，感谢您的阅读。[Github](https://github.com/Zhengqbbb) · [Blog](https://www.qbenben.com/)
