import { MAIN } from './action_types';

export const loginPopupHandler = (on) => {
  return {
    type: MAIN.LOGIN_POPUP_HANDLER,
    on,
  };
}
export const openPolicyModal = () => {
  return {
    type: MAIN.OPEN_POLICY_MODAL,
  };
}
