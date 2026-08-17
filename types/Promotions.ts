export type PromotionalSpotType = '2x2' | '2x1' | '1x1';

export type PromotionalSpot = {
  _alias: 'promotionWidget'
  image: {
    alt: string
    aspectRatio: string
    focalPoint: {
      x: number
      y: number
    }
    imageUrl: string
    maxWidth: string
  }
  imageAltText: string
  link: string
  position: number
  type: PromotionalSpotType
};

export const PROMOTIONAL_SPOTS = [
  {
    _alias: 'promotionWidget',
    image: {
      alt: 'w47upd1-promo-customerclub-dayz4-da-dk.jpg',
      aspectRatio: '606:863',
      focalPoint: {
        x: 0.5,
        y: 0.5
      },
      imageUrl: 'https://images.jackjones.com/media/4lriv153/w47upd1-promo-sweats-dayz4-da-dk.jpg?v=0c9d0aff-f07a-4448-99a3-b514e9b619d6',
      maxWidth: '606'
    },
    imageAltText: '',
    link: '#',
    position: 16,
    type: '2x2'
  },
  {
    _alias: 'promotionWidget',
    image: {
      alt: 'w47upd1-promo-attack-dayz4-da-dk.jpg',
      aspectRatio: '606:863',
      focalPoint: {
        x: 0.5,
        y: 0.5
      },
      imageUrl: 'https://images.veromoda.com/media/m5niwwxs/w46_bw_jackets-1-da-dk.jpg?v=53784ae0-0670-4b57-bd78-d85636cb50a0',
      maxWidth: '606'
    },
    imageAltText: '',
    link: '#',
    position: 11,
    type: '2x1'
  },
  {
    _alias: 'promotionWidget',
    image: {
      alt: 'w47upd1-promo-saleouter-dayz4-da-dk.jpg',
      aspectRatio: '606:863',
      focalPoint: {
        x: 0.5,
        y: 0.5
      },
      imageUrl: 'https://images.veromoda.com/media/mk4eb43y/w46_bw_jackets-2-da-dk.jpg?v=6ca21499-92f5-4d2e-86bb-cafd282b2c51',
      maxWidth: '606'
    },
    imageAltText: '',
    link: '#',
    position: 3,
    type: '1x1'
  }
];
