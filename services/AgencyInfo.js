const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class AgencyInfoService {
    async addAgencyInfo(data) {
        return await prisma.agency_info.upsert({
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

module.exports = new AgencyInfoService()
