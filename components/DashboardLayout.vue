<template>
  <div class="min-h-screen futuristic-bg">
    <!-- Header -->
    <DashboardHeader />
    
    <div class="flex">
      <!-- Sidebar -->
      <div class="w-64 bg-white border-r border-slate-200 min-h-screen">
        <div class="p-6">
          <h2 class="text-xl font-mono font-bold text-gray-900 mb-8">DASHBOARD</h2>
          <nav class="space-y-2">
            <NuxtLink 
              to="/dashboard/overview" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/overview' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Overview
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/contacts" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/contacts' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Contactos
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/suppliers" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/suppliers' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Proveedores
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/orders" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/orders' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Pedidos
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/newsletter" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/newsletter' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Newsletter
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/reservations" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/reservations' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Reservas
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/reports" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/reports' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Reportes
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/cash-register" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/cash-register' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Caja
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/web-reports" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/web-reports' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Reportes Web
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/stock" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/stock' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Stock
            </NuxtLink>
            <NuxtLink 
              to="/dashboard/reservations-widget" 
              :class="[
                'block px-4 py-3 rounded-lg font-mono font-medium transition-colors',
                $route.path === '/dashboard/reservations-widget' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-slate-100'
              ]"
            >
              Widget Reservas
            </NuxtLink>
          </nav>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="flex-1">
        <main class="p-8">
          <slot />
        </main>
      </div>
    </div>
    
    <!-- Footer -->
    <DashboardFooter />
  </div>
</template>

<script setup>
// No necesita lógica específica, solo el layout
</script>
