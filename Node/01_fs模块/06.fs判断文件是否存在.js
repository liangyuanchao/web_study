const fs = require("fs");

// 判断文件或者目录是否存在 返回 false 或者 true
fs.exists("4.txt", function (exists) {
    console.log(exists);
})