// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/supabase", 'nuxt-icon', '@nuxt/image-edge',],
  runtimeConfig: {
    publishableKey: process.env.NUXT_PUBLISHABLE_KEY
    
  }
});
