import {
  GET_USER_PROFILE_REQUEST_START,
  GET_USER_PROFILE_REQUEST_SUCCESS,
  GET_USER_PROFILE_REQUEST_ERROR,
  GET_MASTER_DATA_REQUEST_START,
  GET_MASTER_DATA_REQUEST_SUCCESS,
  GET_MASTER_DATA_REQUEST_ERROR,
  GET_USER_DETAILS_START,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_ERROR,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_PROFILE_START,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,
  GET_TALUKA_START,
  GET_TALUKA_SUCCESS,
  GET_TALUKA_ERROR,
  GET_VILLAGE_START,
  GET_VILLAGE_SUCCESS,
  GET_VILLAGE_ERROR,
  USER_PROFILE_UPDATE_AS_AADHAAR_START,
  USER_PROFILE_UPDATE_AS_AADHAAR_SUCCESS,
  USER_PROFILE_UPDATE_AS_AADHAAR_ERROR,
  UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_START,
  UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_SUCCESS,
  UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_ERROR,
  EMAIL_OTP_VERIFIED,
  EPETTAGAM_VERIFIED
} from "../contants/action-types";

const initialState = {
  userDetails: null,
  userMasterData: [],
  addressDetails: null,
  familyDetails: null,
  contactDetails: null,
  updatedDetails: {},
  talukaData: null,
  villageData: null,
  updateUserProfileAsAadhaar: null,
  loading: false,
  error: "",
  modalLoading: false,
  EmailOTPVerification: false,
  uploadProfileSuccess: false,
  epettagamtoken: ""
};


const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };
    case GET_USER_PROFILE_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_MASTER_DATA_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MASTER_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        userMasterData: action.payload,
      };
    case GET_MASTER_DATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_USER_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case GET_USER_DETAILS_ERROR:
      return {
        ...state,
        addressDetails: null,
        loading: false,
        error: action.payload,
      };
    case UPDATE_USER_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedDetails: {},
        uploadProfileSuccess: true
      };
    case UPDATE_USER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        updatedDetails: { ...action.payload },
        loading: false,
      };

    case USER_PROFILE_UPDATE_AS_AADHAAR_START:
      return {
        ...state,
        loading: true,
      };
    case GET_TALUKA_START:
      return {
        ...state,
        loading: true,
      };
    case GET_TALUKA_SUCCESS:
      return {
        ...state,
        loading: false,
        talukaData: action.payload,
      };
    case GET_TALUKA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_VILLAGE_START:
      return {
        ...state,
        loading: true,
      };
    case GET_VILLAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        villageData: action.payload,
      };
    case GET_VILLAGE_ERROR:
      return {
        ...state,
        loading: false,
      }

    case USER_PROFILE_UPDATE_AS_AADHAAR_SUCCESS:
      return {
        ...state,
        updateUserProfileAsAadhaar: { ...action.payload },
        loading: false,
      };
    case USER_PROFILE_UPDATE_AS_AADHAAR_ERROR:
    case UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_START:
      return {
        ...state,
        modalLoading: true,
      };
    case UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_SUCCESS:
      return {
        ...state,
        modalLoading: false,
      };
    case UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_ERROR:
      return {
        ...state,
        modalLoading: false,
        error: action.payload,
      };
    case EMAIL_OTP_VERIFIED:
      return{
        ...state,
        EmailOTPVerification: true
      }
    case EPETTAGAM_VERIFIED:
      return{
        ...state,
        epettagamtoken: action.payload
      }
    default:
      return state;
  }
};

export default userProfileReducer;
