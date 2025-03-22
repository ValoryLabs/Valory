<script setup lang="ts">
import { Home02 } from 'untitledui-js/vue'

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
</script>

<template>
  <SidebarGroup class="overflow-x-hidden">
    <SidebarGroupLabel>{{ $t('dashboard.sidebar.start.title') }}</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton as-child isActive>
          <a href="#">
            <component :is="Home02" />
            <span>{{ $t('dashboard.sidebar.start.items.intro') }}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
