<template>
  <div class="futuristic-bg min-h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Main Auth Section -->
    <section class="py-20 relative overflow-hidden flex-1">
      <!-- Background Grid -->
      <div class="absolute inset-0 opacity-2">
        <div class="grid grid-cols-12 h-full">
          <div v-for="i in 12" :key="i" class="border-r border-slate-400"></div>
        </div>
        <div class="grid grid-rows-12 h-full absolute inset-0">
          <div v-for="i in 12" :key="i" class="border-b border-slate-400"></div>
        </div>
      </div>

       <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <!-- Auth Container -->
        <div class="relative min-h-[600px]">
          <!-- Login Form -->
          <div 
            :class="[
              'transition-all duration-700 ease-in-out transform',
              showLogin ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute inset-0'
            ]"
          >
             <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200 max-w-md mx-auto">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-cyan-100 border border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <h2 class="text-2xl font-mono font-bold text-gray-900 mb-2">INICIAR SESIÓN</h2>
                <p class="text-gray-600 font-mono text-sm">Accede a tu cuenta ADRE</p>
              </div>

               <form @submit.prevent="handleLogin" class="space-y-6">
                <div>
                  <label class="block text-sm font-mono font-semibold text-gray-700 mb-2">
                    EMAIL
                  </label>
                  <input
                    v-model="loginForm.username"
                    type="email"
                    required
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 font-mono text-gray-900 bg-white"
                    placeholder="Ingresa tu email"
                  />
                </div>

                <div>
                  <label class="block text-sm font-mono font-semibold text-gray-700 mb-2">
                    CONTRASEÑA
                  </label>
                  <div class="relative">
                    <input
                      v-model="loginForm.password"
                      :type="showLoginPassword ? 'text' : 'password'"
                      required
                       class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 font-mono text-gray-900 bg-white"
                      placeholder="Ingresa tu contraseña"
                    />
                    <button
                      type="button"
                      @click="showLoginPassword = !showLoginPassword"
                      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-600 transition-colors"
                    >
                      <svg v-if="!showLoginPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <label class="flex items-center">
                    <input type="checkbox" class="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-400">
                    <span class="ml-2 text-sm font-mono text-gray-600">Recordarme</span>
                  </label>
                  <a href="#" class="text-sm font-mono text-cyan-600 hover:text-cyan-800 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <Button 
                  type="submit" 
                  variant="neon" 
                  size="lg" 
                  class="w-full"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading" class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    CONECTANDO...
                  </span>
                  <span v-else>[ INICIAR SESIÓN ]</span>
                </Button>
              </form>

               <div class="mt-6 text-center">
                 <p class="text-sm font-mono text-gray-600">
                   ¿No tienes cuenta?
                   <button 
                     @click="switchToRegister" 
                     class="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors ml-1"
                   >
                     Regístrate aquí
                   </button>
                 </p>
               </div>
            </div>
          </div>

          <!-- Register Form -->
          <div 
            :class="[
              'transition-all duration-700 ease-in-out transform',
              showRegister ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'
            ]"
          >
             <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border border-blue-200 max-w-2xl mx-auto">
              <div class="text-center mb-10">
                <div class="w-16 h-16 bg-blue-100 border border-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                 <h2 class="text-2xl font-mono font-bold text-gray-900 mb-2">CREAR CUENTA</h2>
                 <p class="text-gray-600 font-mono text-sm">Únete a la revolución empresarial</p>
                </div>

                <!-- Mensaje de éxito -->
                <div v-if="showSuccessMessage" class="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p class="text-green-800 font-mono text-sm">
                      ¡Cuenta creada exitosamente! Redirigiendo al login...
                    </p>
                  </div>
                </div>

               <form @submit.prevent="handleRegister" class="space-y-8">
                 <!-- Bloque 1: Usuario y Email -->
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div>
                    <label class="block text-sm font-mono font-semibold text-gray-700 mb-3">
                       CONFIRMAR EMAIL
                     </label>
                     <input
                       v-model="registerForm.confirmEmail"
                       type="email"
                       required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 font-mono text-gray-900 bg-white"
                       placeholder="Confirma tu email"
                       :class="{ 'border-red-400 focus:ring-red-400 focus:border-red-400': registerForm.confirmEmail && registerForm.email !== registerForm.confirmEmail }"
                     />
                     <p v-if="registerForm.confirmEmail && registerForm.email !== registerForm.confirmEmail" class="text-red-500 text-xs font-mono mt-1">
                       Los emails no coinciden
                     </p>
                   </div>
                    

                   <div>
                     <label class="block text-sm font-mono font-semibold text-gray-700 mb-3">
                       EMAIL
                     </label>
                     <input
                       v-model="registerForm.email"
                       type="email"
                       required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 font-mono text-gray-900 bg-white"
                       placeholder="tu@email.com"
                     />
                   </div>
                 </div>

                 <!-- Bloque 2: Nombre del Usuario -->
                 <div class="grid grid-cols-1 gap-8">
                   <div>
                    <label class="block text-sm font-mono font-semibold text-gray-700 mb-3">
                       NOMBRE COMPLETO
                     </label>
                     <input
                       v-model="registerForm.name"
                       type="text"
                       required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 font-mono text-gray-900 bg-white"
                       placeholder="Tu nombre completo"
                     />
                   </div>
                 </div>

                 <!-- Bloque 3: Nombre del Restaurante -->
                 <div class="grid grid-cols-1 gap-8">
                   <div>
                     <label class="block text-sm font-mono font-semibold text-gray-700 mb-3">
                       NOMBRE DEL RESTAURANTE
                     </label>
                     <input
                       v-model="registerForm.restaurant_name"
                       type="text"
                       required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 font-mono text-gray-900 bg-white"
                       placeholder="Nombre de tu restaurante"
                     />
                   </div>
                 </div>

                 <!-- Bloque 4: Contraseña -->
                 <div class="grid grid-cols-1 gap-8">
                   <div>
                     <label class="block text-sm font-mono font-semibold text-gray-700 mb-3">
                       CONTRASEÑA
                     </label>
                     <div class="relative">
                       <input
                         v-model="registerForm.password"
                         :type="showRegisterPassword ? 'text' : 'password'"
                         required
                         class="w-full px-5 py-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 font-mono text-gray-900 bg-white"
                         placeholder="Crea una contraseña segura"
                       />
                       <button
                         type="button"
                         @click="showRegisterPassword = !showRegisterPassword"
                         class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                       >
                         <svg v-if="!showRegisterPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                         </svg>
                         <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                         </svg>
                       </button>
                     </div>
                   </div>
                 </div>

                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    v-model="acceptTerms"
                    required
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
                  >
                  <span class="ml-2 text-sm font-mono text-gray-600">
                    Acepto los 
                    <a href="#" class="text-blue-600 hover:text-blue-800 transition-colors">términos y condiciones</a>
                  </span>
                </div>

                 <Button 
                   type="submit" 
                   variant="neon" 
                   size="lg" 
                   class="w-full"
                   :disabled="isLoading || !acceptTerms || registerForm.email !== registerForm.confirmEmail"
                 >
                  <span v-if="isLoading" class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    CREANDO CUENTA...
                  </span>
                  <span v-else>[ CREAR CUENTA ]</span>
                </Button>
              </form>

               <div class="mt-8 text-center">
                <p class="text-sm font-mono text-gray-600">
                  ¿Ya tienes cuenta?
                  <button 
                    @click="switchToLogin" 
                    class="text-blue-600 hover:text-blue-800 font-semibold transition-colors ml-1"
                  >
                    Inicia sesión aquí
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

         <!-- Status Indicators -->
         <div class="mt-16 flex justify-center space-x-10 text-sm font-mono">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span class="text-gray-500">SISTEMA SEGURO</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span class="text-gray-500">ENCRIPTADO</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span class="text-gray-500">CONECTADO</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Autenticación - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Accede a ConexiaNet ADRE - Asistente Digital de Relaciones Empresariales' }
  ]
})

// Get route query parameters
const route = useRoute()

// Reactive data - check if mode=register is in query params
const showLogin = ref(!route.query.mode || route.query.mode !== 'register')
const showRegister = ref(route.query.mode === 'register')
const isLoading = ref(false)
const acceptTerms = ref(false)
const showLoginPassword = ref(false)
const showRegisterPassword = ref(false)
const showSuccessMessage = ref(false)

// Form data
const loginForm = ref({
  username: '',
  password: ''
})

const registerForm = ref({
  name: '',
  email: '',
  confirmEmail: '',
  password: '',
  restaurant_name: ''
})

// Methods
const switchToRegister = () => {
  showLogin.value = false
  setTimeout(() => {
    showRegister.value = true
  }, 350)
}

const switchToLogin = () => {
  showRegister.value = false
  setTimeout(() => {
    showLogin.value = true
  }, 350)
}

const handleLogin = async () => {
  isLoading.value = true
  
  try {
    const response = await $fetch('http://127.0.0.1:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: {
        email: loginForm.value.username,
        password: loginForm.value.password
      }
    })
    
    console.log('Login successful:', response)
    // Aquí puedes manejar la respuesta del login
    // Por ejemplo, guardar el token, redirigir, etc.
    
  } catch (error) {
    console.error('Login error:', error)
    // Aquí puedes manejar errores de login
  } finally {
    isLoading.value = false
  }
}

const handleRegister = async () => {
  // Validar que los emails coincidan
  if (registerForm.value.email !== registerForm.value.confirmEmail) {
    console.error('Los emails no coinciden')
    return
  }
  
  isLoading.value = true
  
  try {
    const response = await $fetch('http://127.0.0.1:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: {
        email: registerForm.value.email,
        name: registerForm.value.name,
        password: registerForm.value.password,
        restaurant_name: registerForm.value.restaurant_name
      }
    })
    
    console.log('Register successful:', response)
    
    // Mostrar mensaje de éxito
    showSuccessMessage.value = true
    
    // Cambiar automáticamente al formulario de login después del registro exitoso
    setTimeout(() => {
      switchToLogin()
      // Limpiar el formulario de registro
      registerForm.value = {
        name: '',
        email: '',
        confirmEmail: '',
        password: '',
        restaurant_name: ''
      }
      acceptTerms.value = false
      showSuccessMessage.value = false
    }, 2000) // Esperar 2 segundos para mostrar el mensaje de éxito
    
  } catch (error) {
    console.error('Register error:', error)
    // Aquí puedes manejar errores de registro
  } finally {
    isLoading.value = false
  }
}
</script>
