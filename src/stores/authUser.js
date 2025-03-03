// src/stores/authStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login, logout, getUserProfile } from '@/api/auth' // Import fungsi API

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref(null)

  const loginUser = async (email, password) => {
    const userData = await login(email, password)
    isAuthenticated.value = true
    user.value = userData
  }

  const logoutUser = async () => {
    await logout({ userId: user.value.id, token: user.value.token })
    isAuthenticated.value = false
    user.value = null
  }

  const fetchUserProfile = async () => {
    const profile = await getUserProfile({ userId: user.value.id, token: user.value.token })
    user.value = profile
  }

  return {
    isAuthenticated,
    user,
    loginUser,
    logoutUser,
    fetchUserProfile,
  }
})
