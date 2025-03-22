<script setup lang="ts">
import AppSidebar from '@/components/DashboardPage/AppSidebar.vue'
import Header from '@/components/DashboardPage/Header.vue'
// import Highlights from '@/components/DashboardPage/Highlights.vue'
import { SidebarProvider } from '@/components/ui/sidebar'
</script>

<template>
  <div class="flex flex-col">
    <!-- <Highlights /> -->
    <Header />
    <SidebarProvider class="mt-14 flex flex-row">
      <AppSidebar />
      <div class="w-dvw bg-black p-8">
        <RouterView />
      </div>
    </SidebarProvider>
  </div>
</template>
