<script lang="ts" setup>
const open = ref<boolean>(false)
</script>

<template>
  <UApp>
    <UHeader
      :ui="{ container: 'max-w-none px-4' }"
      toggle-side="left"
    >
      <template #toggle>
        <UButton
          :color="open ? 'primary' : 'neutral'"
          aria-label="Toggle sidebar"
          icon="i-lucide-panel-left"
          variant="ghost"
          @click="open = !open"
        />
      </template>
    </UHeader>
    <div class="flex">
      <USidebar
        v-model:open="open"
        :ui="{
          container: 'h-full',
          inner: 'bg-elevated/25 divide-transparent',
          body: 'py-0'
        }"
        close
        collapsible="icon"
      />

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <UFooter />
  </UApp>
</template>
