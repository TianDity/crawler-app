const Crawler = require('../libs/crawler');
const { crawler } = require('../config/config');

Crawler({
    url: crawler.url.teacher,
    callback() {
        const $ = window.$;
        const $item = $('.tea');

        const data = [];

        $item.each((index, item) => {
            const $el = $(item);

            const dataItem = {
                cid: index + 1,
                teacherName: $el.find('.tea-face').prop('title'),
                courseCount: parseInt($el.find('.tea-main-sub span').eq(0).text().replace(/[^0-9]/ig, '')),
                studentCount: parseInt($el.find('.tea-main-sub span').eq(1).text().replace(/[^0-9]/ig, '')),
                teacherIntro: $el.find('.tea-main-cnt').text().trim(),
                teacherHref: $el.find('.tea-face').prop('href'),
                teacherImg: 'http:' + $el.find('.tea-img').attr('lazy-src'),
                teacherImgKey: '',
            }

            data.push(dataItem);
        })

        return data;
    }
})