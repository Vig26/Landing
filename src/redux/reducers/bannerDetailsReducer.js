import {
  GET_BANNER_DETAILS_START,
  GET_BANNER_DETAILS_SUCCESS,
  GET_BANNER_DETAILS_ERROR,
} from "../contants/action-types";

const initialState = {
  bannerData: [],
  loading: false,
  error: "",
};

const bannerDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNER_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_BANNER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        bannerData: action.payload,
      };
    case GET_BANNER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default bannerDetailsReducer;
