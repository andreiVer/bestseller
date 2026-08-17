<script lang="ts" setup>
const { getProducts, hasLoadedProducts, isLoadingProducts, products } = useProducts();

const shouldShowLoader = computed(() => !hasLoadedProducts.value || isLoadingProducts.value);

getProducts();
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
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </UPageGrid>
</template>
