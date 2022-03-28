const Crawler = require('../libs/crawler');
const { crawler } = require('../config/config');

Crawler({
    url: crawler.url.main,
    callback() {
        const $ = window.$;
        const $list = $('.js-teacher-list li');

        console.log('111');

        const data = [];

        $list.each((index, item) => {
            const $el = $(item);
            const dataItem = {
                cid: $el.attr('report-tdw').match(/[0-9]{10}/ig)[0],
                teacherName: $el.find('.tea-main-title').text(),
                courseCount: $el.find('.tea-main-sub span').eq(0).text().split(' ')[1],
                studentCount: $el.find('.tea-main-sub span').eq(1).text().split(' ')[1],
                teacherIntro: $el.find('.tea-main-cnt').text().trim(),
                teacherHref: $el.find('.tea-face').prop('href'),
                teacherImg: $el.find('.tea-face img').prop('src'),
                teacherImgKey: '',
            }
            data.push(dataItem);
        })

        return data;
    }
})