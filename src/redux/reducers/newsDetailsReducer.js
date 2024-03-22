import {
  GET_NEWS_DETAILS_ERROR,
  GET_NEWS_DETAILS_START,
  GET_NEWS_DETAILS_SUCCESS,
} from "../contants/action-types";

const initialState = {
  newsData: [],
  loading: false,
  error: "",
};

const newsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_NEWS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        newsData: action.payload,
      };
    case GET_NEWS_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default newsDetailsReducer;
