import restaurants from '../utils/restaurants.json';

export const getRestaurants = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1500, restaurants.list);
  });
};
