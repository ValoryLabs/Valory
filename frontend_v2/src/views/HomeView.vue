<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Header from '@/components/ui/Header.vue'
import Main from '@/components/MainPage/Main.vue'

const Features = defineAsyncComponent(() => import('@/components/MainPage/Features.vue'))
const Streamers = defineAsyncComponent(() => import('@/components/MainPage/Streamers.vue'))
const OpenSource = defineAsyncComponent(() => import('@/components/MainPage/OpenSource.vue'))
const Footer = defineAsyncComponent(() => import('@/components/ui/Footer.vue'))
</script>

<template>
  <Header />
  <div class="container m-auto">
    <div class="flex flex-col gap-16">
      <Main />
      <Features />
      <Streamers />
      <OpenSource />
    </div>
  </div>
  <Footer />
</template>
