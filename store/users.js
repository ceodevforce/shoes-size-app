import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    // State

    const userObj = ref(null)
    const userMobile = ref(null)
    const rewards = ref([])
    const cart = ref([])
    const points = ref(null)


    // Getter
    const getUser = computed(() => {
        return userObj
    })
    const getUserMobile = computed(() => {
        return userMobile
    }) 

    const getRewards = computed(() => rewards)

    const getCart = computed(() => {
        return cart 
    })


    // Actions

    const userObjectFunction = (updatedInfo) => {
        const { mobileNumber } = updatedInfo
        
        const user = getUser

        const updatedUserInformation = {
            ...user,
            mobileNumber    
        }
        return updatedInfo

    }
    
    const addToCart = (item) => {
        cart.push(item)
    }

    const calculateCartTotal = () => {
        const price = getCart
        const total = price.reduce((accu, value) => {
            return accu + value
        },0)

    }

    const calculateRewards = (points, amountOfMoney) => {
        const { provider } = userObj.app_metadata

        switch (provider) {
            case ('email'):
                return points += 2
            default:
                return 0
        }
        

    }
  
    return {
        userObj,
        userMobile,
        rewards,
        cart,
        getUser,
        getUserMobile,
        getRewards,
        getCart,
        addToCart,
        userObjectFunction,
        calculateRewards,
        calculateCartTotal
    }
})

