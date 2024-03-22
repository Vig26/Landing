import fetcher from "../../utils/fetcher";
import {
  GET_SOCIAL_MEDIA_ERROR,
  GET_SOCIAL_MEDIA_SUCCESS,
  GET_SOCIAL_MEDIA_START,
  UPDATE_SOCIAL_MEDIA_ERROR,
  UPDATE_SOCIAL_MEDIA_START,
  UPDATE_SOCIAL_MEDIA_SUCCESS,
} from "../contants/action-types";
import { showMessage } from "./showMessage";

export const getSocialMediaData = (payload) => (dispatch) => {
  dispatch({ type: GET_SOCIAL_MEDIA_START });
  fetcher({
    method: "POST",
    request: `getSocialMedia`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: GET_SOCIAL_MEDIA_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_SOCIAL_MEDIA_ERROR,
        payload: error,
      });
      console.log(error, "Error");
    });
};

export const modifySocialMediaData = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_SOCIAL_MEDIA_START });
  fetcher({
    method: "POST",
    request: `updateSocialMedia`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: UPDATE_SOCIAL_MEDIA_SUCCESS,
        payload: response.data.data,
      });
      if (
        response.data.status === "OK" ||
        response.data.status === "SUCCESS"
      ){
        dispatch(
          showMessage({
            title: response.data.message,
            variant: "success",
          })
        );
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_SOCIAL_MEDIA_ERROR,
        payload: error,
      });
      console.log(error, "Error");
    });
};
