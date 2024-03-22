import fetcher from "../../utils/fetcher";
import {
  ERROR_PERSONAL_DETAILS,
  LOADING_PERSONAL_DETAILS,
} from "../contants/action-types";
import { updateUserDetails } from "./loginActions";
import {showMessage} from "./showMessage"

export const getPersonalDetails = (payload) => (dispatch) => {
  dispatch({ type: LOADING_PERSONAL_DETAILS });
  fetcher({
    method: "POST",
    request: `getPersonData`,
    payload,
  })
    .then((response) => {
      dispatch(updateUserDetails(response.data.data || null));
    })
    .catch((error) => {
      dispatch({
        type: ERROR_PERSONAL_DETAILS,
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
