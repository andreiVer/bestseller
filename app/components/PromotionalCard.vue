<script lang="ts" setup>
import type { PromotionalSpot } from '~~/types/Promotions.ts';

type Props = {
  promotion: PromotionalSpot
};
const props = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :class="{
      'col-span-2': props.promotion.type === '2x1' || props.promotion.type === '2x2',
      'row-span-2': props.promotion.type === '2x2'
    }"
    :to="props.promotion.link"
  >
    <UCard
      :ui="{ body: 'h-full p-0 sm:p-0' }"
      class="h-full overflow-hidden"
      variant="soft"
    >
      <NuxtImg
        :alt="props.promotion.imageAltText || props.promotion.image.alt"
        :src="props.promotion.image.imageUrl"
        class="size-full object-cover"
        loading="lazy"
        placeholder
      />
    </UCard>
  </NuxtLink>
</template>

<style scoped>

</style>
