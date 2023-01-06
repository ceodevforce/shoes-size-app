import { createShoes } from "../db/shoes"
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    const { title, color, cost, type, size } = body 
    
    if (!title || !color ) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Missing information"
        }))
    }


    // const shoeData = {
    //     title,
    //     color,
    //     cost,
    //     type,
    //     size
    // }

    // const shoes = await createShoes(shoeData)

    return {
        api: 'works',
        // shoes
    }
})