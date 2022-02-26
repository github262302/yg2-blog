<!-- wp:heading {"level":1} -->
# Nginx常用命令
<!-- /wp:heading -->

<!-- wp:list -->


- whereis nginx  //查看nginx安装位置 方便修改nginx.config

- ./nginx  启动nginx

- nginx -s reload //重载配置

- nginx -s reopen //重启nginx

- nginx -s stop  // nginx 停止服务

- nginx -t // 查看nginx配置文件状态
<!-- /wp:list -->

<!-- wp:heading {"level":1} -->
## 配置文件详解
<!-- /wp:heading -->

<!-- wp:heading -->
## nginx.conf 读解
<!-- /wp:heading -->

<!-- wp:code -->
```
server {
        listen       80;  //监听80端口
        server_name  192.168.1.9;  //服务名字
        root         /usr/share/nginx/html;

        include /etc/nginx/default.d/*.conf;

        location / {    // 路由域名/根目录
                    root html;
                    proxy_pass http://yujiang ; //转发的网页
        }

        error_page 404 /404.html;  //顾名思义
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
        
```
<!-- /wp:code -->

<!-- wp:heading -->
## 反向代理
<!-- /wp:heading -->

<!-- wp:code -->
```
upstream {{name}} {
    server 192.168.1.10:80 weight=5; // 转发端口 weight权重
    server 192.168.1.10:8080 weight=6; //
}
```
<!-- /wp:code -->


``` 
#运行用户，默认即是nginx，可以不进行设置
user  nginx;
#Nginx进程，一般设置为和CPU核数一样
worker_processes  1;   
#错误日志存放目录
error_log  /var/log/nginx/error.log warn;
#进程pid存放位置
pid        /var/run/nginx.pid;


events {
    worker_connections  1024; # 单个后台进程的最大并发数
}


http {
    include       /etc/nginx/mime.types;   #文件扩展名与类型映射表
    default_type  application/octet-stream;  #默认文件类型
    #设置日志模式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;   #nginx访问日志存放位置

    sendfile        on;   #开启高效传输模式
    #tcp_nopush     on;    #减少网络报文段的数量

    keepalive_timeout  65;  #保持连接的时间，也叫超时时间

    #gzip  on;  #开启gzip压缩

    include /etc/nginx/conf.d/*.conf; #包含的子配置项位置和文件

```