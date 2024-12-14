<template>
    <div class="min-h-screen bg-gray-100">
      <!-- Logo Section -->
      <NuxtLink 
        to="/" 
        class="absolute top-4 left-4 text-xl font-bold text-gray-800 hover:text-blue-600"
      >
        YourLogo
      </NuxtLink>
  
      <!-- Signup Section -->
      <div class="flex items-center justify-center min-h-screen">
        <div class="flex w-full max-w-4xl bg-white rounded shadow-md overflow-hidden">
          <!-- Left Column: Image or Graphic -->
          <div class="w-1/2 bg-blue-500 flex items-center justify-center">
            <img src="/example-img.png" alt="Signup Illustration" class="w-3/4 h-auto">
          </div>
  
          <!-- Right Column: Signup Form -->
          <div class="w-1/2 p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>
  
            <form @submit.prevent="handleSignup">
              <!-- Name Input -->
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  v-model="name"
                  class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
  
              <!-- Email Input -->
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  v-model="email"
                  class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
  
              <!-- Password Input -->
              <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
  
              <!-- Signup Button -->
              <div class="mb-4">
                <button
                  type="submit"
                  class="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Sign Up
                </button>
              </div>
  
              <!-- Options -->
              <div class="text-center text-sm">
                <span>Already have an account?</span>
                <NuxtLink to="/login" class="text-blue-600 hover:underline">Login</NuxtLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>


<script setup>
const name = ref('');
const email = ref('');
const password = ref('');

const handleSignup = () => {
  console.log('Name:', name.value);
  console.log('Email:', email.value);
  console.log('Password:', password.value);
};
</script>

<style>
/* Custom styling can be added here if needed */
</style>