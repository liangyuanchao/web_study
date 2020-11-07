// buffer 缓存区;一种2进制的数据格式,Node中传输文件资源,一般转换成buffer数据格式,这样传输数据比较快

// Node 6.0 之前创建
// 1.new Buffer()
// let buffer = Buffer.alloc(10); // 创建一个指定大小,10个子节
// console.log(buffer); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 2.
// let buffer = Buffer.from("大家好");
// buffer 是一个二进制的,但是呈现是以十六进制编码,三个子节为一个数据
// console.log(buffer); // <Buffer e5 a4 a7 e5 ae b6 e5 a5 bd>

// 3.将 buffer 编码转换为字符串
// let buffer = Buffer.from([0xe5, 0xa4, 0xa7, 0xe5, 0xae, 0xb6, 0xe5, 0xa5, 0xbd]);
// console.log(buffer.toString()); // 大家好

// 4.buffer 乱码  3个编码为一个字符,否则会乱码
let buffer1 = Buffer.from([0xe5, 0xa4, 0xa7, 0xe5]);
// console.log(buffer1.toString()); // 大�
let buffer2 = Buffer.from([0xae, 0xb6, 0xe5, 0xa5, 0xbd]);
// console.log(buffer2.toString()); // ��好
// 解决方案：合并两个 buffer
// (1) concat()
// let newbuffer = Buffer.concat([buffer1, buffer2]);
// console.log(newbuffer.toString()); // 大家好
// (2)Node提供的内置模块,性能高
let { StringDecoder } = require("string_decoder");
let decoder = new StringDecoder();
let res1 = decoder.write(buffer1);
let res2 = decoder.write(buffer2);
// 这个方法会自动把多余的buffer编码存到下一个
console.log(res1); // 大
console.log(res2); // 家好