import actionsTypes from '../../actionsTypes/auth';

const INITIAL_STATE = {
  user: {},
  users: [],
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.SETINPUTSVALUESAUTH:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};

export default auth;
