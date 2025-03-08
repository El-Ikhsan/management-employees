<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <!-- Judul Halaman -->
      <h1 class="text-3xl font-bold text-gray-800 mb-8">User Profile</h1>

      <!-- Grid untuk Dua Kolom -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Kolom Pertama -->
        <div>
          <!-- Full Name -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-700">Full Name</h2>
            <p class="text-gray-900 mt-2">{{ userData.fullName }}</p>
          </div>

          <!-- Department -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-700">Department</h2>
            <p class="text-gray-900 mt-2">{{ userData.department }}</p>
          </div>

          <!-- Domisili -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-700">Domisili</h2>
            <p class="text-gray-900 mt-2">{{ userData.domisili }}</p>
          </div>

          <!-- Max Quota -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-700">Max Quota</h2>
            <p class="text-gray-900 mt-2">{{ userData.maxQuota }}</p>
          </div>
        </div>

        <!-- Kolom Kedua -->
        <div>
          <!-- Email -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-700">Email</h2>
            <p class="text-gray-900 mt-2">{{ userData.email }}</p>
          </div>

          <!-- Manager ID -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-700">Manager ID</h2>
            <p class="text-gray-900 mt-2">{{ userData.managerId }}</p>
          </div>

          <!-- Phone -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-700">Phone</h2>
            <p class="text-gray-900 mt-2">{{ userData.phone }}</p>
          </div>

          <!-- ID -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-700">ID</h2>
            <p class="text-gray-900 mt-2">{{ userData.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      userData: {
        id: '12345',
        email: 'john.doe@example.com',
        fullName: 'John Doe',
        department: 'Engineering',
        managerId: '67890',
        domisili: 'Jakarta',
        phone: '+62 812 3456 7890',
        maxQuota: '10 GB',
      },
    }
  },
}
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>
