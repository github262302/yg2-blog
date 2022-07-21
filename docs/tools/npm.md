---
sidebar_position: 6
---
## 查看版本
```
npm -v 
```
## 更换源
```
npm config set registry https://registry.npmmirror.com
```
## 参数
```
-g： 为 --global 的缩写，表示安装到全局目录里
-S： 为 --save 的缩写，表示安装的包将写入package.json里面的dependencies
-D： 为 --save-dev 的缩写，表示将安装的包将写入packege.json里面的devDependencies
 i： 为install的缩写，表示安装
```
## 安装模块
```
npm init # 当前目录初始化为包
npm i # 安装所有包
npm i webpack # 安装webpack到当前包
```
## 卸载模块
```
npm uninstall webpack # 卸载webpack
```
## 更新模块
```
npm update webpack # 更新webpack
npm update webpack@1.0.0 # 更新webpack指定版本
```
## 提交包至npm