const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(static(__dirname + '/static'));

router.get('/', (ctx, next) => {
    ctx.body = 'Hello, ajax'
})

app.use(router.routes());

app.listen(3000, () => {
    console.log('服务器启动成功,请访问localhost:3000');
})