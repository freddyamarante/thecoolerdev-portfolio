// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/axios"
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: { region: "us" },
      },
    ],
  ],
});
