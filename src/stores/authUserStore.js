import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login, logout, getUserProfile } from '@/api/auth'

export const useAuthUserStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref(null)

  const loginUser = async (email, password) => {
    const userData = await login(email, password)
    isAuthenticated.value = true
    user.value = userData.data
  }

  const logoutUser = async () => {
    await logout(user.value.id, user.value.token)
    isAuthenticated.value = false
    user.value = null
  }

  const fetchUserProfile = async () => {
    const profile = await getUserProfile(user.value.id, user.value.token)
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
