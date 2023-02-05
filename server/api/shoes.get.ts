import { prisma } from '../db/'
import type { Shoes, ShoeType } from '~/types/types'
import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {

    const client = serverSupabaseClient(event)

    const { data: shoesFromSupabase } = await client.from('Shoes').select("*")
    const { data: shoeColor } = await client.from('Shoes').select('color')
    const { data: shoeSize } = await client.from('Shoes').select('size')
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
        shoesFromSupabase,
        shoeColor,
        shoeSize
    }
})