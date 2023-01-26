// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  ssr: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt",'nuxt-icon','@vueuse/nuxt'],
  runtimeConfig: {
      FB_APIKEY: "AIzaSyC_P_jcqvb0OfEKoEnxyjXxgZmQhVTDWds",
      FB_AUTH_DOMAIN: "liz-allen.firebaseapp.com",
      FB_PROJECT_ID: "liz-allen",
      FB_STORAGE_BUCKET: "liz-allen.appspot.com",
      FB_MESSAGE_SENDER: "142704538082",
      FB_APP_ID: "1:142704538082:web:ba3dcf26f151f08eafc9bb",
  },
});
