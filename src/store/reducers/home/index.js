import actionsTypes from '../../actionsTypes/home';

const INITIAL_STATE = {
  categories: [],
  restaurants: [],
  isLoading: false,
  user: {},
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
    case actionsTypes.SETUSER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default home;
