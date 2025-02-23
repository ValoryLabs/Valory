<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Button } from "@/components/ui/button";
import { openLink } from "@/utils";

defineProps<{
  title?: string
  buttons?: {
    icon: any
    url: string
  }[]
  items: {
    title: string
    url: string
    icon?: any
  }[]
}>()
</script>

<template>
  <SidebarGroup class="overflow-x-hidden">
    <SidebarGroupLabel v-if="title" class="uppercase">{{ title }}</SidebarGroupLabel>
    <SidebarMenu v-for="item in items" :key="item.title">
      <SidebarMenuItem>
        <SidebarMenuButton :tooltip="item.title" as-child>
          <a href="/">
            <component :is="item.icon" v-if="item.icon" />
            <span>{{ item.title }}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
    <div
      v-if="buttons"
      class="
        flex flex-row gap-3 max-w-[16rem] justify-between m-2 mb-0 group-data-[collapsible=icon]:flex-col
        group-data-[collapsible=icon]:items-center
      "
    >
      <Button class="w-8 h-8 bg-white/5" variant="ghost" v-for="button in buttons" :key="button.url" @click="openLink(button.url)">
        <component :size="16" :is="button.icon" v-if="button.icon" />
      </Button>
    </div>
  </SidebarGroup>
</template>
