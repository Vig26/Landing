// import { ActionTypes } from "../contants/action-types";
import {
  LOGIN_USING_MOBILE,
  DO_LOGIN,
  DO_LOGOUT,
  STORE_SELECTED_USER,
  REGISTRATION_USING_AADHAR,
} from "../contants/action-types";

export const loginusingmobile = (payload) => (dispatch) => {
  dispatch({
    type: LOGIN_USING_MOBILE,
    payload,
  });
};

export const storeSelectedUser = (payload) => (dispatch) => {
  dispatch({
    type: STORE_SELECTED_USER,
    payload,
  });
};

export const doLogin = (payload) => (dispatch) => {
  dispatch({
    type: DO_LOGIN,
    payload,
  });
};

export const doLogout = () => (dispatch) => {
  dispatch({ type: DO_LOGOUT });
  localStorage.removeItem("MakkalId");
};

export const registrationUsingAadhar = (data) => (dispatch) => {
  const allData = { userData: data };
  dispatch({
    type: REGISTRATION_USING_AADHAR,
    payload: { user: allData },
  });
};
