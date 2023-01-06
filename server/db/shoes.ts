import { prisma } from '.'
import type { Shoes } from '~/types/types'

export const createShoes = async (shoeData: Shoes) => {
    return await prisma.shoes.create({
        data: shoeData
    })
} 

export const findShoes = () => {}