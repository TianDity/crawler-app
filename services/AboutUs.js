const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class AboutUsService {
    async addAboutData(data) {
        return await prisma.about_us.upsert({
            where: {
                cid: data.cid
            },
            update: {
                aboutImgKey: data.aboutImgKey,
            },
            create: {
                ...data
            }
        })
    }
}

module.exports = new AboutUsService()
