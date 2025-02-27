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
    viewBox="0 0 33 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.5 0.890631C32.5 0.605881 32.1982 0.535756 32.0792 0.748256C28.2224 7.79688 25.9932 11.7834 24.068 15.483H0.930992C0.631367 15.483 0.510242 15.9101 0.750367 16.0525C10.3299 20.3238 24.1849 26.8029 31.956 30.3601C32.1366 30.4324 32.4979 30.2178 32.4979 30.0754V0.890631H32.5Z"
      :fill="props.color"
    />
  </svg>
</template>
