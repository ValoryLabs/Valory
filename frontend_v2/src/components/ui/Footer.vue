<script setup lang="ts">
import { FOOTER_NAV_PRODUCT_DATA } from '@/data/FooterNav.data'
import { hidden, openLink } from '@/utils'
import { Button } from '@/components/ui/button'
import Github from '@/components/icons/Socials/Github.vue'
import Valory from '@/components/icons/Valory.vue'
import Twitch from '@/components/icons/Socials/Twitch.vue'
import Discord from '@/components/icons/Socials/Discord.vue'
import Telegram from '@/components/icons/Socials/Telegram.vue'
import Donation from '@/components/icons/Donation.vue'
</script>
<template>
  <footer class="container m-auto mt-16 flex flex-col gap-10">
    <div class="flex justify-between gap-8">
      <div class="flex flex-col gap-8" :class="[hidden ? 'max-w-52' : '']">
        <Valory :size="25" />
        <span class="whitespace-pre-line font-normal">
          {{ $t('footer.left.description') }}
        </span>
        <div class="flex flex-wrap gap-4">
          <Button
            aria-label="Github"
            @click="openLink('https://github.com/ValoryApp/Valory')"
            variant="ghost"
            class="h-fit w-fit cursor-pointer p-2"
          >
            <Github :size="20" />
          </Button>
          <Button
            aria-label="Twitch"
            @click="openLink('https://twitch.tv/MAGICXcmd')"
            variant="ghost"
            class="h-fit w-fit cursor-pointer p-2"
          >
            <Twitch :size="20" />
          </Button>
          <Button
            aria-label="Discord"
            @click="openLink('https://discord.gg/valory')"
            variant="ghost"
            class="h-fit w-fit cursor-pointer p-2"
          >
            <Discord :size="20" />
          </Button>
          <Button
            aria-label="Telegram"
            @click="openLink('https://t.me/magicxcmd')"
            variant="ghost"
            class="h-fit w-fit cursor-pointer p-2"
          >
            <Telegram :size="20" />
          </Button>
          <Button
            aria-label="Donate"
            @click="openLink('https://www.donationalerts.com/r/haxgun')"
            variant="ghost"
            class="h-fit w-fit cursor-pointer p-2"
          >
            <Donation color="#FA4454" :size="20" />
          </Button>
        </div>
      </div>
      <div
        class="flex"
        :class="[hidden ? 'flex-col justify-start gap-8' : 'flex-row justify-end gap-32']"
      >
        <div
          v-for="nav in FOOTER_NAV_PRODUCT_DATA"
          v-memo="[nav]"
          :key="nav.title"
          class="flex flex-col gap-2"
        >
          <span class="text-base font-bold">
            {{ $t(`footer.right.sections.${nav.id === 1 ? 'first' : 'second'}.title`) }}
          </span>
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="item in nav.items"
              :key="item.name"
              :to="item.url"
              class="text-base font-normal text-[#A9A9A9] transition duration-150 hover:text-[#F2F2F2]"
            >
              {{
                $t(`footer.right.sections.${nav.id === 1 ? 'first' : 'second'}.items.${item.name}`)
              }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between gap-3 border-t border-white/20 py-10">
      <span class="text-normal">Valory © {{ $t('footer.copyright') }}</span>
      <span class="text-normal text-right">{{ $t('footer.love') }}</span>
    </div>
  </footer>
</template>
