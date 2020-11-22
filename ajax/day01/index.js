const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const koaBody = require('koa-body');
const fs = require('fs');
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

// 02.html  04.html     05.html
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

// 07.html
router.post("/upload",(ctx,next)=>{
    console.log(ctx.request.body);
    console.log(ctx.request.files.img);
     let fileData =  fs.readFileSync(ctx.request.files.img.path);
    fs.writeFileSync("static/imgs/"+ctx.request.files.img.name,fileData);
    ctx.body = "请求成功";
})

// 08.html
router.post("/fileUpload", (ctx, next) => {
    console.log(ctx.request.files);
    let fileData =  fs.readFileSync(ctx.request.files.myfile.path);
    fs.writeFileSync("static/imgs/"+ctx.request.files.myfile.name,fileData);
    ctx.body = "请求成功";
})

app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功');
})