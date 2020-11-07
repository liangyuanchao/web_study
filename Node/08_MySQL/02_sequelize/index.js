const Koa = require("koa");
const Router = require("koa-router");
const { Sequelize } = require("sequelize");
const getUserModel = require("./UserModel")

const app = new Koa();
const router = new Router();

// 连接服务器
const sequelize = new Sequelize({
    // dialect 映射 mysql 数据库
    dialect: "mysql",
    host: "localhost",
    port: "3306",
    username: "root",
    password: "123456",
    database: "web09"
});

// users
const UserModel = getUserModel(sequelize);

// 如果没有表创建一个表
// sequelize.sync();


    // 数据库增删改查
    // 1.添加 addUser
    router.get("/addUser", async (ctx) => {
        // const {name,age} = ctx.query;
        // const sql = `INSERT INTO users (id,name,age) VALUES (0,?,?)`;
        // const [rows] =await connection.execute(sql,[name,age]);
        // // ctx.body = result;
        // if(rows.affectedRows>0){
        //     ctx.body = "add success"
        // }else{
        //     ctx.body = "add fail"
        // }

        const {name,age} = ctx.query;
        const result = await UserModel.create({
            age,
            name
        })
        ctx.body = result;
    })

    // 2.删除 delUser
    router.get("/delUser", async(ctx)=>{
        // const {id} = ctx.query;
        // const sql = `DELETE FROM users WHERE id=?`;
        // const [rows] = await connection.execute(sql,[id]);
        // if(rows.affectedRows>0){
        //     ctx.body = "del success"
        // }else{
        //     ctx.body = "del fail"
        // }

        const {id} = ctx.query;
        const result = await UserModel.destroy({
            where: {
                id,
            }
        })
        if(result>0){
            ctx.body = "del success"
        }else{
            ctx.body = "del fail"
        }
    })

    // 3.修改(更新) updateUser
    router.get("/updateUser",async (ctx)=>{
        // const {id,age} = ctx.query;
        // const sql = `UPDATE users SET age=? WHERE id=?`;
        // const [rows] = await connection.execute(sql,[age,id]);
        // if(rows.affectedRows>0){
        //     ctx.body = "update success"
        // }else{
        //     ctx.body = "update fail"
        // }

        const {id,age} = ctx.query;
        const [result] = await UserModel.update({
            age
        },{
            where: {
                id
            }
        })
        // ctx.body = result;
        if(result>0){
            ctx.body = "update success"
        }else{
            ctx.body = "update fail"
        }
    })

    // 4.查找 findUser
    router.get("/findUser",async (ctx)=>{
        // const {id} = ctx.query;
        // const sql = `SELECT * FROM users WHERE id=?`;
        // const [row] = await connection.execute(sql,[id]);
        // ctx.body = row[0];

        const {id} = ctx.query;
        const user = await UserModel.findByPk(id);
        if(user){
            ctx.body = user;
        }else{
            ctx.body = "没有该用户";
        }
    })

    // 5.多查找 findUsers
    // router.get("/findUsers",async (ctx)=>{
    //     const {limit, offset} = ctx.query;
    //     const sql =  `SELECT * FROM users LIMIT ?,?`;
    //     const [rows] = await connection.execute(sql,[offset,limit]);
    //     ctx.body = rows;
    // })

    router.get("/findUsers",async (ctx)=>{
        // age=0 默认
        // const {limit = 5,offset=0,age=0} = ctx.query;
        // const sql = `SELECT * FROM users WHERE age>? ORDER BY age LIMIT ?,?`;
        // const [rows] = await connection.execute(sql,[age,offset,limit]);
        // ctx.body = rows;

        /* 有点问题
        const {limit = 5,offset=0,age=0} = ctx.query;
        const users = await UserModel.findAll({
            where: {
                age: {
                    [Op.gt]: +age,
                },
            },
            order:[["age","DESC"]],
            limit: +limit,
            offset: +offset
        });
        ctx.body = users;
        */
    })

app.use(router.routes());

app.listen(8080,()=>{
    console.log("localhost:8080");
})