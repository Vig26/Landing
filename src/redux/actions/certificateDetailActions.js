import fetcher from "../../utils/fetcher";
import {
  CERTIFICATE_DETAIL_REQUEST_ERROR,
  CERTIFICATE_DETAIL_REQUEST_SUCCESS,
  CERTIFICATE_DETAIL_REQUEST_START,
} from "../contants/action-types";

export const getCertificateDetails = (payload) => (dispatch) => {
  dispatch({ type: CERTIFICATE_DETAIL_REQUEST_START });
  fetcher({
    method: "POST",
    request: `getAdharEsevaiResponse`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: CERTIFICATE_DETAIL_REQUEST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: CERTIFICATE_DETAIL_REQUEST_ERROR,
        payload: error,
      });
      console.log(error);
    });
};
