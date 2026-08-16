import { PRODUCTS } from '~~/types/products.ts';

export default defineEventHandler((event) => {
  const productId = Number(getRouterParam(event, 'id'));

  const product = PRODUCTS.find(item => item.id === productId);

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    });
  }

  return product;
});
