<script setup lang="ts">
interface Props {
  size?: number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: '#F2F2F2',
})
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 48 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 19.8347V0L31.9451 40H15.9726L0 19.8347Z" :fill="props.color" />
    <path d="M42.6484 26.6116H27.0051L48 0V19.8347L42.6484 26.6116Z" :fill="props.color" />
  </svg>
</template>
