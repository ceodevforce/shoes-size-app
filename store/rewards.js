import { defineStore } from "pinia";


export const useRewardStore = defineStore('rewards', () => {

    /* -------------------------------------------------------------------------- */
    /*                                    State                                   */
    /* -------------------------------------------------------------------------- */
    const rewardPoints = ref(0)

    const purchaseWithCash = ref(false)
    const purchaseWithCard = ref(false)
    const purchaseWithPoints = ref(false)
    
    /* -------------------------------------------------------------------------- */
    /*                                   Getters                                  */
    /* -------------------------------------------------------------------------- */
    const getRewardPoints = computed(() => rewardPoints)
    const getPurchaseWithCard = computed(() => purchaseWithCard)
    const getPurchaseWithCash = computed(() => purchaseWithCash) //
    const getPurchaseWithPoints = computed(() => purchaseWithPoints)

    /* -------------------------------------------------------------------------- */
    /*                                   Action                                   */
    /* -------------------------------------------------------------------------- */

    const convertToRewardPoints = (purchaseAmount) => {
        if (purchaseAmount > 200) {
            const currentPoints = getRewardPoints
            
            currentPoints 
            
        }
    }
    const calculateRewardPoints = (points) => {
        const currentPoints = getRewardPoints

        const newPoints = currentPoints + points

        rewardPoints.value = newPoints

        return newPoints
    }

    return {
        rewardPoints,
        getRewardPoints,
        calculateRewardPoints,
        convertToRewardPoints,
        getPurchaseWithCard,
        getPurchaseWithCash,
        getPurchaseWithPoints

    }
})