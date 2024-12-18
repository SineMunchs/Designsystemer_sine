<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

const isLiked = ref(false)

const toggleLike = (event) => {
  event.preventDefault() 
  isLiked.value = !isLiked.value
}
</script>

<template>
  <div class="group cursor-pointer mt-6">
    <RouterLink :to="`/cat/${title}`">
      <div class="relative aspect-square overflow-hidden rounded-lg drop-shadow-xl">
        <!-- Hjerte SVG -->
        <div 
          class="absolute bottom-2 right-2 z-10" 
          @click="toggleLike"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            :class="`transition-colors duration-300 ease-in-out cursor-pointer fill-current
              ${isLiked ? 'text-[#2C4D9B]' : 'text-[#E0EEFA] hover:text-[#2C4D9B]'}`"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <img 
          :src="imageUrl" 
          :alt="title"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="mt-2">
        <h3 class="text-sm font-medium text-gray-900">{{ title }}</h3>
        <p class="text-base font-bold text-gray-900">{{ price }}</p>
        <p class="text-sm text-gray-500">{{ location }}</p>
      </div>
    </RouterLink>
  </div>
</template>