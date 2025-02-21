<script lang="ts" setup>
import type { DropdownMenuCheckboxItemProps } from 'radix-vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ref } from 'vue'
import Language from '@/components/icons/Language.vue'

type Checked = DropdownMenuCheckboxItemProps['checked']

const showStatusBar = ref<Checked>(true)
const showActivityBar = ref<Checked>(false)
const showPanel = ref<Checked>(false)

const { $getLocale, $switchLocale, $getLocales, $t } = useNuxtApp()
const currentLocale = ref($getLocale())

const switchLocale = (newLocale: string) => {
  $switchLocale(newLocale)
  currentLocale.value = newLocale
}
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="px-3">
          <Language :size="16" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent class="w-48">
        <DropdownMenuLabel :label="$t('nav.language')" />
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup v-model="currentLocale">
          <DropdownMenuRadioItem
            v-for="locale in $getLocales()"
            :key="locale.code"
            :value="locale.code"
            :title="locale.displayName"
            :text-value="locale.displayName"
            @select="() => switchLocale(locale.code)"
          >
            {{ locale.displayName }}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
