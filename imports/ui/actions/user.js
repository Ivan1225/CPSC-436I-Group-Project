import { USER } from './action_types';

export const loginSuccessfullyHandler = (id) => {
  return {
    type: USER.LOGIN_SUCCESSFULLY_HANDLER,
    id,
  };
}

export const registerSuccessfullyHandler = (newUser) => {
  return {
    type: USER.REGISTER_SUCCESSFULLY_HANDLER,
    newUser,
  };
}

export const logoutHandler = () => {
  return {
    type: USER.LOGOUT_HANDLER,
  };
}
export const updateUser = (user) => {
  return {
    type: USER.UPDATE_USER,
    user
  };
}
