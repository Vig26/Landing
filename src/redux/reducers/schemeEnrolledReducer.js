import {
  SCHEME_ENROLLED_REQUEST_ERROR,
  SCHEME_ENROLLED_REQUEST_SUCCESS,
  SCHEME_ENROLLED_REQUEST_START,
  SCHEME_ENROLLED_REQUEST_UPDATE,
} from "../contants/action-types";

const initialState = {
  data: [],
  filteredData: [],
  loading: false,
  error: "",
};

const schemeEnrolledReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCHEME_ENROLLED_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case SCHEME_ENROLLED_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case SCHEME_ENROLLED_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SCHEME_ENROLLED_REQUEST_UPDATE:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};
export default schemeEnrolledReducer;
