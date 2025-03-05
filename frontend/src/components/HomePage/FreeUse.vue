<script lang="ts" setup>
import InteractiveHoverButton from '@/components/ui/InteractiveHoverButton.vue'
import router from '@/router'
</script>

<template>
  <section class="container relative mb-20 flex flex-col items-center">
    <div
      class="bg-white/2 container relative z-10 flex flex-col items-center gap-8 overflow-hidden rounded-2xl border border-white/20 px-12 py-24 backdrop-blur-[8px]"
    >
      <span class="text-center text-4xl font-bold">{{ $t('freeuse.title') }}</span>
      <span class="whitespace-pre-line text-center text-xl font-normal">{{
        $t('freeuse.description')
      }}</span>
      <InteractiveHoverButton
        @click="router.push('/dashboard')"
        :text="$t('freeuse.button')"
        size="lg"
        class="w-[11rem] text-base"
      />
      <div
        class="bg-gradient absolute -top-96 left-0 right-0 -z-10 rounded-full p-52 blur-[100px]"
      ></div>
    </div>
    <div
      class="bg-white/2 absolute -bottom-6 w-[80%] rounded-2xl border border-white/10 px-12 py-5 backdrop-blur-[8px]"
    ></div>
    <div
      class="bg-white/2 absolute -bottom-3 w-[90%] rounded-2xl border border-white/15 px-12 py-5 backdrop-blur-[8px]"
    ></div>
  </section>
</template>

<style scoped>
.bg-gradient {
  background-color: rgb(122, 175, 255);
  background-image:
    radial-gradient(at 0% 0%, rgb(122, 175, 255) 0px, transparent 50%),
    radial-gradient(at 68% 47%, rgb(98, 80, 255) 0px, transparent 50%),
    radial-gradient(at 10% 67%, rgb(54, 255, 174) 0px, transparent 50%),
    radial-gradient(at 62% 19%, rgb(153, 98, 255) 0px, transparent 50%),
    radial-gradient(at 70% 29%, rgb(36, 255, 167) 0px, transparent 50%),
    radial-gradient(at 67% 5%, rgb(255, 128, 113) 0px, transparent 50%);
}
</style>
