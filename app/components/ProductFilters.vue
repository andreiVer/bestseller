<script lang="ts" setup>
import { PRICE_SORTING_KEYS } from '~~/types/Products.ts';

type CategoryOption = {
  label: string
  value: string
};

const route = useRoute();
const router = useRouter();

const { categoryMapById, getCategories } = useCategories();

const priceSortingOptions = [
  { label: 'Price: Low to High', value: PRICE_SORTING_KEYS.asc },
  { label: 'Price: High to Low', value: PRICE_SORTING_KEYS.desc }
];

getCategories();

const selectedSortCategory = ref<string>(String(route.query.category || 'adults'));

const selectedSortPrice = ref<string>(String(route.query.sort || PRICE_SORTING_KEYS.asc));

const categorySortOptions = computed<CategoryOption[]>(() => Array.from(categoryMapById.entries()).map(([id, category]) => ({
  label: category.name.en || category.name.dk || '',
  value: id
})));

watch([selectedSortCategory, selectedSortPrice], ([newCategory, newPrice], [oldCategory, oldPrice]) => {
  if (newCategory === oldCategory && newPrice === oldPrice) {
    return;
  }

  router.replace({
    query: {
      ...route.query,
      category: newCategory,
      sort: newPrice
    }
  });
});
</script>

<template>
  <div class="flex gap-2">
    <USelect
      v-model="selectedSortCategory"
      :items="categorySortOptions"
      :ui="{ content: 'w-fit min-w-fit' }"
      class="w-fit"
      virtualize
    />
    <USelect
      v-model="selectedSortPrice"
      :items="priceSortingOptions"
      :ui="{ content: 'w-fit min-w-fit' }"
      class="w-fit"
    />
  </div>
</template>
