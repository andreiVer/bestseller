export type Category = {
  id: string
  name: CategoryName
  parent_category_id: string
  level: number
  categories: Category[]
  icon?: string
};

export type CategoryName = {
  [key: string]: string
};

export const CATEGORIES = {
  categories: {
    categories: [
      {
        categories: [
          {
            categories: [
              {
                id: 'men_newin',
                level: 3,
                name: {
                  dk: 'Nyheder',
                  en: 'New In'
                },
                parent_category_id: 'men'
              },
              {
                categories: [
                  {
                    id: 'men_jeans',
                    level: 4,
                    name: {
                      dk: 'Jeans',
                      en: 'Jeans'
                    },
                    parent_category_id: 'men_clothes'
                  },
                  {
                    categories: [
                      {
                        id: 'men_shirts_ls',
                        level: 5,
                        name: {
                          dk: 'Skjorter: Lange Ærmer',
                          en: 'Shirts: Long Sleeves'
                        },
                        parent_category_id: 'men_shirts'
                      },
                      {
                        id: 'men_shirts_ss',
                        level: 5,
                        name: {
                          dk: 'Skjorter: Korte Ærmer',
                          en: 'Shirts: Short Sleeves'
                        },
                        parent_category_id: 'men_shirts'
                      }
                    ],
                    id: 'men_shirts',
                    level: 4,
                    name: {
                      dk: 'Skjorter',
                      en: 'Shirts'
                    },
                    parent_category_id: 'men_clothes'
                  },
                  {
                    id: 'men_jackets',
                    level: 4,
                    name: {
                      dk: 'Jakker',
                      en: 'Jackets'
                    },
                    parent_category_id: 'men_clothes'
                  },
                  {
                    id: 'men_trousers',
                    level: 4,
                    name: {
                      dk: 'Bukser',
                      en: 'Trousers'
                    },
                    parent_category_id: 'men_clothes'
                  },
                  {
                    id: 'men_sweatshirts',
                    level: 4,
                    name: {
                      dk: 'Sweatshirts',
                      en: 'Sweatshirts'
                    },
                    parent_category_id: 'men_clothes'
                  },
                  {
                    id: 'men_tshirts',
                    level: 4,
                    name: {
                      dk: 'T-shirts',
                      en: 'T-shirts'
                    },
                    parent_category_id: 'men_clothes'
                  },
                  {
                    id: 'men_suit',
                    level: 4,
                    name: {
                      dk: 'Jakkesæt',
                      en: 'Suits'
                    },
                    parent_category_id: 'men_clothes'
                  }
                ],
                id: 'men_clothes',
                level: 3,
                name: {
                  dk: 'Tøj',
                  en: 'Clothes'
                },
                parent_category_id: 'men'
              },
              {
                categories: [
                  {
                    id: 'last_week_sales',
                    level: 4,
                    name: {
                      dk: 'Udsalg: Sidste Uge',
                      en: 'Sales: Last Week'
                    },
                    parent_category_id: 'men_sales'
                  },
                  {
                    id: 'last_month_sales',
                    level: 4,
                    name: {
                      dk: 'Udsalg: Sidste Måned',
                      en: 'Sales: Last Month'
                    },
                    parent_category_id: 'men_sales'
                  }
                ],
                id: 'men_sales',
                level: 3,
                name: {
                  dk: 'Udsalg',
                  en: 'Sales'
                },
                parent_category_id: 'men'
              }
            ],
            id: 'men',
            level: 2,
            name: {
              dk: 'Mænd',
              en: 'Men'
            },
            parent_category_id: 'adults'
          },
          {
            categories: [
              {
                id: 'women_newin',
                level: 3,
                name: {
                  dk: 'Nyheder',
                  en: 'New In'
                },
                parent_category_id: 'women'
              },
              {
                id: 'women_clothes',
                level: 3,
                name: {
                  dk: 'Tøj',
                  en: 'Clothes'
                },
                parent_category_id: 'women'
              },
              {
                categories: [
                  {
                    id: 'women_trend',
                    level: 4,
                    name: {
                      dk: 'Trending',
                      en: 'Trending'
                    },
                    parent_category_id: 'women_sales'
                  },
                  {
                    id: 'women_last_week_sales',
                    level: 4,
                    name: {
                      dk: 'Udsalg: Sidste Uge',
                      en: 'Sales: Last Week'
                    },
                    parent_category_id: 'women_sales'
                  },
                  {
                    id: 'inspiration',
                    level: 4,
                    name: {
                      dk: 'Inspiration',
                      en: 'Inspiration'
                    },
                    parent_category_id: 'women_sales'
                  }
                ],
                id: 'women_sales',
                level: 3,
                name: {
                  dk: 'Udsalg',
                  en: 'Sales'
                },
                parent_category_id: 'women'
              }
            ],
            id: 'women',
            level: 2,
            name: {
              dk: 'Kvinder',
              en: 'Women'
            },
            parent_category_id: 'adults'
          }
        ],
        icon: 'i-lucide-users',
        id: 'adults',
        level: 1,
        name: {
          dk: 'Voksen',
          en: 'Adults'
        },
        parent_category_id: 'root'
      },
      {
        icon: 'i-lucide-baby',
        id: 'kids',
        level: 1,
        name: {
          dk: 'Børn',
          en: 'Kids'
        },
        parent_category_id: 'root'
      }
    ],
    id: 'root',
    level: 0,
    name: {
      dk: 'Rod',
      en: 'Root'
    },
    parent_category_id: ''
  }
};
