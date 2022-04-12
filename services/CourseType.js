const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class CourseTypeService {
    async addTypeData(data) {
        return await prisma.course_type.upsert({
            where: {
                cid: data.cid
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

module.exports = new CourseTypeService()
