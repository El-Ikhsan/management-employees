import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login, logout, getUserProfile } from '@/api/auth'

export const useAuthUserStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const userAuth = ref(null)
  const userData = ref(null)

  const loginUser = async (email, password) => {
    const userData = await login(email, password)
    isAuthenticated.value = true
    userAuth.value = userData.data
    getUser()
  }

  const logoutUser = async () => {
    await logout(userAuth.value.id, userAuth.value.token)
    isAuthenticated.value = false
    userAuth.value = null
  }

  const getUser = async () => {
    const profile = await getUserProfile(userAuth.value.id, userAuth.value.token)
    userData.value = profile.data
  }

  return {
    isAuthenticated,
    userAuth,
    userData,
    loginUser,
    logoutUser,
    getUser,
  }
})
