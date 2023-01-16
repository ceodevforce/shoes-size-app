<script>
import { useShoeStore } from "~/store/shoes"

const route = useRoute() 

const store = useShoeStore()

const { getShoe } = store

const shoeList = getShoe

console.log(shoeList)



console.log(getShoe)
function checkShoe() {

}

onMounted(() => {

})



</script>
<template>
    <div>
        <h1>Shoe</h1>
    </div>
</template>