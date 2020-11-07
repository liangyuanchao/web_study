const fs = require("fs");

// 修改文件名和修改目录文件夹名
// 修改文件名 第一个参数为要修改的文件名,第二个参数为修改的后的文件名
// fs.rename("4.txt", "4.修改文件名.txt", err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("修改成功");
//     }
// })

// 同步修改文件名
fs.renameSync("4.txt", "4.修改文件名txt", err => {
    if (err) {
        console.log(err);
    }
})