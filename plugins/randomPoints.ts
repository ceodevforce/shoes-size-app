import { useShoeStore } from "~/store/shoes";

export default defineNuxtPlugin(() => {
    const nuxtApp = useNuxtApp();

    const shoesData = nuxtApp.payload.data.Jg4YCyoRGd;

    const shoes = reactive(shoesData)
    console.log(shoes)
    

    const giveRandomPoints = (shoes: any) => {
        shoes.map(shoe => ({
            ...shoe,
            points: Math.floor(Math.random() * 100)
        }))
    }


})