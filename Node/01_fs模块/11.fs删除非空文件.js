const fs = require("fs");

// 删除非空文件夹
// 思路：先删除目录里的文件 --> 在删除目录

function removeDir(path) {
    let data = fs.readdirSync(path);
    // console.log(data); // [ '1.txt', '2.txt', '22' ]
    for (let i = 0; i < data.length; i++) {
        // data[i] 不是当前目录路径,所以需要给路径加上 "/",表示下一个路径
        // 判断文件或者目录,如果是文件直接删除;如果是目录继续查找
        let url = path + "/" + data[i];
        let stat = fs.statSync(url);
        if (stat.isDirectory()) {
            // 是目录,继续查找
            removeDir(url); // 递归
        } else {
            // 是文件,删除
            fs.unlinkSync(url);
        }
    }
    // 删除空目录
    fs.rmdirSync(path);
}

removeDir("11");