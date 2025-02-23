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
  </SidebarProvider>
</template>
