<template>
  <div class="futuristic-bg min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section id="inicio" class="relative py-20 overflow-hidden">
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
          <div class="mb-8">
            <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-6">
              [ ADRE v2.0 ] SISTEMA ACTIVO
            </div>
          </div>
          
          <h1 class="text-4xl md:text-7xl font-mono font-bold mb-6 text-gray-900">
            <span class="block">ASISTENTE DIGITAL</span>
            <span class="block neon-text mt-2">RELACIONES EMPRESARIALES</span>
          </h1>
          
          <p class="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-gray-600 font-mono leading-relaxed">
            Plataforma inteligente que revoluciona la gestión de relaciones empresariales.<br>
            Centraliza, automatiza y optimiza contactos con tecnología de vanguardia.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="neon" size="lg" @click="handleDemo">
              [ INICIAR DEMO ]
            </Button>
            <Button variant="outline" size="lg" @click="handleRegister">
              [ ACCESO GRATUITO ]
            </Button>
          </div>
          
          <!-- Status Indicators -->
          <div class="mt-16 flex justify-center space-x-8 text-sm font-mono">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span class="text-gray-500">SISTEMA ONLINE</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span class="text-gray-500">IA ACTIVA</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span class="text-gray-500">SINCRONIZADO</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Funciones Principales -->
    <section id="funciones" class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-4">
            [ MÓDULOS DEL SISTEMA ]
          </div>
          <h2 class="text-3xl md:text-5xl font-mono font-bold text-gray-900 mb-6">
            FUNCIONES PRINCIPALES
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto font-mono">
            Descubre cómo nuestro ADRE transforma la gestión de relaciones empresariales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Centralización de Contactos -->
          <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 group relative overflow-hidden border border-cyan-200 hover:border-cyan-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-cyan-400 opacity-30"></div>
            <div class="w-12 h-12 bg-cyan-100 border border-cyan-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
              CENTRALIZACIÓN
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Centraliza todos tus contactos y su historial de interacciones en una sola plataforma. 
              Nunca más pierdas información importante de tus clientes, proveedores y colaboradores.
            </p>
            <div class="mt-4 text-xs font-mono text-cyan-600 bg-cyan-100 px-2 py-1 rounded">
              [ STATUS: ACTIVO ]
            </div>
          </div>

          <!-- Automatización de Tareas -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 group relative overflow-hidden border border-blue-200 hover:border-blue-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-blue-400 opacity-30"></div>
            <div class="w-12 h-12 bg-blue-100 border border-blue-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              AUTOMATIZACIÓN
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Automatiza tareas repetitivas como recordatorios, seguimiento de reuniones y envíos de mensajes. 
              Ahorra tiempo y nunca olvides una tarea importante.
            </p>
            <div class="mt-4 text-xs font-mono text-blue-600 bg-blue-100 px-2 py-1 rounded">
              [ STATUS: ACTIVO ]
            </div>
          </div>

          <!-- Análisis y Reportes -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 group relative overflow-hidden border border-purple-200 hover:border-purple-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-purple-400 opacity-30"></div>
            <div class="w-12 h-12 bg-purple-100 border border-purple-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
              ANÁLISIS
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Analiza métricas clave y genera reportes automáticos. Toma decisiones basadas en datos 
              reales sobre el rendimiento de tus relaciones empresariales.
            </p>
            <div class="mt-4 text-xs font-mono text-purple-600 bg-purple-100 px-2 py-1 rounded">
              [ STATUS: ACTIVO ]
            </div>
          </div>

          <!-- IA para Sugerencias -->
          <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8 group relative overflow-hidden border border-yellow-200 hover:border-yellow-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-yellow-400 opacity-30"></div>
            <div class="w-12 h-12 bg-yellow-100 border border-yellow-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
              INTELIGENCIA IA
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Usa inteligencia artificial para sugerir acciones inteligentes, priorizar tareas 
              y optimizar la comunicación con cada contacto.
            </p>
            <div class="mt-4 text-xs font-mono text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
              [ STATUS: ACTIVO ]
            </div>
          </div>

          <!-- Integraciones -->
          <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-8 group relative overflow-hidden border border-teal-200 hover:border-teal-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-teal-400 opacity-30"></div>
            <div class="w-12 h-12 bg-teal-100 border border-teal-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
              INTEGRACIONES
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Se integra perfectamente con calendarios, CRMs, email, mensajería y redes sociales. 
              Todo tu ecosistema digital conectado en una sola plataforma.
            </p>
            <div class="mt-4 text-xs font-mono text-teal-600 bg-teal-100 px-2 py-1 rounded">
              [ STATUS: ACTIVO ]
            </div>
          </div>

          <!-- Valor Diferencial -->
          <div class="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-lg p-8 group relative overflow-hidden border-2 border-emerald-300 hover:border-emerald-500 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-emerald-400 opacity-50"></div>
            <div class="w-12 h-12 bg-emerald-100 border border-emerald-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
              VALOR DIFERENCIAL
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Combina automatización, centralización y analítica avanzada en un solo SaaS. 
              Algo que los CRMs tradicionales y herramientas dispersas no ofrecen de manera integrada.
            </p>
            <div class="mt-4 text-xs font-mono text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
              [ STATUS: PREMIUM ]
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Beneficios -->
    <section id="beneficios" class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-4">
            [ ANÁLISIS DE RENDIMIENTO ]
          </div>
          <h2 class="text-3xl md:text-5xl font-mono font-bold text-gray-900 mb-6">
            ¿POR QUÉ CONNEXIANET?
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto font-mono">
            Descubre los beneficios que obtendrás al implementar nuestro ADRE en tu empresa
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="space-y-8">
              <div class="flex items-start space-x-4 group">
                <div class="w-8 h-8 border border-cyan-400 flex items-center justify-center flex-shrink-0 mt-1 group-hover:neon-glow transition-all duration-300">
                  <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-mono font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    AHORRO DE TIEMPO
                  </h3>
                  <p class="text-gray-600 font-mono text-sm">Reduce hasta un 70% el tiempo dedicado a tareas administrativas repetitivas.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 group">
                <div class="w-8 h-8 bg-blue-100 border border-blue-400 flex items-center justify-center flex-shrink-0 mt-1 group-hover:neon-glow transition-all duration-300 rounded-lg">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-mono font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    COMUNICACIÓN OPTIMIZADA
                  </h3>
                  <p class="text-gray-600 font-mono text-sm">Optimiza la comunicación con cada contacto basándose en su historial y preferencias.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 group">
                <div class="w-8 h-8 bg-purple-100 border border-purple-400 flex items-center justify-center flex-shrink-0 mt-1 group-hover:neon-glow transition-all duration-300 rounded-lg">
                  <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-mono font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    DECISIONES INTELIGENTES
                  </h3>
                  <p class="text-gray-600 font-mono text-sm">Toma decisiones basadas en datos reales y sugerencias de IA.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 group">
                <div class="w-8 h-8 bg-cyan-100 border border-cyan-400 flex items-center justify-center flex-shrink-0 mt-1 group-hover:neon-glow transition-all duration-300 rounded-lg">
                  <svg class="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-mono font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    ESCALABILIDAD
                  </h3>
                  <p class="text-gray-600 font-mono text-sm">Crece con tu empresa, desde autónomos hasta grandes corporaciones.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-8 relative overflow-hidden border border-emerald-200">
            <div class="absolute top-0 right-0 w-32 h-32 border-l border-b border-emerald-400 opacity-20"></div>
            <div class="text-center relative z-10">
              <div class="w-16 h-16 bg-emerald-100 border border-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-mono font-bold text-gray-900 mb-6">RESULTADOS COMPROBADOS</h3>
              <div class="grid grid-cols-2 gap-6 text-center">
                <div class="group">
                  <div class="text-3xl font-mono font-bold text-emerald-600 mb-2 group-hover:neon-text transition-all duration-300">70%</div>
                  <div class="text-xs text-gray-600 font-mono">MENOS TIEMPO ADMIN</div>
                </div>
                <div class="group">
                  <div class="text-3xl font-mono font-bold text-blue-600 mb-2 group-hover:neon-text transition-all duration-300">95%</div>
                  <div class="text-xs text-gray-600 font-mono">SATISFACCIÓN</div>
                </div>
                <div class="group">
                  <div class="text-3xl font-mono font-bold text-purple-600 mb-2 group-hover:neon-text transition-all duration-300">3x</div>
                  <div class="text-xs text-gray-600 font-mono">MÁS EFICIENCIA</div>
                </div>
                <div class="group">
                  <div class="text-3xl font-mono font-bold text-cyan-600 mb-2 group-hover:neon-text transition-all duration-300">24/7</div>
                  <div class="text-xs text-gray-600 font-mono">DISPONIBILIDAD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-6">
          [ ACCESO AL SISTEMA ]
        </div>
        <h2 class="text-3xl md:text-5xl font-mono font-bold text-gray-900 mb-6">
          ¿LISTO PARA REVOLUCIONAR?
        </h2>
        <p class="text-lg mb-8 text-gray-600 font-mono">
          Únete a cientos de empresas que ya confían en ConnexiaNet para optimizar su gestión de contactos.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="neon" size="lg" @click="handleDemo">
            [ SOLICITAR DEMO ]
          </Button>
          <Button variant="outline" size="lg" @click="handleRegister">
            [ COMENZAR AHORA ]
          </Button>
        </div>
        
        <!-- Terminal-style status -->
        <div class="mt-12 futuristic-card rounded-lg p-6 max-w-2xl mx-auto">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-3 h-3 bg-red-400 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <span class="text-gray-500 text-sm font-mono ml-4">terminal@connexianet:~$</span>
          </div>
          <div class="text-left text-sm font-mono text-cyan-600">
            <div>✓ Sistema inicializado correctamente</div>
            <div>✓ Base de datos conectada</div>
            <div>✓ IA activa y operativa</div>
            <div class="text-gray-900">> Esperando conexión...</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
const handleDemo = () => {
  navigateTo('/auth')
}

const handleRegister = () => {
  navigateTo('/auth')
}
</script>
