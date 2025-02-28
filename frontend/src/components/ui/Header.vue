<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { computed, ref } from 'vue'

import Github from '@/components/icons/Socials/Github.vue'
import Twitch from '@/components/icons/Socials/Twitch.vue'
import Valory from '@/components/icons/Valory.vue'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import { Button } from '@/components/ui/button'
import { NAV_DATA } from '@/data/HeaderNav.data'
import router from '@/router'
import { hidden, openLink } from '@/utils'
import { moveTo } from '@/utils'

const repoUrl = ref('https://api.github.com/repos/ValoryApp/Valory')

const { data: repoData } = useFetch(repoUrl).get().json()

const starsCount = computed(() => repoData.value?.stargazers_count ?? 0)
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
        <Button
          class="rounded-full border border-transparent bg-transparent text-white opacity-50 transition hover:border-white/10 hover:bg-white/10 hover:opacity-100"
          @click="openLink('https://github.com/ValoryApp/Valory')"
        >
          <Github :size="16" />
          {{ starsCount }}
        </Button>
        <LanguageSwitcher />
        <Button class="text-sm" size="sm" @click="router.push('/dashboard')">
          {{ $t('nav.login') }}
          <Twitch :size="16" color="#000" />
        </Button>
      </div>
    </div>
  </header>
</template>
