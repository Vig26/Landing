import getServiceName from "../../utils/getServiceName";
import {
  SERVICES_AVAILED_REQUEST_START,
  SERVICES_AVAILED_REQUEST_ERROR,
  SERVICES_AVAILED_REQUEST_SUCCESS,
  SERVICES_AVAILED_REQUEST_UPDATE,
} from "../contants/action-types";

const initialState = {
  data: [],
  loading: false,
  error: "",
  filteredData: [],
};

const servicesAvailedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICES_AVAILED_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case SERVICES_AVAILED_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.map((item) => {
          return {
            ...item,
            CERTIFICATENAME: getServiceName(item.SERVICECODE),
          };
        }),
      };
    case SERVICES_AVAILED_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SERVICES_AVAILED_REQUEST_UPDATE:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};
export default servicesAvailedReducer;
