import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // write prisma query
    await prisma.$connect()
    const shoesFromData = await prisma.shoes.findMany()
    console.log(shoesFromData)
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})

export { prisma }