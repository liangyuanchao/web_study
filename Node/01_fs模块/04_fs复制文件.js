const fs = require("fs");

fs.copyFile("2.txt", "02.copy.txt", err => {
    if (err) {
        return console.log(err);
    }
    console.log("复制成功");
})

//  封装复制文件 思路：先读取文件,在写入文件
// function myCopy(src, dest) {
//     // src 写入的文件名,dest 读取的文件名
//     fs.writeFileSync(dest, fs.readFileSync(src))
// }

// myCopy("1.txt", "4.txt");