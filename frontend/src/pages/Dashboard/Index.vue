<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { computed, ref } from 'vue'

useHead({
  title: 'Dashboard',
})
const currentHour = new Date().getHours()

const greeting = computed(() => {
  if (currentHour >= 5 && currentHour < 12) {
    return 'Good Morning'
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good Afternoon'
  } else if (currentHour >= 18 && currentHour < 22) {
    return 'Good Evening'
  } else {
    return 'Good Night'
  }
})

const username = ref('MAGICXcmd')
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-1">
      <span class="text-2xl font-bold">{{ greeting }}, {{ username }}</span>
      <span class="text-base font-medium">Here's a quick 7-day overview of your channel.</span>
    </div>
  </section>
</template>
