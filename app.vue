<script setup>
import { useShoeStore } from '~/store/shoes'
import { useUserStore } from './store/users'

const user = useSupabaseUser()

const client = useSupabaseAuthClient()
const store = useShoeStore()
const userStore = useUserStore()


// const {fetchShoesData} = store

console.log(user)

// const { data } = await useAsyncData('shoes', () => $fetch('/api/shoes'))
// console.log(data)


const { data } = await useFetch('/api/shoes')

store.initialShoesData = reactive(data.value)
userStore.userObj = reactive(user.value)

onMounted(() => {

})


</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
