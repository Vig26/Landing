import fetcher from "../../utils/fetcher";
import {
  SCHEME_ENROLLED_REQUEST_ERROR,
  SCHEME_ENROLLED_REQUEST_SUCCESS,
  SCHEME_ENROLLED_REQUEST_START,
  SCHEME_ENROLLED_REQUEST_UPDATE,
} from "../contants/action-types";
import { showMessage } from "./showMessage";
export const getSchemeEnrolledData = (payload) => (dispatch) => {
  dispatch({ type: SCHEME_ENROLLED_REQUEST_START });
  fetcher({
    method: "POST",
    request: `getMakkalScheme`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: SCHEME_ENROLLED_REQUEST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SCHEME_ENROLLED_REQUEST_ERROR,
        payload: error,
      });
      console.log(error);
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};
export const searchSchemeEnrolledData = (payload) => (dispatch) => {
  dispatch({ type: SCHEME_ENROLLED_REQUEST_UPDATE, payload });
};
