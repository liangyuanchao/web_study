// 使用 ORM
const { Sequelize } = require("sequelize");
const getUserModel = require("./UserModel")

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
sequelize.sync();

// 有表也会创建，会把前面的表删除，强制刷新
// sequelize.sync({force: true});

// 1.添加数据
UserModel.create({
    age:85,
    name: "小明媚"
})