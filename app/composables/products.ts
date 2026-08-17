import type { Product, ProductVariant } from '~~/types/Products.ts';

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

      products.value = response.map(product => normalizeProductForVariant(product));
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

  function getNameOfProduct(product: Product): string {
    return product?.name.en || product?.name.dk || 'No name';
  }

  async function getProductDetails(productId: Product['id']) {
    abortControllerForDetailsOfProduct.abort();
    abortControllerForDetailsOfProduct = new AbortController();

    isLoadingProductDetails.value = true;

    try {
      const result = await $fetch<Product>(`/api/products/${productId}`, {
        method: 'GET',
        signal: abortControllerForDetailsOfProduct.signal
      });

      productDetails.value = normalizeProductForVariant(result);
    } catch {
      throw createError({
        statusCode: 404,
        statusMessage: 'Could not fetch product'
      });
    } finally {
      isLoadingProductDetails.value = false;
    }
  }

  function getVariantColorsForProduct(product: Product): string[] | undefined {
    return product?.variant?.map(({ color }) => color);
  }

  function getVariantMapForProduct(product: Product): Map<ProductVariant['color'], ProductVariant> {
    const variantMap = new Map<ProductVariant['color'], ProductVariant>();

    if (product) {
      product.variant?.forEach((variant) => {
        variantMap.set(variant.color, variant);
      });

      // I'm adding it so there is a default. Normally I would expect all of it to be a variant.
      variantMap.set(product?.color, { color: product.color, images: product?.images, size: product.size, stock: product.stock });
    }
    return variantMap;
  }

  function getImagesForProductVariant(product: Product, variant: ProductVariant['color']): ProductVariant['images'] {
    return product?.variant?.find(({ color }) => color === variant)?.images;
  }

  function normalizeProductForVariant(product: Product): Product {
    const { color, images, size, stock, variant } = product;

    if (variant && variant.length > 0) {
      if (variant.some(item => item.color === color)) {
        return { ...product, variant: [...variant, { color: `${color}_1`, images, size, stock }] };
      } else {
        return { ...product, variant: [{ color, images, size, stock }] };
      }
    }

    return ({ ...product, variant: variant && variant.length > 0 ? [...variant, { color, images, size, stock }] : [{ color, images, size, stock }] });
  }

  return {
    getImagesForProductVariant,
    getNameOfProduct,
    getProductDetails,
    getProducts,
    getVariantColorsForProduct,
    getVariantMapForProduct,
    hasLoadedProducts,
    isLoadingProductDetails,
    isLoadingProducts,
    productDetails,
    products
  };
}
