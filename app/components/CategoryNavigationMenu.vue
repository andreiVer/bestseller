<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui/components/NavigationMenu.d.vue.ts';
import type { Category } from '~~/types/categories.ts';

const {
  data: categories
} = await useAsyncData<Category[]>('categories', () => $fetch('/api/categories'), {
  default: () => [],
  immediate: true
});

const categoriesForMenuList = computed<NavigationMenuItem[]>(() => categories.value.map((category: Category) => convertCategoryArrayToMenuItem(category))
);

function convertCategoryArrayToMenuItem(categoryArray: Category): NavigationMenuItem {
  const { categories, icon, id, name } = categoryArray;
  return ({
    children: categories && categories.length ? categories.map(category => convertCategoryArrayToMenuItem(category)) : undefined,
    icon: icon,
    label: name.en || name.dk,
    to: categories && categories.length
      ? undefined
      : {
          path: `/categories/${id}`,
          query: { category: id }
        }
  });
}
</script>

<template>
  <UNavigationMenu
    :items="categoriesForMenuList"
    :ui="{ link: 'p-1.5 overflow-hidden' }"
    orientation="vertical"
  />
</template>

<style scoped>

</style>
