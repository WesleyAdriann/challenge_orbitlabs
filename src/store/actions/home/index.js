import actionsTypes from '../../actionsTypes/home';

export const setCategories = categories => ({
  type: actionsTypes.SETCATEGORIES,
  categories,
});

export const setRestaurants = restaurants => ({
  type: actionsTypes.SETRESTAURANTS,
  restaurants,
});

export const handleLoading = status => ({
  type: actionsTypes.HANDLELOADINGHOME,
  status,
});

export const setUser = user => ({
  type: actionsTypes.SETUSER,
  user,
});
