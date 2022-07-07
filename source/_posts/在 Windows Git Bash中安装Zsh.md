---
title: 在 Windows Git Bash 中安装 Zsh
description: 在 Windows Git Bash 中安装 Zsh
date: 2022/01/18
updated: 2022/01/18
tags: 
  - 环境配置
  - windows
categories:
  - 环境配置
---

### 在 Git Bash 中安装 Zsh

1. 从 MSYS2 软件包存储库 下载最新的[MSYS2](https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64)zsh 软件包。该文件将被命名为 类似于 .`zsh-5.8-5-x86_64.pkg.tar.zst`
2. 解压下载文件到 Git Bash 安装目录中 `C:\Program Files\Git`
3. 打开 Git Bash 并运行

```bash
zsh
```

1. **重要说明：**在 Zsh 首次使用向导中配置选项卡完成和历史记录。如果由于某种原因它没有出现，或者您跳过了它，请重新运行它：

```bash
autoload -U zsh-newuser-install
zsh-newuser-install -f
```

- 若要配置历史记录，请按 ，根据需要按 更改值，然后按 。`11-30`
- 要配置完成，请按"使用新的完成系统"，然后按 。`20`
- 按以保存设置。`0`

会出现一行报错：`ERROR: this script is obsolete, please see git-completion.zsh`删除文件 `/etc/profile.d/git-prompt.sh` 即可

1. 通过将以下内容附加到您的文件，将 Zsh 配置为默认 shell：`~/.bashrc`

```bash
if [ -t 1 ]; then
  exec zsh
fi
```

### 安装 oh-my-zsh

```bash
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```

### 安装插件和主题

1. 修改插件

```bash
plugins=(git zsh-syntax-highlighting zsh-autosuggestions)
```

1. 安装`zsh-syntax-highlighting`

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
```

1. 安装`zsh-autosuggestions`
- 注意：终端中可能会出现奇怪的伪影和间距。要解决此问题，请使用版本：`v0.7.0v.0.6.4`
  
    `cd ~/.oh-my-zsh/plugins/zsh-autosuggestions
    git checkout tags/v0.6.4 -b v0.6.4-branch`
    

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/plugins/zsh-autosuggestions
```

### 参考

1. [Installing Zsh (and oh-my-zsh) in Windows Git Bash](https://dominikrys.com/posts/zsh-in-git-bash-on-windows/)
2. [Git-Zsh on Windows安装与配置](https://amagi.yukisaki.io/article/96e5adc4-1212-4260-8399-4dfd3964dc3b/)
3. [oh-my-zsh 国内安装及配置](https://juejin.cn/post/7023578642156355592)