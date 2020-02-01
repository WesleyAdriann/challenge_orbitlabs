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
