<script setup lang="ts">
import AppSidebar from '@/components/DashboardPage/AppSidebar.vue'
import Header from '@/components/DashboardPage/Header.vue'
import { SidebarProvider } from '@/components/ui/sidebar'
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <SidebarProvider class="mt-14">
      <AppSidebar />
      <div class="h-dvh w-dvw">
        <slot />
      </div>
    </SidebarProvider>
  </div>
</template>
