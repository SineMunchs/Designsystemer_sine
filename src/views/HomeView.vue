<script setup>
import Card from '../components/Card/ProductCard.vue' 

const catListings = [
  {
    id: 1,
    title: 'Gryden klar Sphynx',
    price: '9000 kr',
    location: '8660 Vråde',
    image: 'src/assets/kat3.png'
  },
  {
    id: 2,
    title: 'Party Sphynx',
    price: '7000 kr',
    location: '8600 Baile',
    image: 'src/assets/kat2.png'
  },
  {
    id: 3,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat1.png'
  },
  {
    id: 4,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat4.png'
  },
  {
    id: 5,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat8.png'
  },
  {
    id: 6,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat9.png'
  },
  {
    id: 7,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat10.png'
  },
  {
    id: 8,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat11.png'
  },
  {
    id: 9,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat12.png'
  },
  {
    id: 10,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat13.png'
  },
  {
    id: 11,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat14.png'
  },
  {
    id: 12,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat15.png'
  },
  {
    id: 13,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat7.png'
  },
  {
    id: 14,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat16.png'
  },  
  {
    id: 15,
    title: 'Model Sphynx',
    price: '5 kr',
    location: '3720 Aakirkeby',
    image: 'src/assets/kat17.png'
  },

  // Add more cats as needed
]
</script>

<template>
  <main class="max-w-7xl mx-auto p-7 h-9">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <Card
        v-for="cat in catListings"
        :key="cat.id"
        :title="cat.title"
        :price="cat.price"
        :location="cat.location"
        :imageUrl="cat.image"
      />
    </div>
  </main>
</template>