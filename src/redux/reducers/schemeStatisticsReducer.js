import {
  SCHEME_STAT_DEPARTMENT_START,
  SCHEME_STAT_DEPARTMENT_SUCCESS,
  SCHEME_STAT_DEPARTMENT_ERROR,
  SCHEME_STAT_DEPARTMENT_District_START,
  SCHEME_STAT_DEPARTMENT_District_SUCCESS,
  SCHEME_STAT_DEPARTMENT_District_ERROR,
  SCHEME_STAT_DEPARTMENT_Taluk_START,
  SCHEME_STAT_DEPARTMENT_Taluk_SUCCESS,
  SCHEME_STAT_DEPARTMENT_Taluk_ERROR,
  SCHEME_STAT_DEPARTMENT_Village_START,
  SCHEME_STAT_DEPARTMENT_Village_SUCCESS,
  SCHEME_STAT_DEPARTMENT_Village_ERROR,
  SCHEME_STAT_BENEFICIARY_Village_START,
  SCHEME_STAT_BENEFICIARY_Village_SUCCESS,
  SCHEME_STAT_BENEFICIARY_Village_ERROR,
  LOADING,
} from "../contants/action-types";

const initialState = {
  data: [],
  departmentWiseData: [],
  talukWiseData: [],
  villageWiseData: [],
  error: "",
  loading: false,
  beneficiaryVillageWise: []
};

const SchemeStatisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCHEME_STAT_DEPARTMENT_START:
      console.log("Start");
      return {
        ...state,
      };
    case SCHEME_STAT_DEPARTMENT_SUCCESS:
      console.log("Action.payload", action.payload);
      return {
        ...state,
        data: action.payload,
        loading:false
      };
    case SCHEME_STAT_DEPARTMENT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading:false
      };
    case SCHEME_STAT_DEPARTMENT_District_START:
      console.log("Start");
      return {
        ...state,
        departmentWiseData: [],
      };
    case SCHEME_STAT_DEPARTMENT_District_SUCCESS:
      console.log("Action.payload", action.payload);
      return {
        ...state,
        departmentWiseData: action.payload,
        loading:false
      };
    case SCHEME_STAT_DEPARTMENT_District_ERROR:
      return {
        ...state,
        error: action.payload,
        loading:false
      };
    case SCHEME_STAT_DEPARTMENT_Taluk_START:
      console.log("Start");
      return {
        ...state,
        talukWiseData: [],
      };
    case SCHEME_STAT_DEPARTMENT_Taluk_SUCCESS:
      console.log("Action.payload", action.payload);
      return {
        ...state,
        talukWiseData: action.payload,
        loading:false
      };
    case SCHEME_STAT_DEPARTMENT_Taluk_ERROR:
      return {
        ...state,
        error: action.payload,
        loading:false
      };
    case SCHEME_STAT_DEPARTMENT_Village_START:
      console.log("Start");
      return {
        ...state,
        villageWiseData: [],
      };
    case SCHEME_STAT_DEPARTMENT_Village_SUCCESS:
      console.log("Action.payload", action.payload);
      return {
        ...state,
        villageWiseData: action.payload,
        loading:false
      };
    case SCHEME_STAT_DEPARTMENT_Village_ERROR:
      return {
        ...state,
        error: action.payload,
        loading:false
      };


      case SCHEME_STAT_BENEFICIARY_Village_START:
      console.log("Start");
      return {
        ...state,
        beneficiaryVillageWise: [],
      };
    case SCHEME_STAT_BENEFICIARY_Village_SUCCESS:
      console.log("Action.payload", action.payload);
      return {
        ...state,
        beneficiaryVillageWise: action.payload,
        loading:false
      };
    case SCHEME_STAT_BENEFICIARY_Village_ERROR:
      return {
        ...state,
        error: action.payload,
        loading:false
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default SchemeStatisticsReducer;
