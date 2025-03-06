<script setup lang="ts">
import NavExtra from '@/components/DashboardPage/NavExtra.vue'
import NavFooter from '@/components/DashboardPage/NavFooter.vue'
import NavMain from '@/components/DashboardPage/NavMain.vue'
import NavStart from '@/components/DashboardPage/NavStart.vue'
import { type SidebarProps } from '@/components/ui/sidebar'
import { Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar'
import { NAV_DATA } from '@/data/dashboard/HeaderNav.data'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})

const data = NAV_DATA
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarContent class="text-lg">
      <NavStart title="Get started" />
      <NavMain title="Features" :items="data.navMain" />
      <NavExtra title="Extra" :items="data.navExtra" :buttons="data.buttons" />
    </SidebarContent>
    <SidebarFooter>
      <NavFooter :user="data.user" :buttons="data.buttons" />
    </SidebarFooter>
  </Sidebar>
</template>
