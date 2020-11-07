const fs = require("fs");
const cheerio = require("cheerio");
const newsDataList = require("./data/data.json");

let currentPage;
const pageSize = 5;

module.exports = (p) => {
    currentPage = p || 1;
    let template = fs.readFileSync("./views/news.html");
    /*
        使用cheerio 步骤
            1.npm i cheerio
            2.引入
            3.初始化 cheerio
            4.使用(顶替内容)
    */
    // 初始化
    const $ = cheerio.load(template);
    // createNewsListInnerHtml();
    // 使用
    $(".news-list").html(createNewsListInnerHtml());

    $(".pagination").html(createPageinationInnerHtml());


    // return template;
    return $.html();
}

const createNewsItemHtml = (data) => {
    return `
    <li class="news">
        <a href="javascript:;">
            <img src="${data.imgUrl}"
                alt="">
        </a>
        <div>
            <h3>
                <a href="/detail?id=${data.id}">${data.title}</a>
            </h3>
            <div class="info">
                <span class="tips"><span>${data.from}</span></span>
                <!-- <span class="line"></span> -->
                <span class="time">| &nbsp;&nbsp;${data.newTime}</span>
            </div>
        </div>
    </li>
    `
}


function getCurrentPageNewsDataList() {
    // 控制显示5条数据
    // const pageSize = 5;
    // 控制显示第几页
    // const currentPage = 1;

    // 开始截取
    const start = (currentPage - 1) * pageSize;
    // 截取至最后一位
    const end = start + pageSize;
    return newsDataList.slice(start, end);
}

function createNewsListInnerHtml() {
    let result = '';
    getCurrentPageNewsDataList().forEach((newsData) => {
        result += createNewsItemHtml(newsData);
    });
    // console.log(result);
    return result;
}

function createPageinationInnerHtml() {
    // 显示多少个页码,math.ceil向上取整
    const len = Math.ceil(newsDataList.length / pageSize);

    // 控制最小值不能超过1
    const prevPage = Math.max(currentPage - 1, 1);
    // 控制最大值不能超过分页码
    const nextPage = Math.min(currentPage + 1, len);

    let result = `<a href="/?p=${prevPage}" class="prev">⌜</a>`;
    for (let index = 1; index < len; index++) {
        result += `<a href="/?p=${index}">${index}</a>`
    }
    result += `<a href="/?p=${nextPage}" class="next">⌝</a>`;
    return result;
}