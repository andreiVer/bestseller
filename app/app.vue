<script lang="ts" setup>
import CategoryNavigationMenu from '~/components/CategoryNavigationMenu.vue';

const open = ref<boolean>(false);
</script>

<template>
  <UApp>
    <UHeader
      :ui="{ container: 'max-w-none sm:px-4 lg:px-4 xl:px-4 lg:px-4 xl:px-4' }"
      title="Bestseller"
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
      >
        <CategoryNavigationMenu />
      </USidebar>
      <div class="min-w-0 max-w-full flex-1">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
    <UFooter />
  </UApp>
</template>
