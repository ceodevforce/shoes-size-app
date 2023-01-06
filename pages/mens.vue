<script setup>
import { useUserStore } from "~/store/users";
import { useShoeStore } from "~/store/shoes";

const client = useSupabaseAuthClient();
const store = useShoeStore();
const storeUser = useUserStore()

const { shoesFromData } = store.initialShoesData;
const { cart, getCart } = storeUser

const filteredShoes = shoesFromData.filter((shoe) => {
  console.log(shoe);
  if (shoe.tag !== "Mens") {
    return "There are no tags located";
  }
  return shoe.tag == "Mens";
});

const addToCart = (item) => {
  cart.push(item)
  console.log(getCart)
}

watch(
  ()=> getCart
)
</script>
<template>
  <main>
    <div class="text-3xl text-center font-semibold text-red-200">
      Men's Shoes
    </div>
    {{ cart }}
    <UiHero />
    <hr class="my-8 border-gray-400 dark:border-gray-700" />
    <div v-for="shoe in filteredShoes" :key="shoe.id">
      <img
        class="relative z-10 object-cover w-full rounded-md h-96"
        src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        alt=""
      />

      <div
        class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900"
      >
        <a
          href="#"
          class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
        >
          {{ shoe.title }}
        </a>

        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          {{ shoe.details }}
        </p>

        <p class="mt-3 text-sm text-blue-500">Rating: {{ shoe.rating }}</p>
         <div class="flex">
        <button @click="addToCart(shoe.price)" class="px-6 py-2 font-medium text-white tracking-wide bg-black rounded-xl">Add to Cart</button>
      </div>
      </div>
     
    </div>
  </main>
</template>
