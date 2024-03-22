import {
  AADHAAR_SMS_KYC, AADHAAR_USERS_LIST, ERROR, GET_AADHAAR_DATA, IS_LOGGED_IN, LOADING, LOGOUT_USER, SEND_AADHAAR_SMS, SEND_OTP, USER_DETAILS, USER_TOKEN,SAVE_CONSENT
} from "../contants/action-types";

const MakkalId = localStorage.getItem("MakkalId");

const initialState = {
  isLoggedIn: !!MakkalId,
  makkalId: MakkalId,
  aadhaarUsers: [],
  user: null,
  loading: false,
  sendOtp: {},
  aadhaarData: {},
  aadhaarSmsData: {},
  aadhaarKyc: {},
  error: {},
  saveconsent:false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case AADHAAR_USERS_LIST:
      return {
        ...state,
        aadhaarUsers: action.payload,
      };
    case USER_DETAILS:
      return {
        ...state,
        user: action.payload,
        makkalId:
          action?.payload?.makkalId || action?.payload?.personalInfo?.makkalId,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_TOKEN:
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    case SEND_OTP:
      return {
        ...state,
        sendOtp: action.payload,
        loading: false,
      };
    case GET_AADHAAR_DATA:
      return {
        ...state,
        aadhaarData: action.payload,
        loading: false,
      };
    case SEND_AADHAAR_SMS:
      return {
        ...state,
        aadhaarSmsData: action.payload,
        loading: false,
      };
    case AADHAAR_SMS_KYC:
      return {
        ...state,
        aadhaarKyc: action.payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        aadhaarUsers: [],
        user: null,
        makkalId: "",
      };
    case SAVE_CONSENT:
      return {
        ...state,
        saveconsent:action.payload
      }
    default:
      return state;
  }
};

export default loginReducer;
