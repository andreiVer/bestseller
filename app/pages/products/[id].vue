<script lang="ts" setup>
import type { BreadcrumbItem } from '@nuxt/ui/components/Breadcrumb.vue';
import type { ProductSize, ProductVariant } from '~~/types/Products.ts';

const { getImagesForProductVariant, getNameOfProduct, getProductDetails, getVariantColorsForProduct, getVariantMapForProduct, isLoadingProductDetails, productDetails } = useProducts();
const basketStore = useBasketStore();
const route = useRoute();

const activeImage = ref<string>();
const activeVariantColor = ref<ProductVariant['color']>();
const activeSize = ref<ProductSize>();

getProductDetails(String(route.params.id));

const variantColors = computed<string[] | undefined>(() => productDetails.value ? getVariantColorsForProduct(productDetails.value) : []);

const variantMapForProduct = computed<Map<ProductVariant['color'], ProductVariant> | undefined>(() => productDetails.value ? getVariantMapForProduct(productDetails.value) : undefined);

const activeVariant = computed<ProductVariant | undefined>(() => activeVariantColor.value !== undefined ? variantMapForProduct.value?.get(activeVariantColor.value) : undefined);

const imagesForActiveVariant = computed(() => productDetails.value && activeVariantColor.value !== undefined ? getImagesForProductVariant(productDetails.value, activeVariantColor.value) : undefined);

const shouldShowVariants = computed(() => variantColors.value?.length && variantColors.value.some(color => color !== ''));

const canAddToBasket = computed(() => activeSize.value);

const hasAddedToBasket = computed(() => productDetails.value && basketStore.productBasket.has(productDetails.value.id));

const breadcrumbItems = computed<Partial<BreadcrumbItem>[]>(() => {
  if (!productDetails.value) return [];

  const categoryBreadcrumbs = productDetails.value.categories.map(category => ({
    label: category,
    to: `/categories/${category}`
  }));

  return [{
    label: 'Home',
    to: '/'
  }, ...categoryBreadcrumbs, { label: getNameOfProduct(productDetails.value) }];
});

const shouldShowLoader = computed(() => isLoadingProductDetails.value || !productDetails.value);

function handleClickOnImage(image: string) {
  activeImage.value = image;
}

function handleClickOnVariant(color: ProductVariant['color']) {
  activeVariantColor.value = color;
}

function handleClickOnSize(size: string) {
  activeSize.value = size;
}

function handleAddToBasket() {
  if (!productDetails.value || !activeSize.value) return;

  basketStore.addProductToBasket({
    config: { color: activeVariantColor.value || '', price: productDetails.value.price, size: activeSize.value },
    product: productDetails.value
  });
}

watch(imagesForActiveVariant, (newImages, oldImages) => {
  if (!newImages || newImages === oldImages || newImages.length === 0) {
    return;
  }

  activeImage.value = newImages[0];
}, { immediate: true });

watch(variantColors, (newValue, oldValue) => {
  if (!newValue || newValue === oldValue) {
    return;
  }

  if (variantColors.value && variantColors.value.length > 0) {
    activeVariantColor.value = variantColors.value[0];
  }
}, { immediate: true });
</script>

<template>
  <UProgress
    v-if="shouldShowLoader||!productDetails"
    color="neutral"
  />
  <UContainer
    v-else
  >
    <UBreadcrumb
      :items="breadcrumbItems"
    />
    <div class="grid gap-4  min-w-0 grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div class="grid gap-4 mt-6 min-w-0 sm:grid-cols-[auto_minmax(0,1fr)] ">
        <UPageList
          class="gap-1.5 pb-1 sm:pb-0 order-2 sm:order-1 min-w-0 flex-row sm:flex-col"
        >
          <button
            v-for="image in imagesForActiveVariant"
            :key="image"
            class="w-17 cursor-pointer overflow-hidden rounded-md"
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
          :alt="getNameOfProduct(productDetails)"
          :src="activeImage"
          class="order-1 sm:order-2 w-full min-w-0 max-w-107.5"
        />
      </div>
      <UPageList class="min-w-0">
        <UPageHeader
          :description="`${productDetails.price}DKK`"
          :headline="productDetails.brand"
          :title="getNameOfProduct(productDetails)"
        >
          <StockBadge :stock="activeVariant?.stock" />
        </UPageHeader>
        <fieldset
          v-if="shouldShowVariants"
          class="mt-5"
        >
          <legend>Available variants</legend>
          <UFieldGroup class="flex flex-wrap gap-1">
            <div
              v-for="color in variantColors"
              :key="color"
            >
              <UButton
                v-if="color"
                :active="activeVariantColor === color"
                :label="color"
                active-color="primary"
                active-variant="solid"
                class="capitalize"
                color="neutral"
                variant="subtle"
                @click="handleClickOnVariant(color)"
              />
            </div>
          </UFieldGroup>
        </fieldset>
        <fieldset
          v-if="activeVariant?.size.length"
          class="mt-5"
        >
          <legend>Available Sizes</legend>
          <UFieldGroup class="flex flex-wrap gap-1">
            <UButton
              v-for="size in activeVariant.size"
              :key="size"
              :active="activeSize === size"
              :label="size"
              active-color="primary"
              active-variant="solid"
              color="neutral"
              variant="subtle"
              @click="handleClickOnSize(size)"
            />
          </UFieldGroup>
        </fieldset>
        <UButton
          :disabled="!canAddToBasket"
          :icon="hasAddedToBasket ? 'i-lucide-check' : 'i-lucide-shopping-bag'"
          :label="hasAddedToBasket ? 'Added to basket' : !activeSize ? 'Select a size' : 'Add to basket'"
          block
          class="justify-center mt-5"
          color="neutral"
          size="xl"
          @click="handleAddToBasket"
        />
      </UPageList>
    </div>
  </UContainer>
</template>
