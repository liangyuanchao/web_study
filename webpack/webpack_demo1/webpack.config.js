// webpack 是基于NodeJS的
const path = require("path");

module.exports = {
    // 上下文 项目打包的项目路径
    // context: process.cwd,
    // 项目入口
    // entry: 支持字符串、数据、对象
    // entry: "./src/index.js",
    // entry: ["./src/index.js", "other.js"],
    entry: {
        main: "./src/index.js",
        other: "./src/other.js"
        /**
         * 多入口对应多出口
         */
    },

    // 项目出口
    output: {
        // 打包后文件位置,必须使用绝对路径
        path: path.resolve(__dirname, "./dist"),
        // 打包后文件名
        // filename: "main.js"
        filename: "[main].js"
    }
}