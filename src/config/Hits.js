import { atom } from 'recoil';

export const HitsConfig = atom({
  key: 'HitsConfig', // unique ID (with respect to other atoms/selectors)
  default: {
    objectID: 'objectID',
    productName: 'name',
    brand: 'brand',
    category: 'category',
    reviewScore: 'reviewScore',
    reviewCount: 'reviewCount',
    categories: 'categories',
    colour: 'colour',
    genderFilter: 'genderFilter',
    hierarchicalCategories: 'hierarchicalCategories',
    sizeFilter: 'sizeFilter',
    price: 'price',
    image: 'image',
    hierarchicalCategoriesLvl0: 'hierarchicalCategories.lvl0',
    hierarchicalCategoriesLvl1: 'hierarchicalCategories.lvl1',
    hierarchicalCategoriesLvl2: 'hierarchicalCategories.lvl2',
    hierarchicalCategoriesLvl3: 'hierarchicalCategories.lvl3',
  }, // default value (aka initial value)
});
