const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

let app = new Koa();
let router = new Router();

app.use(static(__dirname + '/static'));

router.get('/', (ctx, next) => {
    ctx.body = "hello - ajax"
});

// 1.html
router.get('/first', (ctx, next) => {
    ctx.body = "Hello - ajax"
})

// 2.html
router.get('/responseData', (ctx, next) => {
    ctx.body = {
        'name': '张三'
    }
})

// 3.html
/*
router.get('/get', (ctx, next) => {
    ctx.body = ctx.query;
})
*/
router.get('/get/:username/:age', (ctx, next) => {
    console.log(ctx.params);
    ctx.body = {
        status: 1,
        info: '请求成功',
    }
})

// 4.html



app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功');
})