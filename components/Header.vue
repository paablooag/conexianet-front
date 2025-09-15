<template>
  <header class="futuristic-bg border-b border-slate-300 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center group">
            <div class="w-10 h-10 border border-cyan-400 flex items-center justify-center relative overflow-hidden group-hover:neon-glow transition-all duration-300">
              <div class="w-6 h-6 border border-cyan-400 transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
              <div class="absolute inset-0 border border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span class="ml-3 text-xl font-mono font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
              ConnexiaNet
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink to="#inicio" class="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-mono font-medium transition-colors relative group">
              <span class="relative z-10">INICIO</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            <NuxtLink to="#funciones" class="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-mono font-medium transition-colors relative group">
              <span class="relative z-10">FUNCIONES</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            <NuxtLink to="#beneficios" class="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-mono font-medium transition-colors relative group">
              <span class="relative z-10">BENEFICIOS</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            <NuxtLink to="#contacto" class="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-mono font-medium transition-colors relative group">
              <span class="relative z-10">CONTACTO</span>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop CTA Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" @click="handleLogin">
            LOGIN
          </Button>
          <Button variant="neon" size="sm" @click="handleRegister">
            REGISTRO
          </Button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-600 hover:text-cyan-600 focus:outline-none focus:text-cyan-600 transition-colors duration-300"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 futuristic-bg border-t border-slate-300">
          <NuxtLink to="#inicio" class="text-gray-600 hover:text-cyan-600 block px-3 py-2 text-base font-mono font-medium transition-colors">
            INICIO
          </NuxtLink>
          <NuxtLink to="#funciones" class="text-gray-600 hover:text-cyan-600 block px-3 py-2 text-base font-mono font-medium transition-colors">
            FUNCIONES
          </NuxtLink>
          <NuxtLink to="#beneficios" class="text-gray-600 hover:text-cyan-600 block px-3 py-2 text-base font-mono font-medium transition-colors">
            BENEFICIOS
          </NuxtLink>
          <NuxtLink to="#contacto" class="text-gray-600 hover:text-cyan-600 block px-3 py-2 text-base font-mono font-medium transition-colors">
            CONTACTO
          </NuxtLink>
          <div class="pt-4 pb-3 border-t border-slate-300">
            <div class="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" class="w-full justify-center" @click="handleLogin">
                LOGIN
              </Button>
              <Button variant="neon" size="sm" class="w-full justify-center" @click="handleRegister">
                REGISTRO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const handleLogin = () => {
  navigateTo('/auth')
}

const handleRegister = () => {
  navigateTo('/auth')
}
</script>
