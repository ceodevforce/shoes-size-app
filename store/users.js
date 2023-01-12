import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    // State

    const userObj = ref(null)
    const userMobile = ref(null)
    const rewards = ref([])
    
    const points = ref(null)


    // Getter
    const getUser = computed(() => {
        return userObj
    })
    const getUserMobile = computed(() => {
        return userMobile
    }) 

    const getRewards = computed(() => rewards)

   

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
        getUser,
        getUserMobile,
        getRewards,
        userObjectFunction,
        calculateRewards,
    }
})

