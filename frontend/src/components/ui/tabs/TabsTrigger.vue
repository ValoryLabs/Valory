<script setup lang="ts">
import type { TabsTriggerProps } from 'radix-vue'
import { TabsTrigger, useForwardProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

import { cn } from '@/utils'

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-base font-medium text-[#aaaaaa] ring-offset-background transition-all hover:bg-white/10 hover:text-[#f2f2f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/20 data-[state=active]:text-[#f2f2f2] data-[state=active]:shadow-sm',
        props.class,
      )
    "
  >
    <span class="truncate">
      <slot />
    </span>
  </TabsTrigger>
</template>
