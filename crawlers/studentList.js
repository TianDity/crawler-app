const Crawler = require('../libs/crawler');
const { crawler } = require('../config/config');

Crawler({
    url: crawler.url.main,
    callback() {
        const $ = window.$;
        const $list = $('.agency-stu-list li');

        const data = [];

        // id            Int      @id @default(autoincrement())
        // cid           Int      @unique
        // studentName   String
        // studentIntro  String
        // studentImg    String
        // studentImgKey String
        // learnCourse   String
        // courseLink    String
        // status        Int      @default(1)
        // createdAt     DateTime @default(now())
        // updatedAt     DateTime @updatedAt

        $list.each((index, item) => {
            const $el = $(item);
            const dataItem = {
                cid: index + 1,
                studentName: $el.find('.stu-main h4').text(),
                studentIntro: $el.find('.stu-main-cnt').text().trim(),
                studentImg: $el.find('.stu-img').prop('src'),
                studentImgKey: '',
                learnCourse: $el.find('.stu-main-tit').prop('title'),
                courseLink: $el.find('.stu-main-tit').prop('href'),
            }
            data.push(dataItem);
        })

        return data;
    }
})