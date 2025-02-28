<script setup lang="ts">
import { useHead } from '@unhead/vue'

import AppSidebar from '@/components/ui/AppSidebar.vue'
import { SidebarProvider } from '@/components/ui/sidebar'

useHead({
  title: 'Dashboard',
})
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <div class="h-dvh w-dvw bg-[#0a0a0a]"></div>
  </SidebarProvider>
</template>
