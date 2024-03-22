import {
  GET_PRIMARY_FILTER_START,
  GET_PRIMARY_FILTER_SUCCESS,
  GET_PRIMARY_FILTER_ERROR,
  GET_SCHEME_DETAILS_START,
  GET_SCHEME_DETAILS_SUCCESS,
  GET_SCHEME_DETAILS_ERROR,
  ADVANCE_FILTER_DATA_ADD,
  GET_QUESTION_START,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_ERROR,
  NEXT_STEP,
  BACK_STEP,
  CHECK_USER_QUESTION_PRESENT_START,
  CHECK_USER_QUESTION_PRESENT_SUCCESS,
  CHECK_USER_QUESTION_PRESENT_ERROR,
  STEPS_VALUE_SAVE,
  GET_ADVANCE_FILTER_SCHEME_DETAILS_START,
  GET_ADVANCE_FILTER_SCHEME_DETAILS_SUCCESS,
  GET_ADVANCE_FILTER_SCHEME_DETAILS_ERROR,
  SINGLE_SELECTED_CATEGORY,
  GET_ELIGIBILITY_QUESTION_START,
  GET_ELIGIBILITY_QUESTION_SUCCESS,
  GET_ELIGIBILITY_QUESTION_ERROR,
  CHECK_USER_ELIGIBILITY_SAVE_START,
  CHECK_USER_ELIGIBILITY_SAVE_SUCCESS,
  CHECK_USER_ELIGIBILITY_SAVE_ERROR,
  GET_ELIGIBILITY_QUESTION_REMOVE,
  SEARCH_SCHEME_BY_VALUE_START,
  SEARCH_SCHEME_BY_VALUE_SUCCESS,
  SEARCH_SCHEME_BY_VALUE_ERROR,
  EMPTY_SCHEME_QUESTIONS,
  TYPE_REMOVE_SEARCH_FILTER
} from "../contants/action-types";

const initialState = {
  schemeData: {},
  primaryFilter: [],
  loadingPrimary: false,
  loadingSchemeData: false,
  advanceFilterData: null,
  schemeQuestionList: {},
  questionData: {
    activeStep: 0,
    checkUserQuestionFlag: null,
    questionStepsValue: null,
    questionLoading: false,
  },
  getAdvanceFilterSchemeDetails: null,
  advanceFilterLoading: false,
  saveQuestionData: null,
  singleSelectedCategory: null,
  getEligibilityQuestion: null,
  eligibilityQuestionLoading: false,
  checkUserEligibilitySaveData: null,
  checkUserEligibilitySaveDataLoading: false,
  searchSchemeByValueData: [],
  searchSchemeByValueLoading: false,
  loading: false,
  error: "",
};

const schemeEligibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRIMARY_FILTER_START:
      return {
        ...state,
        loadingPrimary: true,
      };
    case GET_PRIMARY_FILTER_SUCCESS:
      return {
        ...state,
        loadingPrimary: false,
        primaryFilter: action.payload,
      };
    case GET_PRIMARY_FILTER_ERROR:
      return {
        ...state,
        loadingPrimary: false,
        error: action.payload,
      };
    case GET_SCHEME_DETAILS_START:
      return {
        ...state,
        loadingSchemeData: true,
      };
    case GET_SCHEME_DETAILS_SUCCESS:
      return {
        ...state,
        loadingSchemeData: false,
        schemeData: action.payload,
      };
    case GET_SCHEME_DETAILS_ERROR:
      return {
        ...state,
        loadingSchemeData: false,
        error: action.payload,
      };
    case ADVANCE_FILTER_DATA_ADD:
      return {
        ...state,
        advanceFilterData: action.payload,
      };
    case GET_QUESTION_START:
      return {
        ...state,
        questionData: {
          ...state.questionData,
          questionLoading: true,
        },
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        questionData: {
          ...state.questionData,
          questionLoading: false,
        },
        schemeQuestionList: action.payload,
      };
    case GET_QUESTION_ERROR:
      return {
        ...state,
        questionData: {
          ...state.questionData,
          questionLoading: false,
        },
        error: action.payload,
      };
    case BACK_STEP:
      return {
        ...state,
        questionData: {
          ...state.questionData,
          activeStep: action.payload,
        },
      };
    case NEXT_STEP:
      return {
        ...state,
        questionData: {
          ...state.questionData,
          activeStep: action.payload,
        },
      };
    case CHECK_USER_QUESTION_PRESENT_START:
      return {
        ...state,
        loading: true,
      };
    case CHECK_USER_QUESTION_PRESENT_SUCCESS:
      return {
        ...state,
        loading: false,
        questionData: {
          ...state.questionData,
          checkUserQuestionFlag: action.payload,
        },
      };
    case CHECK_USER_QUESTION_PRESENT_ERROR:
      return {
        ...state,
        loading: false,
        questionData: {
          ...state.questionData,
          checkUserQuestionFlag: null,
        },
        error: action.payload,
      };
    case STEPS_VALUE_SAVE:
      return {
        ...state,
        questionData: {
          ...state.questionData,
          questionStepsValue: action.payload,
        },
      };
    case GET_ADVANCE_FILTER_SCHEME_DETAILS_START:
      return {
        ...state,
        advanceFilterLoading: true,
      };
    case GET_ADVANCE_FILTER_SCHEME_DETAILS_SUCCESS:
      return {
        ...state,
        advanceFilterLoading: false,
        getAdvanceFilterSchemeDetails: action.payload,
      };
    case GET_ADVANCE_FILTER_SCHEME_DETAILS_ERROR:
      return {
        ...state,
        advanceFilterLoading: false,
        error: action.payload,
      };
    case SINGLE_SELECTED_CATEGORY:
      return {
        ...state,
        singleSelectedCategory: action.payload,
      };
    case GET_ELIGIBILITY_QUESTION_START:
      return {
        ...state,
        eligibilityQuestionLoading: true,
      };
    case GET_ELIGIBILITY_QUESTION_SUCCESS:
      return {
        ...state,
        eligibilityQuestionLoading: false,
        getEligibilityQuestion: action.payload,
      };
    case GET_ELIGIBILITY_QUESTION_ERROR:
      return {
        ...state,
        eligibilityQuestionLoading: false,
        error: action.payload,
      };
    case GET_ELIGIBILITY_QUESTION_REMOVE:
      return {
        ...state,
        getEligibilityQuestion: null,
      };
    case CHECK_USER_ELIGIBILITY_SAVE_START:
      return {
        ...state,
        checkUserEligibilitySaveDataLoading: true,
      };
    case CHECK_USER_ELIGIBILITY_SAVE_SUCCESS:
      return {
        ...state,
        checkUserEligibilitySaveDataLoading: false,
        checkUserEligibilitySaveData: action.payload,
      };
    case CHECK_USER_ELIGIBILITY_SAVE_ERROR:
      return {
        ...state,
        checkUserEligibilitySaveDataLoading: false,
        error: action.payload,
      };
    case SEARCH_SCHEME_BY_VALUE_START:
      return {
        ...state,
        searchSchemeByValueLoading: true
      };
    case SEARCH_SCHEME_BY_VALUE_SUCCESS:
      return {
        ...state,
        searchSchemeByValueLoading: false,
        searchSchemeByValueData: action.payload
      };
    case SEARCH_SCHEME_BY_VALUE_ERROR:
      return {
        ...state,
        searchSchemeByValueLoading: false,
        error: action.payload
      };
    case EMPTY_SCHEME_QUESTIONS:
      return {
        questionData: {
          ...state.questionData,
          checkUserQuestionFlag: null,
        },
      };
      case TYPE_REMOVE_SEARCH_FILTER:
        return {
          ...state,
          searchSchemeByValueLoading: false,
          searchSchemeByValueData: []
        };
    default:
      return state;
  }
};

export default schemeEligibilityReducer;
