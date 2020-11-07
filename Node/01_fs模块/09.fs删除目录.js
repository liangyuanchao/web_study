const fs = require("fs");

// rmdir  删除目录(只能删除空文件夹/目录),删除当前脚本上的目录
fs.rmdir("11", err => {
    if (err) {
        return console.log(err);
    }
    console.log("删除目录成功");
})