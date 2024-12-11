<template>
    <div class="w-[350px] bg-white rounded p-3 shadow font-['Quicksand']">
      <div 
        v-if="mediaHref" 
        :style="mediaBg" 
        class="h-[200px] bg-cover bg-center"
      ></div>
      <h4 class="mb-0 text-lg font-medium">{{title}}</h4>
      <small class="text-gray-600">{{subHeader}}</small>
      <p class="text-gray-700">{{supportingText}}</p>
      <div v-if="buttonText">
        <a class="inline-block px-2 py-2 font-bold uppercase tracking-wider text-blue-900 cursor-pointer transition-all duration-300 hover:bg-purple-50">
          {{buttonText}}
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'Card',
      props: {
          title: String,
          subHeader: String,
          mediaHref: String,
          supportingText: String,
          buttonText: String
      },
      computed: {
        mediaBg() {
          return {
            backgroundImage: `url(${this.mediaHref})`
          }
        }
      }
  }
  </script>