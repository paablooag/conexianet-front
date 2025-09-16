export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Software para Hamburgueserías | Automatización Restaurantes | CRM SaaS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Software para hamburgueserías con automatización restaurantes y CRM para restaurantes. Automatiza reservas, envía newsletter clientes y gestiona proveedores online. SaaS para restaurantes con IA.' },
        { name: 'keywords', content: 'software para hamburgueserías, automatización restaurantes, CRM para restaurantes, SaaS para restaurantes, automatizar reservas hamburguesería, enviar newsletter clientes restaurante, gestionar proveedores restaurante online, dashboard pedidos hamburguesería, cómo automatizar pedidos hamburguesería, enviar promociones automáticas clientes restaurante, herramienta online reservas marketing hamburguesería, SaaS mejorar ventas clientes hamburguesería, ADRE, asistente digital relaciones empresariales' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Software para Hamburgueserías | Automatización Restaurantes | CRM SaaS' },
        { property: 'og:description', content: 'Software para hamburgueserías con automatización restaurantes y CRM para restaurantes. Automatiza reservas, envía newsletter clientes y gestiona proveedores online.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Software para Hamburgueserías | Automatización Restaurantes' },
        { name: 'twitter:description', content: 'Automatiza reservas hamburguesería, envía newsletter clientes restaurante y gestiona proveedores online con nuestro SaaS para restaurantes.' }
      ]
    }
  }
})
