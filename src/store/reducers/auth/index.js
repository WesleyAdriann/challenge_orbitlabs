import actionsTypes from '../../actionsTypes/auth';

const INITIAL_STATE = {
  user: {
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  },
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
    case actionsTypes.SETUSERS:
      return {
        ...state,
        users: action.users,
      };
    case actionsTypes.CLEARINPUTS:
      return {
        ...state,
        user: {
          name: '',
          phone: '',
          password: '',
          confirmPassword: '',
        },
      };
    default:
      return state;
  }
};

export default auth;
