import type { Category } from '~~/types/categories.ts';

export const UNLIMITED_STOCK = 'UNLIMITED';

export type LocalizedProductName = { [key: string]: string };

export type ProductSize = string | number;

export type ProductStock = number | typeof UNLIMITED_STOCK;

export type ProductVariant = {
  stock: ProductStock
  color: string
  size: ProductSize[]
  images?: string[]
};

export type Product = {
  id: number
  brand: string
  price: number
  stock: ProductStock
  color: string
  size: ProductSize[]
  name: LocalizedProductName
  images: string[]
  categories: Category['id'][]
  variant?: ProductVariant[]
};

export const PRODUCTS
  = [
    {
      brand: 'Vero Moda',
      categories: [
        'adults',
        'women',
        'women_newin',
        'women_clothes',
        'women_last_week_sales'
      ],
      color: '',
      id: 1,
      images: [
        'https://vm-images-test.global.ssl.fastly.net/10183605/2576554/003/veromoda-vmnostrikketcardigan-graa.jpg?v=93d0e57daca02e5323b0a94fdcd8abb1',
        'https://vm-images-test.global.ssl.fastly.net/10183605/2576554/004/veromoda-vmnostrikketcardigan-graa.jpg?v=50e9f50bd756a96b5f13aaeef3f26544',
        'https://vm-images-test.global.ssl.fastly.net/10183605/2576554/001/veromoda-vmnostrikketcardigan-graa.jpg?v=07b9009b6b8acd18e9a661ac516b74c8',
        'https://vm-images-test.global.ssl.fastly.net/10183605/2576554/002/veromoda-vmnostrikketcardigan-graa.jpg?v=597d08b7e57b7d640f8c4e16e0c67fc9',
        'https://vm-images-test.global.ssl.fastly.net/10183605/2576554/005/veromoda-vmnostrikketcardigan-graa.jpg?v=1734aa219fbf3064e4b8bf6a57d53bcf',
        'https://vm-images-test.global.ssl.fastly.net/10183605/2576554/006/veromoda-vmnostrikketcardigan-graa.jpg?v=5ef4fddc1083a31a9bbf8ede00b7281f'
      ],
      name: {
        dk: 'CABLE O-NECK KNITTED PULLOVER',
        en: ''
      },
      price: 299.95,
      size: [
        'XS',
        'S',
        'L',
        'M'
      ],
      stock: 10
    },
    {
      brand: 'Vero Moda',
      categories: [
        'adults',
        'women',
        'women_newin',
        'women_clothes'
      ],
      color: 'black',
      id: 2,
      images: [
        'https://vm-images-test.global.ssl.fastly.net/10305319/4435125/003/veromoda-vmmerlekortkjole-roed.jpg?v=e22cde4b3e9d94256a6dd5b74ac7fd94',
        'https://vm-images-test.global.ssl.fastly.net/10305319/4435125/004/veromoda-vmmerlekortkjole-roed.jpg?v=da6899de35dbc30c541b8085d0311d7a',
        'https://vm-images-test.global.ssl.fastly.net/10305319/4435125/001/veromoda-vmmerlekortkjole-roed.jpg?v=fdadf6ae1fd5f22dd8c5eaf35d675aae',
        'https://vm-images-test.global.ssl.fastly.net/10305319/4435125/005/veromoda-vmmerlekortkjole-roed.jpg?v=b5c91b34394d7f5abb1ce0fac02f48b0',
        'https://vm-images-test.global.ssl.fastly.net/10305319/4435125/006/veromoda-vmmerlekortkjole-roed.jpg?v=4a33a0f6f7aa7f4246ef7197e57c7a8f',
        'https://vm-images-test.global.ssl.fastly.net/10305319/4435125/007/veromoda-vmmerlekortkjole-roed.jpg?v=6708f2413d781182fe25d8951b2e17b6'
      ],
      name: {
        dk: 'O-NECK MINI DRESS',
        en: ''
      },
      price: 259.99,
      size: [
        'XS',
        'S'
      ],
      stock: 5,
      variant: [
        {
          color: 'black',
          images: [
            'https://vm-images-test.global.ssl.fastly.net/10305319/4441432/003/veromoda-vmmerlekortkjole-sort.jpg?v=c91aafff47daa313775095c2db05ef0a',
            'https://vm-images-test.global.ssl.fastly.net/10305319/4441432/004/veromoda-vmmerlekortkjole-sort.jpg?v=01a0e003cf5532733c58664643f20de1',
            'https://vm-images-test.global.ssl.fastly.net/10305319/4441432/001/veromoda-vmmerlekortkjole-sort.jpg?v=21f64627a78ae5efb5b37637d7d0158c'
          ],
          size: [
            'XS',
            'S'
          ],
          stock: 5
        },
        {
          color: 'Potting Soil',
          images: [
            'https://vm-images-test.global.ssl.fastly.net/10315689/4576663/003/veromoda-vmveronikakortkjole-sort.jpg?v=72272f44c2727d9a636d57dd5d8d146c',
            'https://vm-images-test.global.ssl.fastly.net/10315689/4576663/004/veromoda-vmveronikakortkjole-sort.jpg?v=3b4d1064f5d7ce1575e5915a3b3c8b26',
            'https://vm-images-test.global.ssl.fastly.net/10315689/4576663/001/veromoda-vmveronikakortkjole-sort.png?v=b18b14908a77b87f61c0ec5f80db3607'
          ],
          size: [
            'XS',
            'S',
            'M'
          ],
          stock: 7
        }
      ]
    },
    {
      brand: 'Vero Moda',
      categories: [
        'adults',
        'women',
        'women_newin',
        'women_clothes',
        'women_trend'
      ],
      color: 'Green',
      id: 3,
      images: [
        'https://vm-images-test.global.ssl.fastly.net/10252112/3682272/003/veromoda-vmhaylefrakke-sort.jpg?v=2cfa28ba25b667a7b1fe7199d498dd03',
        'https://vm-images-test.global.ssl.fastly.net/10252112/3682272/004/veromoda-vmhaylefrakke-sort.jpg?v=8aae0820407dcefd8c95eafd4b11bdce',
        'https://vm-images-test.global.ssl.fastly.net/10252112/3682272/001/veromoda-vmhaylefrakke-sort.jpg?v=e4d166b4a62627a4534ddbfa7dc6d2ed',
        'https://vm-images-test.global.ssl.fastly.net/10252112/3682272/002/veromoda-vmhaylefrakke-sort.jpg?v=7c40330399b2e8b0e4c3c8fe50fc89b4',
        'https://vm-images-test.global.ssl.fastly.net/10252112/3682272/005/veromoda-vmhaylefrakke-sort.jpg?v=36a128ad5648bc075b6498cb2c73106e',
        'https://vm-images-test.global.ssl.fastly.net/10252112/3682272/006/veromoda-vmhaylefrakke-sort.jpg?v=84fe180bdbfb8eb4fef655ce41557c1c',
        'https://vm-images-test.global.ssl.fastly.net/10252112/3682272/007/veromoda-vmhaylefrakke-sort.jpg?v=c54d0b0d5421c768586923ccc94f21e0'
      ],
      name: {
        dk: 'WRAP JAKKE',
        en: 'WRAP JACKET'
      },
      price: 549.95,
      size: [
        'XS',
        'S',
        'L'
      ],
      stock: 7,
      variant: [
        {
          color: 'Green',
          images: [
            'https://vm-images-test.global.ssl.fastly.net/10252112/3818462/003/veromoda-vmhaylefrakke-groen.jpg?v=a2bf7ce2c32898c2644b5ce169009584',
            'https://vm-images-test.global.ssl.fastly.net/10252112/3818462/004/veromoda-vmhaylefrakke-groen.jpg?v=e3b832ceac81ad777a32cf224b8fe9a3',
            'https://vm-images-test.global.ssl.fastly.net/10252112/3818462/001/veromoda-vmhaylefrakke-groen.jpg?v=cbdb7ff907c02f126cf303f79d25b109'
          ],
          size: [
            'XS',
            'S',
            'L'
          ],
          stock: 7
        },
        {
          color: 'Potting Soil',
          images: [
            'https://vm-images-test.global.ssl.fastly.net/10252112/3818458/003/veromoda-vmhaylefrakke-brun.jpg?v=1495cab7e950a14491c9e0573055977e',
            'https://vm-images-test.global.ssl.fastly.net/10252112/3818458/004/veromoda-vmhaylefrakke-brun.jpg?v=5bf50a8fb84ebf64a95b3df955218593',
            'https://vm-images-test.global.ssl.fastly.net/10252112/3818458/001/veromoda-vmhaylefrakke-brun.jpg?v=a1a7cc05a7914ce0ecb48fcfe05077f9',
            'https://vm-images-test.global.ssl.fastly.net/10252112/3818458/002/veromoda-vmhaylefrakke-brun.jpg?v=525d79e3e5f66eeb2f9d99abed6e9682'
          ],
          size: [
            'XS',
            'S',
            'M'
          ],
          stock: 9
        }
      ]
    },
    {
      brand: 'Vero Moda',
      categories: [
        'adults',
        'women',
        'women_newin',
        'women_clothes',
        'women_trend'
      ],
      color: 'Black',
      id: 4,
      images: [
        'https://vm-images-test.global.ssl.fastly.net/10276355/4084967/003/veromoda-vmdonnafrakke-sort.jpg?v=e7ed002d5414ece7e18d213958412d9f',
        'https://vm-images-test.global.ssl.fastly.net/10276355/4084967/004/veromoda-vmdonnafrakke-sort.jpg?v=9f4232f4d0b0142193697c0e05d8d1ea',
        'https://vm-images-test.global.ssl.fastly.net/10276355/4084967/001/veromoda-vmdonnafrakke-sort.jpg?v=5174b1f3a8e7514f6d338c383d3e0d8e',
        'https://vm-images-test.global.ssl.fastly.net/10276355/4084967/005/veromoda-vmdonnafrakke-sort.jpg?v=37263dcc667188534057fa1ff94561ad',
        'https://vm-images-test.global.ssl.fastly.net/10276355/4084967/006/veromoda-vmdonnafrakke-sort.jpg?v=f4e74528ec7999f4a48f0a13396e0cc3'
      ],
      name: {
        dk: 'LÆNG WRAP JAKKE',
        en: 'LONG WRAP JACKET'
      },
      price: 379.95,
      size: [
        'XS',
        'S',
        'L',
        'XL'
      ],
      stock: 12,
      variant: [
        {
          color: 'Black',
          images: [
            'https://vm-images-test.global.ssl.fastly.net/10276355/4084967/005/veromoda-vmdonnafrakke-sort.jpg?v=37263dcc667188534057fa1ff94561ad',
            'https://vm-images-test.global.ssl.fastly.net/10276355/4084967/006/veromoda-vmdonnafrakke-sort.jpg?v=f4e74528ec7999f4a48f0a13396e0cc3'
          ],
          size: [
            'XS',
            'S',
            'L',
            'XL'
          ],
          stock: 12
        },
        {
          color: 'Dark Grey',
          size: [
            'XS',
            'S',
            'M'
          ],
          stock: 2
        },
        {
          color: 'Light Grey',
          images: [
            'https://vm-images-test.global.ssl.fastly.net/10276355/4050845/003/veromoda-vmdonnafrakke-graa.jpg?v=dcc12211aece0f7bf4b7d0c534ab1fd4',
            'https://vm-images-test.global.ssl.fastly.net/10276355/4050845/004/veromoda-vmdonnafrakke-graa.jpg?v=60873972b845217a583c9efa401c6f76',
            'https://vm-images-test.global.ssl.fastly.net/10276355/4050845/001/veromoda-vmdonnafrakke-graa.jpg?v=16a6dcf2d08e2b41e5467de0779c8289',
            'https://vm-images-test.global.ssl.fastly.net/10276355/4050845/005/veromoda-vmdonnafrakke-graa.jpg?v=75dd264674e0210181167274419aae4e',
            'https://vm-images-test.global.ssl.fastly.net/10276355/4050845/006/veromoda-vmdonnafrakke-graa.jpg?v=995b5f2a6fd88500351600be35c8712d'
          ],
          size: [
            'XS',
            'S'
          ],
          stock: 0
        },
        {
          color: 'Silver Mink',
          images: [
            'https://vm-images-test.global.ssl.fastly.net/10276355/4084966/003/veromoda-vmdonnafrakke-brun.jpg?v=fd5cb96ec2ab178c499d1b77c7318421'
          ],
          size: [
            'XS',
            'S',
            'L',
            'XL'
          ],
          stock: 1
        }
      ]
    },
    {
      brand: 'Vero Moda',
      categories: [
        'adults',
        'women',
        'women_clothes'
      ],
      color: 'Black',
      id: 5,
      images: [
        'https://vm-images-test.global.ssl.fastly.net/10312957/4548527/003/veromoda-vmlauralangkjole-roed.jpg?v=3c6cf66c79cfae56838b743aac362d5f',
        'https://vm-images-test.global.ssl.fastly.net/10312957/454857/004/veromoda-vmlauralangkjole-roed.jpg?v=b485f20dcac01ca7789e9f7e9438b761',
        'https://vm-images-test.global.ssl.fastly.net/10312957/4548527/001/veromoda-vmlauralangkjole-roed.png?v=438ef1fceec47c0d3edfc6cc305c77bd',
        'https://vm-images-test.global.ssl.fastly.net/10312957/45487/005/veromoda-vmlauralangkjole-roed.jpg?v=6b8fd3915e98671ab46e82fc2daf0330',
        'https://vm-images-test.global.ssl.fastly.net/10312957/4548527/006/veromoda-vmlauralangkjole-roed.jpg?v=9daf89d243af01f6d2db905ab2cd2144',
        'https://vm-images-test.global.ssl.fastly.net/10312957/4548527/007/veromoda-vmlauralangkjole-roed.jpg?v=27406de452b1b95afbdb74257ccdc432'
      ],
      name: {
        dk: 'HIGH WAIST PLISSERET MAXINEDERDEL',
        en: 'HIGH WAIST PLISSERET MAXINEDERDEL'
      },
      price: 299.95,
      size: [
        'XS',
        'S',
        'M',
        'L',
        'XL'
      ],
      stock: 100
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_newin',
        'men_clothes',
        'men_jeans',
        'men_sales',
        'last_week_sales',
        'last_month_sales'
      ],
      color: 'Blue',
      id: 6,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12243592/4313146/003/jackjones-jjiglennjjoriginalsq223slimfitjeans-blaa.jpg?v=e7f656d5875e513952d08b3482ab707e',
        'https://jj-images-test.global.ssl.fastly.net/12243592/4313146/004/jackjones-jjiglennjjoriginalsq223slimfitjeans-blaa.jpg?v=379ad102c12ae59f368b0d045033b5cf',
        'https://jj-images-test.global.ssl.fastly.net/12243592/4313146/001/jackjones-jjiglennjjoriginalsq223slimfitjeans-blaa.png?v=6b939392a07d2ef8c387c6d68b3a0b01',
        'https://jj-images-test.global.ssl.fastly.net/12243592/4313146/002/jackjones-jjiglennjjoriginalsq223slimfitjeans-blaa.png?v=d7127cab367f438a723fb03773d1308f',
        'https://jj-images-test.global.ssl.fastly.net/12243592/4313146/005/jackjones-jjiglennjjoriginalsq223slimfitjeans-blaa.jpg?v=0a429f9662b37133bb33feae27390814',
        'https://jj-images-test.global.ssl.fastly.net/12243592/4313146/006/jackjones-jjiglennjjoriginalsq223slimfitjeans-blaa.jpg?v=99366063fac88b4c81e9a615f3095fbd',
        'https://jj-images-test.global.ssl.fastly.net/12243592/4313146/007/jackjones-jjiglennjjoriginalsq223slimfitjeans-blaa.jpg?v=0a4038b57993a870081d2c47b5c8d861',
        'https://jj-images-test.global.ssl.fastly.net/12243592/4313146/008/jackjones-jjiglennjjoriginalsq223slimfitjeans-blaa.jpg?v=223a8640c210813797f4d3bb9784c135'
      ],
      name: {
        dk: 'GLENN ORIGINAL GE 006 INDIGO KNIT SLIM FIT JEANS',
        en: 'GLENN ORIGINAL GE 006 INDIGO KNIT SLIM FIT JEANS'
      },
      price: 399.95,
      size: [
        26,
        27,
        28,
        29,
        30,
        32,
        33,
        34,
        36,
        38
      ],
      stock: 'Unlimited'
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_newin',
        'men_clothes',
        'men_jeans'
      ],
      color: 'Blue / Grey',
      id: 7,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12217978/3994932/003/jackjones-jjiglennjjfoxbl655slimfitjeans-sort.jpg?v=2cef6f9f67dd7c264c3acebe822eeeb9',
        'https://jj-images-test.global.ssl.fastly.net/12217978/3994932/004/jackjones-jjiglennjjfoxbl655slimfitjeans-sort.jpg?v=0d03c45e4541b5b7fdc7ef5fcf64c864',
        'https://jj-images-test.global.ssl.fastly.net/12217978/3994932/001/jackjones-jjiglennjjfoxbl655slimfitjeans-sort.jpg?v=18e7e0ab25e35f9fcee2467ca39a0948',
        'https://jj-images-test.global.ssl.fastly.net/12217978/3994932/002/jackjones-jjiglennjjfoxbl655slimfitjeans-sort.jpg?v=ebc7c4cec9c01951922c64acb2498b85'
      ],
      name: {
        en: 'MIKE ORIGINAL JOS 471 COMFORT FIT JEANS'
      },
      price: 599.95,
      size: [
        28,
        29,
        30,
        32,
        34,
        36,
        38
      ],
      stock: 1000
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_newin',
        'men_clothes',
        'men_jeans',
        'men_sales',
        'last_week_sales'
      ],
      color: 'Blue / Grey',
      id: 8,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12252800/4438991/003/jackjones-jjichrisjjoriginalsbd021relaxedfitjeans-graa.jpg?v=f9f62e8c319f13fd935667d9f8ec8b2d',
        'https://jj-images-test.global.ssl.fastly.net/12252800/4438991/004/jackjones-jjichrisjjoriginalsbd021relaxedfitjeans-graa.jpg?v=e5e34340c1b444fac1067ffdee4a43b8'
      ],
      name: {
        dk: '',
        en: 'MIKE ORIGINAL AM 248 COMFORT FIT JEANS'
      },
      price: 499.95,
      size: [
        34,
        36,
        38
      ],
      stock: 1000
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_newin',
        'men_clothes',
        'men_shirts',
        'men_shirts_ls'
      ],
      color: 'Dark Grey',
      id: 9,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12264490/4595889/003/jackjones-jjiclarkjjoriginalam413regularfitjeans-graa.jpg?v=1ac6187db8d3fc280d72720eedd16766',
        'https://jj-images-test.global.ssl.fastly.net/12264490/4595889/004/jackjones-jjiclarkjjoriginalam413regularfitjeans-graa.jpg?v=61e75eb771b29dcf434fc93f2e7f8767',
        'https://jj-images-test.global.ssl.fastly.net/12264490/4595889/001/jackjones-jjiclarkjjoriginalam413regularfitjeans-graa.png?v=2bd6da89dc311374149e6c45fc356009',
        'https://jj-images-test.global.ssl.fastly.net/12264490/4595889/002/jackjones-jjiclarkjjoriginalam413regularfitjeans-graa.png?v=7faaa176333bfa9a7022bab1302f4854'
      ],
      name: {
        dk: 'BUTTON-DOWN TWILLVÆVET SKJORTE',
        en: 'BUTTON-DOWN TWILL-WEAVE SHIRT'
      },
      price: 299.95,
      size: [
        'XS',
        'S',
        'L',
        'XL',
        'XXL',
        '3XL'
      ],
      stock: 7,
      variant: [
        {
          color: 'Dark Grey',
          images: [
            'https://jj-images-test.global.ssl.fastly.net/12253492/4444748/003/jackjones-jjiclarkjjevanjos498lidregularfitjeans-graa.jpg?v=bdbd236a7dc38a61b05a1652f7f04a7d',
            'https://jj-images-test.global.ssl.fastly.net/12253492/4444748/004/jackjones-jjiclarkjjevanjos498lidregularfitjeans-graa.jpg?v=d33ab859273718d772276381746cd1bb',
            'https://jj-images-test.global.ssl.fastly.net/12253492/4444748/001/jackjones-jjiclarkjjevanjos498lidregularfitjeans-graa.jpg?v=74768ab8030482b8a5a4e2883cc97f3b'
          ],
          size: [
            'XS',
            'S',
            'L',
            'XL',
            'XXL',
            '3XL'
          ],
          stock: 7
        },
        {
          color: 'Forest Night',
          images: [
            'https://jj-images-test.global.ssl.fastly.net/12252800/4438991/003/jackjones-jjichrisjjoriginalsbd021relaxedfitjeans-graa.jpg?v=f9f62e8c319f13fd935667d9f8ec8b2d'
          ],
          size: [
            'XS',
            'S',
            'L',
            'XL'
          ],
          stock: 3
        },
        {
          color: '',
          images: [
            'https://jj-images-test.global.ssl.fastly.net/12253492/4444748/003/jackjones-jjiclarkjjevanjos498lidregularfitjeans-graa.jpg?v=bdbd236a7dc38a61b05a1652f7f04a7d',
            'https://jj-images-test.global.ssl.fastly.net/12253492/4444748/004/jackjones-jjiclarkjjevanjos498lidregularfitjeans-graa.jpg?v=d33ab859273718d772276381746cd1bb',
            'https://jj-images-test.global.ssl.fastly.net/12253492/4444748/001/jackjones-jjiclarkjjevanjos498lidregularfitjeans-graa.jpg?v=74768ab8030482b8a5a4e2883cc97f3b'
          ],
          size: [
            'XS',
            'S',
            'XL'
          ],
          stock: 0
        },
        {
          color: 'Blue',
          size: [
            'XS',
            'S',
            'XL'
          ],
          stock: 10
        }
      ]
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_newin',
        'men_clothes',
        'men_jackets',
        'men_sales'
      ],
      color: 'Black',
      id: 10,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12246401/4372162/003/jackjones-jjichrisjjcooperam900relaxedfitjeans-blaa.jpg?v=4ed667ed300ce89225a5fd729b38ab43',
        'https://jj-images-test.global.ssl.fastly.net/12246401/4372162/004/jackjones-jjichrisjjcooperam900relaxedfitjeans-blaa.jpg?v=7f28255858488f4c70dbcd7113bd1158'
      ],
      name: {
        dk: 'ULD JAKKE',
        en: 'WOOL JACKET'
      },
      price: 839.96,
      size: [
        'XS',
        'S',
        'L',
        'XL'
      ],
      stock: 10,
      variant: [
        {
          color: 'Black',
          images: [
            'https://jj-images-test.global.ssl.fastly.net/12246401/4372157/003/jackjones-jjichrisjjcooperam900relaxedfitjeans-groen.jpg?v=f1762eb78d69cb040bfe73b81d21dc15',
            'https://jj-images-test.global.ssl.fastly.net/12246401/4372157/004/jackjones-jjichrisjjcooperam900relaxedfitjeans-groen.jpg?v=c7cfd5b6fe70a04cee2ae7b655542c66'
          ],
          size: [
            'XS',
            'S',
            'L',
            'XL'
          ],
          stock: 10
        },
        {
          color: 'Dark Grey',
          images: [
            'https://jj-images-test.global.ssl.fastly.net/12246401/4372297/003/jackjones-jjichrisjjcooperam900relaxedfitjeans-brun.jpg?v=febe1432455ef8ad83def7e527f4f46e',
            'https://jj-images-test.global.ssl.fastly.net/12246401/4372297/004/jackjones-jjichrisjjcooperam900relaxedfitjeans-brun.jpg?v=44c185a0954e74d20c6bde57c6dff92b',
            'https://jj-images-test.global.ssl.fastly.net/12246401/4372297/001/jackjones-jjichrisjjcooperam900relaxedfitjeans-brun.png?v=68f10fe9d8413765948691aefc35e07e'
          ],
          size: [
            'XS',
            'S',
            'L',
            'XL'
          ],
          stock: 3
        },
        {
          color: 'Light Grey',
          size: [
            'XS',
            'XL'
          ],
          stock: 0
        }
      ]
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_clothes',
        'men_trousers',
        'men_sales',
        'last_week_sales',
        'last_month_sales'
      ],
      color: 'Grey',
      id: 11,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12252350/4446255/003/jackjones-slimfitchinobukser-graa.jpg?v=a547570ba00df4935c1c343fd9936f3a',
        'https://jj-images-test.global.ssl.fastly.net/12252350/4446255/004/jackjones-slimfitchinobukser-graa.jpg?v=37d915cd6cfab23bde4c678864da7166',
        'https://jj-images-test.global.ssl.fastly.net/12252350/4446255/001/jackjones-slimfitchinobukser-graa.jpg?v=fa322bcb05c8d75f2f71158b913b7567',
        'https://jj-images-test.global.ssl.fastly.net/12252350/4446255/002/jackjones-slimfitchinobukser-graa.jpg?v=804db6e311656df23fda9b5d8fd54dd9',
        'https://jj-images-test.global.ssl.fastly.net/12252350/4446255/005/jackjones-slimfitchinobukser-graa.jpg?v=603164b8edff24c6f1e9a24efe3610d5'
      ],
      name: {
        dk: 'MARCO AKM 1048 CHINOS',
        en: 'MARCO AKM 1048 CHINOS'
      },
      price: 399.95,
      size: [
        28,
        30,
        34,
        36,
        38
      ],
      stock: 'Unlimited'
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_clothes',
        'men_trousers',
        'men_sales',
        'last_week_sales',
        'last_month_sales'
      ],
      color: 'Grey',
      id: 12,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12242188/4297316/003/jackjones-taperedfitchinobukser-groen.jpg?v=0f4923be9cac524610c73e3522f98a64',
        'https://jj-images-test.global.ssl.fastly.net/12242188/4297316/004/jackjones-taperedfitchinobukser-groen.jpg?v=4c986f7eaf6605e9c95ec0eaef5194c7',
        'https://jj-images-test.global.ssl.fastly.net/12242188/4297316/001/jackjones-taperedfitchinobukser-groen.jpg?v=d83e37c086c40fa1a763f3f7d2652e72',
        'https://jj-images-test.global.ssl.fastly.net/12242188/4297316/002/jackjones-taperedfitchinobukser-groen.jpg?v=9bd9190df8ca28eeeda1482f0a799907'
      ],
      name: {
        dk: 'MARCO AKM 1048 CHINOS',
        en: 'MARCO AKM 1048 CHINOS'
      },
      price: 399.95,
      size: [
        28,
        30,
        34,
        36,
        38
      ],
      stock: 'Unlimited'
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_clothes',
        'men_trousers',
        'men_sales',
        'last_week_sales',
        'last_month_sales'
      ],
      color: 'Silver',
      id: 13,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12242188/4440439/003/jackjones-taperedfitchinobukser-hvid.jpg?v=6e2f46272ab8c072731599d7e3323b62',
        'https://jj-images-test.global.ssl.fastly.net/12242188/4440439/004/jackjones-taperedfitchinobukser-hvid.jpg?v=431201b335add6e0ae55c8c9282ffd9b',
        'https://jj-images-test.global.ssl.fastly.net/12242188/4440439/001/jackjones-taperedfitchinobukser-hvid.jpg?v=257254d939c444e30f868bf320aa70c1',
        'https://jj-images-test.global.ssl.fastly.net/12242188/4440439/012/jackjones-taperedfitchinobukser-hvid.jpg?v=f0f2d8266770edeea1339c5fd7cba4c3'
      ],
      name: {
        dk: 'MARCO AKM 638 CHINOS',
        en: 'MARCO AKM 638 CHINOS'
      },
      price: 499.95,
      size: [
        28,
        30,
        32
      ],
      stock: 200
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_clothes',
        'men_sweatshirts',
        'men_sales'
      ],
      color: 'Black',
      id: 14,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12208157/4357816/003/jackjones-ensfarvethaettetroeje-graa.jpg?v=02a79605cce6f8ce876547bbfc70b580',
        'https://jj-images-test.global.ssl.fastly.net/12208157/4357816/004/jackjones-ensfarvethaettetroeje-graa.jpg?v=1f4eddbd5d8155933d70cb59136a6067',
        'https://jj-images-test.global.ssl.fastly.net/12208157/4357816/001/jackjones-ensfarvethaettetroeje-graa.jpg?v=8dced669c9f225000c08d1fefba8f141',
        'https://jj-images-test.global.ssl.fastly.net/12208157/4357816/005/jackjones-ensfarvethaettetroeje-graa.jpg?v=a6974c6913504b2343712b461a6f601f'
      ],
      name: {
        dk: 'LYNLÅS CARDIGAN',
        en: 'ZIPPED CARDIGAN'
      },
      price: 399.95,
      size: [
        'XS',
        'S',
        'L',
        'XL'
      ],
      stock: 25
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_clothes',
        'men_tshirts'
      ],
      color: 'Green',
      id: 15,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12204926/4401530/003/jackjones-logohaettetroejemedlynlaas-groen.jpg?v=8d63dc6edd1d59ad6362620cf3c8e3e3',
        'https://jj-images-test.global.ssl.fastly.net/12204926/4401530/004/jackjones-logohaettetroejemedlynlaas-groen.jpg?v=281da2923f9abdc75492733706fc9f53',
        'https://jj-images-test.global.ssl.fastly.net/12204926/44030/001/jackjones-logohaettetroejemedlynlaas-groen.jpg?v=5e1ecadbe39e223f4ff88b498a5b8129',
        'https://jj-images-test.global.ssl.fastly.net/12204926/4401530/005/jackjones-logohaettetroejemedlynlaas-groen.jpg?v=4bec42440f072b46230c1769249ba926'
      ],
      name: {
        dk: 'ØKOLOGISK BOMULD T-SHIRT',
        en: 'ZIPPED CARDIGAN'
      },
      price: 149.95,
      size: [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL'
      ],
      stock: 1000,
      variant: [
        {
          color: 'Green',
          images: [
            'https://jj-images-test.global.ssl.fastly.net/12204926/4401530/003/jackjones-logohaettetroejemedlynlaas-groen.jpg?v=8d63dc6edd1d59ad6362620cf3c8e3e3',
            'https://jj-images-test.global.ssl.fastly.net/12204926/4401530/004/jackjones-logohaettetroejemedlynlaas-groen.jpg?v=281da2923f9abdc75492733706fc9f53',
            'https://jj-images-test.global.ssl.fastly.net/12204926/4401530/001/jackjones-logohaettetroejemedlynlaas-groen.jpg?v=5e1ecadbe39e223f4ff88b498a5b8129'
          ],
          size: [
            'XS',
            'S',
            'M',
            'L',
            'XL',
            'XXL'
          ],
          stock: 1000
        },
        {
          color: 'Black',
          images: [
            'https://jj-images-test.global.ssl.fastly.net/12204926/3826520/003/jackjones-logohaettetroejemedlynlaas-sort.jpg?v=919ebd48b97d45b5d39cc7bba76f8b83',
            'https://jj-images-test.global.ssl.fastly.net/12204926/3826520/004/jackjones-logohaettetroejemedlynlaas-sort.jpg?v=31c6b1a66590f236e46e033c10531b89',
            'https://jj-images-test.global.ssl.fastly.net/12204926/3826520/001/jackjones-logohaettetroejemedlynlaas-sort.jpg?v=684e8d87d459af3c138572394a0b0de4',
            'https://jj-images-test.global.ssl.fastly.net/12204926/3826520/005/jackjones-logohaettetroejemedlynlaas-sort.jpg?v=36fad0f7888b466a5cd1483c51891a83'
          ],
          size: [
            'XS',
            'S',
            'L',
            'XL'
          ],
          stock: 13
        },
        {
          color: 'Blue Heaven',
          size: [
            'XS',
            'XL',
            'XXL'
          ],
          stock: 0
        },
        {
          color: 'Red',
          size: [
            'XS',
            'XL'
          ],
          stock: 20
        },
        {
          color: 'Chili',
          images: [
            'https://jj-images-test.global.ssl.fastly.net/12204926/4401529/003/jackjones-logohaettetroejemedlynlaas-beige.jpg?v=6c62cff48bfb0d480728403671ae97f0',
            'https://jj-images-test.global.ssl.fastly.net/12204926/4401529/004/jackjones-logohaettetroejemedlynlaas-beige.jpg?v=7194215c46ca7310379f0f4753a66eb8',
            'https://jj-images-test.global.ssl.fastly.net/12204926/4401529/001/jackjones-logohaettetroejemedlynlaas-beige.jpg?v=bb37f092e334a950b35ee8b126fe2599'
          ],
          size: [
            'XS',
            'XL'
          ],
          stock: 24
        },
        {
          color: 'Dark Earth',
          images: [
            'https://jj-images-test.global.ssl.fastly.net/12204926/4318819/003/jackjones-logohaettetroejemedlynlaas-brun.jpg?v=ce1cdaf483b60c33e3b40fcc626d5b68'
          ],
          size: [
            'XS',
            'S',
            'M',
            'L',
            'XL',
            'XXL',
            '3XL'
          ],
          stock: 'Unlimited'
        }
      ]
    },
    {
      brand: 'Jack & Jones',
      categories: [
        'adults',
        'men',
        'men_clothes',
        'men_suit',
        'men_sales',
        'last_week_sales',
        'last_month_sales'
      ],
      color: 'Blue',
      id: 16,
      images: [
        'https://jj-images-test.global.ssl.fastly.net/12199891/3800578/003/jackjones-jprfrancosuperslimfitblazer-blaa.jpg?v=3afeeaff519299f61f1a2389cf606b2c',
        'https://jj-images-test.global.ssl.fastly.net/12199891/3800578/004/jackjones-jprfrancosuperslimfitblazer-blaa.jpg?v=00548b4e52de3dc99afdb0bcbbf335d4',
        'https://jj-images-test.global.ssl.fastly.net/12199891/3800578/001/jackjones-jprfrancosuperslimfitblazer-blaa.jpg?v=d82c5b43266a074ef520c6306ad68449',
        'https://jj-images-test.global.ssl.fastly.net/12199891/3800578/005/jackjones-jprfrancosuperslimfitblazer-blaa.jpg?v=e29325b0bb37329a881b79f96984225d',
        'https://jj-images-test.global.ssl.fastly.net/12199891/3800578/006/jackjones-jprfrancosuperslimfitblazer-blaa.jpg?v=26c7de2c7c37a53875d265e2c64f2113',
        'https://jj-images-test.global.ssl.fastly.net/12199891/3800578/007/jackjones-jprfrancosuperslimfitblazer-blaa.jpg?v=f2bb35faebb91209b6f8a462e5a019dd',
        'https://jj-images-test.global.ssl.fastly.net/12199891/3800578/008/jackjones-jprfrancosuperslimfitblazer-blaa.jpg?v=ef6b341db151817829b60935406c55ac'
      ],
      name: {
        dk: 'KLASSISK BLAZER',
        en: 'CLASSIC BLAZER'
      },
      price: 999.99,
      size: [
        44,
        46,
        48,
        50,
        52
      ],
      stock: 12
    },
    {
      brand: 'JJXX',
      categories: [
        'kids'
      ],
      color: 'Color',
      id: 17,
      images: [
        'https://jx-images-test.global.ssl.fastly.net/12200382/3805310/003/jjxx-jxcleohaettetroeje-beige.jpg?v=a77857f662983c790874151000d84658',
        'https://jx-images-test.global.ssl.fastly.net/12200382/3805310/004/jjxx-jxcleohaettetroeje-beige.jpg?v=95dbe36d937f2d372e2ca707fc5c682c',
        'https://jx-images-test.global.ssl.fastly.net/12200382/3805310/001/jjxx-jxcleohaettetroeje-beige.jpg?v=f248f9c68eedc2f7bd815b2d1ca364d0',
        'https://jx-images-test.global.ssl.fastly.net/12200382/3805310/002/jjxx-jxcleohaettetroeje-beige.jpg?v=0fbbdd69ae09e8331dd38cf542683032'
      ],
      name: {
        dk: 'BLOMSTERPRINT JUMPSUIT',
        en: 'FLORAL PRINT JUMPSUIT'
      },
      price: 259.95,
      size: [
        116,
        122,
        128,
        134,
        140
      ],
      stock: 5
    },
    {
      brand: 'JJXX',
      categories: [
        'kids'
      ],
      color: 'Color',
      id: 18,
      images: [
        'https://jx-images-test.global.ssl.fastly.net/12226157/4114788/003/jjxx-jxberlinslimhwrc2009-blaa.jpg?v=74f683743cbbc051b48c8e168f17dc0a',
        'https://jx-images-test.global.ssl.fastly.net/12226157/4114788/004/jjxx-jxberlinslimhwrc2009-blaa.jpg?v=634b3f03ad43c970170f2843fb6de754',
        'https://jx-images-test.global.ssl.fastly.net/12226157/4114788/012/jjxx-jxberlinslimhwrc2009-blaa.jpg?v=fb2299e02ebbf3a74365ad7c0d7fa496',
        'https://jx-images-test.global.ssl.fastly.net/12226157/4114788/002/jjxx-jxberlinslimhwrc2009-blaa.jpg?v=e7ce4b1e7b423684e697873a5876e445'
      ],
      name: {
        en: 'X-SLIM FIT JEANS'
      },
      price: 159.95,
      size: [
        92,
        98,
        104,
        110
      ],
      stock: 7
    },
    {
      brand: 'JJXX',
      categories: [
        'kids'
      ],
      color: 'Brown',
      id: 19,
      images: [
        'https://jx-images-test.global.ssl.fastly.net/12206909/3847807/003/jjxx-jxberlinslimhwrc2002-blaa.jpg?v=4953f47d19ff90bb03110ed41be1c76b',
        'https://jx-images-test.global.ssl.fastly.net/12206909/3847807/004/jjxx-jxberlinslimhwrc2002-blaa.jpg?v=6e003bb704fe40b745ac7c8c297f4088'
      ],
      name: {
        dk: 'LÆDER BÆLTE',
        en: 'X-SLIM FIT JEANS'
      },
      price: 129.95,
      size: [
        55,
        65,
        75
      ],
      stock: 7
    },
    {
      brand: 'JJXX',
      categories: [
        'kids'
      ],
      color: 'Brown',
      id: 20,
      name: {
        dk: 'SKINNY FIT JEANS',
        en: 'SKINNY FIT JEANS'
      },
      price: 159.95,
      size: [
        92,
        98,
        104,
        110,
        116,
        122
      ],
      stock: 0
    }
  ];
