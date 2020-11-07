let fs = require('fs');

// 增删改查 

// 想要将文件操作变成同步操作 加上 Sync
// 写入文件 第一个参数是要写入的文件名,第二个是写入的内容,第三个回调
// fs.writeFile("1.txt", "我是写入的内容", (err) => {
//     if (err) {
//         如果写入错误,返回 err 
//         return console.log(err);
//     }
//     console.log("写入成功");
// })

// 写入文件,第三个参数 flag 配置  "a":追加写入(在内容后追加写入的内容),"w":写入(覆盖原有的内容)，"r":读取
// 不写 flag 参数 默认为 "w"
// fs.writeFile("1.txt", "写入内容", {
//     flag: 'a'
// }, (err) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("写入成功");
// })

// 同步写入文件
fs.writeFileSync("1.txt", "异步写入文件", {
    flag: "a"
}, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("异步写入成功");
})