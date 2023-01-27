<script setup>
//TODO: Add cart items to checkout
import { useCartStore } from "~/store/cart";
import { useRewardStore } from "~/store/rewards";

const store = useCartStore();
const rewardStore = useRewardStore(); 

const { cart, price, getCart, getCartAmount, calculateCartTotal } = store;

const { rewardPoints } = rewardStore;

definePageMeta({
    middleware: [
        'auth'
    ]
})

//FIXME: User to select shoe size before it gets added to checkout

</script>
<template>
    {{ cart }}
    <div>
  <section class="bg-black">
    <div class="flex text-white">
      <div class="px-6 py-4 text-center">
        <h1>Number</h1>
      </div>
      <div class="px-6 py-4 text-center">
        <h1>Name</h1>
      </div>
      <div class="px-6 py-4 text-center">
        <h1>Price</h1>
      </div>
    </div>
    
  </section>
  <div v-for="shoe in cart" class="flex">
        <p>{{ shoe.productNumber }}</p>
        <p>{{ shoe.size }}</p>
        <p>{{ shoe.title }}</p>
    </div>
</div>  
</template>
