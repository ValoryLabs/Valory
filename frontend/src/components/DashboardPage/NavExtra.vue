<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

defineProps<{
  title?: string
  items: {
    title: string
    url: string
    icon?: any
  }[]
}>()
</script>

<template>
  <SidebarGroup class="overflow-x-hidden">
    <SidebarGroupLabel v-if="title">{{ title }}</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in items" :key="item.title">
        <SidebarMenuButton :tooltip="item.title" as-child>
          <a :href="item.url">
            <component :is="item.icon" v-if="item.icon" />
            <span>{{ item.title }}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
