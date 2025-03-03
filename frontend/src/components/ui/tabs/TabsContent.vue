<script setup lang="ts">
import type { TabsContentProps } from 'radix-vue'
import { TabsContent } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

import { cn } from '@/utils'

const props = defineProps<TabsContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent :class="cn(props.class)" v-bind="delegatedProps">
    <slot />
  </TabsContent>
</template>
