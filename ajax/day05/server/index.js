const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

app.use(static(__dirname + '/static'));
app.use(koaBody({
    multipart: true,
}))

router.get('/', ctx => {
    ctx.body = 'Hello - server'
});

// 01.html
router.post('/base', ctx => {
    // ctx.status = 404
    ctx.body = {
        name: 'zhangsan',
        age: 30
    }
})
// 02.html
router.get('/user', ctx => {
    ctx.body = ctx.query;
})
router.post('/user', ctx => {
    ctx.body = ctx.body;
})

// 05.html
router.get('/jsonp', ctx => {
    const cd = ctx.body.cd;
    const data = cd + "({name: 'zhangsan})";
    ctx.body = data;
})



app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功,请访问localhost:8080');
});