const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(static(__dirname + '/static'));

router.get('/', ctx => {
    ctx.body = 'Hello - server'
});

router.post('/base', ctx => {
    // ctx.status = 404
    ctx.body = {
        name: 'zhangsan',
        age: 30
    }
})

app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功,请访问localhost:8080');
});