import { prisma } from '../db/'
import type { Shoes, ShoeType } from '~/types/types'
export default defineEventHandler(async (event) => {
    
    // Get all shoes from prisma
    const shoesFromData = await prisma.shoes.findMany()

    if (!shoesFromData) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "No shoes data available"
        }))
    }

    
    


    return { 
        api: 'Successful',
        shoesFromData

    }
})