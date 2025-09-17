<template>
  <DashboardLayout>
    <div class="space-y-8">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-mono font-bold text-gray-900">WIDGET DE RESERVAS</h1>
          <p class="text-gray-600 mt-2">Personaliza y gestiona tu widget de reservas embebible</p>
        </div>
        <Button variant="neon" @click="saveWidgetConfig">
          Guardar Configuración
        </Button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Panel de Configuración -->
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-6">CONFIGURACIÓN DEL WIDGET</h3>
          
          <div class="space-y-6">
            <!-- Información Básica -->
            <div>
              <label class="block text-sm font-mono font-medium text-gray-700 mb-2">Nombre del Widget</label>
              <input
                v-model="widgetConfig.name"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 font-mono"
                placeholder="Mi Widget de Reservas"
              />
            </div>

            <!-- ID del Widget -->
            <div>
              <label class="block text-sm font-mono font-medium text-gray-700 mb-2">ID del Widget</label>
              <div class="flex items-center space-x-2">
                <input
                  :value="widgetConfig.id || 'No generado'"
                  type="text"
                  readonly
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm text-gray-600"
                />
                <button
                  v-if="!widgetConfig.id"
                  @click="widgetConfig.id = generateWidgetId()"
                  class="px-3 py-2 bg-cyan-600 text-white rounded-md text-sm font-mono hover:bg-cyan-700 transition-colors"
                >
                  Generar ID
                </button>
              </div>
              <p class="text-xs text-gray-500 mt-1 font-mono">Este ID es único para tu widget</p>
            </div>

            <!-- Colores -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-mono font-medium text-gray-700 mb-2">Color Principal</label>
                <div class="flex items-center space-x-2">
                  <input
                    v-model="widgetConfig.primary_color"
                    type="color"
                    class="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    v-model="widgetConfig.primary_color"
                    type="text"
                    class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 font-mono text-sm"
                    placeholder="#06b6d4"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-mono font-medium text-gray-700 mb-2">Color Secundario</label>
                <div class="flex items-center space-x-2">
                  <input
                    v-model="widgetConfig.secondary_color"
                    type="color"
                    class="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    v-model="widgetConfig.secondary_color"
                    type="text"
                    class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 font-mono text-sm"
                    placeholder="#ffffff"
                  />
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-mono font-medium text-gray-700 mb-2">Color del Texto</label>
              <div class="flex items-center space-x-2">
                <input
                  v-model="widgetConfig.text_color"
                  type="color"
                  class="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  v-model="widgetConfig.text_color"
                  type="text"
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 font-mono text-sm"
                  placeholder="#000000"
                />
              </div>
            </div>

            <!-- Estilos -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-mono font-medium text-gray-700 mb-2">Radio de Bordes</label>
                <select
                  v-model="widgetConfig.border_radius"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 font-mono"
                >
                  <option value="0px">Sin bordes</option>
                  <option value="4px">Pequeño</option>
                  <option value="8px">Mediano</option>
                  <option value="12px">Grande</option>
                  <option value="20px">Muy grande</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-mono font-medium text-gray-700 mb-2">Fuente</label>
                <select
                  v-model="widgetConfig.font_family"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 font-mono"
                >
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Helvetica, sans-serif">Helvetica</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Times New Roman, serif">Times New Roman</option>
                  <option value="Courier New, monospace">Courier New</option>
                  <option value="Verdana, sans-serif">Verdana</option>
                </select>
              </div>
            </div>

            <!-- Estado del Widget -->
            <div class="flex items-center space-x-4">
              <label class="flex items-center">
                <input
                  v-model="widgetConfig.is_active"
                  type="checkbox"
                  class="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                />
                <span class="ml-2 text-sm font-mono text-gray-700">Widget Activo</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Preview del Widget -->
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-mono font-semibold text-gray-900 mb-6">VISTA PREVIA</h3>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <div 
              id="widget-preview"
              class="max-w-2xl mx-auto w-full"
              :style="previewStyles"
            >
              <div class="reservation-form">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Reservar Mesa</h3>
                  <p class="text-sm opacity-75">Complete el formulario para hacer su reserva</p>
                </div>
                
                <form class="space-y-4">
                  <div class="grid grid-cols-1 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-1">Nombre Completo</label>
                      <input 
                        type="text" 
                        placeholder="Ingrese su nombre completo" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-200"
                      />
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3">
                      <div>
                        <label class="block text-sm font-medium mb-1">Teléfono</label>
                        <input 
                          type="tel" 
                          placeholder="+34 666 123 456" 
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-medium mb-1">Email</label>
                        <input 
                          type="email" 
                          placeholder="su@email.com" 
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3">
                      <div>
                        <label class="block text-sm font-medium mb-1">Fecha</label>
                        <input 
                          type="date" 
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-medium mb-1">Hora</label>
                        <input 
                          type="time" 
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium mb-1">Número de Personas</label>
                      <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-200">
                        <option value="">Seleccione...</option>
                        <option value="1">1 persona</option>
                        <option value="2">2 personas</option>
                        <option value="3">3 personas</option>
                        <option value="4">4 personas</option>
                        <option value="5">5 personas</option>
                        <option value="6">6 personas</option>
                        <option value="7">7+ personas</option>
                      </select>
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium mb-1">Comentarios especiales</label>
                      <textarea 
                        placeholder="Alergias, celebraciones especiales, etc. (opcional)" 
                        rows="3"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-200 resize-none"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button 
                    type="button" 
                    class="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  >
                    Confirmar Reserva
                  </button>
                  
                  <p class="text-xs text-center opacity-75">
                    Al hacer clic en "Confirmar Reserva" acepta nuestros términos y condiciones
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Código de Embed -->
      <div class="bg-white rounded-lg border border-slate-200 p-6">
        <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">CÓDIGO DE INTEGRACIÓN</h3>
        <p class="text-gray-600 mb-4">Copia y pega este código en tu página web para mostrar el widget de reservas:</p>
        
        <div class="bg-gray-900 rounded-lg p-4 relative">
          <button
            @click="copyEmbedCode"
            class="absolute top-2 right-2 bg-cyan-600 text-white px-3 py-1 rounded text-sm font-mono hover:bg-cyan-700 transition-colors"
          >
            {{ copyButtonText }}
          </button>
          <pre class="text-green-400 font-mono text-sm overflow-x-auto"><code>{{ embedCode }}</code></pre>
        </div>
        
        <div class="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 class="font-mono font-semibold text-blue-900 mb-2">Instrucciones:</h4>
          <ol class="text-sm text-blue-800 space-y-1 font-mono">
            <li>1. Copia el código de arriba</li>
            <li>2. Pégalo en el HTML de tu página web donde quieras mostrar el widget</li>
            <li>3. El widget aparecerá automáticamente en esa ubicación</li>
            <li>4. Los cambios de configuración se aplicarán automáticamente</li>
          </ol>
        </div>
      </div>

      <!-- Estadísticas del Widget -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center">
            <div class="p-2 bg-cyan-100 rounded-lg">
              <svg class="h-6 w-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-mono text-gray-600">Reservas Hoy</p>
              <p class="text-2xl font-mono font-bold text-gray-900">{{ stats.todayReservations }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center">
            <div class="p-2 bg-green-100 rounded-lg">
              <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-mono text-gray-600">Reservas Esta Semana</p>
              <p class="text-2xl font-mono font-bold text-gray-900">{{ stats.weekReservations }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center">
            <div class="p-2 bg-yellow-100 rounded-lg">
              <svg class="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-mono text-gray-600">Tasa de Conversión</p>
              <p class="text-2xl font-mono font-bold text-gray-900">{{ stats.conversionRate }}%</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center">
            <div class="p-2 bg-purple-100 rounded-lg">
              <svg class="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-mono text-gray-600">Vistas del Widget</p>
              <p class="text-2xl font-mono font-bold text-gray-900">{{ stats.widgetViews }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '~/components/DashboardLayout.vue'
import Button from '~/components/Button.vue'

// Meta tags SEO
useHead({
  title: 'Widget de Reservas - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Gestiona y personaliza tu widget de reservas embebible para tu restaurante. Colores, estilos y código de integración.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Configuración del widget
const widgetConfig = ref({
  id: null, // Se generará automáticamente
  name: 'Mi Widget de Reservas',
  primary_color: '#06b6d4',
  secondary_color: '#ffffff',
  text_color: '#000000',
  border_radius: '8px',
  font_family: 'Arial, sans-serif',
  is_active: true
})

// Estadísticas del widget
const stats = ref({
  todayReservations: 12,
  weekReservations: 89,
  conversionRate: 15.2,
  widgetViews: 1250
})

// Estado del botón de copia
const copyButtonText = ref('Copiar')

// Código de embed generado
const embedCode = computed(() => {
  const widgetId = widgetConfig.value.id || 'generar-id'
  return `<script src="https://api.conexianet.com/widget/reservations.js?id=${widgetId}"><\/script>`
})

// Estilos para el preview
const previewStyles = computed(() => {
  return {
    fontFamily: widgetConfig.value.font_family,
    border: `2px solid ${widgetConfig.value.primary_color}`,
    borderRadius: widgetConfig.value.border_radius,
    backgroundColor: widgetConfig.value.secondary_color,
    color: widgetConfig.value.text_color,
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }
})

// Aplicar estilos al preview
watch(widgetConfig, () => {
  nextTick(() => {
    const preview = document.getElementById('widget-preview')
    if (preview) {
      // Aplicar estilos a los elementos del preview
      const style = document.createElement('style')
      style.id = 'widget-preview-styles'
      style.textContent = `
        #widget-preview {
          background: ${widgetConfig.value.secondary_color};
          border: 2px solid ${widgetConfig.value.primary_color};
          border-radius: ${widgetConfig.value.border_radius};
          padding: 24px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          font-family: ${widgetConfig.value.font_family};
        }
        
        #widget-preview h3 {
          color: ${widgetConfig.value.primary_color};
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        
        #widget-preview p {
          color: ${widgetConfig.value.text_color};
          opacity: 0.75;
        }
        
        #widget-preview label {
          color: ${widgetConfig.value.text_color};
          font-weight: 500;
        }
        
        #widget-preview input,
        #widget-preview select,
        #widget-preview textarea {
          background: ${widgetConfig.value.secondary_color};
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          color: ${widgetConfig.value.text_color};
          font-family: ${widgetConfig.value.font_family};
          transition: all 0.2s ease;
        }
        
        #widget-preview input:focus,
        #widget-preview select:focus,
        #widget-preview textarea:focus {
          border-color: ${widgetConfig.value.primary_color};
          box-shadow: 0 0 0 3px ${widgetConfig.value.primary_color}20;
          outline: none;
        }
        
        #widget-preview button {
          background: #1f2937;
          color: white;
          border: 2px solid #1f2937;
          border-radius: 8px;
          font-weight: 600;
          font-family: ${widgetConfig.value.font_family};
          box-shadow: 0 4px 15px rgba(31, 41, 55, 0.3);
          transition: none;
          cursor: pointer;
        }
        
        #widget-preview button:hover {
          background: #374151;
          border-color: #374151;
          transform: none;
          box-shadow: 0 4px 15px rgba(31, 41, 55, 0.4);
        }
        
        #widget-preview button:active {
          background: #111827;
          border-color: #111827;
          transform: none;
        }
      `
      
      // Remover estilos anteriores
      const existingStyle = document.getElementById('widget-preview-styles')
      if (existingStyle) {
        existingStyle.remove()
      }
      
      document.head.appendChild(style)
    }
  })
}, { deep: true })

// Copiar código de embed
const copyEmbedCode = async () => {
  try {
    await navigator.clipboard.writeText(embedCode.value)
    copyButtonText.value = '¡Copiado!'
    setTimeout(() => {
      copyButtonText.value = 'Copiar'
    }, 2000)
  } catch (err) {
    console.error('Error al copiar:', err)
    copyButtonText.value = 'Error'
    setTimeout(() => {
      copyButtonText.value = 'Copiar'
    }, 2000)
  }
}

// Generar ID único para el widget
const generateWidgetId = () => {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 8)
  return `widget_${timestamp}_${randomStr}`
}

// Guardar configuración del widget
const saveWidgetConfig = async () => {
  try {
    // Generar ID si no existe
    if (!widgetConfig.value.id) {
      widgetConfig.value.id = generateWidgetId()
    }
    
    // Aquí harías la llamada al backend para guardar la configuración
    console.log('Guardando configuración:', widgetConfig.value)
    
    // Simular guardado exitoso
    alert(`Configuración guardada correctamente. ID del widget: ${widgetConfig.value.id}`)
  } catch (error) {
    console.error('Error al guardar:', error)
    alert('Error al guardar la configuración')
  }
}

// Cargar configuración existente al montar el componente
onMounted(() => {
  // Aquí cargarías la configuración existente del backend
  console.log('Cargando configuración del widget...')
})
</script>