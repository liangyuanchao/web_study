const fs = require("fs");

// 删除文件
// fs.unlink("1.txt", err => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("删除成功");
// })

// 写入内容
// fs.writeFile("1.txt", "我是写入的内容", (err) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("写入成功");
// })

// 同步删除
fs.unlinkSync("1.txt", (err, data) => {
    if (err) {
        return console.log(err);
    }
})