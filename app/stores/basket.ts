import type { ProductBasketOptions } from '~~/types/ProductBasket.ts';
import type { Product, ProductConfiguration } from '~~/types/Products.ts';

export const useBasketStore = defineStore('basketStore', () => {
  const productBasket = ref<Map<Product['id'], ProductConfiguration>>(new Map());

  function addProductToBasket(options: ProductBasketOptions) {
    const { config, product } = options;

    if (productBasket.value.has(product.id)) return;

    productBasket.value.set(product.id, config);
  }

  function clearBasket() {
    productBasket.value.clear();
  }

  function removeProductFromBasket(productId: Product['id']) {
    if (!productBasket.value.has(productId)) return;

    productBasket.value.delete(productId);
  }

  function updateBasket(options: ProductBasketOptions) {
    const { config, product } = options;

    productBasket.value.set(product.id, config);
  }
  return {
    addProductToBasket,
    clearBasket,
    productBasket,
    removeProductFromBasket,
    updateBasket
  };
});
