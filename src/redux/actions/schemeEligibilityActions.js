import fetcher from "../../utils/fetcher";
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
  TYPE_REMOVE_SEARCH_FILTER
} from "../contants/action-types";
import { showMessage } from "./showMessage";

export const getPrimaryFilter = (payload, successCb) => (dispatch) => {
  dispatch({ type: GET_PRIMARY_FILTER_START });
  fetcher({
    method: "POST",
    request: `getAllPrimaryFilter`,
    payload,
  })
    .then((response) => {
      if (response?.data?.status === "OK") {
        dispatch({
          type: GET_PRIMARY_FILTER_SUCCESS,
          payload: response.data.data,
        });
        successCb && successCb(response.data.data);
      } else {
        dispatch({
          type: GET_PRIMARY_FILTER_ERROR,
          payload: { message: "Something Went Wrong" },
        });
        dispatch(
          showMessage({
            title: "Something Went Wrong",
            variant: "error",
          })
        );
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_PRIMARY_FILTER_ERROR,
        payload: error,
      });
      console.log(error);
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const getSchemeDetails = (payload, successCb) => (dispatch) => {
  dispatch({ type: GET_SCHEME_DETAILS_START });
  delete payload.selectFilters[11]
  fetcher({
    method: "POST",
    request: `getSchemeDetails`,
    payload,
  })
    .then((response) => {
      if (response?.data?.status === "OK") {
        dispatch({
          type: GET_SCHEME_DETAILS_SUCCESS,
          payload: response.data.data,
        });
        successCb && successCb(response.data.data);
      } else {
        dispatch({
          type: GET_SCHEME_DETAILS_ERROR,
          payload: { message: "Something Went Wrong" },
        });
        dispatch(
          showMessage({
            title: "Something Went Wrong",
            variant: "error",
          })
        );
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_SCHEME_DETAILS_ERROR,
        payload: error,
      });
      console.log(error);
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const advanceFilterDataAdd = (data) => (dispatch) => {
  dispatch({ type: ADVANCE_FILTER_DATA_ADD, payload: data });
};

export const getSchemeQuestionList = (payload, successCb) => (dispatch) => {
  dispatch({ type: GET_QUESTION_START });
  fetcher({
    method: "POST",
    request: `getAllQuestionnaires`,
    payload,
  })
    .then((response) => {
      if (response?.data?.status === "OK") {
        dispatch({
          type: GET_QUESTION_SUCCESS,
          payload: response.data.data,
        });
        successCb && successCb(response.data.data);
      } else {
        dispatch({
          type: GET_QUESTION_ERROR,
          payload: { message: "Something Went Wrong" },
        });
        dispatch(
          showMessage({
            title: "Something Went Wrong",
            variant: "error",
          })
        );
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_QUESTION_ERROR,
        payload: error,
      });
      console.log(error);
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const nextStep = (data) => (dispatch) => {
  dispatch({ type: NEXT_STEP, payload: data });
};
export const backStep = (data) => (dispatch) => {
  dispatch({ type: BACK_STEP, payload: data });
};
export const storeQuestionStepsData = (data) => (dispatch) => {
  dispatch({ type: STEPS_VALUE_SAVE, payload: data });
};

export const getSchemeUserQuestionList = (payload, successCb) => (dispatch) => {
  dispatch({ type: CHECK_USER_QUESTION_PRESENT_START });
  fetcher({
    method: "POST",
    request: `checkUserQuestionnairesPresent`,
    payload,
  })
    .then((response) => {
      if (response?.data?.status === "OK") {
        // delete response?.data?.data?.selectFilters[11]
        dispatch({
          type: CHECK_USER_QUESTION_PRESENT_SUCCESS,
          payload: response.data.data,
        });
        successCb && successCb(response.data.data);
      } else {
        dispatch({
          type: CHECK_USER_QUESTION_PRESENT_ERROR,
          payload: { message: "Something Went Wrong" },
        });
        dispatch(
          showMessage({
            title: "Something Went Wrong",
            variant: "error",
          })
        );
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECK_USER_QUESTION_PRESENT_ERROR,
        payload: error,
      });
      console.log(error);
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const getAdvanceFilterSchemeDetailsData =
  (payload, successCb) => (dispatch) => {
    dispatch({ type: GET_ADVANCE_FILTER_SCHEME_DETAILS_START });
    fetcher({
      method: "POST",
      request: "getAdvanceFilterSchemeDetails",
      payload,
    })
      .then((response) => {
        dispatch({
          type: GET_ADVANCE_FILTER_SCHEME_DETAILS_SUCCESS,
          payload: response.data.data,
        });
        successCb && successCb(response.data.data);
      })
      .catch((error) => {
        dispatch({
          type: GET_ADVANCE_FILTER_SCHEME_DETAILS_ERROR,
          payload: error,
        });
        console.log("error :>> ", error);
      });
  };

export const singleSelectedCategoryData = (payload) => (dispatch) => {
  dispatch({ type: SINGLE_SELECTED_CATEGORY, payload: payload });
};

export const getEligibilityQuestionData = (payload) => (dispatch) => {
  dispatch({ type: GET_ELIGIBILITY_QUESTION_START });
  fetcher({
    method: "POST",
    request: `getEligibilityQuestion`,
    payload,
  })
    .then((response) => {
      dispatch({
        type: GET_ELIGIBILITY_QUESTION_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({ type: GET_ELIGIBILITY_QUESTION_ERROR, payload: error });
      console.log("error", error);
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const removeEligibilityQuestionData = () => {
  return {
    type: GET_ELIGIBILITY_QUESTION_REMOVE,
  };
};

export const checkUserSchemeEligibilitySave = (payload) => (dispatch) => {
  dispatch({ type: CHECK_USER_ELIGIBILITY_SAVE_START });
  fetcher({
    method: "POST",
    request: "checkUserEligibility",
    payload,
  })
    .then((response) => {
      dispatch({
        type: CHECK_USER_ELIGIBILITY_SAVE_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({ type: CHECK_USER_ELIGIBILITY_SAVE_ERROR, payload: error });
      console.log("error :>> ", error);
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const schemeSearchByValue = (lang, value, successCb) => (dispatch) => {
  dispatch({ type: SEARCH_SCHEME_BY_VALUE_START });
  fetcher({
    request: `searchSchemeByValue/${lang}/${value}`,
  })
    .then((response) => {
      dispatch({
        type: SEARCH_SCHEME_BY_VALUE_SUCCESS,
        payload: response.data.data,
      });
      successCb && successCb(response.data.data);
    })
    .catch((error) => {
      dispatch({ type: SEARCH_SCHEME_BY_VALUE_ERROR, payload: error });
      console.log("error", error);
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const typeRemoveSearchFilter = () => (dispatch) => {
  dispatch({
    type : TYPE_REMOVE_SEARCH_FILTER
  })
}