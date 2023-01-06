import { defineStore } from 'pinia'

export const useShoeStore = defineStore('shoes', () => {
    // State
    const initialShoesData = ref(null)
    const shoePriceDiscount = ref(false)
    const isBootsDiscount = ref(true)
    const pointAmount = ref(10)


    // Getters
    let getShoe = computed(() => {
        return initialShoesData
    })

    //Actions
    const fetchShoesData = async() => {
        const { data } = await useFetch('/api/shoes')
        getShoe = data

    }
    const calculatePointOnShoe = () => {

    }

    return { 
        initialShoesData,
        getShoe,
        shoePriceDiscount,
        fetchShoesData
    }
})