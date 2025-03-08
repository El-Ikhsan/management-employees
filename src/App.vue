<template>
  <div class="flex bg-[#001524]">
    <!-- Sidebar -->
    <aside v-if="showNavbar" class="bg-sky-500 w-64 min-h-screen">
      <!-- Navbar -->
      <Navbar />
    </aside>

    <!-- Konten Utama -->
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { useAuthUserStore } from '@/stores/authUserStore'
import { watch, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const authUserStore = useAuthUserStore()
const route = useRoute()

const isAuthenticated = computed(() => authUserStore.isAuthenticated)
const showNavbar = ref(isAuthenticated.value && !['/', '/login'].includes(route.path))

// Watch perubahan rute secara real-time
watch(
  () => route.path,
  (newPath) => {
    showNavbar.value = isAuthenticated.value && !['/', '/login'].includes(newPath)
  },
)
</script>

<style scoped>
/* Tambahkan styling global jika diperlukan */
</style>
