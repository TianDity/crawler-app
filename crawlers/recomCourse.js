const Crawler = require('../libs/crawler');
const { crawler } = require('../config/config');

Crawler({
    url: crawler.url.main,
    callback() {
        const $ = window.$;
        const $item = $('.spread-course-ul li');
        const mainTitle = $('.agency-spread-wrap h4').text();

        const data = [];

        $item.each((index, el) => {
            const $el = $(el);

            const dataItem = {
                cid: $el.attr('report-tdw').match(/[0-9]{6}/ig)[0],
                href: $el.find('.spread-course-cover-wrap a').prop('href'),
                mainTitle,
                title: $el.find('.spread-course-wrap a').prop('title'),
                posterUrl: $el.find('.spread-course-cover').prop('src'),
                description: $el.find('.spread-course-des').text(),
                teacherImg: $el.find('.spread-course-face img').prop('src'),
                teacherName: $el.find('.spread-course-face span').eq(0).text().trim(),
                studentCount: Number($el.find('.spread-course-face span').eq(1).text().replace(/[^0-9]/ig, '')),
                price: Number($el.find('.spread-course-price').text().trim().slice(1)),
                posterKey: '',
                teacherImgKey: '',
            }

            data.push(dataItem);
        })

        return data;
    }
})
