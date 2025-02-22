<script lang="ts" setup>
import { useFetch } from '@vueuse/core'
import { openLink } from '@/utils'
import { computed, ref } from 'vue'
import { Button } from '@/components/ui/button'
import Branch from '@/components/icons/Branch.vue'
import Github from '@/components/icons/Socials/Github.vue'
import Star from '@/components/icons/Star.vue'
const repoUrl = ref('https://api.github.com/repos/ValoryApp/Valory')
const contributorsUrl = ref('https://api.github.com/repos/ValoryApp/Valory/contributors')

const { data: repoData } = useFetch(repoUrl).get().json()
const { data: contributorsData } = useFetch(contributorsUrl).json()

const forksCount = computed(() => repoData.value?.forks_count ?? 0)
const starsCount = computed(() => repoData.value?.stargazers_count ?? 0)
const contributorsCount = computed(() => contributorsData.value?.length ?? 0)
</script>

<template>
  <section id="source" class="flex py-16 flex-col items-center justify-center gap-9">
    <Github :size="60" class="drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
    <span class="text-6xl font-extrabold drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
      {{ $t('source.title') }}
    </span>
    <span class="text-center text-lg whitespace-pre-line">
      {{ $t('source.subtitle') }}
    </span>
    <div class="flex gap-2">
      <Button @click="openLink('https://github.com/ValoryApp/Valory')" class="px-6"
        >{{ $t('source.contribute') }} ({{ contributorsCount }})</Button
      >
      <Button
        @click="openLink('https://github.com/ValoryApp/Valory/forks')"
        class="gap-1 bg-[#19191A] px-3 text-[#F2F2F2] border border-white/10"
      >
        <Branch :size="22" />
        {{ forksCount }}
      </Button>
      <Button
        @click="openLink('https://github.com/ValoryApp/Valory/stargazers')"
        class="gap-1 bg-[#19191A] px-3 text-[#F2F2F2] border border-white/10"
      >
        <Star color="#E3B341" :size="22" />
        {{ starsCount }}
      </Button>
    </div>
  </section>
</template>
