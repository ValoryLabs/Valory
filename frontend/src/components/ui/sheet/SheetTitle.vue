<script setup lang="ts">
import type { DialogTitleProps } from 'radix-vue'
import { DialogTitle } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

import { cn } from '@/utils'

const props = defineProps<DialogTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DialogTitle
    :class="cn('text-lg font-semibold text-foreground', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogTitle>
</template>
