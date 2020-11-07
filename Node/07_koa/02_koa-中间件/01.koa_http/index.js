const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// 中间件
// app.use(ctx => {
//     ctx.body = "hello koa"
// })

// http状态码 重定向 302
app.use((ctx) => {
    ctx.status = 302;
    ctx.set("location", "https://www.baidu.com")
})

// 路由

// 端口
app.listen(8081, () => {
    console.log("服务器启动成功,请访问localhost:8081");
})