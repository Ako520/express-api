# 开启后台之旅
1. 上传项目 ：ssh/git/github
  scp -r express-api haoqicat.com

2. 登录服务器
  ssh haoqicat.com
  打账号密码

3. 安装(软件服务器)server
  sudo apt-get install nginx
  nginx:是当下最流行的服务器
  sudo:使用管理员权限
  apt-get install:安装软件

4. 配置服务器 nginx
  1. cd /etc/nginx   --跳到nginx的配置区域
  2. cd sites-enabled/ --打开添加新网站的配置文件夹

  3. 错的cp haoqicat .conf express.conf (不能成功以为是普通权限)
     sudo cp haoqicat .conf express.conf  (用管理员身份运行 创建配置文件)
  4. sudo vim express.conf  
  http只有一个端口 就是80端口

     sudo service nginx reload (重启生效修改的配置文件)
   报了fail说明配置有问题,如果想看报错信息就用
   nginx -t
   很有可能需要 sudo nginx -t

  附录：express.conf
  server {
    listen:80;
    server:express.haocat.com;
    root /home/node123456/WTB/
  }


  5.用设置的域名区访问网站 express.haoqicat.com


5. vim 一小时
  1. vim xxxx  （如果有xxxx那么就打开 如果没有那么就创建xxxx）
  
