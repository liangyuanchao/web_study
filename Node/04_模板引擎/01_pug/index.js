const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");

let app = new Koa();
let router = new Router();

// views 用于加载模板
app.use(views(__dirname + "/views", {
    map: {
        html: "pug", //指定 pug 模板来渲染
    }
}));

// 路由
router.get("/", async ctx => {
    // ctx.body = "hello";
    let users = [{uname:"张三",age: 12,height:"180cm"},{uname:"李四",age: 22,height:"175cm"},{uname:"王五",age: 32,height:"165cm"}]
    await ctx.render("index.pug",{
        // 向 pug 模板推送数据
        data: "我是数据",
        users
    })
});

// 调用 router
app.use(router.routes());

// 端口号
app.listen(3000, () => {
    console.log("服务器启动成功,请访问localhost:3000");
})