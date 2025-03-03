<template>
  <section class="text-gray-600 h-screen flex bg-gray-900">
    <div class="container m-0 flex px-5 py-12 items-center justify-center flex-col">
      <div class="lg:w-2/3 w-full animate-fade-in-down">
        <!-- Change the heading text -->
        <h1 class="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
          Hello, I'm John.
        </h1>
        <!-- Change the subheading text -->
        <h1 class="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
          I’m here to assist <span class="border-b-4 border-green-400 -mb-20"></span>with your
          questions.
        </h1>
        <!-- Change the paragraph text -->
        <p class="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
          I am a Web developer. I'm here to provide information and answer your queries to the best
          of my abilities.
        </p>

        <router-link to="dashboard">
          <a
            class="uppercase rounded-sm bg-red-400 font-bold text-white px-8 py-4 mx-auto mr-4 hidden md:inline"
            >Dashboard</a
          ></router-link
        >
        <router-link to="dashboard"
          ><a
            class="uppercase rounded-sm bg-green-400 font-bold text-white px-8 py-4 mx-auto hidden md:inline"
            >Login</a
          ></router-link
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDashboard = () => {
  router.push('/dashboard') // Arahkan ke Dashboard
}
</script>

<style scoped>
/* Tambahkan styling sesuai kebutuhan */
</style>
