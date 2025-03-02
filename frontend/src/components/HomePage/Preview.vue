<script setup lang="ts">
import ContainerScroll from '@/components/ui/ContainerScroll/ContainerScroll.vue'
</script>

<template>
  <section>
    <div class="flex flex-col">
      <ContainerScroll>
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
