<script setup lang="ts">
import ContainerScroll from '@/components/ui/ContainerScroll/ContainerScroll.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PREVIEW_TABS_DATA } from '@/data/PreviewTabs.data'
</script>

<template>
  <section>
    <Tabs default-value="home">
      <div class="mb-16 flex flex-col">
        <ContainerScroll>
          <template #title>
            <TabsList
              class="flex w-full flex-row gap-1 border border-white/10 bg-black/5 backdrop-blur-sm"
            >
              <TabsTrigger
                v-memo="tab"
                v-for="tab in PREVIEW_TABS_DATA"
                :key="tab.value"
                :value="tab.value"
              >
                {{ $t(`previews.${tab.value}`) }}
              </TabsTrigger>
            </TabsList>
          </template>
          <template #card>
            <TabsContent
              v-memo="tab"
              v-for="tab in PREVIEW_TABS_DATA"
              :key="tab.value"
              :value="tab.value"
            >
              <img
                :src="tab.content"
                class="mx-auto h-full object-cover object-left-top"
                alt="hero"
                height="3104"
                width="5480"
              />
            </TabsContent>
          </template>
        </ContainerScroll>
      </div>
    </Tabs>
  </section>
</template>
