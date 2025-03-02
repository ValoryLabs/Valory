<script lang="ts" setup>
import InteractiveHoverButton from '@/components/ui/InteractiveHoverButton.vue'
</script>

<template>
  <section class="container relative flex flex-col items-center">
    <div
      class="bg-white/2 container relative z-10 flex flex-col items-center gap-8 overflow-hidden rounded-2xl border border-white/20 px-12 py-24 backdrop-blur-[8px]"
    >
      <span class="text-center text-4xl font-bold"> Are you ready? </span>
      <span class="text-center text-xl font-normal">
        Join thousands of content creators who have improved the quality
        <br />of their broadcasts with using our tools.
      </span>
      <InteractiveHoverButton text="Let's start!" size="lg" class="w-[11rem] text-base" />
      <div class="absolute -bottom-32 rounded-full bg-blue-400 px-96 py-20 blur-[160px]"></div>
    </div>
    <div
      class="bg-white/2 absolute -bottom-6 w-[80%] rounded-2xl border border-white/10 px-12 py-5 backdrop-blur-[8px]"
    ></div>
    <div
      class="bg-white/2 absolute -bottom-3 w-[90%] rounded-2xl border border-white/15 px-12 py-5 backdrop-blur-[8px]"
    ></div>
  </section>
</template>
