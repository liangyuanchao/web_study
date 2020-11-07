const fs = require("fs");

// mkdir 创建文件夹
fs.mkdir("7.文件夹", err => {
    if (err) {
        return console.log(err);
    }
    console.log("创建目录成功");
})