import stripe from "stripe"
import { Price, Product } from "~/types/types-stripe"

export const useStripe = async () =>  {
    const config = useRuntimeConfig()
    const stripeObject = new stripe(config.publishableKey, {
        apiVersion: "2022-11-15"
    })

    const createProducts = async (productInfo: Product): Promise<Product> => {

        const product = await stripeObject.products.create({
            ...productInfo,
            productInfo
        })
        console.log("Product created: ", product)
        return {
            product
        }
    }
    
    const createPrice = async (product: Product, priceInfo: Price): Promise<Price> => {

        const { id } = product

        const prices = await stripeObject.prices.create({
            ...priceInfo,
            product: id,
            priceInfo
        })
        return {
            prices
        }
    }

    return {
        stripeObject,
        createProducts,
        createPrice
    }
}
