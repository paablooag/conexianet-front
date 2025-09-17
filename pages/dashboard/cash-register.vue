<template>
  <DashboardLayout>
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">GESTIÓN DE CAJA</h1>
        <Button variant="neon" @click="generateReport">
          GENERAR REPORTE
        </Button>
      </div>

      <!-- Cash Register Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TOTAL VENTAS</p>
              <p class="text-2xl font-mono font-bold text-emerald-600">€{{ totalSales.toFixed(2) }}</p>
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
              <p class="text-sm font-mono text-gray-600 mb-1">EFECTIVO</p>
              <p class="text-2xl font-mono font-bold text-blue-600">€{{ cashAmount.toFixed(2) }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TARJETA</p>
              <p class="text-2xl font-mono font-bold text-purple-600">€{{ cardAmount.toFixed(2) }}</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">PEDIDOS</p>
              <p class="text-2xl font-mono font-bold text-orange-600">{{ totalOrders }}</p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Cash Register Controls -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Add Sale -->
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">REGISTRAR VENTA</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-mono font-medium text-gray-700 mb-2">Importe</label>
              <input 
                v-model="currentAmount"
                type="number" 
                step="0.01"
                placeholder="0.00"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 font-mono"
              />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <button 
                @click="addSale('cash')"
                class="bg-green-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-green-700 transition-colors"
              >
                + EFECTIVO
              </button>
              <button 
                @click="addSale('card')"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-blue-700 transition-colors"
              >
                + TARJETA
              </button>
            </div>
            <button 
              @click="resetCashRegister"
              class="w-full bg-red-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-red-700 transition-colors"
            >
              RESETEAR CAJA
            </button>
          </div>
        </div>

        <!-- Recent Sales -->
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">VENTAS RECIENTES</h3>
          <div class="space-y-3 max-h-64 overflow-y-auto">
            <div v-for="sale in recentSales" :key="sale.id" class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div class="flex items-center space-x-3">
                <div :class="[
                  'w-8 h-8 rounded-full flex items-center justify-center',
                  sale.type === 'cash' ? 'bg-green-100' : 'bg-blue-100'
                ]">
                  <span :class="[
                    'text-xs font-mono font-semibold',
                    sale.type === 'cash' ? 'text-green-600' : 'text-blue-600'
                  ]">
                    {{ sale.type === 'cash' ? '€' : '💳' }}
                  </span>
                </div>
                <div>
                  <p class="text-sm font-mono text-gray-900">Venta #{{ sale.id }}</p>
                  <p class="text-xs font-mono text-gray-500">{{ sale.time }}</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm font-mono font-semibold text-gray-900">€{{ sale.amount.toFixed(2) }}</p>
                <p class="text-xs font-mono text-gray-500">{{ sale.type === 'cash' ? 'Efectivo' : 'Tarjeta' }}</p>
              </div>
            </div>
            <div v-if="recentSales.length === 0" class="text-center py-4">
              <p class="text-sm font-mono text-gray-500">No hay ventas registradas</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Daily Summary -->
      <div class="bg-white rounded-lg border border-slate-200 p-6">
        <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">RESUMEN DEL DÍA</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <p class="text-sm font-mono text-gray-600 mb-1">TICKET PROMEDIO</p>
            <p class="text-2xl font-mono font-bold text-gray-900">€{{ averageTicket.toFixed(2) }}</p>
          </div>
          <div class="text-center">
            <p class="text-sm font-mono text-gray-600 mb-1">VENTAS EFECTIVO</p>
            <p class="text-2xl font-mono font-bold text-green-600">{{ cashSales }}</p>
          </div>
          <div class="text-center">
            <p class="text-sm font-mono text-gray-600 mb-1">VENTAS TARJETA</p>
            <p class="text-2xl font-mono font-bold text-blue-600">{{ cardSales }}</p>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
// Meta tags SEO
useHead({
  title: 'Caja - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Gestión de caja de ConexiaNet ADRE. Control de ventas, efectivo y reportes diarios.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Data reactiva
const cashAmount = ref(1250.50)
const cardAmount = ref(890.25)
const totalOrders = ref(47)
const currentAmount = ref(0)

const recentSales = ref([
  { id: 1, amount: 25.50, type: 'cash', time: '14:30' },
  { id: 2, amount: 18.75, type: 'card', time: '14:25' },
  { id: 3, amount: 32.00, type: 'cash', time: '14:20' },
  { id: 4, amount: 15.25, type: 'card', time: '14:15' },
  { id: 5, amount: 28.90, type: 'cash', time: '14:10' }
])

// Computed properties
const totalSales = computed(() => cashAmount.value + cardAmount.value)

const averageTicket = computed(() => {
  if (totalOrders.value === 0) return 0
  return totalSales.value / totalOrders.value
})

const cashSales = computed(() => {
  return recentSales.value.filter(sale => sale.type === 'cash').length
})

const cardSales = computed(() => {
  return recentSales.value.filter(sale => sale.type === 'card').length
})

// Methods
const addSale = (type) => {
  if (currentAmount.value <= 0) return
  
  if (type === 'cash') {
    cashAmount.value += currentAmount.value
  } else {
    cardAmount.value += currentAmount.value
  }
  
  totalOrders.value++
  
  // Agregar a ventas recientes
  const now = new Date()
  const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0')
  
  recentSales.value.unshift({
    id: Date.now(),
    amount: currentAmount.value,
    type: type,
    time: time
  })
  
  // Mantener solo las últimas 10 ventas
  if (recentSales.value.length > 10) {
    recentSales.value = recentSales.value.slice(0, 10)
  }
  
  currentAmount.value = 0
}

const resetCashRegister = () => {
  if (confirm('¿Estás seguro de que quieres resetear la caja? Esta acción no se puede deshacer.')) {
    cashAmount.value = 0
    cardAmount.value = 0
    totalOrders.value = 0
    recentSales.value = []
    currentAmount.value = 0
  }
}

const generateReport = () => {
  console.log('Generando reporte de caja...')
  alert(`Reporte generado:\nEfectivo: €${cashAmount.value.toFixed(2)}\nTarjeta: €${cardAmount.value.toFixed(2)}\nTotal: €${totalSales.value.toFixed(2)}\nPedidos: ${totalOrders.value}`)
}
</script>

