<template>
  <DashboardLayout>
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">GESTIÓN DE PROVEEDORES</h1>
        <Button variant="neon" @click="showNewSupplier = true">
          + NUEVO PROVEEDOR
        </Button>
      </div>

      <!-- Suppliers Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TOTAL PROVEEDORES</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ suppliers.length }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">ACTIVOS</p>
              <p class="text-2xl font-mono font-bold text-green-600">{{ activeSuppliers }}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">PENDIENTES</p>
              <p class="text-2xl font-mono font-bold text-purple-600">{{ pendingSuppliers }}</p>
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
              <p class="text-sm font-mono text-gray-600 mb-1">CATEGORÍAS</p>
              <p class="text-2xl font-mono font-bold text-orange-600">{{ categoriesCount }}</p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Suppliers List -->
      <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-mono font-semibold text-gray-900">LISTA DE PROVEEDORES</h3>
            <div class="flex space-x-2">
              <input 
                type="text" 
                placeholder="Buscar proveedores..."
                class="text-sm font-mono border border-gray-300 rounded-lg px-3 py-1"
                v-model="searchQuery"
              />
              <select class="text-sm font-mono border border-gray-300 rounded-lg px-3 py-1">
                <option>Todas las categorías</option>
                <option>Alimentación</option>
                <option>Bebidas</option>
                <option>Suministros</option>
                <option>Equipamiento</option>
              </select>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Último Pedido</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-slate-200">
              <tr v-for="supplier in filteredSuppliers" :key="supplier.id" class="hover:bg-slate-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span class="text-sm font-mono font-semibold text-blue-600">{{ supplier.name.charAt(0) }}</span>
                    </div>
                    <div>
                      <div class="text-sm font-mono text-gray-900">{{ supplier.name }}</div>
                      <div class="text-sm font-mono text-gray-500">{{ supplier.company }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full bg-blue-100 text-blue-800">
                    {{ supplier.category }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ supplier.contact }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full',
                    supplier.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  ]">
                    {{ supplier.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ supplier.lastOrder }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium">
                  <button class="text-cyan-600 hover:text-cyan-900 mr-3">Ver</button>
                  <button class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
                  <button class="text-green-600 hover:text-green-900">Contactar</button>
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
  title: 'Proveedores - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Gestión de proveedores de ConexiaNet ADRE. Control de suministros y relaciones comerciales.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Data reactiva
const searchQuery = ref('')
const showNewSupplier = ref(false)

// Suppliers data
const suppliers = ref([
  {
    id: 1,
    name: 'Carlos Ruiz',
    company: 'Suministros S.L.',
    category: 'Alimentación',
    contact: 'carlos.ruiz@suministros.com',
    status: 'Activo',
    lastOrder: 'Hace 3 días'
  },
  {
    id: 2,
    name: 'Pedro Martín',
    company: 'Carnes Premium',
    category: 'Alimentación',
    contact: 'pedro.martin@carnes.com',
    status: 'Activo',
    lastOrder: 'Hace 1 semana'
  },
  {
    id: 3,
    name: 'Ana López',
    company: 'Bebidas Central',
    category: 'Bebidas',
    contact: 'ana.lopez@bebidas.com',
    status: 'Pendiente',
    lastOrder: 'Hace 2 semanas'
  },
  {
    id: 4,
    name: 'Miguel Torres',
    company: 'Equipos Restauración',
    category: 'Equipamiento',
    contact: 'miguel.torres@equipos.com',
    status: 'Activo',
    lastOrder: 'Hace 5 días'
  }
])

// Computed properties
const filteredSuppliers = computed(() => {
  if (!searchQuery.value) return suppliers.value
  return suppliers.value.filter(supplier => 
    supplier.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    supplier.company.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    supplier.category.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const activeSuppliers = computed(() => {
  return suppliers.value.filter(supplier => supplier.status === 'Activo').length
})

const pendingSuppliers = computed(() => {
  return suppliers.value.filter(supplier => supplier.status === 'Pendiente').length
})

const categoriesCount = computed(() => {
  const categories = new Set(suppliers.value.map(supplier => supplier.category))
  return categories.size
})
</script>

