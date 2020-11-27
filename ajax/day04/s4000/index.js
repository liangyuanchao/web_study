const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(static(__dirname + '/static'));

router.get('/', (ctx) => {
    ctx.body = 'Hello, ajax'
})

// 01.html
router.get('/getAjax', (ctx) => {
    ctx.body = {
        name: 'zhangsan',
        age: 20
    }
})

// 02.html  03.html
router.get('/better', (ctx) => {
    // 接收客户端传递过来的函数名称
    let cb = ctx.query.callback;
    let obj = {
        a: 20,
        b: 20
    }
    // json对象不能传递，需要转换为json字符串
    ctx.body = `${cb}(${JSON.stringify(obj)})`
})


router.get('/cross', (ctx) => {
    ctx.body = 'ok'
})

// 05.html
router.get('/getData', (ctx) => {
    console.log('/getData');
    // 任意域名都可以访问
    // ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = 'get - data - 4000'
})

// 06.html
router.options("/postData", (ctx) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "POST");
    ctx.set("Access-Control-Allow-Headers", "content-type");
    ctx.body = "";
});
router.post("/postData", (ctx) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.body = "post - data - 4000";
});

// 07.html
router.get('/getGency', (ctx) => {
    ctx.body = 'get - data - 4000';
})

//08.html
router.post('/getGency', (ctx) => {
    ctx.body = 'post - data - 4000';
})





app.use(router.routes());

app.listen(4000, () => {
    console.log('服务器启动成功,请访问localhost:4000');
})