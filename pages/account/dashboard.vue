<script setup lang="ts">
import { useShoeStore } from "~/store/shoes";
import { useRewardStore } from "~/store/rewards";
import { useCartStore } from "~/store/cart";


//const {  } = useShoeStore()
const { rewardPoints, getRewardPoints, getPurchaseWithCard, getPurchaseWithCash, getPurchaseWithPoints, calculateRewardPoints, convertToRewardPoints } = useRewardStore()

const { getCart } = useCartStore()
definePageMeta({
  middleware: ['auth']
})
</script>
<template>
{{getCart}}
  <div>
    <section class="h-[1000px] bg-white">
        <div class="max-w-7xl px-5 py-20 flex space-x-5 w-full h-full items-center mx-auto">
            <div class="flex h-full bg-gray rounded-lg">
                One
            </div>
            <div class="flex flex-col space-y-5 w-full h-full">
                <div class="flex h-1/2 w-full bg-black rounded" id="order-summary">
                    <div class="text-white">
                        <p class="text-xl font-medium">Order Summary</p>
                        <p class="text-gray-300">Check your items. Select a suitable shipping method</p>
                        <div class="mt-k8 space-y-3 rounded-sm bg-white sm:flex-row">
                            <div class="flex flex-col rounded-lg ">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex h-1/2 w-full bg-black rounded">
                 Three
                </div>
            </div>
            <div class="flex h-full bg-gray-300 rounded">Four</div>
        </div>
    </section>
  </div>
</template>