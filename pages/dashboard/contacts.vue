<template>
  <DashboardLayout>
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">GESTIÓN DE CONTACTOS</h1>
        <Button variant="neon" @click="showNewContact = true">
          + NUEVO CONTACTO
        </Button>
      </div>

      <!-- Contacts Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TOTAL CONTACTOS</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ contacts.length }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">NUEVOS ESTE MES</p>
              <p class="text-2xl font-mono font-bold text-green-600">{{ newContactsThisMonth }}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">CLIENTES ACTIVOS</p>
              <p class="text-2xl font-mono font-bold text-purple-600">{{ activeCustomers }}</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">PROVEEDORES</p>
              <p class="text-2xl font-mono font-bold text-orange-600">{{ suppliersCount }}</p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Contacts List -->
      <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-mono font-semibold text-gray-900">LISTA DE CONTACTOS</h3>
            <div class="flex space-x-2">
              <input 
                type="text" 
                placeholder="Buscar contactos..."
                class="text-sm font-mono border border-gray-300 rounded-lg px-3 py-1"
                v-model="searchQuery"
              />
              <select class="text-sm font-mono border border-gray-300 rounded-lg px-3 py-1">
                <option>Todos los tipos</option>
                <option>Clientes</option>
                <option>Proveedores</option>
                <option>Otros</option>
              </select>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Última Actividad</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-slate-200">
              <tr v-for="contact in filteredContacts" :key="contact.id" class="hover:bg-slate-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                      <span class="text-sm font-mono font-semibold text-cyan-600">{{ contact.name.charAt(0) }}</span>
                    </div>
                    <div>
                      <div class="text-sm font-mono text-gray-900">{{ contact.name }}</div>
                      <div class="text-sm font-mono text-gray-500">{{ contact.company }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ contact.email }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ contact.phone }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full',
                    contact.type === 'Cliente' ? 'bg-green-100 text-green-800' :
                    contact.type === 'Proveedor' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  ]">
                    {{ contact.type }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ contact.lastActivity }}</td>
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
  title: 'Contactos - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Gestión de contactos de ConexiaNet ADRE. Clientes, proveedores y comunicación centralizada.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Data reactiva
const searchQuery = ref('')
const showNewContact = ref(false)

// Contacts data
const contacts = ref([
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    phone: '+34 666 123 456',
    company: 'Empresa ABC',
    type: 'Cliente',
    lastActivity: 'Hace 2 días'
  },
  {
    id: 2,
    name: 'María García',
    email: 'maria.garcia@email.com',
    phone: '+34 666 789 012',
    company: 'Restaurante XYZ',
    type: 'Cliente',
    lastActivity: 'Hace 1 semana'
  },
  {
    id: 3,
    name: 'Carlos Ruiz',
    email: 'carlos.ruiz@proveedor.com',
    phone: '+34 666 345 678',
    company: 'Suministros S.L.',
    type: 'Proveedor',
    lastActivity: 'Hace 3 días'
  },
  {
    id: 4,
    name: 'Ana López',
    email: 'ana.lopez@email.com',
    phone: '+34 666 901 234',
    company: 'Cafetería Central',
    type: 'Cliente',
    lastActivity: 'Hace 5 días'
  },
  {
    id: 5,
    name: 'Pedro Martín',
    email: 'pedro.martin@proveedor.com',
    phone: '+34 666 567 890',
    company: 'Carnes Premium',
    type: 'Proveedor',
    lastActivity: 'Hace 1 día'
  }
])

// Computed properties
const filteredContacts = computed(() => {
  if (!searchQuery.value) return contacts.value
  return contacts.value.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const newContactsThisMonth = computed(() => {
  return contacts.value.filter(contact => 
    contact.lastActivity.includes('día') || contact.lastActivity.includes('semana')
  ).length
})

const activeCustomers = computed(() => {
  return contacts.value.filter(contact => contact.type === 'Cliente').length
})

const suppliersCount = computed(() => {
  return contacts.value.filter(contact => contact.type === 'Proveedor').length
})
</script>

