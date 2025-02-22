<script setup lang="ts">
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/AppSidebar.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: 'Dashboard',
})
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
  </SidebarProvider>
</template>