<template>
  <DashboardLayout>
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-mono font-bold text-gray-900">GESTIÓN DE STOCK</h1>
        <Button variant="neon" @click="showNewProduct = true">
          + NUEVO PRODUCTO
        </Button>
      </div>

      <!-- Stock Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">TOTAL PRODUCTOS</p>
              <p class="text-2xl font-mono font-bold text-blue-600">{{ products.length }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">EN STOCK</p>
              <p class="text-2xl font-mono font-bold text-green-600">{{ inStockProducts }}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">BAJO STOCK</p>
              <p class="text-2xl font-mono font-bold text-yellow-600">{{ lowStockProducts }}</p>
            </div>
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 border border-red-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-mono text-gray-600 mb-1">SIN STOCK</p>
              <p class="text-2xl font-mono font-bold text-red-600">{{ outOfStockProducts }}</p>
            </div>
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Stock List -->
      <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-mono font-semibold text-gray-900">INVENTARIO DE PRODUCTOS</h3>
            <div class="flex space-x-2">
              <input 
                type="text" 
                placeholder="Buscar productos..."
                class="text-sm font-mono border border-gray-300 rounded-lg px-3 py-1"
                v-model="searchQuery"
              />
              <select class="text-sm font-mono border border-gray-300 rounded-lg px-3 py-1" v-model="filterStatus">
                <option value="">Todos los estados</option>
                <option value="in-stock">En Stock</option>
                <option value="low-stock">Bajo Stock</option>
                <option value="out-of-stock">Sin Stock</option>
              </select>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Stock Actual</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Stock Mínimo</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-slate-200">
              <tr v-for="product in filteredProducts" :key="product.id" class="hover:bg-slate-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                      <span class="text-sm font-mono font-semibold text-cyan-600">{{ product.name.charAt(0) }}</span>
                    </div>
                    <div>
                      <div class="text-sm font-mono text-gray-900">{{ product.name }}</div>
                      <div class="text-sm font-mono text-gray-500">{{ product.sku }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full bg-blue-100 text-blue-800">
                    {{ product.category }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{{ product.currentStock }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ product.minStock }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{{ product.supplier }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full',
                    product.status === 'in-stock' ? 'bg-green-100 text-green-800' :
                    product.status === 'low-stock' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  ]">
                    {{ getStatusText(product.status) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium">
                  <button 
                    @click="openProductModal(product)"
                    class="text-cyan-600 hover:text-cyan-900 mr-3"
                  >
                    Ver
                  </button>
                  <button 
                    @click="requestStock(product)"
                    class="text-green-600 hover:text-green-900"
                  >
                    Pedir
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Product Details Modal -->
      <div v-if="showProductModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeProductModal">
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4" @click.stop>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-mono font-semibold text-gray-900">DETALLES DEL PRODUCTO</h3>
            <button @click="closeProductModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div v-if="selectedProduct" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Producto</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedProduct.name }}</p>
              </div>
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">SKU</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedProduct.sku }}</p>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Stock Actual</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedProduct.currentStock }}</p>
              </div>
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Stock Mínimo</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedProduct.minStock }}</p>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Categoría</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedProduct.category }}</p>
              </div>
              <div>
                <label class="text-sm font-mono font-medium text-gray-500">Proveedor</label>
                <p class="text-sm font-mono text-gray-900">{{ selectedProduct.supplier }}</p>
              </div>
            </div>
            
            <div>
              <label class="text-sm font-mono font-medium text-gray-500">Estado</label>
              <span :class="[
                'inline-flex px-2 py-1 text-xs font-mono font-semibold rounded-full',
                selectedProduct.status === 'in-stock' ? 'bg-green-100 text-green-800' :
                selectedProduct.status === 'low-stock' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              ]">
                {{ getStatusText(selectedProduct.status) }}
              </span>
            </div>
            
            <div class="flex space-x-3 pt-4">
              <button 
                @click="requestStock(selectedProduct)"
                class="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-green-700 transition-colors"
              >
                Pedir Stock
              </button>
              <button 
                @click="contactSupplier(selectedProduct)"
                class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-blue-700 transition-colors"
              >
                Contactar Proveedor
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Supplier Contact Modal -->
      <div v-if="showSupplierModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeSupplierModal">
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4" @click.stop>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-mono font-semibold text-gray-900">CONTACTAR PROVEEDOR</h3>
            <button @click="closeSupplierModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div v-if="selectedSupplier" class="space-y-4">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-mono font-semibold text-blue-600">{{ selectedSupplier.name.charAt(0) }}</span>
              </div>
              <h4 class="text-lg font-mono font-semibold text-gray-900">{{ selectedSupplier.name }}</h4>
              <p class="text-sm font-mono text-gray-500">{{ selectedSupplier.company }}</p>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="text-sm font-mono text-gray-900">{{ selectedSupplier.email }}</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="text-sm font-mono text-gray-900">{{ selectedSupplier.phone }}</span>
              </div>
            </div>
            
            <div class="grid grid-cols-3 gap-3 pt-4">
              <button 
                @click="sendEmailToSupplier"
                class="bg-cyan-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-cyan-700 transition-colors text-sm"
              >
                Email
              </button>
              <button 
                @click="sendWhatsAppToSupplier"
                class="bg-green-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-green-700 transition-colors text-sm flex items-center justify-center"
              >
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </button>
              <button 
                @click="callSupplier"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg font-mono font-medium hover:bg-blue-700 transition-colors text-sm flex items-center justify-center"
              >
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
// Meta tags SEO
useHead({
  title: 'Stock - ConexiaNet ADRE',
  meta: [
    { name: 'description', content: 'Gestión de stock de ConexiaNet ADRE. Control de inventario, pedidos a proveedores y comunicación directa.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Data reactiva
const searchQuery = ref('')
const filterStatus = ref('')
const showNewProduct = ref(false)
const showProductModal = ref(false)
const showSupplierModal = ref(false)
const selectedProduct = ref(null)
const selectedSupplier = ref(null)

// Products data
const products = ref([
  {
    id: 1,
    name: 'Carne de Ternera',
    sku: 'CARN-001',
    category: 'Carnes',
    currentStock: 25,
    minStock: 10,
    supplier: 'Carnes Premium',
    status: 'in-stock'
  },
  {
    id: 2,
    name: 'Pan de Hamburguesa',
    sku: 'PAN-001',
    category: 'Panadería',
    currentStock: 8,
    minStock: 15,
    supplier: 'Panadería Central',
    status: 'low-stock'
  },
  {
    id: 3,
    name: 'Queso Cheddar',
    sku: 'QUES-001',
    category: 'Lácteos',
    currentStock: 0,
    minStock: 5,
    supplier: 'Lácteos del Norte',
    status: 'out-of-stock'
  },
  {
    id: 4,
    name: 'Lechuga',
    sku: 'VERD-001',
    category: 'Verduras',
    currentStock: 12,
    minStock: 8,
    supplier: 'Verduras Frescas',
    status: 'in-stock'
  },
  {
    id: 5,
    name: 'Tomate',
    sku: 'VERD-002',
    category: 'Verduras',
    currentStock: 3,
    minStock: 10,
    supplier: 'Verduras Frescas',
    status: 'low-stock'
  },
  {
    id: 6,
    name: 'Cebolla',
    sku: 'VERD-003',
    category: 'Verduras',
    currentStock: 0,
    minStock: 5,
    supplier: 'Verduras Frescas',
    status: 'out-of-stock'
  },
  {
    id: 7,
    name: 'Patatas',
    sku: 'VERD-004',
    category: 'Verduras',
    currentStock: 18,
    minStock: 12,
    supplier: 'Verduras Frescas',
    status: 'in-stock'
  },
  {
    id: 8,
    name: 'Aceite de Oliva',
    sku: 'ACEI-001',
    category: 'Aceites',
    currentStock: 2,
    minStock: 8,
    supplier: 'Aceites del Sur',
    status: 'low-stock'
  }
])

// Suppliers data
const suppliers = ref([
  {
    id: 1,
    name: 'Carlos Ruiz',
    company: 'Carnes Premium',
    email: 'carlos@carnespremium.com',
    phone: '+34 666 123 456'
  },
  {
    id: 2,
    name: 'María García',
    company: 'Panadería Central',
    email: 'maria@panaderiacentral.com',
    phone: '+34 666 789 012'
  },
  {
    id: 3,
    name: 'Ana López',
    company: 'Lácteos del Norte',
    email: 'ana@lacteosnorte.com',
    phone: '+34 666 345 678'
  },
  {
    id: 4,
    name: 'Pedro Martín',
    company: 'Verduras Frescas',
    email: 'pedro@verdurasfrescas.com',
    phone: '+34 666 901 234'
  },
  {
    id: 5,
    name: 'Miguel Torres',
    company: 'Aceites del Sur',
    email: 'miguel@aceitessur.com',
    phone: '+34 666 567 890'
  }
])

// Computed properties
const filteredProducts = computed(() => {
  let filtered = products.value

  if (searchQuery.value) {
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (filterStatus.value) {
    filtered = filtered.filter(product => product.status === filterStatus.value)
  }

  return filtered
})

const inStockProducts = computed(() => {
  return products.value.filter(product => product.status === 'in-stock').length
})

const lowStockProducts = computed(() => {
  return products.value.filter(product => product.status === 'low-stock').length
})

const outOfStockProducts = computed(() => {
  return products.value.filter(product => product.status === 'out-of-stock').length
})

// Methods
const getStatusText = (status) => {
  const statusMap = {
    'in-stock': 'En Stock',
    'low-stock': 'Bajo Stock',
    'out-of-stock': 'Sin Stock'
  }
  return statusMap[status] || status
}

const openProductModal = (product) => {
  selectedProduct.value = product
  showProductModal.value = true
}

const closeProductModal = () => {
  showProductModal.value = false
  selectedProduct.value = null
}

const requestStock = (product) => {
  console.log('Solicitando stock para:', product.name)
  alert(`Solicitud de stock enviada para ${product.name} a ${product.supplier}`)
  closeProductModal()
}

const contactSupplier = (product) => {
  const supplier = suppliers.value.find(s => s.company === product.supplier)
  if (supplier) {
    selectedSupplier.value = supplier
    showSupplierModal.value = true
  }
}

const closeSupplierModal = () => {
  showSupplierModal.value = false
  selectedSupplier.value = null
}

const sendEmailToSupplier = () => {
  if (selectedSupplier.value) {
    const emailUrl = `mailto:${selectedSupplier.value.email}?subject=Solicitud de Stock&body=Hola ${selectedSupplier.value.name}, necesitamos solicitar stock para nuestros productos.`
    window.location.href = emailUrl
  }
}

const sendWhatsAppToSupplier = () => {
  if (selectedSupplier.value) {
    const phone = selectedSupplier.value.phone.replace(/\D/g, '')
    const message = `Hola ${selectedSupplier.value.name}, necesitamos solicitar stock para nuestros productos. ¿Podrían enviarnos información sobre disponibilidad?`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
}

const callSupplier = () => {
  if (selectedSupplier.value) {
    const phone = selectedSupplier.value.phone.replace(/\D/g, '')
    const callUrl = `tel:${phone}`
    window.location.href = callUrl
  }
}
</script>

