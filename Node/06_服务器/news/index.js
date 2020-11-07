const http = require("http");
const fs = require("fs");
const mime = require("./data/mime.json");
const path = require("path");
const news = require("./news");
const url = require("url");

const detail = require("./detail");

const server = http.createServer((req, res) => {
    // 第二个参数 true 会将 url 中 query 设置为 对象
    const {pathname,query} = url.parse(req.url, true);

    // 返回 css 样式 变得灵活,将 MIME标准 里的后缀放在一个文件夹中,通过后缀加载文件
    const extname = path.extname(req.url);
    // console.log(extname); // .css  拿到文件后缀
    const mimeType = mime[extname];
    res.setHeader("content-type", `${mimeType};charset=utf-8`);

    // res.setHeader("content-type", "text/html;charset=utf-8");
    if (pathname === "/") {
        let p = +query.p;
        res.end(news(p));

    } else if (pathname === "/detail") {
        const id = +query.id;
        // res.end("详情")
        res.end(detail(id));
    } else {
        if (req.url.includes("favicon.ico")) return;
        // 加载静态资源
        // css 文件
        const file = fs.readFileSync("./static/" + req.url);
        res.end(file);
    }
})

// 端口
server.listen(8081, () => {
    console.log("服务器启动成功,请访问localhost:8081");
});