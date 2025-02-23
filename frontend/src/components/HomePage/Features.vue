<script setup lang="ts">
import { hidden } from '@/utils.js'
</script>

<template>
  <section id="features" class="container flex flex-col items-center justify-center gap-10">
    <div class="flex flex-col items-center gap-6">
      <span
        class="inline-block bg-gradient-to-r from-[#5AB2F7] to-[#12CFF3] bg-clip-text text-xs font-bold uppercase text-transparent"
      >
        {{ $t('features.category') }}
      </span>
      <span class="text-center text-2xl font-bold uppercase">
        {{ $t('features.title') }}
      </span>
      <span class="whitespace-pre-line text-center text-base font-normal text-[#CECECE]">
        {{ $t('features.subtitle') }}
      </span>
    </div>
    <div
      class="justify-items-stretch gap-4"
      :class="[
        hidden ? 'flex flex-col' : 'grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)]',
      ]"
    >
      <div
        class="col-span-2 row-span-1 flex w-auto flex-row content-stretch gap-4 self-stretch rounded-2xl border border-white/10"
        style="
          background:
            radial-gradient(
              328.59% 136.88% at 98.5% -23.88%,
              rgba(0, 143, 253, 0.2) 0%,
              rgba(0, 0, 0, 0) 100%
            ),
            radial-gradient(246.95% 120.87% at 15.83% 173.23%, #008ffd 0%, rgba(0, 0, 0, 0) 100%),
            #000a11;
        "
      >
        <div class="flex flex-col content-stretch items-start justify-center gap-5 p-12">
          <span class="whitespace-pre-line text-xl font-medium">
            {{ $t('features.blocks.first.title') }}
          </span>
          <span class="whitespace-pre-line text-base font-normal text-[#CECECE]">
            {{ $t('features.blocks.first.description') }}
          </span>
        </div>
        <img
          v-if="!hidden"
          src="/images/features.webp"
          alt="Features"
          class="h-auto"
          fetchpriority="low"
        />
      </div>
      <div
        class="flex flex-col rounded-2xl border border-white/10 px-12 pt-12"
        :class="[hidden ? 'pb-12' : '']"
      >
        <div class="flex flex-col gap-5 pr-5">
          <span class="text-xl font-medium">
            {{ $t('features.blocks.second.title') }}
          </span>
          <span class="whitespace-pre-line text-base font-normal text-[#CECECE]">
            {{ $t('features.blocks.second.description') }}
          </span>
        </div>
        <img
          v-if="!hidden"
          src="/images/configuration.webp"
          alt="configuration"
          fetchpriority="low"
        />
      </div>
      <div
        class="flex flex-col rounded-2xl border border-white/10 px-12 pt-12"
        :class="[hidden ? 'pb-12' : 'pb-48']"
      >
        <div class="flex flex-col gap-5 pr-5">
          <span class="text-xl font-medium">
            {{ $t('features.blocks.third.title') }}
          </span>
          <span class="whitespace-pre-line text-base font-normal text-[#CECECE]">
            {{ $t('features.blocks.third.description') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
