import type { Product } from '~~/types/Products.ts';

const products = ref<Product[]>([]);
const hasLoadedProducts = ref<boolean>(false);
const isLoadingProducts = ref<boolean>(false);
const isLoadingProductDetails = ref<boolean>(false);
const productDetails = ref<Product>();

export function useProducts() {
  let abortController = new AbortController();
  let abortControllerForDetailsOfProduct = new AbortController();

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
    } catch {
      throw createError({
        statusCode: 404,
        statusMessage: 'Could not fetch products'
      });
    } finally {
      isLoadingProducts.value = false;
    }
  }

  function getNameOfProduct(productId: Product['id']): string {
    const product = products.value.find(product => product.id === productId);

    return product?.name.en || product?.name.dk || 'No name';
  }

  async function getProductDetails(productId: Product['id']) {
    abortControllerForDetailsOfProduct.abort();
    abortControllerForDetailsOfProduct = new AbortController();

    isLoadingProductDetails.value = true;

    try {
      const response = await $fetch<Product>(`/api/products/${productId}`, {
        method: 'GET',
        signal: abortControllerForDetailsOfProduct.signal
      });

      productDetails.value = response;
    } catch {
      throw createError({
        statusCode: 404,
        statusMessage: 'Could not fetch product'
      });
    } finally {
      isLoadingProductDetails.value = false;
    }
  }

  return {
    getNameOfProduct,
    getProductDetails,
    getProducts,
    hasLoadedProducts,
    isLoadingProductDetails,
    isLoadingProducts,
    productDetails,
    products
  };
}
