const Crawler = require('../libs/crawler');
const { crawler } = require('../config/config');

Crawler({
    url: crawler.url.course,
    callback() {
        const $ = window.$;
        const $list = $('.course-card-list li');

        const data = [];

        // id           Int         @id @default(autoincrement())
        // cid          String      @unique
        // title        String
        // href         String
        // price        String
        // buyCount     Int
        // courseImg    String
        // courseImgKey String
        // courseType   Course_type @relation(fields: [typeID], references: [id])
        // typeID       Int
        // status       Int         @default(1)
        // createdAt    DateTime    @default(now())
        // updatedAt    DateTime    @updatedAt

        $list.each((index, item) => {
            const $el = $(item);
            const dataItem = {
                cid: $el.find('.item-img-link').attr('data-id'),
                title: $el.find('.item-tt-link').prop('title'),
                href: $el.find('.item-tt-link').prop('href'),
                price: $el.find('.item-price').text() === '免费' ? '0' : $el.find('.item-price').text().slice(1),
                buyCount: Number($el.find('.item-user--right').text().replace(/[^0-9]/ig, '')),
                courseImg: $el.find('.item-img-link img').prop('src'),
                courseImgKey: '',
                typeID: 1,
            }
            data.push(dataItem);
        })

        return data;
    }
})
