const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class TeacherListService {
    async addTeacherData(data) {

        const cid = data.cid;

        return await prisma.teacher_list.upsert({
            where: {
                cid
            },
            update: {
                teacherImgKey: data.teacherImgKey,
            },
            create: {
                ...data
            }
        })
    }
}


module.exports = new TeacherListService()
