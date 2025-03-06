<script setup lang="ts">
import { SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar'
import { openLink } from '@/utils'

const props = defineProps<{
  buttons?: {
    icon: any
    url: string
  }[]
}>()
</script>

<template>
  <SidebarMenu>
    <div
      v-if="props.buttons"
      class="mx-2 mb-0 flex max-w-[16rem] flex-row justify-between gap-3 group-data-[collapsible=icon]:m-0 group-data-[collapsible=icon]:mb-3 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-start"
    >
      <SidebarMenuButton
        class="h-8 w-8 bg-white/5"
        v-for="button in props.buttons"
        :key="button.url"
        @click="openLink(button.url)"
        :tooltip="button.title"
      >
        <component :size="16" :is="button.icon" color="currentColor" v-if="button.icon" />
      </SidebarMenuButton>
    </div>
  </SidebarMenu>
</template>
