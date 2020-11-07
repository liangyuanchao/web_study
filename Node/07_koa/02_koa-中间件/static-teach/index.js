// static 处理静态资源

const Koa = require("koa");
const static = require("koa-static");

const path = require("path");

const app = new Koa();

// 处理绝对路径 path 
app.use(static(path.resolve(__dirname, "./static"),{
    // 这个参数不写默认加载 index.html
    index: "main.html"
}))

app.listen(8080)