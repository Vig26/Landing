import {
    SUMMARY_REQUEST_ERROR,
    SUMMARY_REQUEST_SUCCESS,
    SUMMARY_REQUEST_START,
  } from "../contants/action-types";
  
  const initialState = {
    summaryData: [],
    loading: false,
    error: "",
  };
  
  const summaryReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUMMARY_REQUEST_START:
        return {
          ...state,
          loading: true,
        };
      case SUMMARY_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          summaryData: action.payload,
        };
      case SUMMARY_REQUEST_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default summaryReducer;
  