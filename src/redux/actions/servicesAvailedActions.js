import fetcher from "../../utils/fetcher";
import {
  SERVICES_AVAILED_REQUEST_START,
  SERVICES_AVAILED_REQUEST_SUCCESS,
  SERVICES_AVAILED_REQUEST_ERROR,
  SERVICES_AVAILED_REQUEST_UPDATE,
} from "../contants/action-types";
import { showMessage } from "./showMessage";
export const getServiceAvailedRequest = (payload) => (dispatch) => {
  dispatch({ type: SERVICES_AVAILED_REQUEST_START });
  fetcher({
    method: "POST",
    request: `getAadharDataBlockChainApi`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: SERVICES_AVAILED_REQUEST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SERVICES_AVAILED_REQUEST_ERROR,
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

export const searchServicesData = (payload) => (dispatch) => {
  dispatch({ type: SERVICES_AVAILED_REQUEST_UPDATE, payload });
};
