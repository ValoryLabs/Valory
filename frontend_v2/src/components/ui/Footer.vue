<script setup lang="ts">
import { FOOTER_NAV_PRODUCT_DATA } from "@/data/FooterNav.data";
import { openLink } from "@/utils";
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
    <div class="flex justify-between">
      <div class="flex flex-col gap-8">
        <Valory :size="25"/>
        <span class="font-normal whitespace-pre-line">
          {{ $t('footer.left.description') }}
        </span>
        <div class="flex gap-4">
          <Button @click="openLink('https://github.com/ValoryApp/Valory')" variant="ghost" class="p-2 h-fit cursor-pointer">
            <Github :size="20"/>
          </Button>
          <Button @click="openLink('https://twitch.tv/MAGICXcmd')" variant="ghost" class="p-2 h-fit cursor-pointer">
            <Twitch :size="20"/>
          </Button>
          <Button @click="openLink('https://discord.gg/valory')" variant="ghost" class="p-2 h-fit cursor-pointer">
            <Discord :size="20"/>
          </Button>
          <Button @click="openLink('https://t.me/magicxcmd')" variant="ghost" class="p-2 h-fit cursor-pointer">
            <Telegram :size="20"/>
          </Button>
          <Button @click="openLink('https://www.donationalerts.com/r/haxgun')" variant="ghost" class="p-2 h-fit cursor-pointer">
            <Donation color="#FA4454" :size="20"/>
          </Button>
        </div>
      </div>
      <div class="flex flex-row gap-32 justify-end">
        <div
          v-for="nav in FOOTER_NAV_PRODUCT_DATA"
          :key="nav.title"
          class="flex flex-col gap-2"
        >
          <span class="font-bold text-base">
            {{ $t(`footer.right.sections.${nav.id === 1 ? 'first' : 'second'}.title`) }}
          </span>
          <ul class="flex flex-col gap-2">
            <RouterLink
              v-for="item in nav.items"
              :key="item.name"
              :to="item.url"
              class="font-normal text-base text-[#A9A9A9] hover:text-[#F2F2F2] transition duration-150"
            >
              {{ $t(`footer.right.sections.${nav.id === 1 ? 'first' : 'second'}.items.${item.name}`) }}
            </RouterLink>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex py-10 items-center justify-between border-t border-white/20">
      <span class="text-normal">Valory © {{ $t('footer.copyright') }}</span>
      <span class="text-normal">{{ $t('footer.love') }}</span>
    </div>
  </footer>
</template>
