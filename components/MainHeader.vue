<script setup>
import { useCartStore } from "~/store/cart";

const user = useSupabaseUser()
const route = useRoute()
const router = useRouter()

console.log(router)

const store = useCartStore();


const { getCartAmount } = store;

const input = ref("");

const isOpen = ref(false);

//TODO: - Implement Search
// TODO: Fix navigation to have logout
const search = async () => {
  // search input
};
watch(
  () => input
);

watchEffect(() => {
    getCartAmount
  }
)
</script>
<template>
  <div>
    <nav
      x-data="{ isOpen: false }"
      class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
    >
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink
            class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            to="/"
            >ShoeIGA</NuxtLink
          >
        </div>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg
              x-show="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              x-show="isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        x-cloak
        :class="[
          isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full',
        ]"
        class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
      >
        <div
          class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0"
        >
          <NuxtLink
            class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
            to="/mens"
            >Men's</NuxtLink
          >
          <NuxtLink
            class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
            to="womens"
            >Women's</NuxtLink
          >
          <NuxtLink
            class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
            to="kids"
            >Kids
            <Icon name="material-symbols:desktop-windows" />
          </NuxtLink>
          <NuxtLink
            class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
            to="brands"
            >Brands
            <Icon icon="carbon:calculator" />
          </NuxtLink>
          <NuxtLink
            class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
            to="new-arrivals"
            >New Arrivals</NuxtLink
          >

          <NuxtLink
            class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
            to="/account/checkout"
          >
            <Icon name="material-symbols:garden-cart" />
            {{ getCartAmount }}
          </NuxtLink>
        </div>
        <div class="flex" v-if="!user">
          <NuxtLink
            class="block px-6 py-2.5 mt-4 font-medium leading-5 text-center text-white capitalize bg-black rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
            to="/account/register"
          >
            Register
          </NuxtLink>
          <NuxtLink
            class="block px-6 py-2.5 mt-4 font-medium leading-5 text-center text-white capitalize bg-black rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
            to="/account/login"
          >
            Login
          </NuxtLink>
        </div>
        <div v-else>
          <NuxtLink
            class="block px-6 py-2.5 mt-4 font-medium leading-5 text-center text-white capitalize bg-black rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
            to="/account/dashboard"
          >
            Account
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
