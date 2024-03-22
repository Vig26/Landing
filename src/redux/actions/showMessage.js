import { REMOVE_MESSAGE, SHOW_MESSAGE } from "../contants/action-types";

export const showMessage = (payload) => {
  return {
    type: SHOW_MESSAGE,
    payload,
  };
};

export const removeMessage = () => {
  return {
    type: REMOVE_MESSAGE,
  };
};