// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "web09"
// })

// 添加一条数据
// const sql = `INSERT INTO users (id,name,age) VALUES (0,?,?)`;
// const age = 10;
// const name = "xioaheihei";
// connection.query(sql, [name, age], (err, results) => {
//     if (err) {
//         throw err;
//     }
//     console.log(results);
// })

// Promise 方式 <流行>
const mysql = require("mysql2/promise");
// ()(); 立即执行函数
(async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: "web09"
    });

    // 添加一条数据
    const sql = `INSERT INTO users (id,name,age) VALUES (0,?,?)`;
    const name = "张三";
    const age = 28;
    const result = await connection.execute(sql, [name, age]);
    console.log(result);
})();