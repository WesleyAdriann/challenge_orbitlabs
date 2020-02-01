import actionsTypes from '../../actionsTypes/auth';

export const handleChange = (name, value) => ({
  type: actionsTypes.SETINPUTSVALUESAUTH,
  name,
  value,
});

export const setUsers = users => ({
  type: actionsTypes.SETUSERS,
  users,
});

export const clearInputs = () => ({
  type: actionsTypes.CLEARINPUTS,
});

export const handleLoading = status => ({
  type: actionsTypes.HANDLELOADINGAUTH,
  status,
});
