<script setup lang="ts">
import HeaderUser from '@/components/DashboardPage/HeaderUser.vue'
import Valory from '@/components/icons/Valory.vue'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import { NAV_DATA } from '@/data/dashboard/HeaderNav.data'

const data = NAV_DATA
</script>

<template>
  <header
    class="lg:h-26 fixed inset-x-0 z-[11] flex h-14 flex-row border-b border-white/10 bg-sidebar backdrop-blur-lg transition-colors"
  >
    <div class="flex flex-1 flex-row justify-between px-4 md:px-8">
      <span
        @click="$router.push('/')"
        class="flex w-56 cursor-pointer items-center gap-3 border-r border-white/10"
      >
        <Valory />
        <span class="font-valory">VALORY</span>
      </span>
      <div class="flex items-center gap-3">
        <LanguageSwitcher />
        <HeaderUser :user="data.user" />
      </div>
    </div>
  </header>
</template>
