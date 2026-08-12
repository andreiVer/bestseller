export type Category = {
  id: string
  name: CategoryName
  parent_category_id: string
  level: number
  categories: Category[]
  icon?: string
}

export type CategoryName = {
  [key: string]: string
}

export const CATEGORIES = {
  categories: {
    id: 'root',
    parent_category_id: '',
    level: 0,
    name: {
      en: 'Root',
      dk: 'Rod'
    },
    categories: [
      {
        id: 'adults',
        parent_category_id: 'root',
        icon: 'i-lucide-users',
        level: 1,
        name: {
          en: 'Adults',
          dk: 'Voksen'
        },
        categories: [
          {
            id: 'men',
            parent_category_id: 'adults',
            level: 2,
            name: {
              en: 'Men',
              dk: 'Mænd'
            },
            categories: [
              {
                id: 'men_newin',
                parent_category_id: 'men',
                level: 3,
                name: {
                  en: 'New In',
                  dk: 'Nyheder'
                }
              },
              {
                id: 'men_clothes',
                parent_category_id: 'men',
                level: 3,
                name: {
                  en: 'Clothes',
                  dk: 'Tøj'
                },
                categories: [
                  {
                    id: 'men_jeans',
                    parent_category_id: 'men_clothes',
                    level: 4,
                    name: {
                      en: 'Jeans',
                      dk: 'Jeans'
                    }
                  },
                  {
                    id: 'men_shirts',
                    parent_category_id: 'men_clothes',
                    level: 4,
                    name: {
                      en: 'Shirts',
                      dk: 'Skjorter'
                    },
                    categories: [
                      {
                        id: 'men_shirts_ls',
                        parent_category_id: 'men_shirts',
                        level: 5,
                        name: {
                          en: 'Shirts: Long Sleeves',
                          dk: 'Skjorter: Lange Ærmer'
                        }
                      },
                      {
                        id: 'men_shirts_ss',
                        parent_category_id: 'men_shirts',
                        level: 5,
                        name: {
                          en: 'Shirts: Short Sleeves',
                          dk: 'Skjorter: Korte Ærmer'
                        }
                      }
                    ]
                  },
                  {
                    id: 'men_jackets',
                    parent_category_id: 'men_clothes',
                    level: 4,
                    name: {
                      en: 'Jackets',
                      dk: 'Jakker'
                    }
                  },
                  {
                    id: 'men_trousers',
                    parent_category_id: 'men_clothes',
                    level: 4,
                    name: {
                      en: 'Trousers',
                      dk: 'Bukser'
                    }
                  },
                  {
                    id: 'men_sweatshirts',
                    parent_category_id: 'men_clothes',
                    level: 4,
                    name: {
                      en: 'Sweatshirts',
                      dk: 'Sweatshirts'
                    }
                  },
                  {
                    id: 'men_tshirts',
                    parent_category_id: 'men_clothes',
                    level: 4,
                    name: {
                      en: 'T-shirts',
                      dk: 'T-shirts'
                    }
                  },
                  {
                    id: 'men_suit',
                    parent_category_id: 'men_clothes',
                    level: 4,
                    name: {
                      en: 'Suits',
                      dk: 'Jakkesæt'
                    }
                  }
                ]
              },
              {
                id: 'men_sales',
                parent_category_id: 'men',
                level: 3,
                name: {
                  en: 'Sales',
                  dk: 'Udsalg'
                },
                categories: [
                  {
                    id: 'last_week_sales',
                    parent_category_id: 'men_sales',
                    level: 4,
                    name: {
                      en: 'Sales: Last Week',
                      dk: 'Udsalg: Sidste Uge'
                    }
                  },
                  {
                    id: 'last_month_sales',
                    parent_category_id: 'men_sales',
                    level: 4,
                    name: {
                      en: 'Sales: Last Month',
                      dk: 'Udsalg: Sidste Måned'
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'women',
            parent_category_id: 'adults',
            level: 2,
            name: {
              en: 'Women',
              dk: 'Kvinder'
            },
            categories: [
              {
                id: 'women_newin',
                parent_category_id: 'women',
                level: 3,
                name: {
                  en: 'New In',
                  dk: 'Nyheder'
                }
              },
              {
                id: 'women_clothes',
                parent_category_id: 'women',
                level: 3,
                name: {
                  en: 'Clothes',
                  dk: 'Tøj'
                }
              },
              {
                id: 'women_sales',
                parent_category_id: 'women',
                level: 3,
                name: {
                  en: 'Sales',
                  dk: 'Udsalg'
                },
                categories: [
                  {
                    id: 'women_trend',
                    parent_category_id: 'women_sales',
                    level: 4,
                    name: {
                      en: 'Trending',
                      dk: 'Trending'
                    }
                  },
                  {
                    id: 'women_last_week_sales',
                    parent_category_id: 'women_sales',
                    level: 4,
                    name: {
                      en: 'Sales: Last Week',
                      dk: 'Udsalg: Sidste Uge'
                    }
                  },
                  {
                    id: 'inspiration',
                    parent_category_id: 'women_sales',
                    level: 4,
                    name: {
                      en: 'Inspiration',
                      dk: 'Inspiration'
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'kids',
        parent_category_id: 'root',
        icon: 'i-lucide-baby',
        level: 1,
        name: {
          en: 'Kids',
          dk: 'Børn'
        }
      }
    ]
  }
}
