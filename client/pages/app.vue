<template>
    <div class="min-h-screen flex flex-col">
      <!-- Navigation Bar -->
      <nav class="bg-gray-800 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <!-- Logo Section -->
          <NuxtLink 
            to="/app" 
            class="text-xl font-bold hover:text-gray-300"
          >
            YourLogo
          </NuxtLink>
  
          <!-- Profile Section -->
          <div 
            class="relative" 
            @mouseleave="startCloseDropdownTimer"
            @mouseenter="cancelCloseDropdownTimer"
          >
            <button
              @click="toggleDropdown"
              class="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-500"
            >
              <img
                :src="user.profileImage"
                alt="Profile"
                class="w-8 h-8 rounded-full object-cover"
              />
            </button>
            <div
              v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow rounded z-10"
            >
              <NuxtLink 
                to="/app/settings" 
                class="block px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </NuxtLink>
              <button
                @click="handleLogout"
                class="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
  
      <!-- Content Section -->
      <div class="flex-1">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const user = ref({ 
    name: 'John Doe', 
    profileImage: 'https://via.placeholder.com/150' // Replace with actual profile image logic
  }); 
  const isDropdownOpen = ref(false);
  const dropdownCloseTimer = ref(null);
  const router = useRouter();
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  const handleLogout = () => {
    // Clear user session logic
    console.log('User logged out');
    router.push('/');
  };
  
  const startCloseDropdownTimer = () => {
    dropdownCloseTimer.value = setTimeout(() => {
      isDropdownOpen.value = false;
    }, 50);
  };
  
  const cancelCloseDropdownTimer = () => {
    clearTimeout(dropdownCloseTimer.value);
    dropdownCloseTimer.value = null;
  };
</script>
<!-- 
<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
const authStore = useAuthStore()
const router = useRouter()
const handleLogout = () => {
    authStore.logout()
    router.push('/')
}
</script> -->