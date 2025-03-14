<template>
  <div
    class="flex flex-col min-h-screen size-full justify-center px-4 sm:px-6 lg:px-60 bg-[#7077A1]"
  >
    <div
      class="flex flex-col bg-[#332941] px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-14 rounded-lg shadow-lg"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 class="mt-8 text-center text-2xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="handleLogin" class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-white">Email address</label>
            <div class="mt-2">
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                required
                class="block w-full rounded-md bg-white/10 px-3 py-2 text-sm text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium text-white">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md bg-white/10 px-3 py-2 text-sm text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthUserStore } from '@/stores/authUserStore'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const authUserStore = useAuthUserStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    await authUserStore.loginUser(email.value, password.value)
    await authUserStore.getUser()
    router.push('/dashboard')
  } catch (error) {
    alert(error.message)
  }
}
</script>
