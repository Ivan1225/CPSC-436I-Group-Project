import { USER } from '../actions/action_types';
import _ from 'lodash';

const initialState = {
  isAuthenticated: false,
  users: [
    {
      id: 1,
      email: 'example@example.com',
      firstName: 'example',
      lastName: 'example',
      phoneNumber: "12345",
      password: '123123',
    }
  ],
  curretUserId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER.REGISTER_SUCCESSFULLY_HANDLER:
      let id;
      if (_.isEmpty(state.users)) {
        id = 1;
      } else {
        id = _.last(_.sortBy(state.users, ['id'])).id + 1;
      }

      return {
        ...state,
        isAuthenticated: true,
        users: _.concat(state.users, _.assign(action.newUser, {id: id})),
        curretUserId: action.newUser.id
      }
    case USER.LOGIN_SUCCESSFULLY_HANDLER:
      return {
        ...state,
        isAuthenticated: true,
        curretUserId: action.id,
      }
    case USER.LOGOUT_HANDLER:
      return {
        ...state,
        isAuthenticated: false,
        curretUserId: null,
      }
    case USER.UPDATE_USER:
      console.log(action.user)
      return {
        ...state,
        users: _.map(state.users, u => {
          return u.id === action.user.id ? action.user : u;
        }),
      }
    default:
      return state;
  }
}
