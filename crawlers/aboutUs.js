const Crawler = require('../libs/crawler');
const { crawler } = require('../config/config');

Crawler({
    url: crawler.url.about,
    callback() {
        const $ = window.$;
        const $el = $('.agency-about');

        // id          Int      @id @default(autoincrement())
        // title       String
        // content     String
        // aboutImg    String
        // aboutImgKey String
        // createdAt   DateTime @default(now())
        // updatedAt   DateTime @updatedAt
        return {
            cid: 1,
            title: $el.find('.about-agency-intr-wrap h2').text(),
            content: $el.find('.about-agency-intr').text().trim(),
            aboutImg: $el.find('.about-banner-wrap-0').css('background').match(/"(.*?)"/)[1],
            aboutImgKey: '',
        }
    }
})
