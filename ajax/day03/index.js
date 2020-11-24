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

// 04.省市区联动.html
// 获取省份
router.get('/province', (ctx, next) => {
    ctx.body = [{
		id: '001',
		name: '陕西省'
	},{
		id: '002',
		name: '四川省'
	},{
		id: '003',
		name: '河北省'
	},{
		id: '004',
		name: '江苏省'
	}];
})
// 获取城市
router.get('/cities', (ctx, next) => {
	// 获取省份id
	const id = ctx.query.id;
	// 城市信息
	const cities = {
		'001': [{
			id: '300',
			name: '西安市'
		}, {
			id: '301',
			name: '安康市'
		}, {
			id: '302',
			name: '咸阳市'
		}, {
			id: '303',
			name: '宝鸡市'
		}],
		'002': [{
			id: '400',
			name: '成都市'
		}, {
			id: '401',
			name: '绵阳市'
		}, {
			id: '402',
			name: '德阳市'
		}, {
			id: '403',
			name: '攀枝花市'
		}],
		'003': [{
			id: '500',
			name: '石家庄市'
		}, {
			id: '501',
			name: '唐山市'
		}, {
			id: '502',
			name: '秦皇岛市'
		}, {
			id: '503',
			name: '邯郸市'
		}],
		'004': [{
			id: '600',
			name: '常州市'
		}, {
			id: '601',
			name: '徐州市'
		}, {
			id: '602',
			name: '南京市'
		}, {
			id: '603',
			name: '淮安市'
        }]
	}
	// 响应
	ctx.body = cities[id];
});
// 根据城市id获取县城
router.get('/areas', (ctx, next) => {
	// 获取城市id
	const id = ctx.query.id;
	// 县城信息
	const areas = {
		'300': [{
			id: '20',
			name: '莲湖区',
		}, {
			id: '21',
			name: '碑林区'
		}, {
			id: '22',
			name: '新城区',
		}, {
			id: '23',
			name: '高新区'
		}],
		'301': [{
			id: '30',
			name: '汉滨区'
		}, {
			id: '31',
			name: '镇安县'
		}, {
			id: '32',
			name: '旬阳县'
		}]
	};
	// 响应
	ctx.body = areas[id] || [];
});


app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功,请访问localhost:8080');
})