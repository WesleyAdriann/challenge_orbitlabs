import restaurants from '../utils/restaurants.json';

export const getCategories = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1500, restaurants.categories);
  });
};
