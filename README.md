在线阅读系统安装说明

1、本系统系Ubuntu环境下开发，遂推荐在Ubuntu系统平台下安装，开启终端。

2、准备工作：安装依赖包
//安装编译器和运行环境
sudo apt-get install g++ curl libssl-dev apache2-utils
 
//安装git
sudo apt-get install git-core

3、安装Node.JS
1）
去官网下载源码：http://nodejs.org/#download node-v0.6.5.tar.gz
本系统需v0.8.10版本

2）
//解压
tar -zxf node-v0.8.10.tar.gz
//进入解压后的文件夹
cd node-v0.8.10
3）编译，安装
./configure
make （要持续几分钟）
sudo make install

4）设置环境变量
export PATH=$PATH:/opt/node/bin

4、安装npm
curl http://npmjs.org/install.sh | sudo sh

5、安装express
npm install express -gd

6、下载源码
在任意文件夹下
git clone git://github.com/wanglingfei/nodeweb.git

7、安装MongoDB
1）下载MongoDB 2.2.3版本以上
http://www.mongodb.org/downloads
放在任意文件夹下

2) 新建“data”文件夹，作为数据存放的根文件夹
cd mongodb-linux-i686-2.2.3/bin
mkdir data

3)运行MongoDB
cd mongodb-linux-i686-2.2.3/bin
./mongod --dbpath ./data

4）导入数据库
进入该文件夹
cd mongodb-linux-i686-2.2.3/bin
./mongo readin 源码文件夹/db/mongo.js


8、运行应用程序
进入源码文件夹下
node app.js

程序启动在127.0.0.1：3000下

管理员帐号：wolf 密码wolf

普通用户：test 密码111


