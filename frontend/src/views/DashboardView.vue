<script setup lang="ts">
import { useHead } from '@unhead/vue'

import Dashboard from '@/layouts/Dashboard.vue'

useHead({
  title: 'Dashboard',
})
</script>

<template>
  <Dashboard>
    <RouterView />
  </Dashboard>
</template>
