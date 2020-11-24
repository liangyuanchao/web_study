const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

app.use(koaBody({
    multipart: true
}))

app.use(static(__dirname + '/static'));

router.get('/', (ctx, next) => {
    ctx.body = 'Hello,ajax!!!'
})

app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功,请访问localhost:8080');
})