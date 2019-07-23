import { MAIN } from '../actions/action_types';

const initialState = {
  intro: 'Explore our high-quality products from our credible partners.',
  subIntro: 'From Local but not only Local.',
  loginPopup: false,
  registerPopup: false,
  policyModal: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MAIN.LOGIN_POPUP_HANDLER:
      return {
        ...state,
        loginPopup: action.on,
      }
    case MAIN.OPEN_POLICY_MODAL_POPUP:
      return {
        ...state,
        policyModal: true,
      }
    case MAIN.CLOSE_POLICY_MODAL_POPUP:
      return {
        ...state,
        policyModal: false,
      }
    case MAIN.REGISTER_POPUP_HANDLER:
      return {
        ...state,
        registerPopup: action.on,
      }
    default:
      return state;
  }
}
