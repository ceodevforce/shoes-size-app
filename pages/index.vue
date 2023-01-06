<script setup>
const route = useRoute();

</script>
<template>
  <main>
  <div>
    <ShoesHero />
  </div>
  <section class="bg-black dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-3x1 font-semibold text-center text-red-400 capitalize">
        see what you like!
      </h1>
      <p class="text-gray-300 text-center text-4xl font-semibold">Think up your own brand and own it</p>
    </div>
    <div class="grid grid-col-1 gap-8 mt-8">
      <img class="object-cover object-center" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"/>
    </div>
  </section>
  </main>
</template>
