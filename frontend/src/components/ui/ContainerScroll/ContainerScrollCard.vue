<template>
  <div
    :style="{
      transform: `rotateX(${rotate}deg) scale(${scale})`,
      boxShadow:
        '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
    }"
    class="mx-auto -mt-48 h-[30rem] w-full max-w-5xl rounded-[15px] border border-[#f2f2f2]/10 shadow-2xl md:h-[40rem]"
  >
    <div class="size-full overflow-hidden rounded-[15px]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  rotate: Number,
  scale: Number,
})
</script>
