<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Main from '@/components/HomePage/Main.vue'
import Header from '@/components/ui/Header.vue'
import { hidden } from '@/utils'

const Features = defineAsyncComponent(() => import('@/components/HomePage/Features.vue'))
const Streamers = defineAsyncComponent(() => import('@/components/HomePage/Streamers.vue'))
const OpenSource = defineAsyncComponent(() => import('@/components/HomePage/OpenSource.vue'))
const Footer = defineAsyncComponent(() => import('@/components/ui/Footer.vue'))
</script>

<template>
  <Header />
  <div class="container m-auto">
    <div class="flex flex-col gap-16">
      <Main />
      <Features />
      <Streamers v-if="!hidden" />
      <OpenSource />
    </div>
  </div>
  <Footer />
</template>
