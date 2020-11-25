const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(static(__dirname + '/static'));

router.get('/', (ctx, next) => {
    ctx.body = 'Hello, ajax'
})

// 01.html
router.get('/getAjax', (ctx, next) => {
    ctx.body = {
        name: 'zhangsan',
        age: 20
    }
})

// 02.html  03.html
router.get('/better', (ctx, next) => {
    // 接收客户端传递过来的函数名称
    let cb = ctx.query.callback;
    let obj = {
        a: 20,
        b: 20
    }
    // json对象不能传递，需要转换为json字符串
    ctx.body = `${cb}(${JSON.stringify(obj)})`
})


router.get('/cross', (ctx, next) => {
    ctx.body = 'ok'
})

app.use(router.routes());

app.listen(4000, () => {
    console.log('服务器启动成功,请访问localhost:4000');
})