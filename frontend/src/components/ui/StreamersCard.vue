<script lang="ts" setup>
import { openLink } from '@/utils'
import TwitchVerify from '@/components/icons/TwitchVerify.vue'

interface Props {
  img: string
  username: string
  followers: string
  live: boolean
  verified: boolean
}

defineProps<Props>()
</script>

<template>
  <figure
    @click="openLink(`https://twitch.tv/${username}`)"
    class="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
  >
    <div class="flex flex-row items-center gap-2">
      <div class="relative h-fit">
        <img :src="img" class="rounded-full" width="32" height="32" alt="" fetchpriority="low" />
        <span v-if="live" class="absolute right-0 top-0 rounded-xl bg-green-500 p-1"></span>
      </div>
      <div class="flex flex-col">
        <span class="flex flex-row items-center gap-1 text-sm font-medium dark:text-white">
          @{{ username }}
          <TwitchVerify v-if="verified" :size="18" />
        </span>
        <p class="text-xs font-medium dark:text-white/50">
          {{ followers }} {{ $t('streamers.card.followers') }}
        </p>
      </div>
    </div>
  </figure>
</template>
