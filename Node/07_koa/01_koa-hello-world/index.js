const Koa = require('koa');
const Router = require("koa-router");

let app = new Koa();
app.use(ctx=>{
    /*
        ctx => context 上下文对象
        全写：ctx.request 请求对象
              ctx.response 响应对象
    */
    // ctx.body = "koa-hello-world"
})

app.listen(8080);