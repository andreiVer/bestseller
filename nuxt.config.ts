/* eslint-disable perfectionist/sort-objects */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'Bestseller',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'description', content: 'A Nuxt 2 page technical task for Bestseller.' }
      ]
    }

  },
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2026-06-30',
  eslint: {
    config: {
      stylistic: {
        braceStyle: '1tbs',
        commaDangle: 'never'
      }
    }
  },
  image: {
    domains: [
      'jj-images-test.global.ssl.fastly.net',
      'images.veromoda.com'
    ]
  },
  pinia: { storesDirs: ['./stores/**'] }
});
