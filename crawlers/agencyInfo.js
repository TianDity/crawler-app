const Crawler = require('../libs/crawler');
const { crawler } = require('../config/config');

Crawler({
    url: crawler.url.main,
    callback() {
        const $ = window.$;
        const $section = $('.agency-head');

        return {
            cid: 1,
            logoUrl: $section.find('.agency-head-logo').prop('src'),
            name: $section.find('.ag-title-main').text(),
            feedbackRate: +($section.find('.ag-info span').eq(0).text().replace(/[^0-9]/ig, '')),
            studentCount: +($section.find('.js-item-num').attr('data-num')),
            description: $section.find('.ag-info-des').text(),
            qqLink: $section.find('.ag-info-btn').prop('href'),
            logoKey: '',
        }
    }
})
