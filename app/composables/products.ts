import type { Product } from '~~/types/products.ts';

const products = ref<Product[]>();
const hasProductsLoaded = ref<boolean>(false);
const isLoadingProducts = ref<boolean>(false);

export function useProducts() {
  let abortController = new AbortController();

  async function getProducts() {
    abortController.abort();
    abortController = new AbortController();

    try {
      const response = await $fetch<Product[]>('/api/products', {
        method: 'GET',
        signal: abortController.signal
      });
      console.log(response);
      products.value = response;
    } catch (err) {
      console.log(err);
    }
  }

  return {
    getProducts,
    hasProductsLoaded,
    isLoadingProducts,
    products
  };
}
