<script setup lang="ts">
import ContainerScroll from '@/components/ui/ContainerScroll/ContainerScroll.vue'
</script>

<template>
  <section>
    <div class="mb-16 flex flex-col">
      <ContainerScroll>
        <template #title>
          <h1 class="text-6xl font-bold">Какой-то текст</h1>
        </template>
        <template #card>
          <img
            src="/images/linear.webp"
            class="mx-auto h-full rounded-2xl object-cover object-left-top"
            alt="hero"
            height="3104"
            width="5480"
          />
        </template>
      </ContainerScroll>
    </div>
  </section>
</template>
