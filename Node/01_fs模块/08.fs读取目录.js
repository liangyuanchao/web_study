const fs = require("fs");

// 读取目录 readdir
fs.readdir("7.文件夹", (err, data) => {
    if (err) {
        return console.log(err);
    }
    // 读取成功 返回一个文件夹和文件的数组 [ '1.txt', '11', '2.txt', '3.html' ]
    console.log(data);
})