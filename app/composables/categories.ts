import type { Category } from '~~/types/Categories.ts';

const categories = ref<Category[]>();
const hasLoadedCategories = ref<boolean>(false);
const isLoadingCategories = ref<boolean>(false);
const categoryMapById = shallowReactive(new Map<Category['id'], Category>());

export function useCategories() {
  let abortController = new AbortController();

  async function getCategories() {
    abortController.abort();
    abortController = new AbortController();

    try {
      isLoadingCategories.value = true;

      const response = await $fetch<Category[]>('/api/categories', {
        method: 'GET',
        signal: abortController.signal
      });

      categories.value = response;
      hasLoadedCategories.value = true;

      getCategoryMapById(categories.value);
    } catch {
      throw createError({
        statusCode: 404,
        statusMessage: 'Could not fetch categories'
      });
    } finally {
      isLoadingCategories.value = false;
    }
  }

  function getCategoryMapById(items: Category[]) {
    for (const category of items) {
      categoryMapById.set(category.id, category);
      if (category.categories) {
        getCategoryMapById(category.categories);
      }
    }
  }

  return { categories, categoryMapById, getCategories, hasLoadedCategories, isLoadingCategories };
}
