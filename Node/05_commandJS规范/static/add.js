const add = (a, b) => {
    return a + b;
}

// node 导出
module.exports = add;

// 简单版本
// exports.add = add;
/*
    原理： const exports = module.exports = {}
 */