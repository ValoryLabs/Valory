<script setup lang="ts">
import { ChevronsUpDown, LogOut } from 'lucide-vue-next'
import { File05, Lock01, Settings02 } from 'untitledui-js/vue'

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

const props = defineProps<{
  user: {
    name: string
    avatar: string
  }
}>()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <div
        class="flex flex-row items-center gap-2 rounded-lg p-2 transition-colors hover:bg-white/10 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <Avatar class="h-8 w-8 rounded-sm">
          <AvatarImage class="bg-black" :src="props.user.avatar" :alt="props.user.name" />
          <AvatarFallback class="rounded-sm"> CN </AvatarFallback>
        </Avatar>
        <div class="flex flex-1 flex-col gap-0 text-left text-sm leading-tight">
          <span class="truncate font-semibold">{{ props.user.name }}</span>
          <span class="truncate text-xs">Logged as</span>
        </div>
        <ChevronsUpDown class="ml-auto size-4" />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="bottom w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
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
</template>
