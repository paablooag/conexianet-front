<template>
  <DashboardLayout>
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">REPORTES WEB</h1>
        <div class="flex space-x-4">
          <Button variant="outline" @click="downloadGoogleAnalytics">
            DESCARGAR GA4
          </Button>
          <Button variant="neon" @click="downloadSearchConsole">
            DESCARGAR SEARCH CONSOLE
          </Button>
        </div>
      </div>

      <!-- Web Analytics Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">VISITAS TOTALES</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ webStats.totalVisits.toLocaleString() }}</p>
              <p class="text-xs font-mono text-blue-600">+15% vs mes anterior</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">PÁGINAS VISTAS</p>
              <p class="text-2xl font-mono font-bold text-green-600">{{ webStats.pageViews.toLocaleString() }}</p>
              <p class="text-xs font-mono text-green-600">+8% vs mes anterior</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TIEMPO MEDIO</p>
              <p class="text-2xl font-mono font-bold text-purple-600">{{ webStats.avgTimeOnSite }}</p>
              <p class="text-xs font-mono text-purple-600">+12% vs mes anterior</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TASA REBOTE</p>
              <p class="text-2xl font-mono font-bold text-orange-600">{{ webStats.bounceRate }}%</p>
              <p class="text-xs font-mono text-orange-600">-3% vs mes anterior</p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Search Console Stats -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">BÚSQUEDAS PRINCIPALES</h3>
          <div class="space-y-3">
            <div v-for="(keyword, index) in topKeywords" :key="index" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span class="text-xs font-mono font-semibold text-cyan-600">{{ index + 1 }}</span>
                </div>
                <span class="text-sm font-mono text-gray-900">{{ keyword.term }}</span>
              </div>
              <div class="text-right">
                <p class="text-sm font-mono font-semibold text-gray-900">{{ keyword.clicks }}</p>
                <p class="text-xs font-mono text-gray-500">{{ keyword.impressions }} imp.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">PÁGINAS MÁS VISITADAS</h3>
          <div class="space-y-3">
            <div v-for="(page, index) in topPages" :key="index" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-xs font-mono font-semibold text-green-600">{{ index + 1 }}</span>
                </div>
                <div>
                  <p class="text-sm font-mono text-gray-900">{{ page.title }}</p>
                  <p class="text-xs font-mono text-gray-500">{{ page.url }}</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm font-mono font-semibold text-gray-900">{{ page.views }}</p>
                <p class="text-xs font-mono text-gray-500">{{ page.ctr }}% CTR</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Download Reports Section -->
      <div class="bg-white rounded-lg border border-slate-200 p-6">
        <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">DESCARGAR REPORTES</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border border-slate-200 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-mono font-semibold text-gray-900">Google Analytics 4</h4>
                <p class="text-xs font-mono text-gray-500">Datos de tráfico y comportamiento</p>
              </div>
            </div>
            <div class="space-y-2">
              <button @click="downloadGA4Report('audience')" class="w-full text-left px-3 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100 rounded">
                • Reporte de Audiencia
              </button>
              <button @click="downloadGA4Report('acquisition')" class="w-full text-left px-3 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100 rounded">
                • Reporte de Adquisición
              </button>
              <button @click="downloadGA4Report('behavior')" class="w-full text-left px-3 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100 rounded">
                • Reporte de Comportamiento
              </button>
              <button @click="downloadGA4Report('conversions')" class="w-full text-left px-3 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100 rounded">
                • Reporte de Conversiones
              </button>
            </div>
          </div>

          <div class="border border-slate-200 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-3">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-mono font-semibold text-gray-900">Google Search Console</h4>
                <p class="text-xs font-mono text-gray-500">Datos de búsqueda y SEO</p>
              </div>
            </div>
            <div class="space-y-2">
              <button @click="downloadSCReport('queries')" class="w-full text-left px-3 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100 rounded">
                • Consultas de Búsqueda
              </button>
              <button @click="downloadSCReport('pages')" class="w-full text-left px-3 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100 rounded">
                • Páginas Más Visitadas
              </button>
              <button @click="downloadSCReport('countries')" class="w-full text-left px-3 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100 rounded">
                • Datos por País
              </button>
              <button @click="downloadSCReport('devices')" class="w-full text-left px-3 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100 rounded">
                • Datos por Dispositivo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
// Meta tags SEO
useHead({
  title: 'Reportes Web - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Reportes web de ConexiaNet ADRE. Google Analytics, Search Console y métricas de tráfico web.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Data reactiva
const webStats = ref({
  totalVisits: 15420,
  pageViews: 28450,
  avgTimeOnSite: '2:45',
  bounceRate: 42.5
})

const topKeywords = ref([
  { term: 'hamburguesas madrid', clicks: 245, impressions: 1250 },
  { term: 'restaurante hamburguesas', clicks: 189, impressions: 980 },
  { term: 'hamburguesería centro', clicks: 156, impressions: 750 },
  { term: 'comida rápida madrid', clicks: 134, impressions: 680 },
  { term: 'hamburguesas artesanales', clicks: 98, impressions: 520 }
])

const topPages = ref([
  { title: 'Inicio', url: '/', views: 5420, ctr: 3.2 },
  { title: 'Menú', url: '/menu', views: 3890, ctr: 4.1 },
  { title: 'Reservas', url: '/reservas', views: 2150, ctr: 2.8 },
  { title: 'Contacto', url: '/contacto', views: 1890, ctr: 3.5 },
  { title: 'Sobre Nosotros', url: '/sobre-nosotros', views: 1200, ctr: 2.1 }
])

// Methods
const downloadGoogleAnalytics = () => {
  console.log('Descargando reporte de Google Analytics...')
  alert('Redirigiendo a Google Analytics para descargar reportes...')
}

const downloadSearchConsole = () => {
  console.log('Descargando reporte de Search Console...')
  alert('Redirigiendo a Google Search Console para descargar reportes...')
}

const downloadGA4Report = (type) => {
  console.log(`Descargando reporte GA4: ${type}`)
  alert(`Descargando reporte de ${type} de Google Analytics 4...`)
}

const downloadSCReport = (type) => {
  console.log(`Descargando reporte SC: ${type}`)
  alert(`Descargando reporte de ${type} de Search Console...`)
}
</script>
