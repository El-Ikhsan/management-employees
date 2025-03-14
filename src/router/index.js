import { createRouter, createWebHistory } from 'vue-router'
import { useAuthUserStore } from '@/stores/authUserStore'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import Absen from '@/views/Absen.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import { computed } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, title: 'Dashboard' },
  },
  {
    path: '/absen',
    name: 'Absen',
    component: Absen,
    meta: { requiresAuth: true, title: 'Absen' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true, title: 'Profile' },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const authUserStore = useAuthUserStore()

  console.log(to.path)
  const isAuthenticated = computed(() => authUserStore.isAuthenticated)

  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login')
  } else {
    next()
  }
})

export default router
