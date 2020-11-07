const fs = require("fs");

// 获取文件或目录的详细信息 stat
fs.stat("11", (err, stat) => {
    if (err) {
        return console.log(err);
    }
    // console.log(stat);
    // stat.isFile 判断是否是一个文件
    // console.log(stat.isFile());
    // stat.isDirectory 判断是否是一个文件夹/目录
    console.log(stat.isDirectory());
})