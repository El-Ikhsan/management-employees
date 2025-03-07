import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const url = import.meta.env.VITE_API_URL
console.log(url)

const login = async (email, password) => {
  try {
    const response = await axios.post(`${url}/api/auth/login`, {
      email,
      password,
    })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed')
  }
}

const logout = async (userId, token) => {
  try {
    console.log('id: ', userId, 'token: ', token)
    const response = await axios.delete(`${url}api/auth/logout`, {
      headers: {
        Authorization: `Barear ${token}`,
      },
      userId,
      status: 'inActive',
    })
    router.push('/home')
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Logout failed')
  }
}

const getUserProfile = async (userId, token) => {
  try {
    const response = await axios.get(`${url}/api/auth/:${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user profile')
  }
}

export { login, logout, getUserProfile }
