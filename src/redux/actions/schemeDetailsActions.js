import fetcher from "../../utils/fetcher";
import {
  GET_DETAILED_SCHEME_DETAILS_ERROR,
  GET_DETAILED_SCHEME_DETAILS_START,
  GET_DETAILED_SCHEME_DETAILS_SUCCESS,
  GET_DETAILED_SCHEME_DETAILS_REMOVE,
} from "../contants/action-types";
import { showMessage } from "./showMessage";

export const getSpecificSchemeDetails = (schemeId) => (dispatch) => {
  dispatch({ type: GET_DETAILED_SCHEME_DETAILS_START });
  fetcher({
    request: `getSchemeById/${schemeId}`,
    isToken: false,
  })
    .then((response) => {
      dispatch({
        type: GET_DETAILED_SCHEME_DETAILS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DETAILED_SCHEME_DETAILS_ERROR,
        payload: error,
      });
      console.log(error, "Error");
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const removeSpecificSchemeDetails = () => {
  return {
    type: GET_DETAILED_SCHEME_DETAILS_REMOVE,
  };
};
