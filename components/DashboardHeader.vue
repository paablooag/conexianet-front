<template>
  <header class="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center group">
            <div class="w-10 h-10 border border-cyan-400 flex items-center justify-center relative overflow-hidden group-hover:neon-glow transition-all duration-300">
              <div class="w-6 h-6 border border-cyan-400 transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
            </div>
            <span class="ml-3 text-xl font-mono font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
              ConexiaNet Hamburgueserías
            </span>
          </NuxtLink>
        </div>

        <!-- Search Bar -->
        <div class="hidden md:block flex-1 max-w-lg mx-8">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar contactos, pedidos..."
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 font-mono text-sm"
            />
          </div>
        </div>

        <!-- Right side -->
        <div class="flex items-center space-x-4">
          <!-- Notifications -->
          <button class="relative p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-lg">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
          </button>

          <!-- User Menu -->
          <div class="relative">
            <button 
              @click="showUserMenu = !showUserMenu"
              class="flex items-center space-x-3 text-sm font-mono text-gray-700 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-lg p-2"
            >
              <div class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                <span class="text-sm font-semibold text-cyan-600">U</span>
              </div>
              <div class="hidden md:block text-left">
                <div class="font-medium">Usuario</div>
                <div class="text-xs text-gray-500">Administrador</div>
              </div>
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div 
              v-show="showUserMenu"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-slate-200"
            >
              <a href="#" class="block px-4 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100">Perfil</a>
              <a href="#" class="block px-4 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100">Configuración</a>
              <a href="#" class="block px-4 py-2 text-sm font-mono text-gray-700 hover:bg-slate-100">Ayuda</a>
              <div class="border-t border-slate-200"></div>
              <button 
                @click="handleLogout"
                class="block w-full text-left px-4 py-2 text-sm font-mono text-red-600 hover:bg-red-50"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// Reactive data
const showUserMenu = ref(false)

// Methods
const handleLogout = () => {
  navigateTo('/iniciar-sesion')
}

// Close menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.relative')) {
      showUserMenu.value = false
    }
  })
})
</script>
