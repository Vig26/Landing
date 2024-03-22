import fetcher from "../../utils/fetcher";
import {
  SUMMARY_REQUEST_ERROR,
  SUMMARY_REQUEST_SUCCESS,
  SUMMARY_REQUEST_START,
} from "../contants/action-types";
import { showMessage } from "./showMessage";
export const summaryActions = (payload) => (dispatch) => {
  dispatch({ type: SUMMARY_REQUEST_START });
  fetcher({
    method: "POST",
    request: `getsummary`,
    payload,
  })
    .then((response) => {
        console.log("Response,",response.data);
      dispatch({
        type: SUMMARY_REQUEST_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SUMMARY_REQUEST_ERROR,
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