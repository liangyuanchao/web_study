const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

const router = new Router();


/*
    中间件
        1.有多个中间件,需要第二个参数 next,才能继续调用往下执行中间件
        洋葱模型：通过调用 next 执行下一个中间件,当执行到最后一个的时候在执行上一个未执行完的
        打印顺序：>>> fn1  =>   >>> fn2  =>  >>> fn3   =>  <<< fn3  => <<< fn2  =>  <<< fn1
*/

app.use((ctx, next) => {
    console.log(">>> fn1");
    next();
    console.log("<<< fn1");
})

app.use((ctx, next) => {
    console.log(">>> fn2");
    next();
    console.log("<<< fn2");
})
app.use((ctx, next) => {
    console.log(">>> fn3");
    next();
    console.log("<<< fn3");
})


// 多个中间件内传递参数
app.use((ctx, next) => {
    ctx.kkb = {
        name: "hahaha"
    }
    next()
})

app.use((ctx) => {
    console.log(ctx.kkb.name);  // hahaha
})



app.listen(8080, () => {
    console.log("服务器启动成功,请访问localhost:8080");
});