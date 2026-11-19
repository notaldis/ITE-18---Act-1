// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Aldis Valdehueza | Developer in the making',
      meta: [
        {
          name: 'description',
          content: 'A personal portfolio for Aldis S. Valdehueza, an aspiring full-stack web developer from Butuan City.'
        },
        { name: 'theme-color', content: '#f5f3ed' }
      ]
    }
  }
})
