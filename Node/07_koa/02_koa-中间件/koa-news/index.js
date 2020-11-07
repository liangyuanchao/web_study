const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const static = require("koa-static");
const path = require("path");
const news = require("./router/news.router")

const app = new Koa();
const router = new Router();


// 处理静态资源
app.use(static(path.resolve(__dirname, "./static")))

// 处理渲染模板
app.use(views(path.resolve(__dirname, "./views"), {
    extension: "pug"
}))

// 路由
// router.get("/news", async ctx => {
//     // ctx.body = "hello"
//     await ctx.render("news")
// })
router.get("/news", news);
router.get("/detail", detail)

app.use(router.routes());

app.listen(8080, () => {
    console.log("服务器启动成功,请访问localhost:8080");
})