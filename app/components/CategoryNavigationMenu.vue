<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui/components/NavigationMenu.d.vue.ts';
import type { Category } from '~~/types/Categories.ts';

const route = useRoute();

const {
  data: categories
} = await useAsyncData<Category[]>('categories', () => $fetch('/api/categories'), {
  default: () => [],
  immediate: true
});

const activeCategoryId = computed(() => route.name === 'categories-id' ? String(route.params.id) : '');

const categoriesForMenuList = computed<NavigationMenuItem[]>(() => categories.value.map((category: Category) => convertCategoryArrayToMenuItem(category))
);

function convertCategoryArrayToMenuItem(categoryArray: Category): NavigationMenuItem {
  const { categories, icon, id, name } = categoryArray;
  return ({
    children: categories && categories.length ? categories.map(category => convertCategoryArrayToMenuItem(category)) : undefined,
    defaultOpen: categories?.some(category => containsActiveCategory(category)),
    icon: icon,
    label: name.en || name.dk,
    to: categories && categories.length
      ? undefined
      : {
          path: `/categories/${id}`
        }
  });
}

function containsActiveCategory(category: Category): boolean {
  return category.id === activeCategoryId.value || category.categories?.some(child => containsActiveCategory(child)) || false;
}
</script>

<template>
  <UNavigationMenu
    :key="activeCategoryId"
    :items="categoriesForMenuList"
    :ui="{ link: 'p-1.5 overflow-hidden' }"
    class="mt-5"
    highlight
    orientation="vertical"
  />
</template>

<style scoped>

</style>
