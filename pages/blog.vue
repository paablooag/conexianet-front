<template>
  <div class="futuristic-bg min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
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
              [ BLOG CONEXIANET ]
            </div>
          </div>
          
          <h1 class="text-4xl md:text-7xl font-mono font-bold mb-6 text-gray-900">
            <span class="block">BLOG</span>
            <span class="block neon-text mt-2">HAMBURGUESERÍAS</span>
          </h1>
          
          <p class="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-gray-600 font-mono leading-relaxed">
            Descubre las últimas tendencias, consejos y estrategias para optimizar tu hamburguesería con tecnología de vanguardia.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-4">
            [ CARGANDO ARTÍCULOS... ]
          </div>
          <div class="text-gray-600 font-mono">Obteniendo los últimos artículos del blog...</div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <div class="inline-block px-4 py-2 border border-red-400 text-red-400 text-sm font-mono mb-4">
            [ ERROR DE CONEXIÓN ]
          </div>
          <div class="text-gray-600 font-mono mb-4">{{ error }}</div>
          <Button variant="outline" @click="fetchBlogPosts">
            [ REINTENTAR ]
          </Button>
        </div>

        <!-- Blog Posts Grid -->
        <div v-else-if="blogPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in blogPosts" 
            :key="post.id"
            class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 group relative overflow-hidden border border-cyan-200 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            @click="navigateToPost(post.slug)"
          >
            <div class="absolute top-0 right-0 w-20 h-20 border-l border-b border-cyan-400 opacity-30"></div>
            
            
            <!-- Category -->
            <div v-if="post.category" class="mb-4">
              <span class="inline-block px-3 py-1 bg-cyan-100 text-cyan-600 text-xs font-mono rounded-full">
                {{ post.category }}
              </span>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-mono font-semibold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors line-clamp-2">
              {{ post.title }}
            </h3>
            
            <!-- Excerpt -->
            <p class="text-gray-600 font-mono text-sm leading-relaxed mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>
            
            <!-- Meta Info -->
            <div class="flex items-center justify-between text-xs text-gray-500 font-mono">
              <span>{{ formatDate(post.published_at) }}</span>
              <span>{{ post.reading_time }} min lectura</span>
            </div>
            
            <!-- Read More Indicator -->
            <div class="mt-4 text-xs font-mono text-cyan-600 bg-cyan-100 px-2 py-1 rounded group-hover:bg-cyan-200 transition-colors">
              [ LEER MÁS ]
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <div class="inline-block px-4 py-2 border border-gray-400 text-gray-400 text-sm font-mono mb-4">
            [ SIN ARTÍCULOS ]
          </div>
          <div class="text-gray-600 font-mono">No hay artículos disponibles en este momento.</div>
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
  title: 'Blog ConexiaNet - Consejos para Hamburgueserías',
  meta: [
    { name: 'description', content: 'Descubre las últimas tendencias, consejos y estrategias para optimizar tu hamburguesería. Artículos sobre gestión, marketing y tecnología para restaurantes.' },
    { name: 'keywords', content: 'blog hamburgueserías, consejos restaurantes, gestión restaurantes, marketing restaurantes, tecnología restaurantes' },
    { name: 'author', content: 'ConexiaNet' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#06b6d4' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Blog ConexiaNet - Consejos para Hamburgueserías' },
    { property: 'og:description', content: 'Descubre las últimas tendencias y consejos para optimizar tu hamburguesería con tecnología de vanguardia.' },
    { property: 'og:url', content: 'https://conexianet.com/blog' },
    { property: 'og:site_name', content: 'ConexiaNet' },
    { property: 'og:locale', content: 'es_ES' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blog ConexiaNet - Consejos para Hamburgueserías' },
    { name: 'twitter:description', content: 'Descubre las últimas tendencias y consejos para optimizar tu hamburguesería.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://conexianet.com/blog' }
  ]
})

// Reactive data
const blogPosts = ref([])
const loading = ref(true)
const error = ref(null)

// Fetch blog posts from backend
const fetchBlogPosts = async () => {
  try {
    loading.value = true
    error.value = null
    
    // TODO: Replace with actual API endpoint
    const response = await $fetch('/api/blog/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    blogPosts.value = response.data || []
  } catch (err) {
    console.error('Error fetching blog posts:', err)
    error.value = 'No se pudieron cargar los artículos del blog. Por favor, inténtalo de nuevo.'
    
    // Mock data for development
    blogPosts.value = [
      {
        id: 1,
        title: 'Cómo Optimizar la Gestión de Pedidos en tu Hamburguesería',
        excerpt: 'Descubre las mejores estrategias para automatizar y optimizar la gestión de pedidos en tu hamburguesería con tecnología de vanguardia.',
        slug: 'optimizar-gestion-pedidos-hamburgueseria',
        category: 'Gestión',
        published_at: '2024-01-15T10:00:00Z',
        reading_time: 5
      },
      {
        id: 2,
        title: 'Marketing Digital para Restaurantes: Estrategias que Funcionan',
        excerpt: 'Aprende las técnicas de marketing digital más efectivas para atraer más clientes a tu hamburguesería y aumentar las ventas.',
        slug: 'marketing-digital-restaurantes-estrategias',
        category: 'Marketing',
        published_at: '2024-01-10T14:30:00Z',
        reading_time: 7
      },
      {
        id: 3,
        title: 'Widget de Reservas: Cómo Integrarlo en tu Sitio Web',
        excerpt: 'Guía completa para integrar el widget de reservas de ConexiaNet en tu sitio web y mejorar la experiencia de tus clientes.',
        slug: 'widget-reservas-integracion-sitio-web',
        category: 'Tecnología',
        published_at: '2024-01-05T09:15:00Z',
        reading_time: 4
      }
    ]
  } finally {
    loading.value = false
  }
}

// Navigate to individual blog post
const navigateToPost = (slug) => {
  navigateTo(`/blog/${slug}`)
}


// Format date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Fetch blog posts on component mount
onMounted(() => {
  fetchBlogPosts()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
