import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authUser' // Pastikan path ini benar
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import Absen from '@/views/Absen.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/absen',
    name: 'Absen',
    component: Absen,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // Jika halaman memerlukan login dan pengguna belum login
    next('/login')
  } else {
    next()
  }
})

export default router
