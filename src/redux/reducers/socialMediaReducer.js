import {
  GET_SOCIAL_MEDIA_ERROR,
  GET_SOCIAL_MEDIA_SUCCESS,
  GET_SOCIAL_MEDIA_START,
  UPDATE_SOCIAL_MEDIA_START,
  UPDATE_SOCIAL_MEDIA_SUCCESS,
  UPDATE_SOCIAL_MEDIA_ERROR,
} from "../contants/action-types";

const initialState = {
  data: [],
  loading: false,
  error: "",
  updatedDataResponse: [],
  updatedDataLoading: false,
  updatedDataError: "",
};

const socialMediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOCIAL_MEDIA_START:
      return {
        ...state,
        loading: true,
      };
    case GET_SOCIAL_MEDIA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_SOCIAL_MEDIA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_SOCIAL_MEDIA_START:
      return {
        ...state,
        updatedDataLoading: true,
      };
    case UPDATE_SOCIAL_MEDIA_SUCCESS:
      return {
        ...state,
        updatedDataLoading: false,
        updatedDataResponse: action.payload,
      };
    case UPDATE_SOCIAL_MEDIA_ERROR:
      return {
        ...state,
        updatedDataLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default socialMediaReducer;
