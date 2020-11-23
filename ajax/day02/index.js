const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const koaBody = require('koa-body');
const fs = require('fs');

let app = new Koa();
let router = new Router();

app.use(static(__dirname + '/static'));

app.use(koaBody({
    multipart: true
}))

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
router.post('/post', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = {
        status: 1,
        info: '请求成功'
    }
})

// 5.html
router.post('/json', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = {
        status: 1,
        info: '请求成功'
    }
})

// 6.html
router.get('/readyState', (ctx, next) => {
    ctx.body = {
        status: 1,
        info: '请求成功'
    }
})

// 7.html
router.get('/error', (ctx, next) => {
    // ctx.status 设置服务器状态码
    ctx.status = 400;
    ctx.body = 'not ok'
})

// 8.html
router.get('/cache', (ctx, next) => {
    fs.readFile('./test.txt', (err, result) => {
        // console.log(result);
        ctx.body = result;
    })
})



app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功');
})