<template>
  <div class="flex flex-col m-4">
    <!-- Header -->
    <div class="p-4 bg-[#2b343b] rounded">
      <h1 class="text-3xl font-bold text-[#D6CC99]">Dashboard</h1>
      <p class="text-white">
        HALOO {{ name }} Selamat datang di dashboard {{ role }}, PERHATIAN!!! status box di bawah
        ini dihitung berdasarkan hari. Terimakasih xD
      </p>
    </div>

    <!-- Content -->
    <div class="flex flex-col mt-4 w-full bg-[#2b343b] rounded">
      <StatusBox />
    </div>
  </div>
</template>

<script setup>
import StatusBox from '@/components/StatusBox.vue'
import { useAuthUserStore } from '@/stores/authUserStore'
import { computed } from 'vue'

const authUserStore = useAuthUserStore()
const role = computed(() => authUserStore.userAuth.role)
const name = computed(() => authUserStore.userData.fullName)
</script>
