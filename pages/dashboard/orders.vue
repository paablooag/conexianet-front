<template>
  <DashboardLayout>
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">GESTIÓN DE PEDIDOS</h1>
        <Button variant="neon" @click="showNewOrder = true">
          + NUEVO PEDIDO
        </Button>
      </div>

      <!-- Orders Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">PEDIDOS HOY</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ ordersToday.length }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">COMPLETADOS</p>
              <p class="text-2xl font-mono font-bold text-green-600">{{ completedOrders }}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">EN PROCESO</p>
              <p class="text-2xl font-mono font-bold text-yellow-600">{{ pendingOrders }}</p>
            </div>
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TOTAL VENTAS</p>
              <p class="text-2xl font-mono font-bold text-purple-600">€{{ totalSales.toFixed(2) }}</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Orders List -->
      <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-mono font-semibold text-gray-900">PEDIDOS RECIENTES</h3>
            <div class="flex space-x-2">
              <select class="text-sm font-mono border border-gray-300 rounded-lg px-3 py-1">
                <option>Todos los estados</option>
                <option>Pendiente</option>
                <option>En Proceso</option>
                <option>Completado</option>
                <option>Cancelado</option>
              </select>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Pedido</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-slate-200">
              <tr v-for="order in orders" :key="order.id" class="hover:bg-slate-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">#{{ order.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                      <span class="text-sm font-mono font-semibold text-cyan-600">{{ order.customer.charAt(0) }}</span>
                    </div>
                    <div class="text-sm font-mono text-gray-900">{{ order.customer }}</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ order.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">€{{ order.total }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full',
                    order.status === 'Completado' ? 'bg-green-100 text-green-800' :
                    order.status === 'En Proceso' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Pendiente' ? 'bg-blue-100 text-blue-800' :
                    'bg-red-100 text-red-800'
                  ]">
                    {{ order.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium">
                  <button class="text-cyan-600 hover:text-cyan-900 mr-3">Ver</button>
                  <button class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
                  <button class="text-green-600 hover:text-green-900">Procesar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
// Meta tags SEO
useHead({
  title: 'Pedidos - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Gestión de pedidos de ConexiaNet ADRE. Control de ventas y procesamiento de órdenes.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Data reactiva
const showNewOrder = ref(false)

// Orders data
const orders = ref([
  {
    id: 1,
    customer: 'Juan Pérez',
    date: '25/01/2024',
    total: 25.50,
    status: 'Completado'
  },
  {
    id: 2,
    customer: 'María García',
    date: '25/01/2024',
    total: 18.75,
    status: 'En Proceso'
  },
  {
    id: 3,
    customer: 'Carlos Ruiz',
    date: '24/01/2024',
    total: 32.00,
    status: 'Completado'
  },
  {
    id: 4,
    customer: 'Ana López',
    date: '24/01/2024',
    total: 15.25,
    status: 'Pendiente'
  },
  {
    id: 5,
    customer: 'Pedro Martín',
    date: '23/01/2024',
    total: 28.90,
    status: 'Completado'
  }
])

// Computed properties
const ordersToday = computed(() => {
  const today = new Date().toLocaleDateString('es-ES')
  return orders.value.filter(order => order.date === today)
})

const completedOrders = computed(() => {
  return orders.value.filter(order => order.status === 'Completado').length
})

const pendingOrders = computed(() => {
  return orders.value.filter(order => order.status === 'Pendiente' || order.status === 'En Proceso').length
})

const totalSales = computed(() => {
  return orders.value
    .filter(order => order.status === 'Completado')
    .reduce((sum, order) => sum + order.total, 0)
})
</script>
