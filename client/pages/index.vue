<template>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo Section -->
        <div class="text-xl font-bold">
          <NuxtLink to="/" class="hover:text-gray-300">YourLogo</NuxtLink>
        </div>
  
        <!-- Navigation Section -->
        <div class="hidden md:flex space-x-4">
          <NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink>
          <NuxtLink to="/services" class="hover:text-gray-300">Services</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink>
        </div>
  
        <!-- Login/Signup Section -->
        <div class="flex space-x-4">
          <NuxtLink to="/login" class="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Login</NuxtLink>
          <NuxtLink to="/signup" class="px-4 py-2 bg-green-600 rounded hover:bg-green-700">Signup</NuxtLink>
        </div>
  
        <!-- Mobile Menu Toggle -->
        <button 
          class="md:hidden focus:outline-none text-gray-300 hover:text-white"
          @click="toggleMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
  
      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden mt-2 space-y-2">
        <NuxtLink to="/about" class="block text-gray-300 hover:text-white">About</NuxtLink>
        <NuxtLink to="/services" class="block text-gray-300 hover:text-white">Services</NuxtLink>
        <NuxtLink to="/contact" class="block text-gray-300 hover:text-white">Contact</NuxtLink>
        <NuxtLink to="/login" class="block px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Login</NuxtLink>
        <NuxtLink to="/signup" class="block px-4 py-2 bg-green-600 rounded hover:bg-green-700">Signup</NuxtLink>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style>
  /* Custom styling can be added here if needed */
  </style>
  