<template>
  <DashboardLayout>
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">GESTIÓN DE NEWSLETTER</h1>
        <Button variant="neon" @click="showNewCampaign = true">
          + NUEVA CAMPAÑA
        </Button>
      </div>

      <!-- Newsletter Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">SUSCRIPTORES</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ subscribers.length }}</p>
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
              <p class="text-sm font-mono text-gray-600 mb-1">CAMPAÑAS ACTIVAS</p>
              <p class="text-2xl font-mono font-bold text-green-600">{{ activeCampaigns }}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TASA APERTURA</p>
              <p class="text-2xl font-mono font-bold text-purple-600">{{ openRate }}%</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">CLICS</p>
              <p class="text-2xl font-mono font-bold text-orange-600">{{ totalClicks }}</p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Campaigns List -->
      <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-mono font-semibold text-gray-900">CAMPAÑAS RECIENTES</h3>
            <div class="flex space-x-2">
              <select class="text-sm font-mono border border-gray-300 rounded-lg px-3 py-1">
                <option>Todas las campañas</option>
                <option>Activas</option>
                <option>Programadas</option>
                <option>Finalizadas</option>
              </select>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Campaña</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Asunto</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Enviados</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Apertura</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Clics</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-slate-200">
              <tr v-for="campaign in campaigns" :key="campaign.id" class="hover:bg-slate-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{{ campaign.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ campaign.subject }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{{ campaign.sent }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ campaign.openRate }}%</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ campaign.clicks }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full',
                    campaign.status === 'Enviada' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'Programada' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  ]">
                    {{ campaign.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium">
                  <button class="text-cyan-600 hover:text-cyan-900 mr-3">Ver</button>
                  <button class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
                  <button class="text-green-600 hover:text-green-900">Enviar</button>
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
  title: 'Newsletter - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Gestión de newsletter de ConexiaNet ADRE. Campañas de email marketing y comunicación con clientes.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Data reactiva
const showNewCampaign = ref(false)

// Newsletter data
const subscribers = ref([
  { id: 1, email: 'juan.perez@email.com', name: 'Juan Pérez', subscribed: true },
  { id: 2, email: 'maria.garcia@email.com', name: 'María García', subscribed: true },
  { id: 3, email: 'carlos.ruiz@email.com', name: 'Carlos Ruiz', subscribed: true },
  { id: 4, email: 'ana.lopez@email.com', name: 'Ana López', subscribed: true },
  { id: 5, email: 'pedro.martin@email.com', name: 'Pedro Martín', subscribed: true }
])

const campaigns = ref([
  {
    id: 1,
    name: 'Oferta Especial',
    subject: '¡20% de descuento en todas las hamburguesas!',
    sent: 150,
    openRate: 75,
    clicks: 45,
    status: 'Enviada'
  },
  {
    id: 2,
    name: 'Nuevo Menú',
    subject: 'Descubre nuestras nuevas creaciones',
    sent: 200,
    openRate: 68,
    clicks: 32,
    status: 'Enviada'
  },
  {
    id: 3,
    name: 'Recordatorio Reserva',
    subject: 'No olvides tu reserva de esta noche',
    sent: 0,
    openRate: 0,
    clicks: 0,
    status: 'Programada'
  }
])

// Computed properties
const activeCampaigns = computed(() => {
  return campaigns.value.filter(campaign => campaign.status === 'Enviada').length
})

const openRate = computed(() => {
  const totalSent = campaigns.value.reduce((sum, campaign) => sum + campaign.sent, 0)
  const totalOpens = campaigns.value.reduce((sum, campaign) => sum + (campaign.sent * campaign.openRate / 100), 0)
  return totalSent > 0 ? Math.round((totalOpens / totalSent) * 100) : 0
})

const totalClicks = computed(() => {
  return campaigns.value.reduce((sum, campaign) => sum + campaign.clicks, 0)
})
</script>
