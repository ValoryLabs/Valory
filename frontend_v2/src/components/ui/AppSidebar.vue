<script setup lang="ts">
import { type SidebarProps, SidebarTrigger } from '@/components/ui/sidebar'

import NavMain from '@/components/ui/NavMain.vue'
import NavUser from '@/components/ui/NavUser.vue'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

import { NAV_DATA } from '@/data/dashboard/HeaderNav.data'
import Valory from '@/components/icons/Valory.vue'
import NavExtra from '@/components/ui/NavExtra.vue'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})

const data = NAV_DATA
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader
      class="flex flex-row justify-between p-4 group-data-[collapsible=icon]:justify-center"
    >
      <span
        @click="$router.push('/')"
        class="flex w-fit cursor-pointer items-center gap-3 group-data-[collapsible=icon]:hidden"
      >
        <Valory />
        <span class="font-valory group-data-[collapsible=icon]:hidden">VALORY</span>
      </span>
      <SidebarTrigger />
    </SidebarHeader>
    <SidebarContent class="relative text-lg">
      <NavMain title="Menu" :items="data.navMain" />
      <NavExtra class="absolute bottom-0" :items="data.navExtra" :buttons="data.buttons"/>
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
