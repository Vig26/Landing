import fetcher from "../../utils/fetcher";
import {
  TRACK_SERVICE_REQUEST_START,
  TRACK_SERVICE_REQUEST_SUCCESS,
  TRACK_SERVICE_REQUEST_ERROR,
  TRACK_SERVICE_REQUEST_BY_SR_NUMBER_START,
  TRACK_SERVICE_REQUEST_BY_SR_NUMBER_SUCCESS,
  TRACK_SERVICE_REQUEST_BY_SR_NUMBER_ERROR,
  TRACK_SERVICE_REQUEST_UPDATE
} from "../contants/action-types";
import { showMessage } from "./showMessage";
export const getTrackServiceRequest = (payload) => (dispatch) => {
  dispatch({ type: TRACK_SERVICE_REQUEST_START });
  fetcher({
    method: "POST",
    request: `getServiceDetails`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: TRACK_SERVICE_REQUEST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: TRACK_SERVICE_REQUEST_ERROR,
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
export const getTrackServiceRequestBySrNumber = (payload) => (dispatch) => {
  dispatch({ type: TRACK_SERVICE_REQUEST_BY_SR_NUMBER_START });
  fetcher({
    method: "POST",
    request: `getServiceDetailsSrnum`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: TRACK_SERVICE_REQUEST_BY_SR_NUMBER_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: TRACK_SERVICE_REQUEST_BY_SR_NUMBER_ERROR,
        payload: error,
      });
      console.log(error);
    });
};

export const searchTrackServiceData = (payload) => (dispatch) => {
  dispatch({ type: TRACK_SERVICE_REQUEST_UPDATE, payload });
};
