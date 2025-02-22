<script setup lang="ts">
import { NAV_DATA } from '@/data/HeaderNav.data'
import Twitch from '@/components/icons/Socials/Twitch.vue'
import Valory from '@/components/icons/Valory.vue'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import { hidden } from "@/utils";
import router from "@/router";

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
  <header class="text-sm sticky top-0 bg-black/30 h-20 backdrop-blur-sm z-10 flex justify-center">
    <div class="container flex m-auto justify-between items-center">
      <div class="left">
        <ul v-if="!hidden" class="flex justify-between items-center gap-6">
          <li
            v-for="nav in NAV_DATA"
            :key="nav.name"
            @click="moveTo(`${nav.point}`)"
            class="cursor-pointer font-medium text-[#F2F2F2]/80 hover:text-[#F2F2F2] transition duration-150"
          >
            {{ $t(`nav.${nav.point}`) }}
          </li>
        </ul>
      </div>
      <div
        class="logo absolute"
        :class="[hidden ? '' : 'left-1/2']"
      >
        <Valory :size="30" />
      </div>
      <div class="right flex flex-row gap-2 items-center">
        <LanguageSwitcher />
        <Button class="text-sm" size="sm" @click="router.push('/dashboard')">
          {{ $t('nav.login') }}
          <Twitch :size="16" color="#000" />
        </Button>
      </div>
    </div>
  </header>
</template>
