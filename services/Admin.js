const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class AdminService {
    async addAdmin(data) {
        return await prisma.admin.upsert({
            where: {
                username: data.username
            },
            update: {
                ...data
            },
            create: {
                ...data
            }
        })
    }

    async login(data) {
        const { username, password } = data;

        const admin = await prisma.admin.findUnique({
            where: {
                username
            }
        })

        if (!admin) {
            return 10003;
        }

        const dbPassword = admin.password;

        if (dbPassword !== password) {
            return 10004;
        }

        return {
            uid: admin.id,
            username: admin.username,
        }
    }
}

module.exports = new AdminService()
