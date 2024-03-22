import {
  GET_DETAILED_SCHEME_DETAILS_ERROR,
  GET_DETAILED_SCHEME_DETAILS_START,
  GET_DETAILED_SCHEME_DETAILS_SUCCESS,
  GET_DETAILED_SCHEME_DETAILS_REMOVE,
} from "../contants/action-types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const schemeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILED_SCHEME_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_DETAILED_SCHEME_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_DETAILED_SCHEME_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_DETAILED_SCHEME_DETAILS_REMOVE:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};
export default schemeDetailsReducer;
