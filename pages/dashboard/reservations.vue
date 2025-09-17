<template>
  <DashboardLayout>
    <!-- Reservations Section -->
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">GESTIÓN DE RESERVAS</h1>
        <Button variant="neon" @click="showNewReservation = true">
          + NUEVA RESERVA
        </Button>
      </div>

      <!-- Reservations Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">RESERVAS HOY</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ reservationsToday.length }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">CONFIRMADAS</p>
              <p class="text-2xl font-mono font-bold text-green-600">{{ reservations.filter(r => r.status === 'Confirmada').length }}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TOTAL RESERVAS</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ reservations.length }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">CANCELADAS</p>
              <p class="text-2xl font-mono font-bold text-purple-600">{{ reservations.filter(r => r.status === 'Cancelada').length }}</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Calendar View -->
      <div class="bg-white rounded-lg border border-slate-200 p-6">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h3 class="text-lg font-mono font-semibold text-gray-900">CALENDARIO DE RESERVAS</h3>
            <p class="text-sm font-mono text-gray-600 mt-1">{{ currentMonthYear }}</p>
          </div>
          <div class="flex space-x-2">
            <Button variant="outline" size="sm" @click="previousMonth">
              ← Anterior
            </Button>
            <Button variant="outline" size="sm" @click="nextMonth">
              Siguiente →
            </Button>
          </div>
        </div>

        <!-- Calendar Grid -->
        <div class="grid grid-cols-7 gap-1 mb-4">
          <div v-for="day in weekDays" :key="day" class="p-2 text-center text-sm font-mono font-semibold text-gray-500">
            {{ day }}
          </div>
        </div>

        <div class="grid grid-cols-7 gap-1">
          <div 
            v-for="day in calendarDays" 
            :key="day.date"
            :class="[
              'min-h-[100px] p-2 border border-slate-200 relative',
              day.isCurrentMonth ? 'bg-white' : 'bg-slate-50',
              day.isToday ? 'bg-cyan-50 border-cyan-300' : ''
            ]"
          >
            <div class="text-sm font-mono font-semibold mb-1">{{ day.day }}</div>
            <div class="space-y-1">
              <!-- Mostrar solo las primeras 2-3 reservas -->
              <div 
                v-for="reservation in day.visibleReservations" 
                :key="reservation.id"
                :class="[
                  'text-xs p-1 rounded cursor-pointer flex items-center justify-between',
                  reservation.status === 'Confirmada' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                ]"
                @click="selectReservation(reservation)"
              >
                <div class="flex items-center space-x-1">
                  <div :class="[
                    'w-2 h-2 rounded-full',
                    reservation.status === 'Confirmada' ? 'bg-green-600' :
                    'bg-red-600'
                  ]"></div>
                  <span class="font-semibold">{{ reservation.time }}</span>
                </div>
                <span class="text-xs font-mono">{{ reservation.people }}p</span>
              </div>
              
              <!-- Botón para expandir si hay más reservas -->
              <div 
                v-if="day.hasMoreReservations"
                class="text-xs text-center py-1 px-2 bg-slate-100 text-slate-600 rounded cursor-pointer hover:bg-slate-200 transition-colors"
                @click="toggleDayExpansion(day.date)"
              >
                +{{ day.hiddenReservationsCount }} más
              </div>
              
              <!-- Reservas adicionales expandidas -->
              <div 
                v-if="day.isExpanded"
                class="space-y-1 mt-1"
              >
                <div 
                  v-for="reservation in day.hiddenReservations" 
                  :key="reservation.id"
                  :class="[
                    'text-xs p-1 rounded cursor-pointer flex items-center justify-between',
                    reservation.status === 'Confirmada' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  ]"
                  @click="selectReservation(reservation)"
                >
                  <div class="flex items-center space-x-1">
                    <div :class="[
                      'w-2 h-2 rounded-full',
                      reservation.status === 'Confirmada' ? 'bg-green-600' :
                      'bg-red-600'
                    ]"></div>
                    <span class="font-semibold">{{ reservation.time }}</span>
                  </div>
                  <span class="text-xs font-mono">{{ reservation.people }}p</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Reservations List -->
      <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-mono font-semibold text-gray-900">RESERVAS RECIENTES</h3>
            <div class="flex space-x-2">
              <select class="text-sm font-mono border border-gray-300 rounded-lg px-3 py-1">
                <option>Todos los estados</option>
                <option>Confirmada</option>
                <option>Cancelada</option>
              </select>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Personas</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-slate-200">
              <tr v-for="reservation in reservations" :key="reservation.id" class="hover:bg-slate-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                      <span class="text-sm font-mono font-semibold text-cyan-600">{{ reservation.customer.charAt(0) }}</span>
                    </div>
                    <div class="text-sm font-mono text-gray-900">{{ reservation.customer }}</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ reservation.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ reservation.time }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ reservation.people }} personas</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full',
                    reservation.status === 'Confirmada' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  ]">
                    {{ reservation.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium">
                  <button 
                    @click="openReservationModal(reservation)"
                    class="text-cyan-600 hover:text-cyan-900 mr-3"
                  >
                    Ver
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Modal de Detalles de Reserva -->
      <div v-if="showReservationModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeReservationModal">
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4" @click.stop>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-mono font-semibold text-gray-900">DETALLES DE RESERVA</h3>
            <button @click="closeReservationModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div v-if="selectedReservation" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Cliente</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedReservation.customer }}</p>
              </div>
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Teléfono</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedReservation.phone }}</p>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Fecha</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedReservation.date }}</p>
              </div>
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Hora</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedReservation.time }}</p>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Personas</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedReservation.people }}</p>
              </div>
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Estado</label>
                <span :class="[
                  'inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full',
                  selectedReservation.status === 'Confirmada' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                ]">
                  {{ selectedReservation.status }}
                </span>
              </div>
            </div>
            
            <div>
              <label class="text-sm font-mono font-medium text-gray-500">Notas</label>
              <p class="text-sm font-mono text-gray-900">{{ selectedReservation.notes || 'Sin notas' }}</p>
            </div>
            
            <div class="grid grid-cols-2 gap-3 pt-4">
              <button 
                @click="cancelReservation"
                class="bg-red-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-red-700 transition-colors"
              >
                Cancelar Reserva
              </button>
              <button 
                @click="sendEmail"
                class="bg-cyan-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-cyan-700 transition-colors"
              >
                Enviar Email
              </button>
              <button 
                @click="sendWhatsApp"
                class="bg-green-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </button>
              <button 
                @click="makeCall"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar
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
  title: 'Reservas - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Gestión de reservas de ConexiaNet ADRE. Calendario interactivo, gestión de clientes y comunicación directa.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Calendar data
const currentDate = ref(new Date())
const weekDays = ref(['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'])
const expandedDays = ref(new Set())

// Modal data
const selectedReservation = ref(null)
const showReservationModal = ref(false)

// Reservations data
const reservations = ref([
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
  },
  {
    id: 16,
    customer: 'Carlos Mendoza',
    date: '25/01/2024',
    time: '19:00',
    people: 3,
    status: 'Confirmada',
    phone: '+34 666 111 333',
    notes: 'Cena de negocios'
  },
  {
    id: 17,
    customer: 'Ana Torres',
    date: '25/01/2024',
    time: '22:00',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 444 555',
    notes: 'Cita romántica'
  },
  {
    id: 18,
    customer: 'Roberto Silva',
    date: '25/01/2024',
    time: '20:30',
    people: 5,
    status: 'Confirmada',
    phone: '+34 666 666 777',
    notes: 'Celebración familiar'
  },
  {
    id: 19,
    customer: 'Elena Morales',
    date: '25/01/2024',
    time: '18:30',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 888 999',
    notes: 'Cena temprana'
  },
  {
    id: 20,
    customer: 'Miguel Ángel',
    date: '25/01/2024',
    time: '19:30',
    people: 4,
    status: 'Confirmada',
    phone: '+34 666 000 111',
    notes: 'Reunión de trabajo'
  },
  {
    id: 21,
    customer: 'Sofia Rodríguez',
    date: '25/01/2024',
    time: '21:00',
    people: 3,
    status: 'Confirmada',
    phone: '+34 666 222 333',
    notes: 'Cena con amigos'
  },
  {
    id: 22,
    customer: 'David López',
    date: '25/01/2024',
    time: '22:30',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 444 555',
    notes: 'Cita romántica'
  },
  {
    id: 23,
    customer: 'Carmen Vega',
    date: '25/01/2024',
    time: '18:00',
    people: 6,
    status: 'Confirmada',
    phone: '+34 666 666 777',
    notes: 'Celebración cumpleaños'
  },
  {
    id: 24,
    customer: 'Antonio Ruiz',
    date: '25/01/2024',
    time: '19:15',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 888 999',
    notes: 'Cena de aniversario'
  },
  {
    id: 25,
    customer: 'Isabel Castro',
    date: '25/01/2024',
    time: '20:45',
    people: 4,
    status: 'Confirmada',
    phone: '+34 666 111 222',
    notes: 'Cena familiar'
  },
  {
    id: 26,
    customer: 'Francisco Díaz',
    date: '25/01/2024',
    time: '21:15',
    people: 3,
    status: 'Confirmada',
    phone: '+34 666 333 444',
    notes: 'Reunión de empresa'
  },
  {
    id: 27,
    customer: 'Patricia Jiménez',
    date: '25/01/2024',
    time: '18:45',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 555 666',
    notes: 'Cena de negocios'
  },
  {
    id: 28,
    customer: 'Javier Martín',
    date: '25/01/2024',
    time: '19:45',
    people: 5,
    status: 'Confirmada',
    phone: '+34 666 777 888',
    notes: 'Celebración especial'
  },
  {
    id: 29,
    customer: 'Rosa Sánchez',
    date: '25/01/2024',
    time: '20:15',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 999 000',
    notes: 'Cita romántica'
  },
  {
    id: 30,
    customer: 'Manuel Torres',
    date: '25/01/2024',
    time: '21:45',
    people: 4,
    status: 'Confirmada',
    phone: '+34 666 123 456',
    notes: 'Cena con clientes'
  },
  {
    id: 31,
    customer: 'Teresa López',
    date: '25/01/2024',
    time: '18:15',
    people: 3,
    status: 'Confirmada',
    phone: '+34 666 789 012',
    notes: 'Cena de trabajo'
  },
  {
    id: 32,
    customer: 'Alberto García',
    date: '25/01/2024',
    time: '19:00',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 345 678',
    notes: 'Cena de aniversario'
  },
  {
    id: 33,
    customer: 'Mónica Ruiz',
    date: '25/01/2024',
    time: '20:30',
    people: 6,
    status: 'Confirmada',
    phone: '+34 666 901 234',
    notes: 'Celebración familiar'
  },
  {
    id: 34,
    customer: 'Fernando Vega',
    date: '25/01/2024',
    time: '21:30',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 567 890',
    notes: 'Cita especial'
  },
  {
    id: 35,
    customer: 'Cristina Morales',
    date: '25/01/2024',
    time: '18:30',
    people: 4,
    status: 'Confirmada',
    phone: '+34 666 111 222',
    notes: 'Cena de negocios'
  },
  {
    id: 36,
    customer: 'Rafael Díaz',
    date: '25/01/2024',
    time: '19:30',
    people: 3,
    status: 'Confirmada',
    phone: '+34 666 333 444',
    notes: 'Reunión importante'
  },
  {
    id: 37,
    customer: 'Beatriz Jiménez',
    date: '25/01/2024',
    time: '20:00',
    people: 2,
    status: 'Confirmada',
    phone: '+34 666 555 666',
    notes: 'Cena romántica'
  },
  {
    id: 38,
    customer: 'Sergio Martín',
    date: '25/01/2024',
    time: '21:00',
    people: 5,
    status: 'Confirmada',
    phone: '+34 666 777 888',
    notes: 'Celebración cumpleaños'
  },
  {
    id: 3,
    customer: 'Carlos Ruiz',
    date: '26/01/2024',
    time: '19:00',
    people: 6,
    status: 'Confirmada',
    phone: '+34 666 345 678',
    notes: 'Reunión de trabajo'
  },
  {
    id: 4,
    customer: 'Ana López',
    date: '26/01/2024',
    time: '20:30',
    people: 3,
    status: 'Cancelada',
    phone: '+34 666 901 234',
    notes: 'Cancelada por el cliente'
  }
])

// Computed properties
const reservationsToday = computed(() => {
  const today = new Date().toLocaleDateString('es-ES')
  return reservations.value.filter(r => r.date === today)
})

const currentMonthYear = computed(() => {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]
  return `${months[currentDate.value.getMonth()]} ${currentDate.value.getFullYear()}`
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  const today = new Date()
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay() + 1) // Start from Monday
  
  const days = []
  const currentDay = new Date(startDate)
  
  for (let i = 0; i < 42; i++) { // 6 weeks * 7 days
    const dayReservations = reservations.value.filter(r => {
      const reservationDate = new Date(r.date.split('/').reverse().join('-'))
      return reservationDate.toDateString() === currentDay.toDateString()
    }).sort((a, b) => {
      // Ordenar por hora (formato HH:MM)
      const timeA = a.time.split(':').map(Number)
      const timeB = b.time.split(':').map(Number)
      return (timeA[0] * 60 + timeA[1]) - (timeB[0] * 60 + timeB[1])
    })
    
    const maxVisible = 2
    const visibleReservations = dayReservations.slice(0, maxVisible)
    const hiddenReservations = dayReservations.slice(maxVisible)
    const hasMoreReservations = dayReservations.length > maxVisible
    const isExpanded = expandedDays.value.has(currentDay.toISOString().split('T')[0])
    
    days.push({
      date: currentDay.toISOString().split('T')[0],
      day: currentDay.getDate(),
      isCurrentMonth: currentDay.getMonth() === month,
      isToday: currentDay.toDateString() === today.toDateString(),
      reservations: dayReservations,
      visibleReservations: visibleReservations,
      hiddenReservations: isExpanded ? hiddenReservations : [],
      hasMoreReservations: hasMoreReservations,
      hiddenReservationsCount: hiddenReservations.length,
      isExpanded: isExpanded
    })
    
    currentDay.setDate(currentDay.getDate() + 1)
  }
  
  return days
})

// Methods
const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const selectReservation = (reservation) => {
  openReservationModal(reservation)
}

const openReservationModal = (reservation) => {
  selectedReservation.value = reservation
  showReservationModal.value = true
}

const closeReservationModal = () => {
  showReservationModal.value = false
  selectedReservation.value = null
}

const cancelReservation = () => {
  if (selectedReservation.value) {
    // Actualizar el estado de la reserva a cancelada
    const reservationIndex = reservations.value.findIndex(r => r.id === selectedReservation.value.id)
    if (reservationIndex !== -1) {
      reservations.value[reservationIndex].status = 'Cancelada'
    }
    closeReservationModal()
    console.log('Reserva cancelada:', selectedReservation.value.customer)
  }
}

const sendEmail = () => {
  if (selectedReservation.value) {
    // Aquí se implementaría la lógica para enviar email
    console.log('Enviando email a:', selectedReservation.value.customer)
    alert(`Email enviado a ${selectedReservation.value.customer} (${selectedReservation.value.phone})`)
    closeReservationModal()
  }
}

const sendWhatsApp = () => {
  if (selectedReservation.value) {
    const phone = selectedReservation.value.phone.replace(/\D/g, '') // Limpiar número
    const message = `Hola ${selectedReservation.value.customer}, le recordamos su reserva para el ${selectedReservation.value.date} a las ${selectedReservation.value.time} para ${selectedReservation.value.people} personas. ¡Esperamos verle pronto!`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    
    // Abrir WhatsApp en nueva ventana
    window.open(whatsappUrl, '_blank')
    console.log('Abriendo WhatsApp para:', selectedReservation.value.customer)
  }
}

const makeCall = () => {
  if (selectedReservation.value) {
    const phone = selectedReservation.value.phone.replace(/\D/g, '') // Limpiar número
    const callUrl = `tel:${phone}`
    
    // Abrir aplicación de llamadas
    window.location.href = callUrl
    console.log('Llamando a:', selectedReservation.value.customer, phone)
  }
}

const toggleDayExpansion = (date) => {
  if (expandedDays.value.has(date)) {
    expandedDays.value.delete(date)
  } else {
    expandedDays.value.add(date)
  }
}
</script>
