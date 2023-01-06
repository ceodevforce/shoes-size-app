import { createShoes } from "~/server/db/shoes";
import {Shoes} from "~/types/types";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { title, size, details, productNumber, color, price, tag, rating} = body

   if (!title || !size || !details || !productNumber || !price || !tag || !rating) {
       return sendError(event, createError({
           statusCode: 400,
           statusMessage: "Something went wrong with shoes data"
       }))
   }

   const shoesData: any = {
       title,
       size,
       details,
       productNumber,
       color,
       price,
       tag,
       rating
   }

    const shoes = await createShoes(shoesData)
    return {
        shoes
        // cookies
    }
})