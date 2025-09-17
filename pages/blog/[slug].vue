<template>
  <div class="futuristic-bg min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Loading State -->
    <div v-if="loading" class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-mono mb-4">
          [ CARGANDO ARTÍCULO... ]
        </div>
        <div class="text-gray-600 font-mono">Obteniendo el artículo del blog...</div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-block px-4 py-2 border border-red-400 text-red-400 text-sm font-mono mb-4">
          [ ERROR ]
        </div>
        <div class="text-gray-600 font-mono mb-4">{{ error }}</div>
        <Button variant="outline" @click="fetchBlogPost">
          [ REINTENTAR ]
        </Button>
      </div>
    </div>

    <!-- Blog Post Content -->
    <article v-else-if="blogPost" class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Back to Blog -->
        <div class="mb-8">
          <Button variant="outline" @click="navigateTo('/blog')" class="mb-4">
            [ ← VOLVER AL BLOG ]
          </Button>
        </div>

        <!-- Article Header -->
        <header class="mb-12">
          <!-- Category -->
          <div v-if="blogPost.category" class="mb-4">
            <span class="inline-block px-3 py-1 bg-cyan-100 text-cyan-600 text-sm font-mono rounded-full">
              {{ blogPost.category }}
            </span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-6xl font-mono font-bold text-gray-900 mb-6 leading-tight">
            {{ blogPost.title }}
          </h1>

          <!-- Meta Info -->
          <div class="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-mono mb-8">
            <span>{{ formatDate(blogPost.published_at) }}</span>
            <span>{{ blogPost.reading_time }} min lectura</span>
            <span v-if="blogPost.author">Por {{ blogPost.author }}</span>
          </div>


          <!-- Excerpt -->
          <p class="text-xl text-gray-600 font-mono leading-relaxed">
            {{ blogPost.excerpt }}
          </p>
        </header>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none">
          <div v-html="blogPost.content" class="font-mono text-gray-700 leading-relaxed"></div>
        </div>

        <!-- Article Footer -->
        <footer class="mt-12 pt-8 border-t border-gray-200">
          <!-- Tags -->
          <div v-if="blogPost.tags && blogPost.tags.length > 0" class="mb-8">
            <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">Etiquetas:</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in blogPost.tags" 
                :key="tag"
                class="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-mono rounded-full"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Share Buttons -->
          <div class="mb-8">
            <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">Compartir:</h3>
            <div class="flex gap-4">
              <Button variant="outline" @click="shareOnTwitter" class="text-sm">
                [ TWITTER ]
              </Button>
              <Button variant="outline" @click="shareOnFacebook" class="text-sm">
                [ FACEBOOK ]
              </Button>
              <Button variant="outline" @click="shareOnLinkedIn" class="text-sm">
                [ LINKEDIN ]
              </Button>
            </div>
          </div>

          <!-- Related Posts -->
          <div v-if="relatedPosts.length > 0" class="mb-8">
            <h3 class="text-lg font-mono font-semibold text-gray-900 mb-4">Artículos Relacionados:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article 
                v-for="post in relatedPosts" 
                :key="post.id"
                class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-200 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                @click="navigateToPost(post.slug)"
              >
                <h4 class="text-lg font-mono font-semibold text-gray-900 mb-2 hover:text-cyan-600 transition-colors">
                  {{ post.title }}
                </h4>
                <p class="text-gray-600 font-mono text-sm line-clamp-2">
                  {{ post.excerpt }}
                </p>
              </article>
            </div>
          </div>
        </footer>
      </div>
    </article>


    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Get route params
const route = useRoute()
const slug = route.params.slug

// Reactive data
const blogPost = ref(null)
const relatedPosts = ref([])
const loading = ref(true)
const error = ref(null)

// Fetch blog post
const fetchBlogPost = async () => {
  try {
    loading.value = true
    error.value = null
    
    // TODO: Replace with actual API endpoint
    const response = await $fetch(`/api/blog/posts/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    blogPost.value = response.data
    
    // Update meta tags
    if (blogPost.value) {
      useHead({
        title: `${blogPost.value.title} - Blog ConexiaNet`,
        meta: [
          { name: 'description', content: blogPost.value.excerpt },
          { name: 'keywords', content: blogPost.value.tags ? blogPost.value.tags.join(', ') : '' },
          { name: 'author', content: blogPost.value.author || 'ConexiaNet' },
          { name: 'robots', content: 'index, follow' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'theme-color', content: '#06b6d4' },
          
          // Open Graph / Facebook
          { property: 'og:type', content: 'article' },
          { property: 'og:title', content: blogPost.value.title },
          { property: 'og:description', content: blogPost.value.excerpt },
          { property: 'og:url', content: `https://conexianet.com/blog/${slug}` },
          { property: 'og:site_name', content: 'ConexiaNet' },
          { property: 'og:locale', content: 'es_ES' },
          // Twitter
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:title', content: blogPost.value.title },
          { name: 'twitter:description', content: blogPost.value.excerpt }
        ],
        link: [
          { rel: 'canonical', href: `https://conexianet.com/blog/${slug}` }
        ]
      })
    }
    
    // Fetch related posts
    await fetchRelatedPosts()
  } catch (err) {
    console.error('Error fetching blog post:', err)
    error.value = 'No se pudo cargar el artículo del blog. Por favor, inténtalo de nuevo.'
    
    // Mock data for development
    blogPost.value = {
      id: 1,
      title: 'Cómo Optimizar la Gestión de Pedidos en tu Hamburguesería',
      excerpt: 'Descubre las mejores estrategias para automatizar y optimizar la gestión de pedidos en tu hamburguesería con tecnología de vanguardia.',
      content: `
        <h2>Introducción</h2>
        <p>La gestión eficiente de pedidos es fundamental para el éxito de cualquier hamburguesería. En este artículo, te mostraremos las mejores estrategias para optimizar este proceso.</p>
        
        <h2>1. Automatización del Proceso</h2>
        <p>La automatización es clave para reducir errores y mejorar la eficiencia. Implementa un sistema que:</p>
        <ul>
          <li>Centralice todos los pedidos en un solo lugar</li>
          <li>Notifique automáticamente a la cocina</li>
          <li>Genere reportes en tiempo real</li>
        </ul>
        
        <h2>2. Gestión de Stock</h2>
        <p>Mantén un control preciso del inventario para evitar roturas de stock y optimizar los costos.</p>
        
        <h2>Conclusión</h2>
        <p>Con estas estrategias, podrás optimizar significativamente la gestión de pedidos en tu hamburguesería.</p>
      `,
      slug: slug,
      category: 'Gestión',
      published_at: '2024-01-15T10:00:00Z',
      reading_time: 5,
      author: 'Equipo ConexiaNet',
      tags: ['gestión', 'pedidos', 'automatización', 'hamburgueserías']
    }
  } finally {
    loading.value = false
  }
}

// Fetch related posts
const fetchRelatedPosts = async () => {
  try {
    // TODO: Replace with actual API endpoint
    const response = await $fetch(`/api/blog/posts/related/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    relatedPosts.value = response.data || []
  } catch (err) {
    console.error('Error fetching related posts:', err)
    // Mock data for development
    relatedPosts.value = [
      {
        id: 2,
        title: 'Marketing Digital para Restaurantes: Estrategias que Funcionan',
        excerpt: 'Aprende las técnicas de marketing digital más efectivas para atraer más clientes.',
        slug: 'marketing-digital-restaurantes-estrategias'
      },
      {
        id: 3,
        title: 'Widget de Reservas: Cómo Integrarlo en tu Sitio Web',
        excerpt: 'Guía completa para integrar el widget de reservas de ConexiaNet.',
        slug: 'widget-reservas-integracion-sitio-web'
      }
    ]
  }
}

// Navigate to blog post
const navigateToPost = (postSlug) => {
  navigateTo(`/blog/${postSlug}`)
}

// Share functions
const shareOnTwitter = () => {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPost.value.title)}&url=${encodeURIComponent(window.location.href)}`
  window.open(url, '_blank')
}

const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
  window.open(url, '_blank')
}

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
  window.open(url, '_blank')
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

// Fetch blog post on component mount
onMounted(() => {
  fetchBlogPost()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose h2 {
  @apply text-2xl font-mono font-bold text-gray-900 mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-mono font-semibold text-gray-900 mt-6 mb-3;
}

.prose p {
  @apply mb-4;
}

.prose ul {
  @apply list-disc list-inside mb-4;
}

.prose li {
  @apply mb-2;
}
</style>
