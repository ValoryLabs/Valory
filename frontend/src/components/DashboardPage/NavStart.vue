<script setup lang="ts">
import { Home02 } from 'untitledui-js/vue'

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

defineProps<{
  title?: string
}>()
</script>

<template>
  <SidebarGroup class="overflow-x-hidden">
    <SidebarGroupLabel v-if="title">{{ title }}</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton as-child>
          <a href="#">
            <component :is="Home02" />
            <span>Introduction</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
