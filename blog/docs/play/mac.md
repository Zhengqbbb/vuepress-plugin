---
lang: zh-CN
title: Mac初始化配置以及软件分享
description: MacOS系统常见软件和初始化配置分享
lastUpdated: true
sidebarDepth: 2
---
> 记录留痕自己Mac常用的软件，以及share

## 1. Git

1. 通过homebrew安装Git

- 安装homebrew

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- 安装git

```bash
brew install git
```

2. 创建ssh key并配置

- 设置好username和email，每次commit都会记录（配错不会有小绿点github记录哦）

```bash
git config --global user.name "Zhengqbbb"
git config --global user.email "1074059947@qq.com"
```

- 创建ssh key

```bash
ssh-keygen -t rsa -C "1074059947@qq.com"
```

## 2. Node
> 这边Node使用brew安装

```bash
brew install node
```
### 2.1 nrm
> npm快速换源工具
1. 安装

```bash
npm install -g nrm
```
2. 常见命令

```bash
nrm ls # 列出可选的源
nrm use taobao# 切换源
nrm test # 测试所有源速度
nrm test npm  # 测试单源速度
```

### 2.2 nvm
> 切换Node工具
1. 安装

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
2. 常见命令

```bash
# 下载Node 12 版本
nvm install 12
# 下载Node 14 版本
nvm install 14
# 当前终端会话Node版本切换到 14
nvm use 14
```

## 3. 终端
### 3.1 文件夹开启终端
> 在访达文件夹中右键快速打开终端和VSCode的方法有很多，我使用的:

[OpenInTerminal](https://github.com/Ji4n1ng/OpenInTerminal)
: 在访达文件夹中右键快速打开终端和VSCode


### 3.2 终端神器——iTerm2
[iTerm2](https://iterm2.com/downloads.html)
: 分享一下我的 [Termianl 折腾方案](/play/terminal)

## 4. 应用程序

### 4.1 生产力工具
> 强力推荐这两个我操作最频率的软件，ControlaxPro也是我买的第一个App Store的付费软件

1. ==ControlaxPro== : [下载链接](https://macupdater.net/app_updates/appinfo/com.wayhold.Controlax/index.html)
- 介绍：他可以通过你设置的**快捷键快速打开软件，网页，文件夹和系统操作**
- 效果：![整体效果](https://tva1.sinaimg.cn/large/6ccee0e1gy1gxp91blafaj22i415unpd.jpg)

2. ==Alfred== : [下载链接](https://www.macwk.com/soft/alfred-4)
- 介绍：我主要是用剪贴板的history
- 效果：[https://www.alfredapp.com/help/features/clipboard/](https://www.alfredapp.com/help/features/clipboard/)

### 4.2 鼠标滚轮方向更改

[Moc](https://github.com/Caldis/Mos?from=MosApplication&version=3.3.2)
: 由于Mac触控板方向，导致我们外接鼠标时滚轮习惯是方向的，这个小软件就可以**只帮我们更改外接鼠标的滚轮方向变为正常**。
### 4.3 VSCode
[VSCode](https://code.visualstudio.com/)
: 开发必备，[分享一下我的VSCode插件以及配置](/play/vscode)
### 4.4 Markdown
[Typora](https://www.typora.io/)
: md文件编辑查看

[Obsidian](https://obsidian.md/)
: 最近比较常用的是黑曜石进行编辑我的md文件工作区，实现iCould的云同步

### 4.5 视频播放器
[Elmedia Player](https://www.elmedia-video-player.com/)
: 相比VLC比较轻量化，主要是可以流畅预览 .webm 格式的视频

[VLC](https://www.videolan.org/)
: 查看rtmp流视频必备，但是在 Mac 上体验还是比 Windows 差一点

### 4.6 下载软件

[Folx](https://www.mac-downloader.com/)
: 类似于迅雷但不流氓，可以用来下载torrent种子文件
### 4.7 外接屏幕控制

[MonitorControl](https://github.com/MonitorControl/MonitorControl)
: 解决Mac外接屏幕无法设置其**音量、亮度**

### 4.8 垃圾清楚软件

[Tencent Lemon](https://lemon.qq.com/)
: 腾讯在windows的软件很流氓，mac还行用着挺方便的，日常清理垃圾还有卸载软件清楚残留文件

### 4.9 压缩文件解压文件
[eZip](https://ezip.awehunt.com/)

### 4.10 分屏工具

[Spectacle](https://www.spectacleapp.com/)
: mac 自带的分屏很难用，无奈只能找一个免费的，通过快捷键，将目前使用的软件分屏

### 4.11 测速工具

[Speedtest](https://www.speedtest.net/apps/mac)
: 网速带宽检测

### 4.12 长截图工具

[Xnip 安装地址](https://xnipapp.com/)
: mac 长列表截图工具大部分付费，而Xnip部分功能需要付费，并且带logo水印