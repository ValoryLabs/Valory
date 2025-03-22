<script setup lang="ts">
import { Stars02 } from 'untitledui-js/vue'

import Discord from '@/components/icons/Socials/Discord.vue'
import Noise from '@/components/ui/Noise.vue'
import ParticlesBg from '@/components/ui/ParticlesBg.vue'
import Sparkles from '@/components/ui/Sparkles.vue'
import { Button } from '@/components/ui/button'
import useConfetti from '@/composables/useConfetti'
import { hidden } from '@/utils'

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}
const triggerConfetti = () => {
  const duration = 5 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }
  const interval: NodeJS.Timeout = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)
    useConfetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
    useConfetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  }, 250)
}
</script>

<template>
  <section id="main" class="relative flex h-dvh items-center justify-center">
    <div class="relative flex flex-col items-center justify-center gap-9">
      <Sparkles
        :colors="{ first: '#ffffff', second: '#ffffff' }"
        :sparkles-count="5"
        :class="hidden ? 'relative m-auto' : ''"
      >
        <span
          @click="triggerConfetti()"
          class="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-[#7289DA]/25 py-1 pl-3 pr-4 text-sm font-semibold drop-shadow-[0_0_20px_rgba(0,59,255,1)] transition duration-150 hover:bg-[#7289DA]/40"
          v-wave
        >
          <Discord :size="20" />
          {{ $t('main.discord') }}
        </span>
      </Sparkles>
      <span class="whitespace-pre-line text-center text-5xl text-[90px] font-black uppercase">
        {{ $t('main.title') }}
      </span>
      <span class="whitespace-pre-line text-center text-xl font-light">
        {{ $t('main.subtitle') }}
      </span>
      <span class="flex w-full flex-col items-center justify-center gap-3 lg:flex-row">
        <Button @click="$router.push('/dashboard')" class="h-14 min-w-[240px] rounded-xl text-lg">
          {{ $t('main.buttons.first') }}
        </Button>
        <Button variant="alternative" class="h-14 min-w-[240px] rounded-xl text-lg">
          {{ $t('main.buttons.second') }}
          <Stars02 :size="16" />
        </Button>
      </span>
    </div>
    <div
      class="animate-fade absolute -bottom-96 -z-10 h-[90dvh] w-[80dvw] rounded-full bg-[#0046ff] opacity-50 blur-[160px]"
    ></div>
    <div
      class="animate-fade-2 absolute -bottom-96 -z-10 h-[500px] w-full rounded-full bg-[#2e3e75] opacity-50 blur-[160px]"
    ></div>
    <div
      class="animate-fade-2 absolute -bottom-96 -z-10 h-[300px] w-[70dvw] rounded-full bg-[#f2f2f2]/20 blur-[160px]"
    ></div>
    <ParticlesBg
      class="absolute inset-0 -z-10"
      :quantity="100"
      :ease="100"
      color="#FFF"
      :staticity="10"
      refresh
    />
    <Noise />
  </section>
</template>

<style scoped>
.animate-fade {
  animation: fade 10s infinite;
}

.animate-fade-2 {
  animation: fade-2 5s infinite;
}

@keyframes fade {
  0% {
    --tw-blur: blur(160px);
    opacity: 0.6;
  }
  50% {
    --tw-blur: blur(100px);
    opacity: 0.4;
  }
  100% {
    --tw-blur: blur(160px);
    opacity: 0.6;
  }
}

@keyframes fade-2 {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
