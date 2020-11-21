const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const koaBody = require('koa-body');
const userData = require('./data/users.json');

let app = new Koa();
let router = new Router();

app.use(static(__dirname + '/static'));
app.use(koaBody({
    multipart: true
}));

router.get('/', (ctx, next) => {
    ctx.body = 'hello'
});

// 01.html
router.get('/checkUserName', (ctx, next) => {
    // ctx.query 接收前端get传递的参数
    // console.log(ctx.query);
    let res = userData.find(v => v.name == ctx.query.username);
    if(res){
        ctx.body = {
            status: 1,
            info: '用户名正确'
        }
    }else{
        ctx.body = {
            status: 2,
            info: '用户名错误'
        }
    }

})

// 02.html
router.get('/get/:id', (ctx, next) => {
    console.log(ctx.params);
    ctx.body = {
        status: 1,
        info: 'get请求成功'
    }
})

// 03.html
router.post('/post', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = {
        status: 1,
        info: "post请求成功"
    }
})

app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功');
})