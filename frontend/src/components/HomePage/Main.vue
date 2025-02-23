<script setup lang="ts">
import useConfetti from '@/composables/useConfetti'
import Sparkles from '@/components/ui/Sparkles.vue'
import Discord from '@/components/icons/Socials/Discord.vue'
import Start from '@/components/icons/Start.vue'
import Stars from '@/components/icons/Stars.vue'
import { Button } from '@/components/ui/button'
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
  <section class="relative mt-[-5rem] flex h-dvh items-center justify-between">
    <div
      class="relative flex flex-col items-start justify-center gap-9"
      :class="[hidden ? 'w-full' : '']"
    >
      <Sparkles
        :colors="{ first: '#ffffff', second: '#ffffff' }"
        :sparkles-count="5"
        :class="[hidden ? 'relative m-auto' : '']"
      >
        <span
          @click="triggerConfetti()"
          class="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-[#7289DA]/25 py-1 pl-2 pr-3 text-xs font-semibold drop-shadow-[0_0_20px_rgba(0,59,255,1)] transition duration-150 hover:bg-[#7289DA]/40"
          v-wave
        >
          <Discord :size="16" />
          {{ $t('main.discord') }}
        </span>
      </Sparkles>
      <span
        class="whitespace-pre-line text-5xl font-black uppercase"
        :class="[hidden ? 'w-full text-center' : '']"
      >
        {{ $t('main.title') }}
      </span>
      <span
        class="whitespace-pre-line text-[#CECECE]"
        :class="[hidden ? 'w-full text-center text-lg' : 'text-base']"
      >
        {{ $t('main.subtitle') }}
      </span>
      <span class="flex w-full flex-col gap-3 lg:flex-row">
        <Button :class="[hidden ? 'h-12 text-lg' : 'text-sm']">
          {{ $t('main.buttons.first') }}
          <Start :size="16" color="#000" />
        </Button>
        <Button variant="ghost" :class="[hidden ? 'h-12 text-lg' : 'text-sm']">
          {{ $t('main.buttons.second') }}
          <Stars :size="16" />
        </Button>
      </span>
    </div>
    <div
      v-if="!hidden"
      class="before:pointer-events-none before:absolute before:bottom-[18rem] before:right-[-30px] before:-z-10 before:h-[400px] before:w-[400px] before:rounded-full before:bg-[#A80026]/40 before:blur-[200px] before:content-['']"
    >
      <img src="/images/ValoryLogo3D.webp" height="321" width="314" alt="Valory 3D" fetchpriority="high" />
    </div>
  </section>
</template>
