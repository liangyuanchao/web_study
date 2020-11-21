const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const userData = require('./data/users.json')

let app = new Koa();
let router = new Router();

app.use(static(__dirname + '/static'));

router.get('/', (ctx, next) => {
    ctx.body = 'hello'
});

router.get('/checkUserName', (ctx, next) => {
    console.log(ctx.query);
    ctx.body = 'hello'
})

app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功');
})