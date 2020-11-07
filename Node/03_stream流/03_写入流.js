const fs = require("fs");

// 读取流
let re = fs.createReadStream("1.txt")
// 写入流
let wr = fs.createWriteStream("2.txt");

re.pipe(wr);