export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
    }),
    actions: {
        async initializeAuth() {
            const storedAuth = localStorage.getItem('isAuthenticated')
            this.isAuthenticated = storedAuth === 'true'
        },
        login() {
            this.isAuthenticated = true
            localStorage.setItem('isAuthenticated', 'true')
        },
        logout() {
            this.isAuthenticated = false
            localStorage.removeItem('isAuthenticated')
        }
    }
})