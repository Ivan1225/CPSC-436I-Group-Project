import { MAIN } from '../actions/action_types';

const initialState = {
  loginPopup: false,
  registerPopup: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'MAIN.LOGIN_POPUP_HANDLER':
      return {
        ...state,
        loginPopup: action.on,
      }
    case 'MAIN.REGISTER_POPUP_HANDLER':
      return {
        ...state,
        registerPopup: action.on,
      }
    default:
      return state;
  }
}
