<script setup lang="ts">
import { NAV_DATA } from '@/data/HeaderNav.data'
import Twitch from '@/components/icons/Socials/Twitch.vue'
import Valory from '@/components/icons/Valory.vue'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import { hidden } from '@/utils'
import router from '@/router'

const moveTo = (containerId: string) => {
  const container = document.getElementById(containerId)
  if (container) {
    const scrollTopOffset = container.getBoundingClientRect().top + window.scrollY - 25
    window.scrollTo({
      top: scrollTopOffset - 70,
      left: 0,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <header class="sticky top-0 z-10 flex h-20 justify-center bg-black/30 text-sm backdrop-blur-sm">
    <div class="container m-auto flex items-center justify-between">
      <div class="left">
        <ul v-if="!hidden" class="flex items-center justify-between gap-6">
          <li
            v-for="nav in NAV_DATA"
            :key="nav.name"
            @click="moveTo(`${nav.point}`)"
            class="cursor-pointer font-medium text-[#F2F2F2]/80 transition duration-150 hover:text-[#F2F2F2]"
          >
            {{ $t(`nav.${nav.point}`) }}
          </li>
        </ul>
      </div>
      <div class="logo absolute" :class="[hidden ? '' : 'left-1/2']">
        <Valory :size="30" />
      </div>
      <div class="right flex flex-row items-center gap-2">
        <LanguageSwitcher />
        <Button class="text-sm" size="sm" @click="router.push('/dashboard')">
          {{ $t('nav.login') }}
          <Twitch :size="16" color="#000" />
        </Button>
      </div>
    </div>
  </header>
</template>
