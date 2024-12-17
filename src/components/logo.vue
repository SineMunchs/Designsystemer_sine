<template>
    <div :class="['logo', `logo--${size}`]">
      <!-- You can replace this with your actual logo SVG or image -->
      <svg 
        class="logo-svg"
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" fill="currentColor" />
        <path 
          d="M30 50 L70 50 M50 30 L50 70" 
          stroke="white" 
          stroke-width="8" 
          stroke-linecap="round"
        />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Logo',
    props: {
      size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value)
      }
    }
  }
  </script>
  
  <style scoped>
  .logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #4a5568; /* Default color, you can change this */
  }
  
  .logo-svg {
    width: 100%;
    height: 100%;
  }
  
  .logo--small {
    width: 32px;
    height: 32px;
  }
  
  .logo--medium {
    width: 48px;
    height: 48px;
  }
  
  .logo--large {
    width: 64px;
    height: 64px;
  }
  </style>