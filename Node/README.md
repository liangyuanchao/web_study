

#Node

[TOC]



### 终端常用操作命令

ls 查看目录

mkdir 文件夹名      创建文件夹

pwd       打印当前路径

rm 文件名      删除文件

rm -rf 文件名   删除文件

touch 文件   创建文件

##Node.js介绍

---

- Node.js 诞生于2009年，Node.js采用C++语言编写而成，是 一个Javascript的运行环境。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境 ，让JavaScript的运行脱离浏览器端，可以使用JavaScript语言 书写服务器端代码。

### 特点

- 单线程

- 非阻塞 I/O ：

  ​    适合以下操作：访问文件(fs)、网络请求、数据库查询、键盘/鼠标交互

- 事件驱动

### 安装Node.js

​	[Node.js官网](https://nodejs.org)下载稳定版本,node偶数版本为稳定版本，奇数版本为非稳定版本。

- mac 直接安装  或者 brew来安装

- 安装完Node.js会自动安装NPM(Node Package Manager)：包管理工具；
- 通过指令 node -v 来查看是否安装完成和查看node版本号；npm -v 来查看npm版本。

###使用Node.js实现第一个服务器

初步感受Node.js

```js
//引入http模块
let http = require("http");
//创建一个服务器
let serve = http.createServer((req,res)=>{
    console.log("hello");
    res.end("hello world");
})
//设置端口号
serve.listen(3000);
```



## 模块化

### 一、为什么会有模块化

- 在JavaScript发展初期就是为了实现简单的页面交互逻辑，寥寥数语即，如今随着前端代码日益膨胀

  这时候JavaScript作为嵌入式的脚本语言的定位动摇了，JavaScript却没有为组织代码提供任何明显帮助，JavaScript极其简单的代码组织规范不足以驾驭如此庞大规模的代码；
  
  

### 二、模块化  commonjs规范

前端模块化esm规范化

```js
// main.js 默认导出
export default (a, b) => {
    return a + b;
}
```

```js
// 前端导入
// esm 规范
import add from "./static/add";
```

#### Node.js中的commonjs规范

1、创建自定义模块

- 引入一个文件 形式模块

  home.js执行文件

  ```js
  //通过require来引入
  require("./aModule"); // 注意一定要有"./"，文件后缀可加可不加。
  ```

  amodule.js文件

  ```js
  console.log("我是amodule模块111");
  ```

- 引入文件夹形式模块

  - home.js执行文件

  ```js
  require("./aModuledir"); // 必须加"./"
  ```

  ​       aModuleDir里的index.js文件,会自动查找文件夹下的index.js文件执行

  ```js
  console.log("我是aModule模块文件夹");
  ```

  - 当然也可以配置默认启动文件，在文件夹内新建package.json来指定执行文件

  ```json
  {
    "name":"aModule",
    "version":"1.0.0",
    "main":"test.js"
  }
  ```

  

- 自定义模块的按需导出

  通过module.exports 导出； \_\__dirname  , \_\_filename

  ```js
  module.exports = {
      a:"我是a的值",
      b(){
          console.log("我是导出的b函数");
      }
  }
  ```

  引入导出文件

  ```js
  let mymodule = require("bModule");
  console.log(mymodule.a);
  mymodule.b();
  ```

  或者 通过  exports来导出

  ```js
  exports.fn = function(){
      console.log("我是fn函数");  
  }
  ```

  导入文件

  ```js
  let myfn = require("bModule").fn;
  myfn();
  // 或者 通过解构赋值 
  let { fn } = require("bModule");
  fn();
  ```

- 模块加载的优先级 ,先文件再目录；

2、内置模块；

nodejs内置模块有：Buffer，C/C++Addons，Child Processes，Cluster，Console，Cr

ypto，Debugger，DNS，Domain，Errors，Events，File System，

Globals，HTTP，HTTPS，Modules，Net，OS，Path，Process，P unycode，Query Strings，Readline，REPL，Stream，String De coder，Timers，TLS/SSL，TTY，UDP/Datagram，URL， Utilities，V8，VM，ZLIB；内置模块不需要安装，外置模块需要安装；



### npm包管理器

NPM(Node Package Manager)  官网的地址是 [npm官网](https://www.npmjs.com)	

- npm常用指令；
  - **npm init**：引导创建一个package.json文件
  
  - npm help(npm -h) ：查看npm帮助信息
  
  - npm version (npm -v) : 查看npm版本；
  
  - npm search：查找
  
  - **npm install** (npm i)：安装  默认在当前目录，如果没有node_modules 会创建文件夹；
    
    - npm install module_name -S 或者--save    即    npm install module_name --save    写入dependencies
    - npm install module_name -D  或者 —save-dev   即    npm install module_name --save-dev 写入devDependencies
    - npm install module_name -g 全局安装(命令行使用)
    - 指定版本安装模块   npm i module_name @1.0 通过  "@"符号指定；
    
  - npm update(npm -up)：更新
  
  - **npm remove 或者  npm uninstall**：删除
  
  - npm root  查看当前包安装的路径  或者通过  npm root -g 来查看全局安装路径；
  
  - **npm config get registry**     查看源
  
  - **npm config set registry https://registry.npm.taobao.org/ **      设置淘宝源
  
    

### 发布包到 npm 上

1. 登陆  终端输入 npm adduser   输入用户名和密码
2. 在想发布的包路径上输入 npm publish
3. 删除包 npm unpublish 包名 --force

注意：发布的名是否冲突，如果发布的是测试包，一定要删除，否则两个小时后删除比较麻烦，更新包和发布包操作一样



**package.json 描述文件**

```js
{
	"name": "commandjs-teach", // 文件名
	"version": "1.0.0", // 版本号
	"description": "",
	"main": "index.js",	// 入口文件
	"dependencies": { // 运行依赖
		"lodash:^4.17.19"
	},
	"devDependencies": { // 开发依赖
	
	},
	"script": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "",
	"license": "ISC"
}
```



## fs模块

fs是文件操作模块，所有文件操作都是有同步和异步之分，特点是同步会加上 "Sync" 如：异步读取文件  "readFile"，同步读取文件 "readFileSync"；

### 文件操作

- 文件读取：readFile

  - 异步读取

  ```js
  let fs = require("fs");
  fs.readFile("1.txt",(err,data)=>{
      if(err){
          return console.log(err);
      }
      console.log(data.toString());
  })
  ```

  - 同步读取文件

  ```js
  let fs = require("fs");
  let res = fs.readFileSync("1.txt");
  console.log(res.toString());
  ```

- 文件写入：writeFile

  ```js
  let fs = require("fs");
  //flag配置  "a":追加写入，"w":写入，"r":读取
  fs.writeFile("2.txt","我是要写入的内容",{flag:"w"},err=>{
      if(err){
          return console.log(err);
      }
      console.log("写入成功");   
  })
  ```

- 文件删除：unlink

  ```js
  fs.unlink("2.txt",err=>{
      if(err){
          return console.log(err);
      }
      console.log("删除成功");
  })
  ```

- 复制文件：copyFile

  ```js
  const fs = require("fs");
  
  fs.copyFile("2.txt", "02.copy.txt", err => {
      if (err) {
          return console.log(err);
      }
      console.log("复制成功");
  })
  ```

  - 自己封装复制文件先读取文件再写入文件

  ```js
  function mycopy(src,dest){
     fs.writeFileSync(dest,fs.readFileSync(src));
  }
  mycopy("1.txt","4.txt");
  ```

- 修改文件名，目录也可以通过rename来操作

  ```js
fs.rename("1.txt","5.txt",function (err) {
      if(err){
          console.log(err);
      }else{
          console.log("修改成功");
      }
  });
  ```

- 判断文件是否存在：exists

  ```js
fs.exists("4.txt",function (exists) {
      console.log(exists);
})
  ```

### 目录操作

- 创建目录：mkdir

  ```js
  // mkdir 创建文件夹
  fs.mkdir("7.文件夹", err => {
      if (err) {
          return console.log(err);
      }
      console.log("创建目录成功");
  })
  ```

- 读取目录：readdir

  ```js
  // 读取目录 readdir
  fs.readdir("7.文件夹", (err, data) => {
      if (err) {
          return console.log(err);
      }
      // 读取成功 返回一个文件夹和文件的数组 [ '1.txt', '11', '2.txt', '3.html' ]
      console.log(data);
  })
  ```

- 删除目录：rmdir

  ```js
  // rmdir  删除目录(只能删除空文件夹/目录),删除当前脚本上的目录
  fs.rmdir("11", err => {
      if (err) {
          return console.log(err);
      }
      console.log("删除目录成功");
  })
  ```

- 获取文件：stat

  ```js
  // 获取文件或目录的详细信息 stat
  fs.stat("11", (err, stat) => {
      if (err) {
          return console.log(err);
      }
      // console.log(stat);
      // stat.isFile 判断是否是一个文件
      // console.log(stat.isFile());
      // stat.isDirectory 判断是否是一个文件夹/目录
      console.log(stat.isDirectory());
  })
  ```

- 删除非空文件

  ```js
  const fs = require("fs");
  
  // 删除非空文件夹
  // 思路：先删除目录里的文件 --> 在删除目录
  
  function removeDir(path) {
      let data = fs.readdirSync(path);
      // console.log(data); // [ '1.txt', '2.txt', '22' ]
      for (let i = 0; i < data.length; i++) {
          // data[i] 不是当前目录路径,所以需要给路径加上 "/",表示下一个路径
          // 判断文件或者目录,如果是文件直接删除;如果是目录继续查找
          let url = path + "/" + data[i];
          let stat = fs.statSync(url);
          if (stat.isDirectory()) {
              // 是目录,继续查找
              removeDir(url); // 递归
          } else {
              // 是文件,删除
              fs.unlinkSync(url);
          }
      }
      // 删除空目录
      fs.rmdirSync(path);
  }
  
  removeDir("11");
  ```

  

### buffer缓冲区

buffer 缓存区;一种2进制的数据格式,Node中传输文件资源,一般转换成buffer数据格式,这样传输数据比较快

- buffer的创建
  - 直接创建
  - 数组创建
  - 字符串创建
  - 乱码的处理
  - buffer转换tostring

###stream流

- stream流：流与数据处理方面密不可分
  - 流的原理
  - 流数据的获取
    - pipe
    - data
    - end
  - copy的流方法实现
  - 加载视图的流方法实现

### yarn 包管理工具	

```shell
npm install -g yarn
```

![yarn常用指令](C:\Users\小样穿马甲\Desktop\前端\--01.开课吧\第九期笔记\第12章Node.js\images/yarn常用指令.png)



### nvm

- nvm 是 mac 环境下管理 nodejs 的工具。在 windows 环境下推荐使用 nvmw 或者 nvm-windows；

  - Nvm-windows 下载地址 https://github.com/coreybutler/nvm-windows/releases 下载 nvm-setup.zip

- 安装 NVM

  - 在安装 nvm 之前需要一个 c++编译器，在 mac 上可以安装 Xcode 命令工具(已经安装可以忽略)

    ```shell
    xcode-select --install
    ```

  - 使用 curl 安装

    ```shell
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
    ```

  - 或者使用 wget 来安装

    ```shell
    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
    ```

- NVM [github 的地址](https://github.com/creationix/nvm)可以查看最新版本

- NVM 常用指令:

  `nvm --version`    查看版本

  `nvm ls`    列出所有已经安装的版本

  `nvm use node`   切换到最新版本

  `nvm use 8.11.1`   切换到8.11.1版本

  `nvm use 8.11`    切换到8.11.x最新版本

  `nvm install 8.11.1`    安装指定版本

  `nvm install stable`    安装最新稳定版nodejs

  `nvm install 8.11`     安装 8.11.x系列最新版本

  `nvm ls-remote`      列出远程服务器上所有可用的版本

  `nvm alias default node`     设置默认版本为最新版本

  

### 通过 fs 模块加载页面

1.编写一个服务器

```js
// 引入 http 内置模块
const http = require('http');

// 生成服务器
const server = http.createServer((res,req) => {
	res.end("测试")
});

// 设置端口号
server.listen(8080,() => {
	console.log("服务器启动成功,请访问localhost:8080");
})
```

路由区分

```js
 	// req.url
  console.log(req.url);
  if (req.url === "/home") { // 当路径匹配到 /home
    res.end("主页");
  } else if (req.url === "/detail") {
    res.end("详情");
  } else {
    res.end("测试");
  }
```

```
// 告诉浏览器通过 utf-8 解析，否则会乱码
  res.setHeader("content-type", "text/html; charset=utf-8");
```

- 通过fs 方式加载页面

  ```js
  const fs = require("fs");
  // fs 读取文件
  const template = fs.readFileSync("./template/index.html");
  // 渲染
  res.end(template);
  ```

- 通过 *stream* 流 方式加载页面

  ```js
  const readStream = fs.createReadStream("./template/detail.html");
  readStream.pipe(res);
  ```

- 加载 css 文件

  ```js
  // 告诉浏览器怎么解析文件 css 文件
  res.setHeader("content-type", "text/css; charset=utf-8");
  const css = fs.readFileSync("./template/style.css");
  res.end(css);
  ```

- MIME 上面的方式加载解析文件不灵活，所以可以根据文件名的后缀，让浏览器解析文件

  ```js
  // 把所有文件的后缀拷贝到 mime.json 文件中
  const mime = require('./mime.json');
  const path = require('path');
  
   const extname = path.extname(req.url)
   const mimeType = mime[extname]
   
   // mime.json 这样可以把根据文件后缀，来告诉浏览器怎么解析文件，变得很灵活
   res.setHeader("content-type", `${mimeType}; charset=utf-8`);
   const css = fs.readFileSync("./template/style.css");
   res.end(css);
  ```



### 实现新闻列表页面

- 视图逻辑分离
- 读取页面
- 读取动态数据
- 设置头部引入其他资源
- 详细页显示
- cheerio 第三方库










