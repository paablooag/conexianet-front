<template>
  <DashboardLayout>
    <!-- Overview Section -->
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">OVERVIEW</h1>
        <div class="text-sm font-mono text-gray-500">
          {{ new Date().toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }) }}
        </div>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">VENTAS HOY</p>
              <p class="text-2xl font-mono font-bold text-emerald-600">€{{ totalSales.toFixed(2) }}</p>
              <p class="text-xs font-mono text-green-600">+12% vs ayer</p>
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
              <p class="text-sm font-mono text-gray-600 mb-1">PEDIDOS HOY</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ totalOrders }}</p>
              <p class="text-xs font-mono text-blue-600">+8% vs ayer</p>
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
              <p class="text-2xl font-mono font-bold text-purple-600">€{{ averageTicket.toFixed(2) }}</p>
              <p class="text-xs font-mono text-purple-600">+5% vs ayer</p>
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
              <p class="text-sm font-mono text-gray-600 mb-1">RESERVAS HOY</p>
              <p class="text-2xl font-mono font-bold text-orange-600">{{ reservationsToday.length }}</p>
              <p class="text-xs font-mono text-orange-600">+15% vs ayer</p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">ACTIVIDAD RECIENTE</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-mono text-gray-900">Nueva venta registrada</p>
                <p class="text-xs font-mono text-gray-500">€25.50 - Hace 5 minutos</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-mono text-gray-900">Nuevo contacto agregado</p>
                <p class="text-xs font-mono text-gray-500">María García - Hace 15 minutos</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-mono text-gray-900">Nueva reserva confirmada</p>
                <p class="text-xs font-mono text-gray-500">Juan Pérez - 20:00 - Hace 30 minutos</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">RESERVAS DE HOY</h3>
          <div class="space-y-3">
            <div v-for="reservation in reservationsToday.slice(0, 5)" :key="reservation.id" class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p class="text-sm font-mono font-medium text-gray-900">{{ reservation.customer }}</p>
                <p class="text-xs font-mono text-gray-500">{{ reservation.time }} - {{ reservation.people }} personas</p>
              </div>
              <span :class="[
                'px-2 py-1 text-xs font-mono font-semibold rounded-full',
                reservation.status === 'Confirmada' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              ]">
                {{ reservation.status }}
              </span>
            </div>
            <div v-if="reservationsToday.length === 0" class="text-center py-4">
              <p class="text-sm font-mono text-gray-500">No hay reservas para hoy</p>
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
  title: 'Overview - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Panel de control principal de ConexiaNet ADRE. Visualiza métricas clave, actividad reciente y reservas del día.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Data reactiva
const totalOrders = ref(47)
const cashAmount = ref(1250.50)
const cardAmount = ref(890.25)

// Reservations data (solo las de hoy)
const reservationsToday = ref([
  {
    id: 1,
    customer: 'Juan Pérez',
    date: '25/01/2024',
    time: '20:00',
    people: 4,
    status: 'Confirmada',
    phone: '+34 666 123 456',
    notes: 'Mesa cerca de la ventana'
  },
  {
    id: 2,
    customer: 'María García',
    date: '25/01/2024',
    time: '21:30',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 789 012',
    notes: 'Cumpleaños'
  }
])

// Computed properties
const totalSales = computed(() => cashAmount.value + cardAmount.value)
const averageTicket = computed(() => {
  if (totalOrders.value === 0) return 0
  return totalSales.value / totalOrders.value
})
</script>
