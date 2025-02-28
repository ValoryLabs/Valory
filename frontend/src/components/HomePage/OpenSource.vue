<script lang="ts" setup>
import { Star01 } from 'untitledui-js/vue'

import Github from '@/components/icons/Socials/Github.vue'
import { Button } from '@/components/ui/button'
import { openLink } from '@/utils'
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
      <Button @click="openLink('https://github.com/ValoryApp/Valory')" class="px-6">
        <Github :size="16" color="#000" />
        {{ $t('source.contribute') }}
      </Button>
      <Button
        variant="outline2"
        @click="openLink('https://github.com/ValoryApp/Valory/stargazers')"
      >
        <Star01 color="#E3B341" :size="16" />
        {{ $t('source.star') }}
      </Button>
    </div>
  </section>
</template>
