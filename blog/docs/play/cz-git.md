---
lang: zh-CN
title: commitizen 适配器 —— cz-git
description: cz-git 是一款commitizen adapter(适配器)，拥有高度自定义，针对gitee commit issue支持，支持emoji的commit，与commitlint配合检查，可以有效减少commit错误，达到commit标准化规范，可针对monorepo前端工程化工具。
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


### 新版文档已完成： 

<p align="center">
    <a href="https://github.com/Zhengqbbb/cz-git">Github</a>
    &nbsp; | &nbsp;
    <a href="https://cz-git.qbb.sh/guide/getting-started.html">Installation</a>
    &nbsp; | &nbsp;
    <a href="https://cz-git.qbb.sh">Website</a>
    &nbsp; | &nbsp;
    <a href="https://cz-git.qbb.sh/zh/">简体中文文档</a>
</p>

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

## 版权信息
MIT
Copyright (c) 2022-present Qiubin Zheng <zhengqbbb@gmail.com> (https://github.com/Zhengqbbb)

> I just try my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/cz-git) to encourage me ?

> 我是 Qbenben，一个爱折腾在沉浸在代码世界打怪升级的深圳小靓仔，感谢您的阅读。[Github](https://github.com/Zhengqbbb) · [Blog](https://blog.qbb.sh/)
