import fetcher from "../../utils/fetcher";
import {
  BENEFITS_AVAILED_REQUEST_ERROR,
  BENEFITS_AVAILED_REQUEST_SUCCESS,
  BENEFITS_AVAILED_REQUEST_START,
  BENEFITS_AVAILED_REQUEST_UPDATE,
  GET_FAMILY_MEMBERS_LIST_ERROR,
  GET_FAMILY_MEMBERS_LIST_SUCCESS,
  GET_FAMILY_MEMBERS_LIST_START,
  PDS_TRANSACTIONAL_DATA_SUCCESS,
  PDS_TRANSACTIONAL_DATA_ERROR
} from "../contants/action-types";
import { showMessage } from "./showMessage";
export const getBenefitsData = (payload) => (dispatch) => {
  dispatch({ type: BENEFITS_AVAILED_REQUEST_START });
  fetcher({
    method: "POST",
    request: `getMakkalScheme`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: BENEFITS_AVAILED_REQUEST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: BENEFITS_AVAILED_REQUEST_ERROR,
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

export const searchBenefitsData = (payload) => (dispatch) => {
  dispatch({ type: BENEFITS_AVAILED_REQUEST_UPDATE, payload });
};
export const getFamilyMembersList = (payload) => (dispatch) => {
  dispatch({ type: GET_FAMILY_MEMBERS_LIST_START });
  fetcher({
    method: "POST",
    request: `getFamilyMembersList`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: GET_FAMILY_MEMBERS_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_FAMILY_MEMBERS_LIST_ERROR,
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
export const getPDSTransactionalData = (payload) => (dispatch) => {
  fetcher({
    method: "POST",
    request: `getPDSdata`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: PDS_TRANSACTIONAL_DATA_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: PDS_TRANSACTIONAL_DATA_ERROR,
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
