<script lang="ts" setup>
import type { PromotionalSpot } from '~~/types/Promotions.ts';

import { PRICE_SORTING_KEYS, type Product } from '~~/types/Products.ts';

import { usePromotions } from '~/composables/promotions.ts';

type GridItem = {
  id: number
  type: 'product'
  product: Product
} | {
  id: number
  type: 'promotion'
  promotion: PromotionalSpot
};

const { getProducts, hasLoadedProducts, isLoadingProducts, products } = useProducts();
const { getPromotions, promotions } = usePromotions();

const route = useRoute();

getProducts();

getPromotions();

const shouldShowLoader = computed(() => !hasLoadedProducts.value || isLoadingProducts.value);

const visibleProducts = computed(() => {
  let result = [...products.value];

  if (route.query.category) {
    result = result.filter(product => product.categories.includes(String(route.query.category)));
  }

  if (route.query.sort === PRICE_SORTING_KEYS.asc) {
    return result.sort((a, b) => a.price - b.price);
  }

  if (route.query.sort === PRICE_SORTING_KEYS.desc) {
    return result.sort((a, b) => b.price - a.price);
  }

  return result;
});

const gridItems = computed<GridItem[]>(() => {
  const items: GridItem[] = visibleProducts.value.map(product => ({
    id: Number(product.id),
    product,
    type: 'product'
  }));

  [...(promotions.value || [])]?.sort((a, b) => a.position - b.position).forEach((promotion: PromotionalSpot) => {
    if (promotion.position > items.length) {
      items.push({ id: promotion.position, promotion, type: 'promotion' });

      return;
    }

    items.splice(promotion.position, 0, { id: promotion.position, promotion, type: 'promotion' });
  });

  return items;
});
</script>

<template>
  <UProgress
    v-if="shouldShowLoader"
    color="neutral"
    size="xs"
  />
  <UPageGrid
    v-else
    class="
    grid-cols-2 gap-4 grid-flow-row-dense
    lg:grid-cols-3
    xl:grid-cols-4
  "
  >
    <template
      v-for="item in gridItems"
      :key="`${item.type}-${item.id}`"
    >
      <ProductCard
        v-if="item.type === 'product'"
        :product="item.product"
      />
      <PromotionalCard
        v-else
        :promotion="item.promotion"
      />
    </template>
  </UPageGrid>
</template>
