<template>
  <div class="flex flex-col m-4 mr-6">
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

    <div class="flex flex-col mt-4 w-full bg-[#D6CC99] rounded">
      <div class="block w-full overflow-x-auto rounded">
        <table class="items-center w-full bg-[#2b343b] border-collapse">
          <thead>
            <tr>
              <th
                class="px-4 bg-[#D6CC99] text-[#001524] align-middle py-3 text-xs uppercase font-bold text-left"
              >
                Role
              </th>
              <th
                class="px-4 bg-[#D6CC99] text-[#001524] align-middle py-3 text-xs uppercase font-bold text-left"
              >
                Amount
              </th>
              <th
                class="px-4 bg-[#D6CC99] text-[#001524] align-middle py-3 text-xs uppercase font-bold text-left min-w-140-px"
              >
                Progress
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-white">
              <th
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
              >
                Administrator
              </th>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                1
              </td>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex items-center">
                  <span class="mr-2">70%</span>
                  <div class="relative w-full">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                      <div
                        style="width: 70%"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="text-white">
              <th
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
              >
                User
              </th>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                6
              </td>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex items-center">
                  <span class="mr-2">40%</span>
                  <div class="relative w-full">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                      <div
                        style="width: 40%"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="text-white">
              <th
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
              >
                User
              </th>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                5
              </td>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex items-center">
                  <span class="mr-2">45%</span>
                  <div class="relative w-full">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                      <div
                        style="width: 45%"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="text-white">
              <th
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
              >
                User
              </th>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                4
              </td>
              <td
                class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex items-center">
                  <span class="mr-2">60%</span>
                  <div class="relative w-full">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                      <div
                        style="width: 60%"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
