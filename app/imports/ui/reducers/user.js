import { USER } from '../actions/action_types';
import _ from 'lodash';

const initialState = {
  isAuthenticated: false,
  users: [],
  curretUserId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'USER.REGISTER_SUCCESSFULLY_HANDLER':
      return {
        ...state,
        isAuthenticated: true,
        user: _.concat(state.users, action.newUser),
        curretUserId: action.newUser.id
      }
    case 'USER.LOGIN_SUCCESSFULLY_HANDLER':
      return {
        ...state,
        isAuthenticated: true,
        curretUserId: action.id,
      }
    case 'USER.LOGOUT_HANDLER':
      return {
        ...state,
        isAuthenticated: false,
        curretUserId: null,
      }
    default:
      return state;
  }
}
