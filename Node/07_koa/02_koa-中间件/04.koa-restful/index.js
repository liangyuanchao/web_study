const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body")

const app = new Koa();
const router = new Router();

app.use(koaBody())

// 用户操作
// addUser
// findUser
// updateUser
// deleteUser

let id = 10;
const createId = () => {
    return id++;
}

// users
let users = [{
    id: 1,
    name: "小红",
    age: 18
}, {
    id: 2,
    name: "小明",
    age: 28
}]

/*
    Restful 设计理念
        查找 get       /users/:id
        增加 post      /users
        删除 delete    /users/:id
        修改(更新) put /users/:id

*/

// 查找 get  /users/:id
router.get("/users/:id", (ctx) => {
    // id
    const {
        id
    } = ctx.params;
    const user = users.find((user) => user.id == id);
    if (!user) {
        ctx.throw(404, "用户不存在");
    }
    ctx.body = user;
})

// 增加 post  /users
router.post("/users", (ctx) => {
    const {
        name,
        age
    } = ctx.request.body;
    const newUser = {
        id: createId(),
        name,
        age
    };

    users.push(newUser);
    ctx.body = users;
})

// 删除 delete /users/:id

// 修改(更新) put  /users/:id


app.use(router.routes());
app.listen(8081, () => {
        console.log("服务器启动成功,请访问localhost:8081");
    }

)