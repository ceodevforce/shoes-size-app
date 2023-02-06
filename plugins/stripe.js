import stripe from 'stripe'


export default defineNuxtPlugin((nuxtApp) => {
    const { $config } = nuxtApp
    const config = useRuntimeConfig()
    console.log(config.publishableKey)
})

//
//const config = useRuntimeConfig()
//
//export const stripeOb = new stripe(config.publishableKey, {
//    apiVersion: "2022-11-15",
//});