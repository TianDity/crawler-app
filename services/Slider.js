const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class SliderService {
    async addSliderData(data) {

        const cid = data.cid;

        return await prisma.slider.upsert({
            where: {
                cid
            },
            update: {
                imgKey: data.imgKey,
            },
            create: {
                ...data
            }
        })


    }
}


module.exports = new SliderService()