import { CATEGORIES } from '~~/types/categories.ts';

export default defineEventHandler(() => {
  return CATEGORIES.categories.categories;
});
