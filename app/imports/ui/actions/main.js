import { MAIN } from './action_types';

export const loginPopupHandler = (on) => {
  return {
    type: MAIN.LOGIN_POPUP_HANDLER,
    on,
  };
}