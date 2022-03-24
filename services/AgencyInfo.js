const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class AgencyInfoService {
    async addAgencyInfo(data) {
        return await prisma.agency_info.upsert({
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

module.exports = new AgencyInfoService()