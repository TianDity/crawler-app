const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class RecomCourseService {
    async addRecomCourse(data) {
        return await prisma.recom_course.upsert({
            where: {
                id: 1
            },
            update: {
                ...data
            },
            create: {
                ...data
            }
        })
    }
}

module.exports = new RecomCourseService()
