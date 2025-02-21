<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from './index'
import { cn } from '@/utils'
import { Primitive } from 'radix-vue'
import { buttonVariants } from './index'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    v-wave
    :aria-label="ariaLabel"
  >
    <slot />
  </Primitive>
</template>
