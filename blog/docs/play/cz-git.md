---
lang: zh-CN
title: cz-git 中文文档
description: cz-git 中文文档 | cz-git 是一款commitizen adapter(适配器)，拥有高度自定义，针对gitee commit issue支持，支持emoji的commit，与commitlint配合检查，可以有效减少commit错误，达到commit标准化规范，前端工程化工具。
lastUpdated: true
sidebarDepth: 2
---

<p align="center">
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git">
        <img src="https://user-images.githubusercontent.com/40693636/154064210-964aeaa0-d9dc-4cea-9e52-2ffc3789611b.png" alt="cz-git-logo" width="400" data-width="400" data-height="400">
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
  - [规范化相关](#规范化相关)
- [常见问题](#常见问题)
- [版权](#版权)

<!-- /TOC -->

## 介绍

一款工程性更强，高度自定义，标准输出格式的 [commitizen](https://github.com/commitizen/cz-cli) 适配器

![demo-gif](https://user-images.githubusercontent.com/40693636/154906217-e0b1c5d0-9294-4072-8082-c0cdd9392023.gif)

> 什么是commitizen：基于Node.js的 `git commit` 命令行工具，辅助生成标准化的 commit message。<br>
> 什么是适配器：更换命令行的**交互方式**插件。

## 特点

- 友好型命令行工具，**“懒字优先”** ！支持在命令行搜索和选择，减少错误，更好维护工程化项目。
- **高度自定义**, 但输出格式遵循标准的 [Angular commit](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) 规范。
- 与 **commitlint** 配合给予命令行的相关校验信息。
- **减少拼写错误** | 更好的与issue链接，尤其gitee | ✅ 支持在 commit 中添加 **emoji**。

## 使用

::: tip
建议[全局安装](#全局使用) `commitizen git-cz`,如此一来可以快速使用 `cz` 或 `git cz` 命令进行启动。
```bash
npm install -g commitizen git-cz
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
    - 有==两种==配置方式
<br>

**方式一:** 编辑 `~/.czrc` 文件以==json==形式添加配置, 例如:
```json{3}
{
  "path": "cz-git",
  "useEmoji": true
}
```
**方式二: 与 [commitlint](https://github.com/conventional-changelog/commitlint) 配合**，在 `$HOME` 路径下创建配置文件 ([⇒ 配置模板](#配置模板))

## 配置模板
### 默认模板
::: details .commitlintrc.js 配置
```js
// .commitlintrc.js
/** @type {import('./lib').UserConfig} */
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
### 纯汉化模板
### Emoji模板
### JSON模板
### TypeScript模板

## 配置说明
### 显示相关
#### messages
#### types
#### useEmoji
#### customScopesAlign
#### customScopesAlias
#### emptyScopesAlias
#### customIssuePrefixsAlign
#### emptyIssuePrefixsAlias
#### customIssuePrefixsAlias
#### confirmColorize
#### defaultBody
#### defaultIssues
#### defaultScope
#### defaultSubject
### 规范化相关
#### scopes
#### scopeOverrides
#### allowCustomScopes
#### allowEmptyScopes
#### allowBreakingChanges
#### upperCaseSubject
#### breaklineChar
#### skipQuestions
#### issuePrefixs
#### maxHeaderLength
#### maxSubjectLength
#### minSubjectLength

## 常见问题

## 版权

MIT
Copyright (c) 2022-present Qiubin Zheng <zhengqbbb@gmail.com> (https://github.com/Zhengqbbb)

> I just try my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/cz-git) to encourage me ?

> 我是 Qbenben，一个爱折腾在沉浸在代码世界打怪升级的深圳小靓仔，感谢您的阅读。[Github](https://github.com/Zhengqbbb) · [Blog](https://www.qbenben.com/)
