<script lang="ts" setup>
const { getProducts, products } = useProducts();

getProducts();
</script>

<template>
  <UPageGrid
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
