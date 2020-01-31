import actionsTypes from '../../actionsTypes/home';

const INITIAL_STATE = {
  categories: [],
  restaurants: [],
  isLoading: false,
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.SETCATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case actionsTypes.SETRESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
      };
    case actionsTypes.HANDLELOADINGHOME:
      return {
        ...state,
        isLoading: action.status,
      };
    default:
      return state;
  }
};

export default home;
