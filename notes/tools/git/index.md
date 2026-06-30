# Git

> 2026-6-28

## Git是什么？

[Git](https://git-scm.cn/) 是一个免费且开源的分布式版本控制系统。

## 安装

按照[教程](https://git-scm.cn/install/windows)安装即可。

## 常用命令

```
● Git 常用命令大全

  一、基础配置

  git config --global user.name "你的名字"
  git config --global user.email "你的邮箱"
  git config --list                    # 查看所有配置

  二、创建/克隆仓库

  git init                   # 把当前文件夹初始化为 Git 仓库
  git clone <仓库地址>        # 把远程仓库下载到本地

  三、日常提交流程（高频核心）

  git status                 # 查看当前状态：改了哪些文件、是否暂存
  git add <文件名>            # 把文件加入暂存区（准备提交）
  git add .                  # 把当前目录所有改动加入暂存区
  git commit -m "提交说明"    # 提交到本地仓库
  git commit -am "提交说明"   # add + commit 一步搞定（仅限已跟踪的文件）

  完整流程图示：

  工作区 ──git add──▶ 暂存区 ──git commit──▶ 本地仓库

  四、查看历史与差异

  git log --oneline          # 简洁提交历史
  git log --oneline -10      # 最近 10 条
  git log --graph --oneline  # 带分支图

  git diff                   # 改了什么（没 add 的）
  git diff --staged          # 改了什么（已 add 的）
  git show <commit-id>       # 某次提交改了啥
  git blame <文件名>          # 每行代码分别是谁写的

  五、回退与撤销

  # 文件级别
  git checkout -- <文件>     # 丢弃本地修改（还没 add 的）
  git reset HEAD <文件>      # 取消 add（但保留修改）

  # 提交级别
  git reset HEAD~1           # 撤销最近 1 次提交，改动回到工作区
  git revert HEAD            # 反向提交来撤销（推荐，不改历史）

  六、分支管理

  git branch                 # 查看本地分支
  git branch <分支名>         # 创建新分支
  git switch <分支名>         # 切换分支
  git switch -c <分支名>      # 创建并切换到新分支
  git merge <分支名>          # 把指定分支合并到当前分支
  git branch -d <分支名>      # 删除分支

  七、远程仓库

  git remote add origin <地址>   # 关联远程仓库
  git remote -v                  # 查看远程仓库地址
  git push origin main           # 推送到远程
  git push -u origin main        # 首次推送并建立追踪（之后直接用 git push）
  git pull                       # 拉取远程更新并合并到本地
  git fetch                      # 只看远程有什么更新，不合并

  八、暂存与临时保存

  git stash                    # 把当前改动暂存起来，恢复干净的工作区
  git stash pop                # 恢复最近一次暂存的改动
  git stash list               # 查看所有暂存记录

  ▎ 场景：正改着代码，突然要切分支修 bug，但又不想提交 → git stash 先存起来

  九、实用技巧

  # 想看某次提交到底改了哪些文件
  git show --stat <commit-id>

  # 搜索提交记录中的关键字
  git log --grep="关键字"

  # 看某个文件的历史
  git log -- <文件名>

  # 对比两个分支的差异
  git diff branch1..branch2

  # 终止合并（合并到一半后悔了）
  git merge --abort

  # 交互式暂存（可以只 add 文件的某几行）
  git add -p

  真正日常就 6 个命令

  git status          # 我在哪，什么状态
  git add .           # 全部暂存
  git commit -m "..."  # 提交
  git push            # 推到远程
  git switch -c xxx   # 开新分支
  git log --oneline   # 看看历史
```

## 保存项目到github仓库

GitHub 是一个基于 Web 的代码托管平台，运行在云端。`在推送项目到远端仓库时，一定不要泄露项目中的KEY`。

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

如果遇见网络问题无法提交，请打开梯子查看代理端口 (这里假设为`7890`)，然后在git bash中配置代理：

```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

然后尝试重新提交：

```bash
git push
```

如果以后不想走代理了，取消代理：

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 从github上部署项目到本地

1. 项目地址

在 github 的项目页面点击`code`按钮，复制项目地址。

2. 克隆项目

在想要部署项目的文件夹内打开 Git Bash 终端，输入：

```bash
git clone 项目地址
```

3. 安装依赖

```bash
npm install
```

4. 启动

```bash
npm run dev
```