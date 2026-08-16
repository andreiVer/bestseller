import type { Product } from '~~/types/products.ts';

const products = ref<Product[]>([]);
const hasLoadedProducts = ref<boolean>(false);
const isLoadingProducts = ref<boolean>(false);

export function useProducts() {
  let abortController = new AbortController();

  async function getProducts() {
    abortController.abort();
    abortController = new AbortController();

    isLoadingProducts.value = true;
    try {
      const response = await $fetch<Product[]>('/api/products', {
        method: 'GET',
        signal: abortController.signal
      });
      console.log(response);
      products.value = response;
      hasLoadedProducts.value = true;
    } catch (err) {
      console.log(err);
    } finally {
      isLoadingProducts.value = false;
    }
  }

  return {
    getProducts,
    hasLoadedProducts,
    isLoadingProducts,
    products
  };
}
