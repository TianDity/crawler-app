const Crawler = require('../libs/crawler');
const { crawler } = require('../config/config');

Crawler({
    url: crawler.url.course,
    callback() {
        const $ = window.$;
        const $item = $('.course-tab-filter li');

        const data = [];


        // id          Int           @id @default(autoincrement())
        // cid         String        @unique
        // title       String
        // status      Int           @default(1)
        // createdAt   DateTime      @default(now())
        // updatedAt   DateTime      @updatedAt
        // course_list Course_list[]

        $item.each((index, item) => {
            const $el = $(item);

            const dataItem = {
                cid: index + 1,
                title: $el.find('.course-tab-filter-item').text().replace('促', '').trim(),
            }

            data.push(dataItem);
        })

        return data;
    }
})
