import axios from 'axios'

const url = import.meta.env.VITE_API_URL
console.log(url)

const login = async (email, password) => {
  try {
    const response = await axios.post(`${url}/api/auth/login`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      email,
      password,
    })
    console.log(email.password)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed')
  }
}

const logout = async (userId, token) => {
  try {
    const response = await axios.post(`/${url}api/auth/:${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Tambahkan header Authorization
      },
      status: 'inActive',
    })
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
