<template>
  <!-- Navbar Fixed -->
  <nav v-if="showNavbar" class="fixed top-0 left-0 w-full z-50">
    <Navbar />
  </nav>

  <!-- Container untuk Sidebar dan Main Content -->
  <div class="flex bg-[#001524]">
    <!-- Sidebar -->
    <aside v-if="showSidebar" :class="sidebarClass" class="bg-sky-500 w-54 h-screen fixed">
      <Sidebar />
    </aside>

    <!-- Konten Utama -->
    <main :class="mainClass" class="flex flex-col h-screen overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import { useAuthUserStore } from '@/stores/authUserStore'
import { watch, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const authUserStore = useAuthUserStore()
const route = useRoute()

const isAuthenticated = ref(() => authUserStore.isAuthenticated)
const showNavbar = ref(() => isAuthenticated.value && !['/login'].includes(route.path))
const showSidebar = computed(() => isAuthenticated.value && !['/', '/login'].includes(route.path))

const mainClass = computed(() => {
  if (['/login'].includes(route.path)) {
    return 'flex-1'
  } else {
    return showSidebar.value ? 'flex-1 pl-54 pt-16' : 'flex-1'
  }
})

const sidebarClass = computed(() => {
  return ['/', '/login'].includes(route.path) ? '' : 'pt-16'
})

watch(
  () => route.path,
  () => {
    showNavbar.value = isAuthenticated.value && !['/login'].includes(route.path)
    showSidebar.value = isAuthenticated.value && !['/', '/login'].includes(route.path)
  },
)
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>
