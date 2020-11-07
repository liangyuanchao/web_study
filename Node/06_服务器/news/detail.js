const fs = require("fs");
const newsDataList = require("./data/data.json");
const cheerio = require("cheerio");

module.exports = (id) => {
    // 获取数据
    // 基于数据生成模板
    // 返回模板
    let template = fs.readFileSync("./views/detail.html");
    const $ = cheerio.load(template);
    const currentId = +id || 1;
    const currentNewsData = getCurrentNewsDataById(currentId);
    // console.log(surrentNewsData);
    $(".text").html(createDetailInnerHtml(currentNewsData));
    // return template;
    return $.html()
}

function getCurrentNewsDataById(id) {
    return newsDataList.find(data => data.id === id)
}

function createDetailInnerHtml(data) {
    return `
        <h1 class="title">${data.title}</h1>
        <div class="article-info">${data.from} 时间：2${data.newTime}</div>
        <p class="content">
            ${data.title}
        </p>
    `
}