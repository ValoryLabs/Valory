<script lang="ts" setup>
import { useFetch } from '@vueuse/core'
import { GitBranch01, Star01 } from 'untitledui-js/vue'
import { computed, ref } from 'vue'

import Github from '@/components/icons/Socials/Github.vue'
import { Button } from '@/components/ui/button'
import { openLink } from '@/utils'

const repoUrl = ref('https://api.github.com/repos/ValoryApp/Valory')
const contributorsUrl = ref('https://api.github.com/repos/ValoryApp/Valory/contributors')

const { data: repoData } = useFetch(repoUrl).get().json()
const { data: contributorsData } = useFetch(contributorsUrl).json()

const forksCount = computed(() => repoData.value?.forks_count ?? 0)
const starsCount = computed(() => repoData.value?.stargazers_count ?? 0)
const contributorsCount = computed(() => contributorsData.value?.length ?? 0)
</script>

<template>
  <section id="source" class="flex flex-col items-center justify-center gap-9 py-16">
    <Github :size="60" class="drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
    <span class="text-center text-6xl font-extrabold drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
      {{ $t('source.title') }}
    </span>
    <span class="whitespace-pre-line text-center text-lg">
      {{ $t('source.subtitle') }}
    </span>
    <div class="flex gap-2">
      <Button @click="openLink('https://github.com/ValoryApp/Valory')" class="px-6"
        >{{ $t('source.contribute') }} ({{ contributorsCount }})</Button
      >
      <Button variant="outline2" @click="openLink('https://github.com/ValoryApp/Valory/forks')">
        <GitBranch01 :size="22" />
        {{ forksCount }}
      </Button>
      <Button
        variant="outline2"
        @click="openLink('https://github.com/ValoryApp/Valory/stargazers')"
      >
        <Star01 color="#E3B341" :size="22" />
        {{ starsCount }}
      </Button>
    </div>
  </section>
</template>
