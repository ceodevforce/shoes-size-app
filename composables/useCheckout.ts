/* -------------------------------------------------------------------------- */
/*               Create composable to generate shoes at checkout              */
/* -------------------------------------------------------------------------- */
//TODO: Add pinia to auto import feature using config

import { useCartStore } from "~/store/cart"

const useCheckout = () => {

    const store = useCartStore()

    const color = ref(null)
    const size = ref(null)
    const loading = ref(false)
    const error = ref('')
    

    const { addToCart, cart, price } = store
    
    const shoeObject = cart.forEach((shoe) => {
        const shoes = {
            
        }
    })

    const createShoeForCart = () => {
        // add shoes to cart
    }

    return {

    }
}