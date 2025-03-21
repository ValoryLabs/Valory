<script setup lang="ts">
import AppSidebar from '@/components/DashboardPage/AppSidebar.vue'
import Header from '@/components/DashboardPage/Header.vue'
import { SidebarProvider } from '@/components/ui/sidebar'
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <SidebarProvider class="mt-14 flex flex-row gap-5">
      <AppSidebar />
      <div class="w-dvw py-4">
        <RouterView />
      </div>
    </SidebarProvider>
  </div>
</template>
