<script lang="ts" setup>
import type { BadgeProps } from '@nuxt/ui/components/Badge.vue';

import { type ProductVariant, UNLIMITED_STOCK } from '~~/types/Products.ts';

type Props = {
  stock?: ProductVariant['stock']
};
const props = defineProps<Props>();

const productStock = computed<Partial<BadgeProps>>(() => {
  if (!props?.stock) {
    return { color: 'error', label: `Out of stock` };
  }

  if (typeof props.stock === 'string' && props.stock === UNLIMITED_STOCK) {
    return {
      color: 'success',
      label: 'in stock'
    };
  }

  if (typeof props?.stock === 'number') {
    if (props.stock >= 50) {
      return { color: 'success', label: `In stock` };
    }
    if (props.stock < 50 && props.stock > 0) {
      return { color: 'warning', label: `Only ${props.stock} in stock` };
    }
  }

  return { color: 'error', label: `Out of stock` };
});
</script>

<template>
  <UBadge
    :color="productStock.color"
    :label="productStock.label"
    class="w-fit my-2"
    variant="outline"
  />
</template>
