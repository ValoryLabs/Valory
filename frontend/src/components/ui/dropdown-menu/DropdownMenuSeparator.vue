<script setup lang="ts">
import type { DropdownMenuSeparatorProps } from 'radix-vue'
import { DropdownMenuSeparator } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

import { cn } from '@/utils'

const props = defineProps<
  DropdownMenuSeparatorProps & {
    class?: HTMLAttributes['class']
  }
>()

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DropdownMenuSeparator
    v-bind="delegatedProps"
    :class="cn('-mx-1 my-1 h-px bg-muted', props.class)"
  />
</template>
