const { startProcess, qiniuUpload } = require('../libs/utils')
const config = require('../config/config')
const { addSliderData } = require('../services/Slider')
const { addAgencyInfo } = require('../services/AgencyInfo')
const { addRecomCourse } = require('../services/RecomCourse')
const { addTeacherData } = require('../services/TeacherList')
const { addStudentData } = require('../services/StudentList')
const { addTypeData } = require('../services/CourseType')
const { addCourseData } = require('../services/CourseList')
const { addAboutData } = require('../services/AboutUs')

class Crawler {
    crawlSliderData() {
        startProcess({
            path: 'slider',
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


    crawlAgencyInfo() {
        startProcess({
            path: 'agencyInfo',
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


    crawlRecomCourse() {
        startProcess({
            path: 'recomCourse',
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

                        const result = await addRecomCourse(item);

                        if (result) {
                            console.log('Date create OK')
                        } else {
                            console.log('Date create ERROR')
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

    crawlTeacherList() {
        startProcess({
            path: 'teacherList',
            async message(data) {
                console.log(data);
                data.map(async item => {
                    try {
                        const qiniu = config.qiniu;

                        if (item.teacherImg && !item.teacherImgKey) {
                            const teacherData = await qiniuUpload({
                                url: item.teacherImg,
                                bucket: qiniu.bucket.climg.bucket_name,
                                ext: '.jpg'
                            })

                            if (teacherData.key) {
                                item.teacherImgKey = teacherData.key;
                            }
                        }

                        const result = await addTeacherData(item);

                        if (result) {
                            console.log('Date create OK')
                        } else {
                            console.log('Date create ERROR')
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


    crawlStudentList() {
        startProcess({
            path: 'studentList',
            async message(data) {
                data.map(async item => {
                    try {
                        const qiniu = config.qiniu;

                        if (item.studentImg && !item.studentImgKey) {
                            const studentData = await qiniuUpload({
                                url: item.studentImg,
                                bucket: qiniu.bucket.climg.bucket_name,
                                ext: '.jpg'
                            })

                            if (studentData.key) {
                                item.studentImgKey = studentData.key;
                            }
                        }

                        const result = await addStudentData(item);

                        if (result) {
                            console.log('Date create OK')
                        } else {
                            console.log('Date create ERROR')
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

    crawlCourseType() {
        startProcess({
            path: 'courseType',
            async message(data) {
                data.map(async item => {
                    try {
                        const result = await addTypeData(item);

                        if (result) {
                            console.log('Date create OK')
                        } else {
                            console.log('Date create ERROR')
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


    crawlCourseList() {
        startProcess({
            path: 'courseList',
            async message(data) {
                data.map(async item => {
                    try {
                        const qiniu = config.qiniu;

                        if (item.courseImg && !item.courseImgKey) {
                            const courseData = await qiniuUpload({
                                url: item.courseImg,
                                bucket: qiniu.bucket.climg.bucket_name,
                                ext: '.jpg'
                            })

                            if (courseData.key) {
                                item.courseImgKey = courseData.key;
                            }
                        }

                        const result = await addCourseData(item);

                        if (result) {
                            console.log('Date create OK')
                        } else {
                            console.log('Date create ERROR')
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

    crawlAboutUs() {
        startProcess({
            path: 'aboutUs',
            async message(data) {
                try {
                    const qiniu = config.qiniu;

                    if (data.aboutImg && !data.aboutImgKey) {
                        const aboutData = await qiniuUpload({
                            url: data.aboutImg,
                            bucket: qiniu.bucket.climg.bucket_name,
                            ext: '.jpg'
                        })

                        if (aboutData.key) {
                            data.aboutImgKey = aboutData.key;
                        }
                    }

                    const result = await addAboutData(data);

                    if (result) {
                        console.log('Date create OK')
                    } else {
                        console.log('Date create ERROR')
                    }


                } catch (error) {
                    console.log(error);
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
}


module.exports = new Crawler();