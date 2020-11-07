const fs = require("fs");

// 创建一个 65kb 的文件
// let buffer = Buffer.alloc(1024 * 65);
// fs.writeFile("65kb", buffer, err => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("写入成功");
// })

// 流 会将数据拆分成 64kb 的小文件传输
// 创建可读流,测试 流 的传输数据
let res = fs.createReadStream("65kb");
let num = 0;
res.on("data", chunk => {
    num++;
    console.log(num); // 1 2 将 65kb 文件 拆分成两次读取
})