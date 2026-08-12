<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui/components/NavigationMenu.d.vue.ts'
import type { Category } from '~~/types/categories.ts'

const {
  data: categories
} = await useAsyncData<Category[]>('categories', () => $fetch('/api/categories'), {
  immediate: true,
  default: () => []
})

const categoriesForMenuList = computed<NavigationMenuItem[]>(() => categories.value.map((category: Category) => convertCategoryArrayToMenuItem(category))
)

function convertCategoryArrayToMenuItem(categoryArray: Category): NavigationMenuItem {
  const { name, id, categories, icon } = categoryArray
  return ({
    label: name.en || name.dk,
    icon: icon,
    to: categories && categories.length
      ? undefined
      : {
          path: `/products/${id}`,
          query: { category: id, minPrice: 12, maxPrice: 15 }
        },
    children: categories && categories.length ? categories.map(category => convertCategoryArrayToMenuItem(category)) : undefined
  })
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
