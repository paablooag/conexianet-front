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
            <span class="block">SOFTWARE PARA</span>
            <span class="block neon-text mt-2">HAMBURGUESERÍAS</span>
          </h1>
          
          <p class="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-gray-600 font-mono leading-relaxed">
            <strong>Automatización restaurantes</strong> y <strong>CRM para restaurantes</strong> que centraliza, automatiza y optimiza contactos con tecnología de vanguardia en un solo <strong>SaaS para restaurantes</strong>. 
            <br><br>
            <span class="text-cyan-600 font-semibold">+ Carta digital con QR a través de <a href="https://tucartaendigital.es" target="_blank" class="underline hover:text-cyan-400 transition-colors">tucartaendigital.es</a></span>
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
            CÓMO AUTOMATIZAR PEDIDOS EN UNA HAMBURGUESERÍA
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto font-mono">
            <strong>Herramienta online para reservas y marketing hamburguesería</strong> que centraliza contactos, proveedores y suscriptores de newsletter con historial de interacciones.
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
              DASHBOARD PEDIDOS HAMBURGUESERÍA
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Centraliza todos los contactos, proveedores y suscriptores de newsletter con historial de interacciones. 
              <strong>Gestionar proveedores restaurante online</strong> nunca fue tan fácil.
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
              AUTOMATIZAR RESERVAS HAMBURGUESERÍA
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Automatiza tareas repetitivas: recordatorios de pedidos, seguimiento de clientes, envíos de mensajes y promociones. 
              <strong>Enviar promociones automáticas a clientes de restaurante</strong> nunca fue tan sencillo.
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
              ENVIAR NEWSLETTER CLIENTES RESTAURANTE
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Analiza métricas de marketing y genera reportes automáticos. Permite descargar reportes de newsletter 
              y Search Console para evaluar el rendimiento y alcance de campañas.
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
              SAAS PARA MEJORAR VENTAS Y CLIENTES
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Usa IA para sugerir acciones inteligentes, priorizar tareas y optimizar la comunicación 
              con clientes y proveedores en tu hamburguesería.
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
              INTEGRACIONES AVANZADAS
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Se integra con calendarios, CRMs, email, mensajería, redes sociales y Google Search Console 
              para métricas SEO de la web del restaurante.
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
              VALOR DIFERENCIAL ADRE
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Combina automatización, centralización y analítica avanzada en un solo SaaS, adaptado a hamburgueserías. 
              Algo que los CRMs tradicionales y herramientas de automatización dispersas no ofrecen de manera integrada.
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
            ¿POR QUÉ ELEGIR NUESTRO ADRE?
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto font-mono">
            Un <strong>Asistente Digital de Relaciones Empresariales (ADRE)</strong> que ayuda a hamburgueserías, autónomos y pequeñas cadenas de restaurantes a gestionar, automatizar y optimizar sus relaciones con clientes, proveedores y colaboradores.
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

    <!-- ConexiaNet Hamburguesas -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-4">
            [ CONEXIANET HAMBURGUESAS ]
          </div>
          <h2 class="text-3xl md:text-5xl font-mono font-bold text-gray-900 mb-6">
            ¿QUÉ OFRECE CONEXIANET HAMBURGUESAS?
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto font-mono">
            Una solución integral diseñada específicamente para hamburgueserías que combina gestión, automatización y marketing en una sola plataforma.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Gestión de Pedidos -->
          <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 group relative overflow-hidden border border-red-200 hover:border-red-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-red-400 opacity-30"></div>
            <div class="w-12 h-12 bg-red-100 border border-red-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
              GESTIÓN DE PEDIDOS
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Controla pedidos online, reservas de mesas, gestión de stock y seguimiento de entregas en tiempo real.
            </p>
          </div>

          <!-- CRM Especializado -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 group relative overflow-hidden border border-blue-200 hover:border-blue-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-blue-400 opacity-30"></div>
            <div class="w-12 h-12 bg-blue-100 border border-blue-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              CRM ESPECIALIZADO
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Base de datos de clientes con historial de pedidos, preferencias y segmentación para marketing personalizado.
            </p>
          </div>

          <!-- Marketing Automatizado -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 group relative overflow-hidden border border-purple-200 hover:border-purple-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-purple-400 opacity-30"></div>
            <div class="w-12 h-12 bg-purple-100 border border-purple-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
              MARKETING AUTOMATIZADO
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Campañas de email, promociones automáticas, newsletters y seguimiento de conversiones.
            </p>
          </div>

          <!-- Carta Digital QR -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 group relative overflow-hidden border border-green-200 hover:border-green-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-green-400 opacity-30"></div>
            <div class="w-12 h-12 bg-green-100 border border-green-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
              CARTA DIGITAL QR
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Carta digital con código QR a través de <a href="https://tucartaendigital.es" target="_blank" class="text-green-600 underline hover:text-green-400">tucartaendigital.es</a> para una experiencia sin contacto.
            </p>
          </div>

          <!-- Widget de Reservas -->
          <div class="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg p-8 group relative overflow-hidden border border-cyan-200 hover:border-cyan-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-cyan-400 opacity-30"></div>
            <div class="w-12 h-12 bg-cyan-100 border border-cyan-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
              WIDGET DE RESERVAS
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Widget embebible personalizable para reservas online que se integra en cualquier sitio web.
            </p>
          </div>

          <!-- Análisis y Reportes -->
          <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8 group relative overflow-hidden border border-yellow-200 hover:border-yellow-400 transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-yellow-400 opacity-30"></div>
            <div class="w-12 h-12 bg-yellow-100 border border-yellow-400 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300 rounded-lg">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
              ANÁLISIS Y REPORTES
            </h3>
            <p class="text-gray-600 font-mono text-sm leading-relaxed">
              Métricas detalladas, reportes de ventas, análisis de clientes y KPIs en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Panel de Precios -->
    <section class="py-20 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-4">
            [ PLANES Y PRECIOS ]
          </div>
          <h2 class="text-3xl md:text-5xl font-mono font-bold text-gray-900 mb-6">
            PRECIO ÚNICO, MÁXIMO VALOR
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto font-mono">
            Un solo plan que incluye todas las funcionalidades. Sin sorpresas, sin límites ocultos.
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 relative overflow-hidden border-2 border-cyan-300 hover:border-cyan-500 transition-all duration-300">
            <div class="absolute top-0 right-0 w-32 h-32 border-l border-b border-cyan-400 opacity-20"></div>
            <div class="text-center relative z-10">
              <div class="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 text-sm font-mono rounded-full mb-6">
                [ PLAN COMPLETO ]
              </div>
              
              <h3 class="text-3xl font-mono font-bold text-gray-900 mb-4">CONEXIANET HAMBURGUESAS</h3>
              
              <div class="mb-8">
                <span class="text-6xl font-mono font-bold text-cyan-600">20€</span>
                <span class="text-xl text-gray-600 font-mono">/mes</span>
              </div>

              <div class="space-y-4 mb-8 text-left">
                <div class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-cyan-100 border border-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-mono">Dashboard completo de gestión</span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-cyan-100 border border-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-mono">CRM especializado para hamburgueserías</span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-cyan-100 border border-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-mono">Widget de reservas personalizable</span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-cyan-100 border border-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-mono">Carta digital con QR (tucartaendigital.es)</span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-cyan-100 border border-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-mono">Marketing automatizado y newsletters</span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-cyan-100 border border-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-mono">Análisis y reportes en tiempo real</span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-cyan-100 border border-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-mono">Soporte técnico 24/7</span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-cyan-100 border border-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-mono">Actualizaciones automáticas</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="neon" size="lg" @click="handleDemo" class="w-full sm:w-auto">
                  [ PROBAR GRATIS ]
                </Button>
                <Button variant="outline" size="lg" @click="handleRegister" class="w-full sm:w-auto">
                  [ CONTRATAR AHORA ]
                </Button>
              </div>
              
              <p class="text-sm text-gray-500 font-mono mt-4">
                Sin compromiso • Cancelación en cualquier momento • 30 días de garantía
              </p>
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
          ¿LISTO PARA AUTOMATIZAR TU HAMBURGUESERÍA?
        </h2>
        <p class="text-lg mb-8 text-gray-600 font-mono">
          Únete a cientos de hamburgueserías que ya confían en nuestro <strong>SaaS para restaurantes</strong> para optimizar su gestión de contactos y automatizar sus procesos.
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
// Meta tags SEO optimizados
useHead({
  title: 'ConexiaNet ADRE - Software para Hamburgueserías',
  meta: [
    { name: 'description', content: 'Software para hamburgueserías que automatiza pedidos, centraliza contactos y optimiza la gestión de restaurantes. CRM para restaurantes con IA integrada. Prueba gratis.' },
    { name: 'keywords', content: 'software hamburgueserías, automatización restaurantes, CRM restaurantes, SaaS restaurantes, gestión pedidos, marketing restaurante, newsletter clientes, reservas online' },
    { name: 'author', content: 'ConexiaNet' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#06b6d4' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'ConexiaNet ADRE - Software para Hamburgueserías' },
    { property: 'og:description', content: 'Software para hamburgueserías que automatiza pedidos, centraliza contactos y optimiza la gestión de restaurantes. CRM para restaurantes con IA integrada.' },
    { property: 'og:url', content: 'https://conexianet.com' },
    { property: 'og:site_name', content: 'ConexiaNet ADRE' },
    { property: 'og:locale', content: 'es_ES' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'ConexiaNet ADRE - Software para Hamburgueserías' },
    { name: 'twitter:description', content: 'Automatiza tu hamburguesería con nuestro software especializado. CRM, gestión de pedidos y marketing automatizado.' },
    
    // Schema.org structured data
    { name: 'application-name', content: 'ConexiaNet ADRE' },
    { name: 'msapplication-TileColor', content: '#06b6d4' },
    { name: 'msapplication-config', content: '/browserconfig.xml' }
  ],
  link: [
    { rel: 'canonical', href: 'https://conexianet.com' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})
const handleDemo = () => {
  navigateTo('/iniciar-sesion')
}

const handleRegister = () => {
  navigateTo('/iniciar-sesion?mode=register')
}
</script>
