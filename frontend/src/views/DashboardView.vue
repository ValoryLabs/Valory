<script setup lang="ts">
import { useHead } from '@unhead/vue'

import AppSidebar from '@/components/DashboardPage/AppSidebar.vue'
import Header from '@/components/DashboardPage/Header.vue'
import { SidebarProvider } from '@/components/ui/sidebar'

useHead({
  title: 'Dashboard',
})
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <SidebarProvider class="mt-14">
      <AppSidebar />
      <div class="h-dvh w-dvw"></div>
    </SidebarProvider>
  </div>
</template>
