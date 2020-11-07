// stream 流：将文件资源切成多个块，依次来传输，防止内存不足，充分利用资源
const fs = require("fs");

// 1.读取文件为 buffer
// let res = fs.readFileSync("1.txt");
// console.log(res); // <Buffer e6 88 91 e6 98 af 31 2e 74 78 74 e6 96 87 e4 bb b6>
// console.log(res.toString()); // 我是1.txt文件

// 2.利用 流 的概念
// 创建可读流
let res = fs.createReadStream("1.txt");
res.on("data", chunk => {
    // 虽然也是 buffer 数据,这个会拆分多个块读取,性能会更好
    // console.log(chunk); // <Buffer e6 88 91 e6 98 af 31 2e 74 78 74 e6 96 87 e4 bb b6>
    console.log(chunk.toString()); // 我是1.txt文件
})