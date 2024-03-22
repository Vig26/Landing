import fetcher from "../../utils/fetcher";
import {
  GET_NEWS_DETAILS_ERROR,
  GET_NEWS_DETAILS_START,
  GET_NEWS_DETAILS_SUCCESS,
  GET_BANNER_DETAILS_START,
  GET_BANNER_DETAILS_SUCCESS,
  GET_BANNER_DETAILS_ERROR,
} from "../contants/action-types";

export const getLandingData = () => (dispatch) => {
  dispatch(getBannerData());
  dispatch({ type: GET_NEWS_DETAILS_START });
  fetcher({
    request: `getNews`,
    isToken: false,
  })
    .then((response) => {
      dispatch({
        type: GET_NEWS_DETAILS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_NEWS_DETAILS_ERROR,
        payload: error,
      });
      console.log(error, "Error");
    });
};

export const getBannerData = () => (dispatch) => {
  dispatch({ type: GET_BANNER_DETAILS_START });
  fetcher({
    request: `getPortalResource`,
    isToken: false,
  })
    .then((response) => {
      dispatch({
        type: GET_BANNER_DETAILS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_BANNER_DETAILS_ERROR,
        payload: error,
      });
      console.log(error, "Error");
    });
};
