const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class StudentListService {
    async addStudentData(data) {

        const cid = data.cid;

        return await prisma.student_list.upsert({
            where: {
                cid
            },
            update: {
                studentImgKey: data.studentImgKey,
            },
            create: {
                ...data
            }
        })
    }
}


module.exports = new StudentListService()
