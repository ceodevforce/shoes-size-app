<script setup>
import { useUserStore } from "~/store/users";
// import type { User } from "~/types/types"

let { userObj } = useUserStore();
const client = useSupabaseAuthClient();

const email = ref("");
const password = ref("");
const loading = ref(false);
const router = useRouter();

const register = async () => {
  try {
    const { data, pending, refresh, error } = await useFetch("/api/register", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });
    userObj = data;
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <main class="container min-h-screen pt-12">
    <div
      class="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
    >
      <div class="px-6 py-4">
        <h1 class="text-3xl font-sans font-bold text-center">Register</h1>
        <h3 class="mt-1 text-xl font-medium text-center text-gray-600">
          Welcome to Shoe ShoeIGA
        </h3>
        <p class="mt-1 text-center text-gray-500">
          Register for an account ShoeIGA
        </p>
      </div>
      <form @submit.prevent="register">
        <div class="w-full mt-4">
          <input
            class="block w-full px-4 py-2 text-gray-700 placeholder-gray-300 bg-white border rounded-lg"
            v-model="email"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="w-full mt-4">
          <input
            class="block w-full px-4 py-2 text-gray-700 placeholder-gray-300 bg-white border rounded-lg"
            v-model="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div class="flex items-center justify-center py-4">
          <button class="px-6 py-2 text-sm font-medium transition-colors bg-black text-white rounded-md" type="submit">Register</button>
        </div>
      </form>
    </div>
  </main>
</template>
