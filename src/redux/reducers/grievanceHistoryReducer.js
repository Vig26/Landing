import convertDate from "../../utils/isoToDate";
import {
  GRIEVANCE_HISTORY_REQUEST_ERROR,
  GRIEVANCE_HISTORY_REQUEST_START,
  GRIEVANCE_HISTORY_REQUEST_SUCCESS,
  GRIEVANCE_HISTORY_REQUEST_UPDATE,
} from "../contants/action-types";

const initialState = {
  data: [],
  loading: false,
  filteredData: [],
  error: "",
};

const grievanceHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GRIEVANCE_HISTORY_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case GRIEVANCE_HISTORY_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.map((item) => {
          return {
            ...item,
            createdTime: convertDate(item.createdTime),
          };
        }),
      };
    case GRIEVANCE_HISTORY_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GRIEVANCE_HISTORY_REQUEST_UPDATE:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};
export default grievanceHistoryReducer;
