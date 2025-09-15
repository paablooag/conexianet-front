export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'ConnexiaNet.es - Asistente Digital de Relaciones Empresariales',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Plataforma inteligente para gestionar, automatizar y optimizar las relaciones empresariales. Centraliza contactos, automatiza tareas y usa IA para optimizar la comunicación.' }
      ]
    }
  }
})
