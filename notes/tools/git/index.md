# Git

> 2026-6-28

## Git是什么？

[Git](https://git-scm.cn/) 是一个免费且开源的分布式版本控制系统。

## 安装

按照[教程](https://git-scm.cn/install/windows)安装即可。

## 保存项目到github仓库

GitHub 是一个基于 Web 的代码托管平台，运行在云端。**在推送项目到远端仓库时，一定不要泄露项目中的KEY**。

### 安装和注册

1. 注册github账号

如果邮箱注册失败可以换一个邮箱(如QQ邮箱)。

2. 安装git

在后续提交操作时会提示输入你的 用户名 和 邮箱 用以注册。

3. 绑定git和github

用验证码授权即可。

### 本地初始化

4. 初始化git文件夹

打开你需要提交项目的根目录，右键在菜单栏里选择 `Open Git Bash here`，接着在该终端里执行：

```bash
git init
```

5. 添加gitignore文件

添加 gitignore 文件，用来说明**不用上传**到远端仓库的文件。

6. 暂存所有文件

在Git Bash终端里执行。

```bash
git add .
```

7. 首次提交

在Git Bash终端里执行。

```bash
git commit -m "init: 初始化 '你的项目名' 项目"
```

描述规范如下
```text
  ┌──────────┬──────────────┐
  │   类型   │     用途     │
  ├──────────┼──────────────┤
  │ init     │ 初始化项目   │
  ├──────────┼──────────────┤
  │ feat     │ 新增功能     │
  ├──────────┼──────────────┤
  │ fix      │ 修复 bug     │
  ├──────────┼──────────────┤
  │ docs     │ 文档修改     │
  ├──────────┼──────────────┤
  │ style    │ 代码格式调整 │
  ├──────────┼──────────────┤
  │ refactor │ 重构         │
  └──────────┴──────────────┘
```

### 部署到远端

8. 添加远端仓库

在github官网上新建仓库。后续如下：

- **Repository name** 填 `项目名`（或你喜欢的名字）
- 其他所有选项**不用动**（不要勾选 Add a README）
- 点绿色的 **Create repository** 按钮

创建完后，GitHub 会跳转到一个新页面，你会看到一行类似这样的地址：

```text
https://github.com/用户名/项目名.git
```

9. 关联远端仓库

在Git Bash终端里执行。

```bash
$ git remote add origin https://github.com/用户名/项目名.git
```

10. 命名分支保持一致

Git 默认初始分支名是 master，而 GitHub 现在的默认主分支名是 main。这条命令就是把本地分支名改成和 GitHub
  一致，否则推送时会出现两个分支，比较乱。

```bash
git branch -M main
```

11. 提交到远端仓库

```bash
git push -u origin main
```

### 后续提交

均在git bash终端执行。

12. 添加改动到暂存区

```bash
# 添加所有修改（包括新文件）
git add .

# 或者只添加特定文件
git add .vitepress/config.mjs notes/tools/
```

13. 提交到本地仓库

```bash
git commit -m "描述你改了什么"
```

14. 推送到 GitHub

```bash
git push
```

## 从github上部署项目到本地