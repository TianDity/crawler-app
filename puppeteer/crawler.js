// const pt = require('puppeteer');


// ; (async () => {
//     const bs = await pt.launch();
//     const url = 'https://msiwei.ke.qq.com/#category=-1&tab=0';
//     const pg = await bs.newPage();

//     await pg.goto(url, {
//         timeout: 30 * 1000,
//         waitUntil: 'networkidle2'
//     })

//     const result = await pg.evaluate(() => {
//         const $ = window.$;
//         const $list = $('.agency-big-banner-li');
//         let data = [];

//         $list.each((index, item) => {
//             const $el = $(item),
//                 $elLink = $el.find('.js-banner-btnqq');


//             const dataItem = {
//                 cid: $elLink.attr('data-id'),
//                 href: $elLink.prop('href'),
//                 imgUrl: $elLink.find('img').prop('src'),
//                 title: $elLink.prop('title')
//             };

//             data.push(dataItem);
//         })

//         return data;
//     })

//     await bs.close();

//     process.send(result);

//     setTimeout(() => {
//         process.exit(0);
//     })
// })()