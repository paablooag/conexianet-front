<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="w-10 h-10 border border-cyan-400 flex items-center justify-center relative overflow-hidden">
              <div class="w-6 h-6 border border-cyan-400 transform rotate-45"></div>
            </div>
            <span class="ml-3 text-xl font-mono font-bold text-gray-900">
              ConexiaNet Hamburgueserías
            </span>
          </div>
          <NuxtLink to="/iniciar-sesion" class="bg-cyan-600 text-white px-4 py-2 rounded-lg font-mono hover:bg-cyan-700 transition-colors">
            Iniciar Sesión
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-mono font-bold mb-6">
          El Mejor Restaurante de Hamburguesas
        </h1>
        <p class="text-xl md:text-2xl mb-8 font-mono">
          Sabores únicos, ingredientes frescos y la mejor experiencia gastronómica
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-cyan-600 px-8 py-3 rounded-lg font-mono font-bold hover:bg-gray-100 transition-colors">
            Ver Menú
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-mono font-bold hover:bg-white hover:text-cyan-600 transition-colors">
            Reservar Mesa
          </button>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Información del Restaurante -->
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl font-mono font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
            <p class="text-gray-600 leading-relaxed">
              Desde 2015, hemos estado sirviendo las mejores hamburguesas de la ciudad. 
              Nuestro compromiso es ofrecer ingredientes frescos, sabores únicos y una 
              experiencia gastronómica inolvidable para todos nuestros clientes.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-mono font-bold text-gray-900 mb-4">Horarios</h3>
            <div class="space-y-2 text-gray-600">
              <div class="flex justify-between">
                <span>Lunes - Jueves:</span>
                <span>12:00 - 22:00</span>
              </div>
              <div class="flex justify-between">
                <span>Viernes - Sábado:</span>
                <span>12:00 - 23:00</span>
              </div>
              <div class="flex justify-between">
                <span>Domingo:</span>
                <span>12:00 - 21:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-mono font-bold text-gray-900 mb-4">Contacto</h3>
            <div class="space-y-2 text-gray-600">
              <p>📍 Calle Principal 123, Madrid</p>
              <p>📞 +34 91 123 45 67</p>
              <p>✉️ info@hamburguesas.com</p>
            </div>
          </div>
        </div>

        <!-- Widget de Reservas -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-mono font-bold text-gray-900 mb-6 text-center">
            Reserva tu Mesa
          </h2>
          <p class="text-gray-600 text-center mb-6">
            Completa el formulario y te confirmaremos tu reserva por email
          </p>
          
          <!-- Aquí se cargará el widget -->
          <div id="widget-container"></div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="font-mono">&copy; 2024 ConexiaNet Hamburgueserías. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Meta tags SEO
useHead({
  title: 'Demo Widget de Reservas - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Demostración del widget de reservas embebible de ConexiaNet ADRE.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Cargar el widget cuando el componente se monte
onMounted(() => {
  // Simular la carga del widget
  const widgetContainer = document.getElementById('widget-container')
  
  if (widgetContainer) {
    // Crear el widget de demostración
    widgetContainer.innerHTML = `
      <div id="conexia-reservation-widget">
        <div class="reservation-form">
          <h3>Reservar Mesa</h3>
          <form id="reservation-form">
            <input type="text" name="full_name" placeholder="Nombre Completo" required>
            <input type="tel" name="phone" placeholder="Teléfono" required>
            <input type="email" name="email" placeholder="Correo Electrónico" required>
            <input type="date" name="date" required>
            <input type="time" name="time" required>
            <select name="people" required>
              <option value="">Personas</option>
              <option value="1">1 persona</option>
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
              <option value="5">5 personas</option>
              <option value="6">6 personas</option>
              <option value="7">7 personas</option>
              <option value="8">8 personas</option>
            </select>
            <textarea name="notes" placeholder="Notas especiales (opcional)"></textarea>
            <button type="submit">Reservar</button>
          </form>
          <div id="reservation-message" style="display: none; margin-top: 15px; padding: 10px; border-radius: 4px;"></div>
        </div>
      </div>
    `
    
    // Aplicar estilos del widget
    const style = document.createElement('style')
    style.textContent = `
      #conexia-reservation-widget {
        font-family: Arial, sans-serif;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid #06b6d4;
        border-radius: 8px;
        background: #ffffff;
        color: #000000;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      
      #conexia-reservation-widget h3 {
        color: #06b6d4;
        text-align: center;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
      }
      
      #conexia-reservation-widget input,
      #conexia-reservation-widget select,
      #conexia-reservation-widget textarea {
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        box-sizing: border-box;
        transition: border-color 0.3s ease;
      }
      
      #conexia-reservation-widget input:focus,
      #conexia-reservation-widget select:focus,
      #conexia-reservation-widget textarea:focus {
        outline: none;
        border-color: #06b6d4;
        box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
      }
      
      #conexia-reservation-widget button {
        width: 100%;
        padding: 12px;
        background: #06b6d4;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
        transition: all 0.3s ease;
      }
      
      #conexia-reservation-widget button:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
      
      #reservation-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
      }
      
      #reservation-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
      }
    `
    document.head.appendChild(style)
    
    // Configurar fecha mínima
    const dateInput = document.querySelector('input[name="date"]')
    const today = new Date().toISOString().split('T')[0]
    dateInput.setAttribute('min', today)
    
    // Manejar envío del formulario
    document.getElementById('reservation-form').addEventListener('submit', (e) => {
      e.preventDefault()
      
      // Simular envío exitoso
      const messageEl = document.getElementById('reservation-message')
      messageEl.textContent = '¡Reserva confirmada! Te hemos enviado un email de confirmación.'
      messageEl.className = 'success'
      messageEl.style.display = 'block'
      
      // Limpiar formulario
      document.getElementById('reservation-form').reset()
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        messageEl.style.display = 'none'
      }, 5000)
    })
  }
})
</script>

