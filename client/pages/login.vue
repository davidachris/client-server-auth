<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <input v-model="username" type="text"  placeholder="Username" required>
            <input v-model="password" type="password"  placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')

const handleLogin = () => {
    authStore.login()
    router.push('/app')
}
</script>