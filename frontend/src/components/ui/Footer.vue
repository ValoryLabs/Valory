<script setup lang="ts">
import { FOOTER_NAV_PRODUCT_DATA } from '@/data/FooterNav.data'
import { hidden, moveTo, openLink } from "@/utils";
import { Button } from '@/components/ui/button'
import Github from '@/components/icons/Socials/Github.vue'
import Valory from '@/components/icons/Valory.vue'
import Twitch from '@/components/icons/Socials/Twitch.vue'
import Discord from '@/components/icons/Socials/Discord.vue'
import Telegram from '@/components/icons/Socials/Telegram.vue'
import { Hearts } from 'untitledui-js/vue'
import CheckCircle from "@/components/icons/CheckCircle.vue";
</script>
<template>
  <footer class="container m-auto py-16 flex flex-col gap-10">
    <div class="flex justify-between gap-8">
      <div class="flex flex-col gap-4" :class="[hidden ? 'max-w-52' : '']">
        <div @click="moveTo('main')" class="flex flex-row gap-3 items-center">
          <Valory :size="25" />
          <span class="font-valory text-lg hover:text-gray-300 cursor-pointer transition-colors">VALORY</span>
        </div>
        <span class="whitespace-pre-line text-sm font-normal">
          {{ $t('footer.left.description') }}
        </span>
        <span class="text-[#7D7D7D] text-xs">
          © 2023-2025 Valory. {{ $t('footer.copyright') }}
        </span>
        <div class="flex flex-wrap gap-2">
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
            <Hearts color="#FA4454" :size="20" />
          </Button>
          <Button
            aria-label="Status"
            variant="ghost"
            @click="openLink('https://status.valory.su/')"
            class="h-fit w-fit cursor-pointer p-2 hover:bg-[#0F121A]"
          >
            <CheckCircle :size="20" />
          </Button>
        </div>
      </div>
      <div
        class="flex"
        :class="[hidden ? 'flex-col justify-start gap-8' : 'flex-row justify-end gap-32']"
      >
        <div
          v-for="nav in FOOTER_NAV_PRODUCT_DATA"
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
  </footer>
</template>
