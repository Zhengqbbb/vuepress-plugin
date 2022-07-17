---
layout: Post
title: cz-git 友好型 commitizen 的适配器
description: 我的开发心路历程 | cz-git 是一款commitizen adapter(适配器)，拥有高度自定义，针对gitee commit issue支持，支持emoji的commit，与commitlint配合检查，可以有效减少commit错误，达到commit标准化规范，可针对monorepo前端工程化工具。
subtitle: 为什么会开发 cz-git
author: qbenben
date: 2022-02-27
useHeaderImage: true
headerImage: https://tva3.sinaimg.cn/large/6ccee0e1gy1gztgn21x8zj21uc0x648q.jpg
headerMask: rgba(95, 96, 99, .5)
catalog: true
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 前端
  - 前端工程化
---


我的开发心路历程

<!-- more -->

<br>
<p align="center">
<a target="_blank" href="https://github.com/Zhengqbbb/cz-git">Github</a>
·
<a target="_blank" href="https://cz-git.qbb.sh">中文文档</a>
</p>

![demo-gif](https://user-images.githubusercontent.com/40693636/154906217-e0b1c5d0-9294-4072-8082-c0cdd9392023.gif)

---
## 前言
> 本文不会讲述 cz-git 的使用方法，主要讲述我在开发这款适配器中的心路历程。

- 随着多人开发团队推进着前端工程化的不断发展，团队规范与项目系统化配套工具链条也在不断诞生。
- 从 `lerna` 或到最近兴起的 `pnpm` 管理 `monoreo workspace`。
- `eslint` 配合 `pretter` 确保团队代码格式统一性。
- `commitizen` 配合 `commitlint` 与 `lint-staged` 与 `husky` 之间的配合，把关最后提交代码质量与 commit 信息规范。
- 再到利用 `circleci`, `github action` 或 `gitee go` 进行CI/CD(持续集成、持续交付和持续部署)。

## 概念
**什么是 commitlint** : git commit 时对于 commit message 进行规范检查的工具，保证团队的一致性。

**什么是 commitizen** : 基于Node.js的 `git commit` 命令行工具，辅助生成标准化规范化的 commit message。

**什么是 adapter(适配器)** : 更换 commitizen 命令行工具的**交互方式**插件。

---

**cz-git 有什么特点**
- 友好型命令行工具，**“懒字优先”** ！支持在命令行搜索和选择，减少拼写错误。
- **高度自定义**, 但输出格式遵循标准的 [Angular commit](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) 规范。
- 更好维护 monorepo 工程化项目 与 **commitlint** 配合给予命令行的相关校验信息。
- 更好的与issue链接，尤其 **gitee** | ✅ 支持在 commit 中添加 **emoji**。

## 为什么不使用
### cz-conventional-changelog
> commitizen 官方的适配器(起初所使用)
  - 添加配置需要写在 `package.json` 中，并且可支持的自定义配置太少
  - 交互方式并不友好，重复性输入的东西太多

### cz-customizable
> 可支持自定义的适配器(cz-git 起初参照对象)
  - 随着使用 `monoreo` ，我开始寻求更好的适配器来解决我**需要重复输入 `scopes` 的问题，但不久后我发现这并不是我想要的**。
  - 随着我的 packages 不断增大，**仅支持选择的交互方式体验会很难受**，需要从上到下不断寻找。
  - 配置文件问题，我需要额外增加 `.cz-config.js` 在我的项目中，如此一来我配合 `commitlint` 需要配置两个地方，这为什么不能联动配合获取。
  - 支持的自定义配置还是太少，比如我想要 跳过选项 置于顶部，以配合团队 commit 整体习惯等，这些大大小小会很影响使用体验。


## 解决痛点以及心路历程

1. **工程师追求的极致 ”懒“** ：作为开发工程师的我们平时会利用我们的习惯结合我们的技术，去想办法处理好重复性的工作或者恶心难受的事情，这也是我所**追求向往**的。
2. **什么是友好交互型命令行工具** ：命令行工具的设计一定要具有引导性，要有很好的支持交互型的**complate**。<br><br>比如说我为我的 `monorepo` ui库中 table 添加了测试。我在 commit 的时候**脑海里第一时间浮现**是 test table。但如果像之前适配器要我去选择大量选项，就会很烦，失去了使用命令行工具的便利性，并且还有拼写出错的风险。<br>我想要的是 只用输入 `te` 回车输出`test`, `ta` 回车输出 `table`，这样用起来才舒服。<br><br>
3. **如何支持好高度自定义以及配置** ：这个工具的高度自定义肯定是结合**团队习惯**自定义设计。<br>比如大多数情况我们的 commit `scopes`(范围) 是为空直接跳过，那么我们的第一项应该是 `empty`。如果是团队高度规范了规则的输出，那么我们的 `empty` 应该不显示或者置于底部。
4. **最后也是我发现至关重要的一点** ：使用 ==gitee== 进行开发管理中，利用 commit message可以改变issue状态。[Commit 关联Issue](https://gitee.com/help/articles/4141#article-header2) <br> 
  **通过设置任务状态指令，即起issue状态变更的别名，通过选择别名和输入issue号，可以很好的关联并管理issue**<br>
  再配合命令行中所支持搜索与选择，就会达到很好的体验。   
  比如像我就经常会等到开发完成后才到==网页==将 issue 待进行转为待完成再进行流程，没有很好的关联代码提交留痕。现在我只需要在创建分支的时候分支名携带issue number。结合我设置`finish`为 将任务转为待完成，这样我就能在 commit 的时候更改issue状态并留痕代码提交记录方便回溯。

<br>
<br>

基于以上的初心我开发了 [cz-git](https://github.com/Zhengqbbb/cz-git)，欢迎大家前来使用。如果觉得不错的可以给个小星星~


## 写在最后
你要问我这达到你的目的了吗 ？ 其实我还没有
1. 基于 `Node.js` 来启动的命令行，光是启动 Node.js 就慢了。但如果你如果你只接触了`Node.js` 的命令行工具应该没有感觉，但对于我来说经常接触命令行生态的人而言会很难受。这种感觉就像是使用了 `144 Hz` 的显示器屏幕回不到 `60 Hz` 的感觉。
2. **依赖 Node.js 环境**，无法做到零依赖的兼容性支持，简单来说就是格局小了。比方你要给其他部门的安利 `cz-git`，你需要告诉他，需要安装Node.js再...才能使用。
3. 拿 `Go，Rust` 来制作 `commitizen` ？ 答案是不会，体积和速度我还是无法接受<br>
引用 [zlua](https://github.com/skywind3000/z.lua) 作者的一句话: (但也不是Lua，需要依赖Lua环境)
> 很多命令行工具 go/rust 写成，动不动就 2MB / 3MB，他们都还没有完成加载,lua 脚本可能都运行完了

挖坑，待我继续深耕，开发完成后再来揭晓

---

<br>
<br>

> I just try my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/cz-git).    
> 我是 Qbenben，一个爱折腾在沉浸在代码世界打怪升级的深圳小靓仔，感谢您的阅读。[Github](https://github.com/Zhengqbbb) · [Blog](https://blog.qbb.sh/)
