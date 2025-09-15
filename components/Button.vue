<template>
  <button
    :class="buttonClasses"
    :type="type"
    @click="$emit('click', $event)"
  >
    <span class="relative z-10">
      <slot />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'neon'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = 'font-mono font-semibold relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black'
  
  const variants = {
    primary: 'bg-white text-gray-900 border border-gray-300 hover:border-cyan-400 hover:text-cyan-600 focus:ring-cyan-400 cyber-border',
    secondary: 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 focus:ring-blue-400',
    outline: 'border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-400 hover:text-white focus:ring-cyan-400',
    ghost: 'text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-400',
    neon: 'bg-white text-cyan-600 border border-cyan-400 neon-glow hover:bg-cyan-400 hover:text-white focus:ring-cyan-400'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return `${baseClasses} ${variants[props.variant]} ${sizes[props.size]}`
})
</script>
