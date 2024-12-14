<template>
    <div class="min-h-screen bg-gray-100">
      <!-- Logo Section -->
      <NuxtLink 
        to="/" 
        class="absolute top-4 left-4 text-xl font-bold text-gray-800 hover:text-blue-600"
      >
        YourLogo
      </NuxtLink>
  
      <!-- Login Section -->
      <div class="flex items-center justify-center min-h-screen">
        <div class="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form @submit.prevent="handleLogin">
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
  
            <!-- Login Button -->
            <div class="mb-4">
              <button
                type="submit"
                class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </div>
  
            <!-- Options -->
            <div class="flex justify-between items-center text-sm">
              <NuxtLink to="/reset-password" class="text-blue-600 hover:underline">Forgot Password?</NuxtLink>
              <NuxtLink to="/signup" class="text-blue-600 hover:underline">Create an Account</NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>


<script setup lang="ts">
const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = () => {
    authStore.login()
    router.push('/app')
}
</script>