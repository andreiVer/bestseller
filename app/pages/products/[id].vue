<script lang="ts" setup>
import type { BreadcrumbItem } from '@nuxt/ui/components/Breadcrumb.vue';

const { getNameOfProduct, getProductDetails, isLoadingProductDetails, productDetails } = useProducts();

const route = useRoute();

const activeImage = ref<string>();

getProductDetails(String(route.params.id));

const breadcrumbItems = computed<Partial<BreadcrumbItem>[]>(() => {
  if (!productDetails.value) return [];

  const categoryBreadcrumbs = productDetails.value.categories.map(category => ({
    label: category,
    to: `/categories/${category}`
  }));

  return [{
    label: 'Home',
    to: '/'
  }, ...categoryBreadcrumbs, { label: getNameOfProduct(productDetails.value.id) }];
});

const shouldShowLoader = computed(() => isLoadingProductDetails.value || !productDetails.value);

function handleClickOnImage(image: string) {
  activeImage.value = String(image);
}

watch(() => productDetails.value?.images, (newImages, oldImages) => {
  if (!newImages || newImages === oldImages || newImages.length === 0) {
    return;
  }

  activeImage.value = newImages[0];
});
</script>

<template>
  <UProgress
    v-if="shouldShowLoader"
    color="neutral"
  />
  <UContainer v-else>
    <UBreadcrumb :items="breadcrumbItems" />
    <div class="grid gap-4 grid-cols-[auto_1fr] mt-6 items-start">
      <UPageList
        class="gap-1.5"
      >
        <button
          v-for="image in productDetails!.images"
          :key="image"
          class="  w-17 cursor-pointer overflow-hidden rounded-md"
          type="button"
          @click="handleClickOnImage(image)"
        >
          <NuxtImg
            :src="image"
            class="w-full max-h-175 object-contain"
            height="1200"
            preload
            sizes="100vw sm:75vw lg:55vw"
            width="900"
          />
        </button>
      </UPageList>
      <NuxtImg
        v-if="activeImage"
        :key="activeImage"
        :alt="getNameOfProduct(productDetails!.id)"
        :src="activeImage"
        class="w-107.5"
      />
    </div>
  </UContainer>
</template>
