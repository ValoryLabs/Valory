<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ref } from 'vue'

useHead({
  title: 'Dashboard',
})

const username = ref('MAGICXcmd')
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-1">
      <span class="text-2xl font-bold">Good Morning, {{ username }}</span>
      <span class="text-base font-medium">Here's a quick 7-day overview of your channel.</span>
    </div>
  </section>
</template>
