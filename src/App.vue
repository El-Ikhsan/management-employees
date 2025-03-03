<template>
  <div class="flex">
    <!-- Sidebar -->
    <aside v-if="isAuthenticated" class="bg-sky-500 w-64 min-h-screen">
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
import { useAuthStore } from '@/stores/authUser'
import { computed } from 'vue'

const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)
</script>

<style scoped>
/* Tambahkan styling global jika diperlukan */
</style>
