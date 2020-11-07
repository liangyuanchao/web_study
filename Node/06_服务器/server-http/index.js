const http = require("http");
const fs = require("fs");
const mime = require("./mime.json");
// 处理路径
const path = require("path")

// req => 请求对象
// res => 响应对象
const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end("hello - http"); // 响应内容

    // 设置响应头解析编码格式,utf-8防止解析中文乱码
    res.setHeader("content-type", "text/html;charset=utf-8");

    // 实现路由
    if (req.url === "/home") {
        // res.end("<h1>home</h1>")
        // 1.通过 fs 读取文件
        let template = fs.readFileSync("./static/home.html");
        res.end(template);
    } else if (req.url === "/detail") {
        // res.end("<h1>详情</h1>")
        // 2.通过 流 方式
        let readStream = fs.createReadStream("./static/detail.html");
        readStream.pipe(res);
    } else {
        // res.end("hello - kkb")
        // 返回 css 样式 硬编码不灵活
        // res.setHeader("content-type", "text/css;charset=utf-8");

        // 返回 css 样式 变得灵活,将 MIME标准 里的后缀放在一个文件夹中,通过后缀加载文件
        const extname = path.extname(req.url);
        // console.log(extname); // .css  拿到文件后缀
        const mimeType = mime[extname];
        res.setHeader("content-type", `${mimeType};charset=utf-8`);

        let css = fs.createReadStream("./static/style.css");
        css.pipe(res);
    }

})

// 端口
server.listen(8080, () => {
    console.log("服务器启动成功,请访问localhost:8080");
})