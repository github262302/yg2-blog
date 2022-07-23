---
sidebar_position: 2

date: 2021-09-13T10:00
---

# 环境变量配置

## 系统环境变量配置

### Mac

### Window

1.我的电脑 ➡️ 属性 ➡️ 高级 ➡️ 环境变量
<img
src={require('@site/static/img/docs/env_win_1.png').default}
alt="执行后如下"
/>

2.然后找到 Path 编辑

![env](https://exp-picture.cdn.bcebos.com/5e615d715fdb3620d2cf533dabc5260f89358d49.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80)

3.新增编辑删除都可以 优先级从上往下
<img
src={require('@site/static/img/docs/env_win_2.png').default}
alt="执行后如下"
/>

### Linux

## 寻找命令所在目录

### Window

```bash title="PowerShell"
Get-Command python -ALL
## CommandType     Name                                               Version    Source
## -----------     ----                                               -------    ------
## Application     python.exe                                         3.10.51... D:\Python\Python310\python.exe
## Application     python.exe                                         0.0.0.0    C:\Users\*\AppData\Local\Microsoft\Wi...

```

```bash title="CMD"
where python
```

### Mac

### Linux
