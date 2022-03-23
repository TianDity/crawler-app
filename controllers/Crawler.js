const { startProcess, qiniuUpload } = require('../libs/utils')
const config = require('../config/config')

class Crawler {
    crawSliderData() {
        startProcess({
            path: '../crawlers/slider',
            async message(data) {
                data.map(async item => {
                    if (item.imgUrl && !item.img_key) {
                        const qiniu = config.qiniu;

                        try {
                            const imgData = await qiniuUpload({
                                url: item.imgUrl,
                                bucket: qiniu.bucket.climg.bucket_name,
                                ak: qiniu.keys.ak,
                                sk: qiniu.keys.sk,
                                ext: '.jpg'
                            });

                            if (imgData.key) {
                                item.img_key = imgData.key;
                            }

                            console.log(imgData);
                        } catch (err) {
                            console.log(err);
                        }
                    }


                })

                // console.log(data);
            },
            async exit(code) {
                console.log(code);
            },
            async error(error) {
                console.log(error);
            }
        })
    }
}


module.exports = new Crawler();