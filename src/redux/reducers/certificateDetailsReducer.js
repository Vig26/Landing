import {
  CERTIFICATE_DETAIL_REQUEST_ERROR,
  CERTIFICATE_DETAIL_REQUEST_SUCCESS,
  CERTIFICATE_DETAIL_REQUEST_START,
} from "../contants/action-types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const certificateDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CERTIFICATE_DETAIL_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case CERTIFICATE_DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CERTIFICATE_DETAIL_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default certificateDetailsReducer;
