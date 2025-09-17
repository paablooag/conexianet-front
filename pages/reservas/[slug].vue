<template>
  <div class="futuristic-bg min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="relative py-16 overflow-hidden">
      <!-- Background Grid -->
      <div class="absolute inset-0 opacity-2">
        <div class="grid grid-cols-12 h-full">
          <div v-for="i in 12" :key="i" class="border-r border-slate-400"></div>
        </div>
        <div class="grid grid-rows-12 h-full absolute inset-0">
          <div v-for="i in 12" :key="i" class="border-b border-slate-400"></div>
        </div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <div class="mb-6">
            <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-4">
              [ RESERVAS ONLINE ]
            </div>
          </div>
          
          <h1 class="text-3xl md:text-5xl font-mono font-bold mb-4 text-gray-900">
            <span class="block">RESERVA TU MESA</span>
            <span class="block neon-text mt-2">{{ restaurant?.name || 'RESTAURANTE' }}</span>
          </h1>
          
          <p class="text-lg mb-8 max-w-3xl mx-auto text-gray-600 font-mono leading-relaxed">
            Reserva tu mesa de forma rápida y sencilla. Selecciona la fecha, hora y número de comensales.
          </p>
        </div>
      </div>
    </section>


    <!-- Reservation Form Section -->
    <section class="py-16 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-4">
            [ CARGANDO... ]
          </div>
          <div class="text-gray-600 font-mono">Obteniendo información del restaurante...</div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <div class="inline-block px-4 py-2 border border-red-400 text-red-400 text-sm font-mono mb-4">
            [ ERROR ]
          </div>
          <div class="text-gray-600 font-mono mb-4">{{ error }}</div>
          <Button variant="outline" @click="fetchRestaurantData">
            [ REINTENTAR ]
          </Button>
        </div>

        <!-- Página Desactivada -->
        <div v-else-if="restaurant && !restaurant.reservationsEnabled" class="text-center py-20">
          <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="inline-block px-4 py-2 border border-red-400 text-red-400 text-sm font-mono mb-6">
              [ PÁGINA DESACTIVADA ]
            </div>
            <h1 class="text-4xl md:text-6xl font-mono font-bold text-gray-900 mb-6">
              RESERVAS NO DISPONIBLES
            </h1>
            <p class="text-xl text-gray-600 font-mono mb-8 leading-relaxed">
              Las reservas online están desactivadas temporalmente. 
              <br>Por favor, contacta directamente con el restaurante para hacer tu reserva.
            </p>
            
            <!-- Información del Restaurante -->
            <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 border border-cyan-200 mb-8">
              <h2 class="text-2xl font-mono font-bold text-gray-900 mb-4">{{ restaurant.name }}</h2>
              <div class="space-y-3 text-sm font-mono">
                <div class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-gray-600">{{ restaurant.address }}</span>
                </div>
                <div class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="text-gray-600">{{ restaurant.phone }}</span>
                </div>
                <div class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-600">{{ restaurant.schedule }}</span>
                </div>
              </div>
            </div>
            
            <!-- Botones de Acción -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" @click="callRestaurant" class="w-full sm:w-auto">
                [ LLAMAR AL RESTAURANTE ]
              </Button>
              <Button variant="outline" @click="goBack" class="w-full sm:w-auto">
                [ VOLVER ATRÁS ]
              </Button>
            </div>
            
            <!-- Mensaje Informativo -->
            <div class="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p class="text-sm font-mono text-yellow-800">
                💡 <strong>Tip:</strong> Puedes llamar al restaurante para hacer tu reserva por teléfono o preguntar cuándo estarán disponibles las reservas online.
              </p>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Restaurant Info -->
          <div class="lg:col-span-1">
            <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-200 sticky top-8">
              <h3 class="text-xl font-mono font-bold text-gray-900 mb-4">INFORMACIÓN DEL RESTAURANTE</h3>
              
              <div class="space-y-4 text-sm font-mono">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div class="font-semibold text-gray-900">Dirección:</div>
                    <div class="text-gray-600">{{ restaurant.address }}</div>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div class="font-semibold text-gray-900">Teléfono:</div>
                    <div class="text-gray-600">{{ restaurant.phone }}</div>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div class="font-semibold text-gray-900">Horarios:</div>
                    <div class="text-gray-600">{{ restaurant.schedule }}</div>
                  </div>
                </div>
              </div>
              
              <div v-if="restaurant.image" class="mt-6 rounded-lg overflow-hidden">
                <img 
                  :src="restaurant.image" 
                  :alt="restaurant.name"
                  class="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          <!-- Reservation Form -->
          <div class="lg:col-span-2">
            <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 border border-cyan-200">
              <div class="mb-6">
                <h3 class="text-2xl font-mono font-bold text-gray-900 mb-2">COMPLETA TU RESERVA</h3>
                <p class="text-gray-600 font-mono text-sm">Todos los campos marcados con * son obligatorios</p>
              </div>
          <form @submit.prevent="submitReservation" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Date -->
              <div>
                <label class="block text-sm font-mono font-semibold text-gray-900 mb-2">
                  FECHA *
                </label>
                <input 
                  type="date" 
                  v-model="reservationForm.date"
                  :min="minDate"
                  class="w-full px-4 py-3 border border-cyan-400 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>

              <!-- Time -->
              <div>
                <label class="block text-sm font-mono font-semibold text-gray-900 mb-2">
                  HORA *
                </label>
                <select 
                  v-model="reservationForm.time"
                  class="w-full px-4 py-3 border border-cyan-400 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                >
                  <option value="">Selecciona una hora</option>
                  <option v-for="time in availableTimes" :key="time" :value="time">
                    {{ time }}
                  </option>
                </select>
              </div>

              <!-- Guests -->
              <div>
                <label class="block text-sm font-mono font-semibold text-gray-900 mb-2">
                  NÚMERO DE COMENSALES *
                </label>
                <select 
                  v-model="reservationForm.guests"
                  class="w-full px-4 py-3 border border-cyan-400 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                >
                  <option value="">Selecciona número de comensales</option>
                  <option v-for="i in Math.min(restaurant?.maxCapacity || 12, 20)" :key="i" :value="i">
                    {{ i }} {{ i === 1 ? 'persona' : 'personas' }}
                  </option>
                </select>
                <p v-if="restaurant?.maxCapacity" class="text-xs font-mono text-gray-500 mt-1">
                  Capacidad máxima: {{ restaurant.maxCapacity }} personas
                </p>
              </div>

              <!-- Name -->
              <div>
                <label class="block text-sm font-mono font-semibold text-gray-900 mb-2">
                  NOMBRE COMPLETO *
                </label>
                <input 
                  type="text" 
                  v-model="reservationForm.name"
                  class="w-full px-4 py-3 border border-cyan-400 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-mono font-semibold text-gray-900 mb-2">
                  EMAIL *
                </label>
                <input 
                  type="email" 
                  v-model="reservationForm.email"
                  class="w-full px-4 py-3 border border-cyan-400 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-sm font-mono font-semibold text-gray-900 mb-2">
                  TELÉFONO *
                </label>
                <input 
                  type="tel" 
                  v-model="reservationForm.phone"
                  class="w-full px-4 py-3 border border-cyan-400 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
            </div>

            <!-- Special Requests -->
            <div>
              <label class="block text-sm font-mono font-semibold text-gray-900 mb-2">
                PEDIDOS ESPECIALES (OPCIONAL)
              </label>
              <textarea 
                v-model="reservationForm.specialRequests"
                rows="3"
                class="w-full px-4 py-3 border border-cyan-400 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Alergias, preferencias de mesa, celebraciones especiales..."
              ></textarea>
            </div>

              <!-- Submit Button -->
              <div class="text-center">
                <Button 
                  type="submit" 
                  variant="neon" 
                  size="lg"
                  :disabled="submitting"
                  class="w-full sm:w-auto"
                >
                  {{ submitting ? '[ PROCESANDO... ]' : '[ CONFIRMAR RESERVA ]' }}
                </Button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-md mx-4">
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl font-mono font-bold text-gray-900 mb-4">¡RESERVA CONFIRMADA!</h3>
          <p class="text-gray-600 font-mono mb-6">
            Tu reserva ha sido confirmada. Recibirás un email de confirmación en breve.
          </p>
          <Button variant="outline" @click="closeSuccessModal">
            [ CERRAR ]
          </Button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Get route params
const route = useRoute()
const slug = route.params.slug

// Meta tags SEO optimizados (se actualizarán dinámicamente)
const metaTitle = computed(() => {
  if (restaurant.value && !restaurant.value.reservationsEnabled) {
    return `Reservas no disponibles - ${restaurant.value.name}`
  }
  return `Reservas ${slug} - ConexiaNet`
})

const metaDescription = computed(() => {
  if (restaurant.value && !restaurant.value.reservationsEnabled) {
    return `Las reservas online están desactivadas temporalmente. Contacta directamente con ${restaurant.value.name}.`
  }
  return `Reserva tu mesa en ${slug}. Sistema de reservas online rápido y sencillo para tu restaurante.`
})

const robotsContent = computed(() => {
  if (restaurant.value && !restaurant.value.reservationsEnabled) {
    return 'noindex, nofollow'
  }
  return 'index, follow'
})

useHead({
  title: metaTitle,
  meta: [
    { name: 'description', content: metaDescription },
    { name: 'keywords', content: `reservas ${slug}, reservar mesa, restaurante ${slug}, reservas online` },
    { name: 'author', content: 'ConexiaNet' },
    { name: 'robots', content: robotsContent },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#06b6d4' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: metaTitle },
    { property: 'og:description', content: metaDescription },
    { property: 'og:url', content: `https://conexianet.com/reservas/${slug}` },
    { property: 'og:site_name', content: 'ConexiaNet' },
    { property: 'og:locale', content: 'es_ES' }
  ],
  link: [
    { rel: 'canonical', href: `https://conexianet.com/reservas/${slug}` }
  ]
})

// Reactive data
const restaurant = ref(null)
const loading = ref(true)
const error = ref(null)
const submitting = ref(false)
const showSuccessModal = ref(false)

// Reservation form
const reservationForm = ref({
  date: '',
  time: '',
  guests: '',
  name: '',
  email: '',
  phone: '',
  specialRequests: ''
})

// Available times
const availableTimes = ref([
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
])

// Computed properties
const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

// Fetch restaurant data
const fetchRestaurantData = async () => {
  try {
    loading.value = true
    error.value = null
    
    // TODO: Replace with actual API endpoint
    const response = await $fetch(`/api/restaurants/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    restaurant.value = response.data
  } catch (err) {
    console.error('Error fetching restaurant data:', err)
    error.value = 'No se pudo cargar la información del restaurante. Por favor, inténtalo de nuevo.'
    
    // Mock data for development
    restaurant.value = {
      id: 1,
      name: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
      description: 'Restaurante especializado en hamburguesas gourmet con ingredientes frescos y de calidad.',
      address: 'Calle Principal 123, Madrid',
      phone: '+34 123 456 789',
      schedule: 'Lun-Dom: 12:00-16:00, 19:00-23:00',
      reservationsEnabled: true,
      maxCapacity: 50
    }
  } finally {
    loading.value = false
  }
}

// Submit reservation
const submitReservation = async () => {
  try {
    submitting.value = true
    
    // TODO: Replace with actual API endpoint
    await $fetch('/api/reservations', {
      method: 'POST',
      body: {
        restaurant_slug: slug,
        ...reservationForm.value
      }
    })
    
    showSuccessModal.value = true
    
    // Reset form
    reservationForm.value = {
      date: '',
      time: '',
      guests: '',
      name: '',
      email: '',
      phone: '',
      specialRequests: ''
    }
  } catch (err) {
    console.error('Error submitting reservation:', err)
    alert('Error al procesar la reserva. Por favor, inténtalo de nuevo.')
  } finally {
    submitting.value = false
  }
}

// Close success modal
const closeSuccessModal = () => {
  showSuccessModal.value = false
}

// Handle disabled reservations
const callRestaurant = () => {
  if (restaurant.value?.phone) {
    const phone = restaurant.value.phone.replace(/\D/g, '')
    const callUrl = `tel:${phone}`
    window.location.href = callUrl
  }
}

const goBack = () => {
  window.history.back()
}

// Fetch restaurant data on component mount
onMounted(() => {
  fetchRestaurantData()
})
</script>
