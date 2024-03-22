import {
  TRACK_SERVICE_REQUEST_START,
  TRACK_SERVICE_REQUEST_SUCCESS,
  TRACK_SERVICE_REQUEST_ERROR,
  TRACK_SERVICE_REQUEST_BY_SR_NUMBER_START,
  TRACK_SERVICE_REQUEST_BY_SR_NUMBER_SUCCESS,
  TRACK_SERVICE_REQUEST_BY_SR_NUMBER_ERROR,
  TRACK_SERVICE_REQUEST_UPDATE
} from "../contants/action-types";

const initialState = {
  data: [],
  filteredData: [],
  loading: false,
  error: "",
};

const trackServiceRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACK_SERVICE_REQUEST_START:
    case TRACK_SERVICE_REQUEST_BY_SR_NUMBER_START:
      return {
        ...state,
        loading: true,
      };
    case TRACK_SERVICE_REQUEST_SUCCESS:
    case TRACK_SERVICE_REQUEST_BY_SR_NUMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case TRACK_SERVICE_REQUEST_ERROR:
    case TRACK_SERVICE_REQUEST_BY_SR_NUMBER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TRACK_SERVICE_REQUEST_UPDATE:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};

export default trackServiceRequestReducer;
