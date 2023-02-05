import { createShoes } from "~/server/db/shoes";
import { Shoes } from "~/types/types";
//import { Product } from "~/types/types-stripe";

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const { title, size, details, productNumber, color, price, tag, rating, active, metadata, images, shippable } = body



//    console.log(stripeObject)
//
//    const productInfo: Product = {
//        name: title,
//        description: details
//        object: "product",
//        active,
//        created: Date.now(),
//        livemode: false,
//        metadata: {
//            "size": size,
//            "color": color,
//            "tag": tag,
//            "rating": rating,
//            "productNumber": productNumber,
//        },
//        shippable
//    }


   if (!title || !size || !details || !productNumber || !price || !tag || !rating) {
       return sendError(event, createError({
           statusCode: 400,
           statusMessage: "Something went wrong with shoes data"
       }))
   }

   const shoesData: Shoes = {
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
        shoes,
    }
})