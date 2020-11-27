const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const axios = require('axios');

// 解决重复输入接口
const proxy = require('koa-server-http-proxy');

const app = new Koa();
const router = new Router();

app.use(static(__dirname + '/static'));
// 配置 proxy，也是一种代理方式
app.use(
    proxy("/api",{
        target: "http://localhost:4000",
        pathRewrite: {
            "^/api": "",
        }
    }
))

router.get('/', (ctx, next) => {
    ctx.body = 'Hello, ajax'
})

// // 7.html
router.get('/getDaili', async (ctx) => {
    // 代理：浏览器请求同源服务器端，让服务器端去请求非同源服务器端，绕过了浏览器的同源策略
    // 需要借助第三方库 axios
    const res = await axios.get('http://localhost:4000/getGency');
    ctx.body = res.data;
});

// router.get('/getData', (ctx) => {
//     ctx.body = 'ok'
// })



app.use(router.routes());

app.listen(3000, () => {
    console.log('服务器启动成功,请访问localhost:3000');
})