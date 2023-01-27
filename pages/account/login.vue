<template>
  <main class="container min-h-screen pt-12">
    <div
      class="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
    >
      <div class="px-6 py-4">
        <h1 class="text-3xl font-sans font-bold text-center">Login</h1>
        <h3 class="mt-1 text-xl font-medium text-center text-gray-600">
          Welcome back to ShoeIGA
        </h3>
        <p class="mt-1 text-center text-gray-500">
          Login to your ShoeIGA account
        </p>
      </div>
      <form @submit.prevent="login">
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
          <button
            class="px-6 py-2 text-sm font-medium transition-colors bg-black text-white rounded-md"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useUserStore } from "~/store/users";

const client = useSupabaseAuthClient();
const user = useSupabaseUser()

const route = useRoute()

let store = useUserStore();
const email = ref("");
const password = ref("");
const loading = ref(false);
const router = useRouter();

const login = async () => {
  try {
    // const { data: user, pending, refresh, error } = await useFetch(
    //   "/api/login",
    //   {
    //     method: 'POST',
    //     body: {
    //       email: email.value,
    //       password: password.value,
    //     },
    //   }
    // );

    const { data: user, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    store.userObj = reactive(user.value)
    router.push("/account/dashboard");
  } catch (error) {
    console.log(error);
  }
};


//FIXME: Check the cb in watch

//TODO: - Add watchEffect instead since watch will stop working after load
watch(
  () => user 
)

watchEffect(() => {
  // TODO: Add route watcher here...
})
</script>
