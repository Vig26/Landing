import { SHOW_MESSAGE, REMOVE_MESSAGE } from "../contants/action-types";

const initialState = {
  showMessage: { title: "", variant: "info", description: "" },
};

const showMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        showMessage: action.payload,
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        showMessage: { title: "", variant: "info", description: "" },
      };
    default:
      return state;
  }
};

export default showMessageReducer;
