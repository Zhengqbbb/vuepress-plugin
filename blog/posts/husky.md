---
layout: Post
title: 新版 husky 配置与Git Hooks剖析
description: husky 配置与Git Hooks剖析，前端工程化 —— husky | Qbenben blog. Record my life | 在代码世界里打怪升级的小靓仔
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
husky 是前端工程化不可缺少的工具，它支持添加项目的 git hooks(可以理解为git命令操作时会触发的钩子事件)，如此一来我们就能在提交代码时:

配合 [commitlint](https://github.com/conventional-changelog/commitlint) | [lint-staged](https://github.com/okonet/lint-staged) & ESlint & Stylelint，对==提交信息==进行检查 | 运行测试 | 检查代码格式与是否报错。

<br>
我还记得在我实习的时候，我老大就经常会进行前端工程化的工作，将我们几个实习生的代码规范和开发流程严格把控，时间长了对这几个前端工程化工具慢慢就会熟悉。这恰恰是一个开发团队需要的开发规范。这几天我也需要搭建一个新的项目但是发现 husky 的配置和原来有很大的不一样。


## (4.*) 旧版玩法
---
#### 1. 下载依赖

<CodeGroup>
<CodeGroupItem title="NPM" active>

```bash
npm install -D husky@^4.3.0
```
</CodeGroupItem>

<CodeGroupItem title="YARN">

```bash
yarn add -D husky@^4.3.0
```

</CodeGroupItem>
</CodeGroup>

#### 2. 配置
> 在 ==package.json== 中配置 `husky` 属性
```json
{
  "husky": {
    "hooks": {
      "pre-push": "npm run test",
      "commit-msg": "commitlint --config -E HUSKY_GIT_PARAMS"
    }
  }
}
```

- 这样在你执行 `git commit` 的时候就会自动执行 `commitlint` 命令。**即**把你的commit信息赋值给 `HUSKY_GIT_PARAMS` 作为参数传入`commitlint`命令进行校验。
- 这里可以看出旧版主要是利用 `package.json` 进行钩子信息获取。

## (7.*) 新版玩法
---
#### 1. 下载依赖

<CodeGroup>
<CodeGroupItem title="NPM" active>

```bash
npm install -D husky
```
</CodeGroupItem>

<CodeGroupItem title="YARN">

```bash
yarn add -D husky
```

</CodeGroupItem>
</CodeGroup>

#### 2. 配置
> 在 ==package.json== 中配置 `scripts` 添加属性
```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```
> 新版 husky 提供命令来添加 git 钩子事件 —— `husky add <file> [cmd]`，即执行下面的命令
```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
npx husky add .husky/pre-push "npm run test"
```

- `prepare` 是 `NPM` 操作的生命周期的一环，**即**当我们执行 `npm install` 时会按照生命周期以此触发生命周期钩子，在NPM7：`preinstall -> install -> postinstall -> prepublish -> preprepare -> prepare -> postprepare`
- 这里可以发现 `commit-msg` 和 `pre-push` 和旧版配置中有点眼熟，这两个恰恰都是我们就是执行git命令==钩子事件名== [Git Hooks](#剖析git-hooks)


## 新版剖析
---

==git hooks一共有两种方式创建：==
1. 第一种就是旧版的在 `.git/hooks` 文件夹中创建对应事件名的脚本文件
2. 第二种就是定义 `hooksPath` 配置指向 hooks 文件夹

#### 为什么抛弃传统js的写法
> 作者写的文章：[链接](https://blog.typicode.com/husky-git-hooks-javascript-config/)
1. **创建了所有的 `git hooks`** ：旧版正是 git hooks 创建方式的第一种
    - 好处：用户不需要关心 git hooks类型，只需要在 `package.json` 配置命令即可
    - 坏处：每次执行 git 操作时所有的 `git hooks`都会挨个执行
2. **没办法按需引入 `git hooks`**：当用户对 `package.json` 进行添加操作后，没办法同步添加 `.git/hooks`对应的钩子文件。
3. **太局限，用户自定义困难**：比如我有需求在命令行当中利用钩子进行构建，生成文件，读取文件信息等需要大量 `shell` 命令时，对于一个天天接触 shell 的我而言只能写单一脚本的传统的 `package.json`写法 太局限了，会很难受。
> e.g: 输出一些信息:

![e.g-img](https://tvax2.sinaimg.cn/large/6ccee0e1gy1gy9s2f80wtj21c20raasm.jpg)

#### 新版是什么原理
1. git config 的`core.hooksPath`。在2016年 `git 2.9` 版本引入新[feature](https://git-scm.com/docs/githooks#_description)，`hooksPath`属性可以==支持设置 Git Hooks 文件夹指向==。我们可以打开 `.git/.config`文件看看：
![git config](https://tvax2.sinaimg.cn/large/6ccee0e1gy1gy9scfxydgj21k00e6gth.jpg)
2. 新版顺利安装后我们会得到一个文件夹正是`.husky`：
```bash
$  x ls -T .husky/ -a
.husky
├── _
│  ├── .gitignore
│  └── husky.sh
├── commit-msg
└── pre-commit
```
3. 从这里开始他的设计已经明了：==定义了Git Hooks 指向文件夹后，git 命令的执行时会去对应文件夹下寻找与事件名同名的文件==
4. 至于新版的commit-msg命令中的 `$1` 进行输出确认是 `.git/COMMIT_EDITMSG` 文件： 即最近一次的commit edit message。

```mermaidjs
flowchart LR
    A["git commit"] -->B["git config hooksPath"]
    B["git config hooksPath"] -->C["To find folder '.husky'"]
    C["To find folder '.husky'"] --> D["find 'pre-commit'"]
    D["find 'pre-commit'"] -->E["source 'pre-commit'"]
```

#### 总结

- 其实新版这个设计对于小白添加了一定难度，但是对于项目上的设计放开的局限性。husky的目的也达到了：作为项目管理上的git hooks的入口。
- 立个flag，我相信我们X-Cmd团队后续应该会替代他

## 旧版迁移新版
---

1. 删除项目当中的 `.git/hooks` 文件夹、
2. 删除package.json的 `husky` 属性
3. 执行上面新版的[操作](#_7-新版玩法)

## Git Hooks
---
> 除了 `commit-msg` 和 `pre-commit` 还有什么git hooks ？ [文档](https://git-scm.com/docs/githooks)

| Git Hook           | 调用时机                                                        | 说明                 |
| ------------------ | --------------------------------------------------------------- | -------------------- |
| pre-applypatch     | `git am`执行前                                                  |                      |
| applypatch-msg     | `git am`执行前                                                  |                      |
| post-applypatch    | `git am`执行后                                                  | 不影响`git am`的结果 |
| ==pre-commit==     | `git commit`执行前          |     可以用`git commit --no-verify`绕过                 |
| ==commit-msg==     | `git commit`执行前               |      可以用`git commit --no-verify`绕过                |
| post-commit        | `git commit`执行后           |       不影响`git commit`的结果               |
| pre-merge-commit   | `git merge`执行前                |      可以用`git merge --no-verify`绕过。     | 
| prepare-commit-msg | `git commit`执行后，编辑器打开之前     |                      | 
| pre-rebase         | `git rebase`执行前            |                      | 
| post-checkout      | `git checkout`或`git switch`执行后   |            如果不使用`--no-checkout`参数，则在`git clone`之后也会执行。 |
| post-merge         | `git commit`执行后           |          在执行`git pull`时也会被调用|
| ==pre-push==       | `git push`执行前                      |                      |
| pre-receive        | `git-receive-pack`执行前                                        |                      |
| update             |                                                                 |                      |
| post-receive       | `git-receive-pack`执行后      |               不影响`git-receive-pack`的结果       |
| post-update        | 当 `git-receive-pack`对 `git push` 作出反应并更新仓库中的引用时 |                     |
| ...                |                                                                 |                |


<br>
<br>

> 我是 Qbenben，一个在沉浸在代码世界打怪升级的深圳小靓仔，目前正在开发维护 [X-Cmd](https://x-cmd.com/) Shell开源工具库，感谢您的阅读。[Github](https://github.com/Zhengqbbb) · [Blog](https://www.qbenben.com/)
