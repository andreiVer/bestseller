import { CATEGORIES } from '~~/types/Categories.ts';

export default defineEventHandler(() => {
  return CATEGORIES.categories.categories;
});
