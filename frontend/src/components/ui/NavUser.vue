<script setup lang="ts">
import { ChevronsUpDown, LogOut } from 'lucide-vue-next'
import { File05, Globe04, Lock01, Settings02 } from 'untitledui-js/vue'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { openLink } from '@/utils'

const props = defineProps<{
  user: {
    name: string
    avatar: string
  }
  buttons?: {
    icon: any
    url: string
  }[]
}>()

const { isMobile } = useSidebar()
</script>

<template>
  <SidebarMenu>
    <div
      v-if="buttons"
      class="mx-2 mb-0 flex max-w-[16rem] flex-row justify-between gap-3 group-data-[collapsible=icon]:m-0 group-data-[collapsible=icon]:mb-3 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-start"
    >
      <SidebarMenuButton
        class="h-8 w-8 bg-white/5"
        v-for="button in buttons"
        :key="button.url"
        @click="openLink(button.url)"
        :tooltip="button.title"
      >
        <component :size="16" :is="button.icon" v-if="button.icon" />
      </SidebarMenuButton>
    </div>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar class="h-8 w-8 rounded-[10px]">
              <AvatarImage class="bg-black" :src="props.user.avatar" :alt="props.user.name" />
              <AvatarFallback class="rounded-[10px]"> CN </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">{{ props.user.name }}</span>
              <span class="truncate text-xs">Logged as</span>
            </div>
            <ChevronsUpDown class="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'top'"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar class="h-8 w-8 rounded-lg">
                <AvatarImage :src="props.user.avatar" :alt="props.user.name" />
                <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ props.user.name }}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Settings02 />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Globe04 />
              Language
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Lock01 />
              Privacy Policy
            </DropdownMenuItem>
            <DropdownMenuItem>
              <File05 />
              Terms of Service
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
