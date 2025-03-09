<template>
  <div class="min-h-screen bg-[#0d161d] p-4">
    <div class="max-w-6xl mx-auto bg-[#1b2227] shadow-lg rounded-lg p-8">
      <!-- Judul Halaman -->
      <h1 class="text-3xl font-bold text-[#D6CC99] mb-8">User Profile</h1>

      <!-- Foto Profil -->
      <div class="flex justify-center mb-8">
        <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-[#D6CC99]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMgImqvMFMf-MapC8tDsQE4TciufEo4XuBw&s"
            alt="Profile Picture"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Grid untuk Dua Kolom -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#D6CC99]">
        <!-- Kolom Pertama -->
        <div>
          <!-- Full Name -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold">Full Name</h2>
            <p class="text-white mt-2">{{ userData.fullName }}</p>
          </div>

          <!-- Department -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold">Department</h2>
            <p class="text-white mt-2">{{ userData.department }}</p>
          </div>

          <!-- Domisili -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold">Domisili</h2>
            <p class="text-white mt-2">{{ userData.domisili }}</p>
          </div>

          <!-- Max Quota -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold">Max Quota</h2>
            <p class="text-white mt-2">{{ userData.maxQuota }}</p>
          </div>
        </div>

        <!-- Kolom Kedua -->
        <div>
          <!-- Email -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold">Email</h2>
            <p class="text-white mt-2">{{ userData.email }}</p>
          </div>

          <!-- Manager ID -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold">Manager ID</h2>
            <p class="text-white mt-2">{{ userData.managerId }}</p>
          </div>

          <!-- Phone -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold">Phone</h2>
            <p class="text-white mt-2">{{ userData.phone }}</p>
          </div>

          <!-- ID -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold">ID</h2>
            <p class="text-white mt-2">{{ userData.id }}</p>
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
