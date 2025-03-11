<template>
  <div class="flex bg-[#0d161d]">
    <!-- Sidebar -->
    <aside v-if="showNavbar" class="bg-sky-500 w-64 min-h-screen">
      <!-- Navbar -->
      <Navbar />
    </aside>

    <!-- Konten Utama -->
    <main :class="mainClass">
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

const mainClass = computed(() => {
  return ['/', '/login'].includes(route.path) ? 'flex-1' : 'flex-1 p-2'
})

watch(
  () => route.path,
  (newPath) => {
    showNavbar.value = isAuthenticated.value && !['/', '/login'].includes(newPath)
  },
)
</script>

<style scoped></style>
