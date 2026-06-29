// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Vichna - Creative Developer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Vichna is a passionate creative developer specializing in Vue.js, Nuxt.js, React, and modern web technologies.'
        },
        { name: 'keywords', content: 'portfolio, developer, Vue, Nuxt, React, frontend, web developer' },
        { property: 'og:title', content: 'Vichna - Creative Developer Portfolio' },
        { property: 'og:description', content: 'Creative developer building beautiful and functional web applications.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap'
        }
      ]
    }
  }
})
