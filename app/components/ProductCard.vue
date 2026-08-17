<script lang="ts" setup>
import type { Product, ProductSize } from '~~/types/Products.ts';

type Props = {
  product: Product
};

const props = defineProps<Props>();

const product = computed<Props['product']>(() => props.product);
const productImage = computed(() => props.product?.images && props.product.images.length ? props.product?.images[0] : undefined);

const productName = computed(() => product.value?.name.en || product.value?.name.dk || '');

function handleClickOnSize(size: ProductSize) {
  // TODO:implemetation - see product page
  console.log(size);
}

function handleAddToBasket() {
  // TODO:implementation-see product page
  console.log('add');
}
</script>

<template>
  <UCard
    :ui="{ body: 'flex flex-col p-0 sm:p-0 lg:p-0 xl:p-0 h-full' }"
    class="h-full"
    variant="soft"
  >
    <NuxtLink
      :to="{ name: 'products-id', params: { id: product.id } }"
      prefetch-on="interaction"
    >
      <div>
        <NuxtImg
          v-if="productImage"
          :src="productImage"
          class="size-full aspect-3/3 object-cover
          transition-transform duration-300
          hover:scale-[1.02]"
          loading="lazy"
          preload
        />
        <UIcon
          v-else
          class="size-8"
          name="i-lucide-image"
        />
      </div>
    </NuxtLink>
    <div class="flex flex-col pt-2 px-4">
      <span class="text-sm">
        {{ product.brand }}
      </span>
      <span class="text-highlighted font-semibold line-clamp-1">
        {{ productName }}
      </span>
      <StockBadge :stock="product.stock" />
    </div>
    <div class="px-4 flex flex-col">
      <span class="text-xs uppercase">Size:</span>
      <div class="flex flex-row flex-wrap gap-1 ">
        <UButton
          v-for="size in product.size"
          :key="size"
          active
          class="cursor-pointer"
          color="neutral"
          size="xs"
          variant="outline"
          @click="handleClickOnSize(size)"
        >
          {{ size }}
        </UButton>
      </div>
    </div>

    <div class="w-full flex gap-2 justify-between items-center mt-auto self-end mb-2 mr-2 pt-5">
      <UButton
        class="ml-4 cursor-pointer"
        color="neutral"
        size="xs"
        @click="handleAddToBasket"
      >
        Add to basket
      </UButton>
      <span class="text-highlighted font-bold">
        {{ product.price }} DKK
      </span>
    </div>
  </UCard>
</template>
