<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue'

const titleMain = 'VALORY'
const metaImg = 'meta.webp'
const metaTitle = 'Stream Overlay for Valorant - VALORY'
const metaDescription =
  'Enhance your Valorant stream with VALORY overlays. ' +
  'Engage viewers, showcase progress, and make your stream unforgettable!'
const metaKeywords =
  'valorant, valorant overlay, stream overlay, OBS overlay, valorant stream, ' +
  'valorant streaming, valorant tracker, valorant rank tracker, ' +
  'Valorant scoreboard overlay, Valorant stream graphics, valorant stream assets, ' +
  'valorant stream design, valorant stream templates, valorant stream enhancements, ' +
  'valorant stream tools, valorant stream customization, valorant stream widgets, ' +
  'valorant stream plugins, valorant stream resources, valorant stream overlays, valory'

useHead({
  title: metaTitle,
  titleTemplate: (title) => (title === metaTitle ? title : `${title} - ${titleMain}`),
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'use-credentials' },
    { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' },
  ],
})

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
  viewport: 'width=device-width, initial-scale=1',
  ogTitle: metaTitle,
  ogDescription: metaDescription,
  ogImage: metaImg,
  twitterCard: 'summary_large_image',
  twitterTitle: metaTitle,
  twitterDescription: metaDescription,
  twitterImage: metaImg,
  author: 'MAGICX, misha@valory.su',
  keywords: metaKeywords,
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
