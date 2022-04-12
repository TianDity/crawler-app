const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class CourseListService {
    async addCourseData(data) {
        return await prisma.course_list.upsert({
            where: {
                cid: data.cid
            },
            update: {
                courseImgKey: data.courseImgKey
            },
            create: {
                ...data
            }
        })
    }

    async getCourses() {
        const courses = await prisma.course_list.findMany()
        return courses;
    }
}

module.exports = new CourseListService()
