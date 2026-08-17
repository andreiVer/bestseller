import type { PromotionalSpot } from '~~/types/Promotions.ts';

const promotions = ref<PromotionalSpot[]>();
const isLoadingPromotions = ref<boolean>(false);
const hasLoadedPromotions = ref<boolean>(false);

export function usePromotions() {
  let abortController: AbortController = new AbortController();

  async function getPromotions() {
    abortController.abort();
    abortController = new AbortController();

    try {
      promotions.value = await $fetch<PromotionalSpot[]>('/api/promotions', {
        method: 'GET',
        signal: abortController.signal
      });

      hasLoadedPromotions.value = true;
    } catch {
      throw createError({ message: 'Could not fetch promotions', statusCode: 404 });
    } finally {
      isLoadingPromotions.value = false;
    }
  }

  return { getPromotions, hasLoadedPromotions, isLoadingPromotions, promotions };
}
