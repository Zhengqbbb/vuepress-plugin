---
layout: Post
lang: zh-CN
title: Mac初始化配置以及软件分享
subtitle: MacOS系统常见软件和初始化配置分享
author: qbenben
date: 2021-10-29
headerImage: https://tva3.sinaimg.cn/large/6ccee0e1gy1gxv3n4ru9hj219k0k0769.jpg
catalog: true
tags:
  - play
---
> 记录留痕自己Mac常用的软件，以及share

## 1. Git
### 1.1. 安装Git
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
### 1.2. 常见命令
- 代理
  - 如果自己有github和gitee的项目可以把下面的--global去掉分repo
```bash
# 看看自己的飞机 HTTP代理地址是多少
git config --global https.proxy http://127.1:1087
git config --global https.proxy https://127.1:1087
# 看看自己的飞机（高级设置 | Telegram谢天这个） socks5监听地址是多少
git config --global http.proxy 'socks5://127.1:1086'
git config --global https.proxy 'socks5://127.1:1086'
git config --global --unset http.proxy
git config --global --unset https.proxy
git config list
```

## 2. Node
> 这边Node使用brew安装

```bash
brew install node
```
### 2.1. Node版本常见命令
```bash
sudo npm install npm@latest -g # 升级到最新版
sudo npm install npm@xx -g     # 升级到指定版本
npm version                    # 查看版本详情
npm view npm version           # npm最新版本
npm view npm versions          # npm所有版本
npm list                       #  插件清单
```

### 2.2. Node/Npm常见命令
```bash
npm config list # npm查看配置信息
npm cache clean -f # npm清楚缓存
npm config set proxy=http://127.1:8087 # npm设置http代理
npm config delete proxy
npm config delete https-proxy #取消代理
```

### 2.3. npm快速换源工具-nrm
1. 安装

```shell
npm install -g nrm
```
2. 常见命令

```
nrm ls # 列出可选的源
nrm use taobao# 切换源
nrm test # 测试所有源速度
nrm test npm  # 测试单源速度
```
## 3. 终端
### 3.1 文件夹开启终端
> 在访达文件夹中快速打开终端和vscode并且在该目录中的方法和软件有很多 | 还有就是配置快捷键打开vscode，终端

这里我选择的是[OpenInTerminal](https://github.com/Ji4n1ng/OpenInTerminal)

### 3.2 终端神器——iTerm
[iTerm 安装地址](https://iterm2.com/downloads.html)

## 4. 我的应用程序
### 4.1. 1 代码编辑器——VSCode
[VSCode 安装地址](https://code.visualstudio.com/) <br>
[我的vscode插件以及配置分享](https://www.qbenben.com/article/vscode/)
### 4.2. md文件查看编辑器——Typora
[Typora 安装地址](https://www.typora.io/)
### 4.3. 视频播放器——Elmedia Player / VLC
[Elmedia Player 安装地址](https://www.elmedia-video-player.com/)<br>
[VLC 安装地址](https://www.videolan.org/)
### 4.4. 下载软件——Folx
>类似于迅雷但不流氓，可以用来下载torrent种子文件

[Folx 安装地址](https://www.mac-downloader.com/)
### 4.5. （强力推荐）生产力工具——ControlaxPro / Alfred
> 强力推荐这两个我操作最频率的软件，ControlaxPro是我买的第一个App Store的付费软件

1. ControlaxPro
- 安装：在appstore下载
- 介绍：他可以通过你设置的快捷键快速打开软件，网页，文件夹和系统操作
- 效果：![整体效果](https://tva1.sinaimg.cn/large/6ccee0e1gy1gxp91blafaj22i415unpd.jpg)
2. Alfred
- 安装：WX公众号【果冻时刻】，回复**Alfred**
- 介绍：我主要是用粘贴的history，更多功能可以看[介绍视频](https://www.bilibili.com/video/BV1ya4y1x7fc)
- Alfred
  - 下载:https://liuhouer.lanzoux.com/ibd4jvi
  - 密码:1ua3
- https://www.macwk.com/soft/alfred-4

### 4.6. 外接屏幕控制——MonitorControl
> mac外接屏幕无法设置其音量亮度

[MonitorControl 安装地址](https://github.com/MonitorControl/MonitorControl)

### 4.7 清楚软件——Tencent Lemon
> 腾讯在windows的软件很流氓，mac还行用着挺方便的，日常清理垃圾还有卸载软件清楚残留文件

[Tencent Lemon 安装地址](https://lemon.qq.com/)

### 4.8 压缩文件解压文件——eZip
[eZip 安装地址](https://ezip.awehunt.com/)

### 4.9 分屏工具——Spectacle
> mac 自带的分屏很难用，无奈只能找一个免费的，通过快捷键，将目前使用的软件分屏

[Spectacle 安装地址](https://www.spectacleapp.com/)

### 4.10 测速工具——Speedtest
在appstore下载

### 4.11 长截图工具——Xnip
> mac 长列表截图工具大部分复飞，Xnip部分功能需要付费，并且带logo水印

[Xnip 安装地址](https://xnipapp.com/)