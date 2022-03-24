const { startProcess, qiniuUpload } = require('../libs/utils')
const config = require('../config/config')
const { addSliderData } = require('../services/Slider')
const { addAgencyInfo } = require('../services/AgencyInfo')

class Crawler {
    crawSliderData() {
        startProcess({
            path: '../crawlers/slider',
            async message(data) {
                data.map(async item => {
                    if (item.imgUrl && !item.imgKey) {
                        const qiniu = config.qiniu;

                        try {
                            const imgData = await qiniuUpload({
                                url: item.imgUrl,
                                bucket: qiniu.bucket.climg.bucket_name,
                                ext: '.jpg'
                            });

                            if (imgData.key) {
                                item.imgKey = imgData.key;
                            }

                            const result = await addSliderData(item);

                            if (result) {
                                console.log('Date create OK')
                            } else {
                                console.log('Date create ERROR')
                            }
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


    crawAgencyInfo() {
        startProcess({
            path: '../crawlers/agencyInfo',
            async message(data) {
                if (data.logoUrl && !data.logoKey) {
                    const qiniu = config.qiniu;

                    try {
                        const logoData = await qiniuUpload({
                            url: data.logoUrl,
                            bucket: qiniu.bucket.climg.bucket_name,
                            ext: '.jpg'
                        })

                        if (logoData.key) {
                            data.logoKey = logoData.key;
                        }

                        const result = await addAgencyInfo(data);

                        if (result) {
                            console.log('Date create OK')
                        } else {
                            console.log('Date create ERROR')
                        }


                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            async exit(code) {
                console.log(code);
            },
            async error(error) {
                console.log(error);
            }
        })
    }


    crawRecomCourse() {
        startProcess({
            path: '../crawlers/recomCourse',
            async message(data) {
                console.log(data);
                data.map(async item => {
                    try {
                        const qiniu = config.qiniu;

                        if (item.posterUrl && !item.posterKey) {
                            const posterData = await qiniuUpload({
                                url: item.posterUrl,
                                bucket: qiniu.bucket.climg.bucket_name,
                                ext: '.jpg'
                            })

                            if (posterData.key) {
                                item.posterKey = posterData.key;
                            }
                        }

                        if (item.teacherImg && !item.teacherImgKey) {
                            const teacherImgData = await qiniuUpload({
                                url: item.teacherImg,
                                bucket: qiniu.bucket.climg.bucket_name,
                                ext: '.jpg'
                            })

                            if (teacherImgData.key) {
                                item.teacherImgKey = teacherImgData.key;
                            }
                        }


                    } catch (error) {
                        console.log(error);
                    }

                })
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