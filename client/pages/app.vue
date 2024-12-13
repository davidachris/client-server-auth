<template>
    <div>
        <button @click="handleLogout">Logout</button>
        <hr>
        <NuxtPage/>
    </div>
</template>

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
</script>