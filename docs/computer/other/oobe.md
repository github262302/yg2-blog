# 跳过oobe
- 装完原版win10 开机后进入系统 引导很麻烦 下面直接跳过
- shift + ctrl + f3 重启部署模式
- 直接关掉 启用管理员账户
- cmd 命令输入
- XCOPY %windir%\System32\svchost.exe %windir%\System32\oobe\audit.exe /x
- 是
- 重启电脑
