<template>
  <DashboardLayout>
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">REPORTES Y ANALÍTICAS</h1>
        <div class="flex space-x-4">
          <Button variant="outline" @click="generateWeeklyReport">
            REPORTE SEMANAL
          </Button>
          <Button variant="neon" @click="generateMonthlyReport">
            REPORTE MENSUAL
          </Button>
        </div>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">INGRESOS TOTALES</p>
              <p class="text-2xl font-mono font-bold text-emerald-600">€{{ reportsData.totalRevenue }}</p>
              <p class="text-xs font-mono text-green-600">+12% vs mes anterior</p>
            </div>
            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">PEDIDOS TOTALES</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ reportsData.totalOrders }}</p>
              <p class="text-xs font-mono text-blue-600">+8% vs mes anterior</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TICKET PROMEDIO</p>
              <p class="text-2xl font-mono font-bold text-purple-600">€{{ reportsData.averageTicket }}</p>
              <p class="text-xs font-mono text-purple-600">+5% vs mes anterior</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">CLIENTES NUEVOS</p>
              <p class="text-2xl font-mono font-bold text-orange-600">{{ reportsData.newCustomers }}</p>
              <p class="text-xs font-mono text-orange-600">+15% vs mes anterior</p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">VENTAS POR DÍA</h3>
          <div class="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
            <p class="text-sm font-mono text-gray-500">Gráfico de ventas diarias</p>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">PRODUCTOS MÁS VENDIDOS</h3>
          <div class="space-y-3">
            <div v-for="product in topProducts" :key="product.name" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span class="text-xs font-mono font-semibold text-cyan-600">{{ product.rank }}</span>
                </div>
                <span class="text-sm font-mono text-gray-900">{{ product.name }}</span>
              </div>
              <div class="text-right">
                <p class="text-sm font-mono font-semibold text-gray-900">{{ product.sales }}</p>
                <p class="text-xs font-mono text-gray-500">{{ product.revenue }}€</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed Reports -->
      <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-200">
          <h3 class="text-lg font-mono font-semibold text-gray-900">REPORTES DETALLADOS</h3>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="border border-slate-200 rounded-lg p-4">
              <h4 class="text-sm font-mono font-semibold text-gray-900 mb-2">REPORTE DIARIO</h4>
              <p class="text-xs font-mono text-gray-500 mb-3">Resumen de ventas y actividad del día</p>
              <button class="w-full bg-cyan-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-cyan-700 transition-colors">
                Generar
              </button>
            </div>
            <div class="border border-slate-200 rounded-lg p-4">
              <h4 class="text-sm font-mono font-semibold text-gray-900 mb-2">REPORTE SEMANAL</h4>
              <p class="text-xs font-mono text-gray-500 mb-3">Análisis de rendimiento semanal</p>
              <button class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-blue-700 transition-colors">
                Generar
              </button>
            </div>
            <div class="border border-slate-200 rounded-lg p-4">
              <h4 class="text-sm font-mono font-semibold text-gray-900 mb-2">REPORTE MENSUAL</h4>
              <p class="text-xs font-mono text-gray-500 mb-3">Resumen completo del mes</p>
              <button class="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-purple-700 transition-colors">
                Generar
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
  title: 'Reportes - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Reportes y analíticas de ConexiaNet ADRE. Análisis de ventas, rendimiento y métricas del negocio.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Data reactiva
const reportsData = ref({
  totalRevenue: 15420.50,
  totalOrders: 342,
  averageTicket: 45.12,
  newCustomers: 28
})

const topProducts = ref([
  { rank: 1, name: 'Hamburguesa Clásica', sales: 45, revenue: 675 },
  { rank: 2, name: 'Hamburguesa BBQ', sales: 38, revenue: 570 },
  { rank: 3, name: 'Hamburguesa Vegana', sales: 32, revenue: 480 },
  { rank: 4, name: 'Patatas Fritas', sales: 28, revenue: 140 },
  { rank: 5, name: 'Refresco', sales: 25, revenue: 75 }
])

// Methods
const generateWeeklyReport = () => {
  console.log('Generando reporte semanal...')
  alert('Reporte semanal generado y enviado por email')
}

const generateMonthlyReport = () => {
  console.log('Generando reporte mensual...')
  alert('Reporte mensual generado y enviado por email')
}
</script>
