<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const categories = [
  { name: 'Biler', icon: '🚗' },
  { name: 'Camping', icon: '🚐' },
  { name: 'Biltilbehør', icon: '🛞' },
  { name: 'Have og byg', icon: '🛠' },
  { name: 'Til boligen', icon: '🪑' },
  { name: 'Til børn', icon: '👶' },
  { name: 'Tøj og mode', icon: '👕' },
  { name: 'Sport og fritid', icon: '⚽' },
  { name: 'Både', icon: '🚤' },
  { name: 'Cykler', icon: '🚲' },
  { name: 'Hobby', icon: '✂️' }
]

const shuffledCategories = [...categories]
  .sort(() => Math.random() - 0.5)
  .slice(0, 15)

const scrollContainer = ref(null)

const scroll = (direction) => {
  if (scrollContainer.value) {
    const scrollAmount = 200
    const newScrollPosition = scrollContainer.value.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
    scrollContainer.value.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-40">
        <!-- Logo with RouterLink -->
        <div class="flex-shrink-0">
          <RouterLink to="/">
            <img
              src="../src/assets/dbaLogo.png"
              alt="DBA Logo"
              class="h-20 w-auto"
            />
          </RouterLink>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 max-w-2xl mx-8">
          <div class="relative">
            <input
              type="text"
              placeholder="Søg på DBA"
              class="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <!-- Login Link (now just a button/div) -->
        <div class="text-blue-600 hover:text-blue-800 cursor-pointer">
          Log på
        </div>
      </div>

      <!-- Navigation Container with Arrows -->
      <div class="relative flex items-center h-4">
        <!-- Left Arrow -->
        <button
          @click="scroll('left')"
          class="absolute left-0 z-10 bg-white bg-opacity-90 p-1 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Navigation Items (now without RouterLink) -->
        <div
          ref="scrollContainer"
          class="flex space-x-6 overflow-x-auto scrollbar-hide mx-8 py-2 scroll-smooth"
          style="scroll-behavior: smooth; -ms-overflow-style: none; scrollbar-width: none;"
        >
          <div
            v-for="(category, index) in shuffledCategories"
            :key="index"
            class="text-gray-600 hover:text-gray-900 whitespace-nowrap px-3 py-2 flex items-center gap-2 cursor-pointer"
          >
            <span>{{ category.icon }}</span>
            <span>{{ category.name }}</span>
          </div>
        </div>

        <!-- Right Arrow -->
        <button
          @click="scroll('right')"
          class="absolute right-0 z-10 bg-white bg-opacity-90 p-1 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>