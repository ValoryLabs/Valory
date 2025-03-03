<script setup lang="ts">
import StreamersMarquee from '@/components/HomePage/StreamersMarquee.vue'
</script>

<template>
  <div id="streamers" class="container m-auto flex flex-col items-center gap-10">
    <div class="flex flex-col items-center gap-6">
      <span class="inline-block text-sm font-bold uppercase text-[#FF930F]">
        {{ $t('streamers.category') }}
      </span>
      <span class="text-center text-2xl font-bold uppercase">
        {{ $t('streamers.title') }}
      </span>
      <span class="whitespace-pre-line text-center text-base font-normal text-[#CECECE]">
        {{ $t('streamers.subtitle') }}
      </span>
      <div class="max-w-[98dvw]">
        <StreamersMarquee />
      </div>
    </div>
    <div></div>
  </div>
</template>
