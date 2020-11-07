const fs = require('fs');

// 如果不写 "utf8",就是 buffer 数据格式, 需要将读取的文件 .toString() 转为字符串
// fs.readFile("1.txt","utf8",(err,data)=>{
//     if(err){
//         // 打印读取错误内容
//         return console.log(err);
//     }
//     // 打印读取成功的内容
//     console.log(data);
// })

// 异步读取
// fs.readFile("1.txt",(err,data)=>{
//     if(err){
//         // 打印读取错误内容
//         return console.log(err);
//     }
//     // 打印读取成功的内容
//     console.log(data.toString());
// })

// 同步读取文件
let res = fs.readFileSync("1.txt");
console.log(res.toString());