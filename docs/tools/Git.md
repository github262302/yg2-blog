# git
## 初始化 简单配置
```
Git init 初始化一个仓库
git config --global user.name “ ” // 配置用户名
Git config --global user.email “ ” // 配置用户名的邮箱
Git config --list。             // 查看配置信息
```
## 提交代码
```
git status //查看当前状态

git add 123.text               // 放入暂存区
git add .                      // 全部放入暂存区

git commit -m "说明"            // 提交暂存区文件 -m 并说明
```

## 提交至远程仓库
```
git remote rm origin            // 移除远程连接
git remote add origin {{link}}  // 添加远程连接
git push -u origin master 		// 提交至远程仓库
```