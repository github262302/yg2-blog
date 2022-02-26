---
sidebar_position: 6
---

# npm,yarn

## 查看配置
## 更换源

### npm
- 查看源
``` 
npm config get registry 
```

- 更换原厂源
``` 
npm config set registry https://registry.npmjs.org 
```

- 更换淘宝源
``` 
npm config set registry https://registry.npm.taobao.org 
```

### yarn
- 安装yarn
```
npm install -g yarn
```
- 查看版本
```
yarn --version
```
- 更换源
```
yarn config set registry https://registry.npm.taobao.org -g
```


## 提交包至npm