import {
  LOGIN_USING_MOBILE,
  DO_LOGIN,
  DO_LOGOUT,
  STORE_SELECTED_USER,
  REGISTRATION_USING_AADHAR,
} from "../contants/action-types";

const MakkalId = localStorage.getItem("MakkalId");

const initialState = { isLoggedIn: !!MakkalId, user: null };

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USING_MOBILE:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case STORE_SELECTED_USER:
      return {
        ...state,
        isLoggedIn: false,
        user: payload,
      };
    case DO_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case DO_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case REGISTRATION_USING_AADHAR:
      return {
        ...state,
        isLoggedIn: false,
        registrationData: payload,
      };
    default:
      return state;
  }
};
