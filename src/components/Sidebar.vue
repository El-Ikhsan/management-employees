<template>
  <nav
    class="flex flex-col items-center w-full h-full overflow-hidden text-[#D6CC99] bg-[#001524] shadow-[19px_0px_6px_-6px_rgba(0,_21,_36,_0.1)] pl-6"
  >
    <!-- <router-link to="/" class="flex items-center w-full px-3 mt-3 pb-2 text-white">
      <svg
        class="w-8 h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
        />
      </svg>
      <span class="ml-2 text-medium font-bold">The App</span>
    </router-link> -->
    <div class="w-full px-2">
      <div class="flex flex-col items-center w-full mt-2 border-[#D6CC99]">
        <router-link
          to="/dashboard"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#D6CC99] hover:text-[#001524]"
        >
          <svg
            class="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span class="ml-2 text-medium font-medium">Dashboard</span>
        </router-link>
        <router-link
          to="/home"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#D6CC99] hover:text-[#001524]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>

          <span class="ml-2 text-medium font-medium">Add User</span>
        </router-link>
        <router-link
          to="/absen"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#D6CC99] hover:text-[#001524]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <span class="ml-2 text-medium font-medium">Absen</span>
        </router-link>
        <router-link
          to="/docs"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#D6CC99] hover:text-[#001524]"
        >
          <svg
            class="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            />
          </svg>
          <span class="ml-2 text-medium font-medium">Docs</span>
        </router-link>
      </div>
      <div class="flex flex-col justify-end items-center w-full">
        <router-link
          to="/chatbot"
          class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#D6CC99] hover:text-[#001524]"
        >
          <svg
            class="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <span class="ml-2 text-medium font-medium">Chatbot</span>
          <span class="flex absolute -mt-5 ml-4">
            <span
              class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#0A5EB0] opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-[#0A5EB0]"> </span>
          </span>
        </router-link>
        <router-link
          to="/settings"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#D6CC99] hover:text-[#001524]"
        >
          <svg
            class="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <span class="ml-2 text-medium font-medium">Settings</span>
        </router-link>
        <router-link
          to="/"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#D6CC99] hover:text-[#001524]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>

          <span @click="handleLogout" class="ml-2 text-medium font-medium">Logout</span>
        </router-link>
        <router-link
          to="/profile"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#D6CC99] hover:text-[#001524]"
        >
          <svg
            class="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="ml-2 text-medium font-medium">Profile</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthUserStore } from '@/stores/authUserStore'

const authUserStore = useAuthUserStore()

const handleLogout = async () => {
  try {
    await authUserStore.logoutUser()
  } catch (error) {
    console.log(error.message)
  }
}
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
/* .router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid white;
} */
</style>
