<script setup lang="ts">
import { FOOTER_NAV_PRODUCT_DATA } from '@/data/FooterNav.data'
import { hidden, openLink } from "@/utils";
import { Button } from '@/components/ui/button'
import Github from '@/components/icons/Socials/Github.vue'
import Valory from '@/components/icons/Valory.vue'
import Twitch from '@/components/icons/Socials/Twitch.vue'
import Discord from '@/components/icons/Socials/Discord.vue'
import Telegram from '@/components/icons/Socials/Telegram.vue'
import Donation from '@/components/icons/Donation.vue'
</script>
<template>
  <footer class="container m-auto flex flex-col gap-10 mt-16">
    <div class="flex justify-between gap-8">
      <div
        class="flex flex-col gap-8"
        :class="[hidden ? 'max-w-52' : '']"
      >
        <Valory :size="25" />
        <span class="font-normal whitespace-pre-line">
          {{ $t('footer.left.description') }}
        </span>
        <div
          class="flex flex-wrap gap-4"
        >
          <Button
            aria-label="Github"
            @click="openLink('https://github.com/ValoryApp/Valory')"
            variant="ghost"
            class="p-2 w-fit h-fit cursor-pointer"
          >
            <Github :size="20" />
          </Button>
          <Button
            aria-label="Twitch"
            @click="openLink('https://twitch.tv/MAGICXcmd')"
            variant="ghost"
            class="p-2 w-fit h-fit cursor-pointer"
          >
            <Twitch :size="20" />
          </Button>
          <Button
            aria-label="Discord"
            @click="openLink('https://discord.gg/valory')"
            variant="ghost"
            class="p-2 w-fit h-fit cursor-pointer"
          >
            <Discord :size="20" />
          </Button>
          <Button
            aria-label="Telegram"
            @click="openLink('https://t.me/magicxcmd')"
            variant="ghost"
            class="p-2 w-fit h-fit cursor-pointer"
          >
            <Telegram :size="20" />
          </Button>
          <Button
            aria-label="Donate"
            @click="openLink('https://www.donationalerts.com/r/haxgun')"
            variant="ghost"
            class="p-2 w-fit h-fit cursor-pointer"
          >
            <Donation color="#FA4454" :size="20" />
          </Button>
        </div>
      </div>
      <div
        class="flex"
        :class="[hidden ? 'flex-col gap-8 justify-start' : 'flex-row gap-32 justify-end']"
      >
        <div
          v-for="nav in FOOTER_NAV_PRODUCT_DATA"
          v-memo="[nav]"
          :key="nav.title"
          class="flex flex-col gap-2"
        >
          <span class="font-bold text-base">
            {{ $t(`footer.right.sections.${nav.id === 1 ? 'first' : 'second'}.title`) }}
          </span>
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="item in nav.items"
              :key="item.name"
              :to="item.url"
              class="font-normal text-base text-[#A9A9A9] hover:text-[#F2F2F2] transition duration-150"
            >
              {{
                $t(`footer.right.sections.${nav.id === 1 ? 'first' : 'second'}.items.${item.name}`)
              }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-3 py-10 items-center justify-between border-t border-white/20">
      <span class="text-normal">Valory © {{ $t('footer.copyright') }}</span>
      <span class="text-normal text-right">{{ $t('footer.love') }}</span>
    </div>
  </footer>
</template>
