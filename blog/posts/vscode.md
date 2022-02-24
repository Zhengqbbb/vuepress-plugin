---
layout: Post
title: VSCode常用插件以及配置分享
description: VSCode 常用插件以及配置分享 | Qbenben blog. Record my life | 在代码世界里打怪升级的小靓仔
subtitle: VSCode常用插件以及配置分享
author: qbenben
date: 2022-02-06
useHeaderImage: true
headerImage: https://tva3.sinaimg.cn/large/6ccee0e1gy1gz4gi2e457j22800z0an6.jpg
headerMask: rgba(40, 57, 101, .6)
catalog: true
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 折腾记录
---


记录留痕自己VS Code常用的插件，以及share配置

<!-- more -->
## 整体效果
![整体效果](https://tva3.sinaimg.cn/large/6ccee0e1gy1gyao2urxjwj22yo1mmx6q.jpg)

## 插件篇

### 基础插件

::: details 命令行一键安装
```shell
while read -r s; do
  code --install-extension "$s" --force
done <<A
esbenp.prettier-vscode
ms-vscode-remote.remote-ssh
ms-azuretools.vscode-docker
eamodio.gitlens
usernamehw.errorlens
OBKoro1.korofileheader
formulahendry.code-runner
christian-kohler.path-intellisense
wix.vscode-import-cost
wayou.vscode-todo-highlight
emilast.LogFileHighlighter
humao.rest-client
MS-CEINTL.vscode-language-pack-zh-hans
intellsmi.comment-translate
A
```
:::

**Prettier - Code formatter**
: 格式化插件

**Remote - SSH**
: vscode ssh远程服务器

**Docker**
: vscode 访问docker容器

**GitLens**
: 代码行中查看 git 提交历史

**Error Lens**
: 错误信息代码行显示

**koroFileHeader**
: 快捷键自动生成函数注释 | 文件注释

**TODO Highlight**
: TODO 等注释高亮

**Code Runner**
: vscode 代码一键运行

**Path Intellisense**
: 智能路径提示

**Import Cost**
: 计算JavaScript引入依赖包大小

**Log File Highlighter**
: log文件高亮显示

**REST Client**
: 类似 postman 的vscode测试接口工具

#### 翻译插件

**Chinese**
: 中文汉化vscode

**Comment Translate**
: 强力安利这款==划词翻译插件==，是我目前用到最好用的，配置成使用的是`Bing`免去代理的痛苦，安装后打开 `setting.json` 添加下列配置就可以很舒服的使用

```json
"commentTranslate.source": "Bing"
```

### 主题插件
::: details 命令行一键安装
```shell
while read -r s; do
  code --install-extension "$s" --force
done <<A
zhuangtongfa.material-theme
PKief.material-icon-theme
A
```
:::

**One Dark Pro**
: 来自Atom中的dark主题 | 吸血鬼主题

**Material Icon Theme**
: 文件图标

### 语言插件
#### 前端篇
::: details 命令行一键安装
```shell
while read -r s; do
  code --install-extension "$s" --force
done <<A
formulahendry.auto-close-tag
formulahendry.auto-rename-tag
2gua.rainbow-brackets
iceliu.highlight-icemode
Zignd.html-css-class-completion
ritwickdey.LiveServer
pranaygp.vscode-css-peek
mrmlnc.vscode-scss
stylelint.vscode-stylelint
akamud.vscode-javascript-snippet-pack
xabikos.JavaScriptSnippets
dbaeumer.vscode-eslint
rbbit.typescript-hero
ms-vscode.vscode-typescript-tslint-plugin
hollowtree.vue-snippets
johnsoncodehk.volar
octref.vetur
A
```
:::

**Auto Close Tag**
: 自动合并html标签块

**Auto Rename Tag**
: 标签对同步修改

**Rainbow Brackets**
: 括号对 高亮区分

**highlight-icemode**
: 快速匹配高亮的括号对

**IntelliSense for CSS class names in HTML**
: 根据在工作区中找到的定义或通过link元素引用的外部文件为 HTML 属性提供 CSS 类名称补全

**Live Server**
: 搭建本地服务器，运行html

**CSS Peek**
: 根据上下文快速寻找匹配的class的css

**SCSS IntelliSense**
: scss的智能提示

**Stylelint**
: 配合 stylelint 对于样式代码进行规范

**JavaScript Snippet Pack**
: 提供常见的 JavaScript 代码片段

**JavaScript (ES6) code snippets**
: 提供常见的 JavaScript （ES6）代码片段

**ESLint**
: 配合 eslint 对于JavaScript代码进行规范

**TypeScript Hero**
: 智能排序组织 ts的相关导入性文件

**TSLint**
: 配合 tslint 对于TypeScript代码进行规范

> Vue 3

**Volar**
: 针对 Vue3 的官方插件，编写vue3代码**必备**

> Vue 2.x

**Vetur**
: 针对 Vue2.x 的官方插件

**Vue 3 Snippets**
: 提供Vue3 和 Vue2.x 的常见的代码片段
#### Shell篇

::: details 命令行一键安装
```shell
while read -r s; do
  code --install-extension "$s" --force
done <<A
bbenoist.shell
timonwong.shellcheck
Remisa.shellman
luggage66.AWK
A
```
:::

**Shell**
: Shell 是一个VS Code扩展，可让您直接从vscode编辑器执行 shell 命令。

**ShellCheck**
: Shell代码类型检查，编写 Shell 脚本**必备**

**shellman**
: 提供一些常见 Shell 代码片段

**awk**
: 提供给awk的代码语法高亮

**shell-format**
: shell格式化插件(毕竟vscode自身和Prettier都没有针对shell脚本的格式化) | :)我写shell不怎么会用到，提供的配置太少了

#### 其他插件

::: details 命令行一键安装
```shell
while read -r s; do
  code --install-extension "$s" --force
done <<A
yzane.markdown-pdf
CharlesWan.markdown-toc
A
```
:::

**Markdown PDF**
: markdown导出工具，如PDF，图片，html等

**Markdown TOC**
: 生成/更新markdown的导航栏

### 配置篇

#### 工作区
**善用vscode的工作区**，vscode的工作区可以有更舒服的版本管理，更好的全局搜索，与全局配置更高优先级的独立配置等

==比如：== 在 Vue2.x 项目使用 Vetur插件，禁用 Volar插件。而到 Vue3 的项目中就使用 Volar插件，禁用 Vetur插件。

工作区是一份json配置文件，可以使用命令行`code <工作区配置文件路径>` 快速打开工作区
```json
{
  // 支持排序，可以把重要的代码仓库往前排
  "folders": [
    {
      "path": "代码仓库1路径"
    },
    {
      "path": "代码仓库2路径"
    },
  ],
  "settings": {
    // 配置项，会覆盖系统配置。可以统一规定比如代码缩进，文件使用语言，主题风格等
  },
  // 这个最好是在项目当中的.vscode/extensions.json中定义，起到规范全队使用的插件
  "extensions": {
    "recommendations": [
      // 打开项目后右下角的推荐插件列表
    ]
  }
}
```

#### 配置项
每款插件都有自己的配置项，可以通过他的README钻研获取，
分享一下我的侧边栏颜色配置(青绿色对应 Vue 主题色)， 当然你也可以不同的工作区不同色调可以自己调整
```json
{
  "workbench.colorCustomizations": {
    "activityBar.foreground": "#00FFFF"
  },
}
```

<br>
<br>

> I just try my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/zhengqbbb.github.io) to encourage me ?

> 我是 Qbenben，一个爱折腾在沉浸在代码世界打怪升级的深圳小靓仔，感谢您的阅读。[Github](https://github.com/Zhengqbbb) · [Blog](https://www.qbenben.com/)