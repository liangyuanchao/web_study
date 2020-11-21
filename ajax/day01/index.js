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

app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功');
})