---
layout: Post
title: 新版 husky 配置与剖析
description: husky 配置与剖析，前端工程化 —— husky | Qbenben blog. Record my life | 在代码世界里打怪升级的小靓仔
subtitle: 前端工程化 —— husky
author: qbenben
date: 2022-01-11
useHeaderImage: true
headerImage: https://tvax2.sinaimg.cn/large/6ccee0e1gy1gy9j86zzxcj21kw0y64la.jpg
headerMask: rgba(40, 57, 101, .4)
catalog: true
tags:
  - 前端
  - 前端工程化
---


分享近期配置 husky 的一些心得

<!-- more -->

# husky

<br>
<p align="center">
<a target="_blank" href="https://github.com/typicode/husky">Github</a>
·
<a target="_blank" href="https://typicode.github.io/husky/#/">文档</a>
</p>

---
husky 是前端工程化不可缺少的工具，它支持添加项目的 git hooks(可以理解为git命令操作时会触发的钩子事件)，如此一来我们就能在提交代码时，

配合 [commitlint](https://github.com/conventional-changelog/commitlint) | [lint-staged](https://github.com/okonet/lint-staged) & Eslint，对==提交信息==进行检查 | 运行测试 | 检查代码格式与是否报错。


## (4.*) 旧版配置

## (7.*) 新版配置

## 新版做了什么

## 剖析husky

