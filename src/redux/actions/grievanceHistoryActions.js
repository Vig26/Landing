import fetcher from "../../utils/fetcher";
import {
  GRIEVANCE_HISTORY_REQUEST_ERROR,
  GRIEVANCE_HISTORY_REQUEST_SUCCESS,
  GRIEVANCE_HISTORY_REQUEST_START,
  GRIEVANCE_HISTORY_REQUEST_UPDATE,
} from "../contants/action-types";
import { showMessage } from "./showMessage";
export const getGrievanceData = (payload) => (dispatch) => {
  dispatch({ type: GRIEVANCE_HISTORY_REQUEST_START });
  fetcher({
    method: "POST",
    request: `getGrievanceHistory`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: GRIEVANCE_HISTORY_REQUEST_SUCCESS,
        payload: response.data.data.tickets,
      });
    })
    .catch((error) => {
      dispatch({
        type: GRIEVANCE_HISTORY_REQUEST_ERROR,
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

export const searchGrievanceData = (payload) => (dispatch) => {
  dispatch({ type: GRIEVANCE_HISTORY_REQUEST_UPDATE, payload });
};
