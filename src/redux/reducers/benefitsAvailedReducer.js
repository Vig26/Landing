import {
  BENEFITS_AVAILED_REQUEST_ERROR,
  BENEFITS_AVAILED_REQUEST_SUCCESS,
  BENEFITS_AVAILED_REQUEST_START,
  BENEFITS_AVAILED_REQUEST_UPDATE,
  GET_FAMILY_MEMBERS_LIST_ERROR,
  GET_FAMILY_MEMBERS_LIST_SUCCESS,
  GET_FAMILY_MEMBERS_LIST_START,
  PDS_TRANSACTIONAL_DATA_SUCCESS,
  PDS_TRANSACTIONAL_DATA_ERROR
} from "../contants/action-types";

const initialState = {
  data: [],
  filteredData: [],
  familyMembersList: null,
  familyLoader: false,
  loading: false,
  error: "",
  pdsData:[]
};

const benefitsAvailedReducer = (state = initialState, action) => {
  switch (action.type) {
    case BENEFITS_AVAILED_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case BENEFITS_AVAILED_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case BENEFITS_AVAILED_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case BENEFITS_AVAILED_REQUEST_UPDATE:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
      };
    case GET_FAMILY_MEMBERS_LIST_START:
      return {
        ...state,
        familyLoader: true,
      };
    case GET_FAMILY_MEMBERS_LIST_SUCCESS:
      return {
        ...state,
        familyLoader: false,
        familyMembersList: action.payload,
      };
    case GET_FAMILY_MEMBERS_LIST_ERROR:
      return {
        ...state,
        familyLoader: false,
        error: action.payload,
      };
    case PDS_TRANSACTIONAL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        pdsData: action.payload,
      };
    case PDS_TRANSACTIONAL_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default benefitsAvailedReducer;
