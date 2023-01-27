<script setup>
import { useRewardStore } from "~/store/rewards";

const user = useSupabaseUser()
const route = useRoute();

const rewardStore = useRewardStore();
const { rewardPoints } = rewardStore;
</script>
<template>
  <main>
    <section class="flex flex-col w-full overflow-hidden bg-white mt-5 lg:flex-row sm:mx-auto tails-selected-element" contenteditable="true">
    <div class="flex justify-end p-8 bg-gray-200 lg:py-32 lg:px-16 lg:pl-10 lg:w-1/2">
        <div class="flex flex-col items-start justify-center w-full lg:max-w-lg">
            <p class="inline-block px-2 py-1 mb-5 font-medium tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full text-xxs">
                @ShoeIGA
            </p>
            <h5 class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl lg:text-7xl">
                Ball Out!
            </h5>
            <p class="py-5 mb-5 text-gray-600 lg:text-xl">
                <span class="font-bold">#Jordans</span> will make you think you are the best player on the planet!
                Checkout our new brands.
            </p>
            <div class="flex items-center">
                <button type="submit" class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none" data-rounded="rounded-lg" data-primary="gray-900">
                    Shop Now
                </button>
                <NuxtLink to="/about" aria-label="" class="inline-flex items-center text-lg text-gray-900 underline transition-colors duration-200" data-primary="gray-900">
                    Learn More
                    <svg class="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                        </path>
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </div>
    <div class="relative lg:w-1/2">
        <img src="https://images.unsplash.com/photo-1615545362149-85299994b09b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" alt="Hero Image" class="object-cover w-full lg:absolute h-80 lg:h-full">
    </div>
</section>
    <div>
      <ShoesHero />
    </div>
    <div class="bg-rose-400">
      <div class="container px-6 py-6 mx-auto">
        <h1 class="text-4x1 font-semibold text-center">Points for the cash</h1>
        <p class="font-semibold text-center text-zinc-900">{{ user ? rewardPoints : "Get the lastest Deal on Points at new 200 on every purchase!" }}</p>
      </div>
    </div>
    <section class="bg-black dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3x1 font-semibold text-center text-red-400 capitalize">
          see what you like!
        </h1>
        <p class="text-gray-300 text-center text-4xl font-semibold">
          Think up your own brand and own it
        </p>
      </div>
      <div class="grid grid-col-1 gap-8 mt-8">
        <img
          class="object-cover object-center"
          src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        />
      </div>
    </section>
  </main>
</template>
