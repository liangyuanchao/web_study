const Koa = require("koa");
const Router = require("koa-router");
const nunjucks = require("koa-nunjucks-2");
const {
    async
} = require("regenerator-runtime");

let app = new Koa();

let router = new Router();

app.use(nunjucks({
    ext: "html", // .njk 指定渲染模板
    path: __dirname + "/views", // 模板路径
    nunjucksConfig: {
        trimBlocks: true // 防止 XSS 漏洞
    }
}))

// 路由
router.get("/", async ctx => {
    // ctx.body = "hello";
    await ctx.render("index", {
        username: "张三",
        num: 3,
        arr: [{
            name: "李四",
            age: 18
        }, {
            name: "王五",
            age: 28
        }],
        str: "hello world"
    }); // 渲染
})

router.get("/son1", async ctx => {
    await ctx.render("son1");
})

router.get("/import", async ctx => {
    await ctx.render("import");
})

// 调用 router
app.use(router.routes());

// 端口
app.listen(3000, () => {
    console.log("服务器启动成功,请访问localhost:3000");
})