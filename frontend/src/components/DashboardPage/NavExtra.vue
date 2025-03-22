<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

defineProps<{
  items: {
    title: string
    url: string
    icon?: any
  }[]
}>()
</script>

<template>
  <SidebarGroup class="overflow-x-hidden">
    <SidebarGroupLabel>{{ $t('dashboard.sidebar.extra.title') }}</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in items" :key="item.title">
        <SidebarMenuButton :tooltip="item.title" as-child>
          <a :href="item.url">
            <component :is="item.icon" color="currentColor" v-if="item.icon" />
            <span>{{ $t(item.title) }}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
