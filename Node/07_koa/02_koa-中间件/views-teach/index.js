// 处理渲染模板

const Koa = require("koa");
const views = require("koa-views");

const path = require("path");

const app = new Koa();

// 路径
// __dirname
// path处理绝对路径 
app.use(views(path.resolve(__dirname, "./views"), {
    extension: 'pug',
}))

app.use(async ctx => {
    await ctx.render("index")
})

app.listen(8080, () => {
    console.log("服务器启动成功,请访问localhost:8080");
})