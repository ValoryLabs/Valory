<script setup lang="ts">
import HeaderUser from '@/components/DashboardPage/HeaderUser.vue'
import Valory from '@/components/icons/Valory.vue'
import { NAV_DATA } from '@/data/dashboard/HeaderNav.data'

const data = NAV_DATA
</script>

<template>
  <header
    class="bg-fd-background/80 lg:h-26 fixed inset-x-0 z-[11] flex h-14 flex-row backdrop-blur-lg transition-colors"
  >
    <div class="flex flex-1 flex-row justify-between px-4 md:px-6">
      <span @click="$router.push('/')" class="flex w-fit cursor-pointer items-center gap-3">
        <Valory />
        <span class="font-valory">VALORY</span>
      </span>
      <HeaderUser :user="data.user" />
    </div>
  </header>
</template>
