const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

app.use(koaBody({
    multipart: true
}))

app.use(static(__dirname + '/static'));

router.get('/', (ctx, next) => {
    ctx.body = 'Hello,ajax!!!'
})

// 02.邮箱验证.html
router.get('/verifyEmailAdress', (ctx, next) => {
    // 接收客户端传递过来的邮箱地址
    const email = ctx.query.email;
    // 判断邮箱地址是否注册
    if(email == 'zhangsan@qq.com') {
        // 设置http状态码并对客户端做出响应
        ctx.status = 400;
        ctx.body = {
            message: '邮箱地址已经注册guole，请跟换其他邮箱地址'
        }
    } else {
        // 邮箱地址未注册
        // 对客户端做出响应
        ctx.body = {
            message: '恭喜，邮箱地址可用'
        }
    }
});


// 03.搜索框自动提示.html
router.get('/searchAutoPrompt', (ctx, next) => {
    // 接收客户端传递的搜索关键字
    const key = ctx.query.key;
    // 提示文字列表
    const list = [
        '黑马程序员',
		'黑马程序员官网',
		'黑马程序员顺义校区',
		'黑马程序员学院报名系统',
		'传智播客',
		'传智博客前端与移动端开发',
		'传智播客大数据',
		'传智播客python',
		'传智播客java',
		'传智播客c++',
		'传智播客怎么样'
    ];
    // 搜索结果
    let result = list.filter(item => item.includes(key));
    // 将查询结果返回给客户端
    ctx.body = result;
})


app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功,请访问localhost:8080');
})