<script lang="ts" setup>
import { PRICE_SORTING_KEYS } from '~~/types/Products.ts';

const { getProducts, hasLoadedProducts, isLoadingProducts, products } = useProducts();

const shouldShowLoader = computed(() => !hasLoadedProducts.value || isLoadingProducts.value);

getProducts();

const route = useRoute();

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
    grid-cols-2 gap-4
    lg:grid-cols-3
    xl:grid-cols-4
  "
  >
    <ProductCard
      v-for="product in visibleProducts"
      :key="product.id"
      :product="product"
    />
  </UPageGrid>
</template>
