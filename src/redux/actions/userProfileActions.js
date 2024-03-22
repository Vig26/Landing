import fetcher from "../../utils/fetcher";
import {
  GET_MASTER_DATA_REQUEST_ERROR,
  GET_MASTER_DATA_REQUEST_START,
  GET_MASTER_DATA_REQUEST_SUCCESS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_START,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_PROFILE_REQUEST_ERROR,
  GET_USER_PROFILE_REQUEST_START,
  GET_USER_PROFILE_REQUEST_SUCCESS,
  UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_ERROR,
  UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_START,
  UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_SUCCESS,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,
  UPDATE_USER_PROFILE_START,
  UPDATE_USER_PROFILE_SUCCESS,
  GET_TALUKA_START,
  GET_TALUKA_SUCCESS,
  GET_TALUKA_ERROR,
  GET_VILLAGE_START,
  GET_VILLAGE_SUCCESS,
  GET_VILLAGE_ERROR,
  USER_PROFILE_UPDATE_AS_AADHAAR_ERROR,
  USER_PROFILE_UPDATE_AS_AADHAAR_START,
  USER_PROFILE_UPDATE_AS_AADHAAR_SUCCESS,
  EMAIL_OTP_VERIFIED,
  EPETTAGAM_VERIFIED
} from "../contants/action-types";
import { showMessage } from "./showMessage";

export const getUserProfileRequest = (payload) => (dispatch) => {
  dispatch({ type: GET_USER_PROFILE_REQUEST_START });
  fetcher({
    method: "POST",
    request: `getPersonData`,
    payload,
  })
    .then((response) => {
      if (response.data.status === "OK" || response.data.status === "SUCCESS") {
        dispatch({
          type: GET_USER_PROFILE_REQUEST_SUCCESS,
          payload: response.data.data,
        });
        dispatch(getMasterDataRequest());
      } else {
        dispatch({
          type: GET_USER_PROFILE_REQUEST_ERROR,
          payload: { message: "Something Went Wrong" },
        });
      }
    })
    .catch((error) => {
      console.log("getUserProfileRequest error", error);
      dispatch({
        type: GET_USER_PROFILE_REQUEST_ERROR,
        payload: { message: "Something Went Wrong" },
      });
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const getMasterDataRequest = () => (dispatch) => {
  dispatch({ type: GET_MASTER_DATA_REQUEST_START });
  fetcher({ method: "GET", request: `getMasterData` })
    .then((response) => {
      // console.log("getMasterDataRequest response", response.data.data);
      if (response.data.status === "OK" || response.data.status === "SUCCESS") {
        dispatch({
          type: GET_MASTER_DATA_REQUEST_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: GET_MASTER_DATA_REQUEST_ERROR,
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
      console.log("getMasterDataRequest error", error);
      dispatch({
        type: GET_MASTER_DATA_REQUEST_ERROR,
        payload: { message: "Something Went Wrong" },
      });
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const getUserDetailsRequest = (request, type, payload) => (dispatch) => {
  dispatch({ type: GET_USER_DETAILS_START });
  fetcher({ method: "POST", request, payload })
    .then((response) => {
      // console.log("getUserDetailsRequest response", response.data.data);
      if (response.data.status === "SUCCESS" || response.data.status === "OK") {
        if (type === "address") {
          console.log("response", response.data.data)
          dispatch({
            type: GET_USER_DETAILS_SUCCESS,
            payload: { addressDetails: response.data.data },
          });
        } else if (type === "family") {
          dispatch({
            type: GET_USER_DETAILS_SUCCESS,
            payload: { familyDetails: response.data.data },
          });
        } else if (type === "contact") {
          dispatch({
            type: GET_USER_DETAILS_SUCCESS,
            payload: { contactDetails: response.data.data },
          });
        }
      } else {
        dispatch({
          type: GET_USER_DETAILS_ERROR,
          payload: { message: "Something Went Wrong" },
        });
      }
    })
    .catch((error) => {
      console.log("getUserDetailsRequest error", error);
      dispatch({
        type: GET_USER_DETAILS_ERROR,
        payload: { message: "Something Went Wrong" },
      });
      dispatch(
        showMessage({
          title: error.data.message,
          variant: "error",
        })
      );
    });
};

export const updateUserDetails = (data) => (dispatch, getState) => {
  const { formType, columnIdentfier, docType, file, newValue, oldValue, type } =
    data;
  const { updatedDetails } = getState().userProfileReducer;
  const isFormType = updatedDetails.hasOwnProperty(formType);
  const isField = isFormType
    ? updatedDetails[formType].hasOwnProperty(type)
    : false;

  if (isFormType && isField) {
    const columnIdentfierIndex = updatedDetails[formType][type].findIndex(
      (i) => i.columnIdentfier === columnIdentfier
    );
    if (columnIdentfierIndex !== -1) {
      updatedDetails[formType][type][columnIdentfierIndex] = {
        columnIdentfier,
        docType,
        file,
        newValue,
        oldValue,
      };
    } else {
      updatedDetails[formType][type] = [
        ...updatedDetails[formType][type],
        {
          columnIdentfier,
          docType,
          file,
          newValue,
          oldValue,
        },
      ];
    }
    const payload = {
      ...updatedDetails,
    };
    dispatch({ type: UPDATE_USER_DETAILS_SUCCESS, payload });
  } else if (isFormType && !isField) {
    updatedDetails[formType] = {
      ...updatedDetails[formType],
      [type]: [{ columnIdentfier, docType, file, newValue, oldValue }],
    };
    const payload = {
      ...updatedDetails,
    };
    dispatch({ type: UPDATE_USER_DETAILS_SUCCESS, payload });
  } else {
    const payload = {
      ...updatedDetails,
      [formType]: {
        [type]: [{ columnIdentfier, docType, file, newValue, oldValue }],
      },
    };
    dispatch({ type: UPDATE_USER_DETAILS_SUCCESS, payload });
  }
};

export const userBasicDetails = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_USER_DETAILS_SUCCESS, payload });
};

export const updateUserProfile = (payload,successCb) => (dispatch, getState) => {
  const { user } = getState().loginReducer;
  dispatch({ type: UPDATE_USER_PROFILE_START });
  fetcher({ method: "POST", request: "updateProfile", payload })
    .then((response) => {
      // console.log("updateUserProfile response", response.data.data);
      if (response.data.status === "SUCCESS" || response.data.status === "OK") {
        dispatch({
          type: UPDATE_USER_PROFILE_SUCCESS,
          payload: { addressDetails: response.data.data },
        });

        const title =
          "Dear " +
          `${user?.userName || user?.personalInfo?.name || "User"}` +
          ", thank you for updating your details. Your request number " +
          `${response?.data?.data}` +
          " to track your update status.";
        dispatch(
          showMessage({
            title,
            variant: "success",
          })
        );
        successCb && successCb(response.data.status);
      } else {
        dispatch({
          type: UPDATE_USER_PROFILE_ERROR,
          payload: { message: "Something Went Wrong" },
        });
      }
    })
    .catch((error) => {
      console.log("updateUserProfile error", error);
      dispatch({
        type: UPDATE_USER_PROFILE_ERROR,
        payload: { message: "Something Went Wrong" },
      });
      dispatch(
        showMessage({
          title:error.data.message,
          variant: "error",
        })
      );
    });
};

export const getTalukaDataRequest = (districtCode) => (dispatch, getState) => {
  const { userMasterData } = getState().userProfileReducer;
  dispatch({ type: GET_TALUKA_START });
  fetcher({ method: "GET", request: `getTalukByDistrict/${districtCode}` })
    .then((response) => {
      if (response.data.status === "OK") {
        dispatch({
          type: GET_TALUKA_SUCCESS,
          payload: response.data.data,
        });
        dispatch({
          type: GET_MASTER_DATA_REQUEST_SUCCESS,
          payload: [{ ...userMasterData[0], ...response.data.data }],
        });
      } else {
        dispatch({
          type: GET_TALUKA_ERROR,
          payload: { message: "Something Went Wrong" },
        });
      }
    })
    .catch((error) => {
      console.log("error", error);
      dispatch({
        type: GET_TALUKA_ERROR,
        payload: { message: "Something Went Wrong" },
      });
    });
};
export const getVillageByTaluk =
  (districtCode, talukCode) => (dispatch, getState) => {
    const { userMasterData } = getState().userProfileReducer;
    dispatch({ type: GET_VILLAGE_START });
    fetcher({
      method: "GET",
      request: `getVillageByTaluk/${districtCode}/${talukCode}`,
    })
      .then((response) => {
        if (response.data.status === "SUCCESS") {
          dispatch({
            type: GET_VILLAGE_SUCCESS,
            payload: response.data.data,
          });
          dispatch({
            type: GET_MASTER_DATA_REQUEST_SUCCESS,
            payload: [{ ...userMasterData[0], ...response.data.data }],
          });
        } else {
          dispatch({
            type: GET_VILLAGE_ERROR,
            payload: { message: "Something Went Wrong" },
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: GET_VILLAGE_ERROR,
          payload: { message: "Something Went Wrong" },
        });
      });
  };

export const addRegistrationUser =
  (payload, successCb) => (dispatch, getState) => {
    fetcher({ method: "POST", request: "addAdharUserProfile", payload })
      .then((response) => {
        if (
          response.data.status === "OK" ||
          response.data.status === "SUCCESS"
        ) {
          dispatch(
            showMessage({
              title: response.data.message,
              variant: "success",
            })
          );
          successCb && successCb();
        } else {
          // dispatch({
          //   type: ADD_REGISTRATION_USER_ERROR,
          //   payload: { message: "Something Went Wrong" },
          // });
        }
      })
      .catch((error) => {
        console.log("error", error);
        // dispatch({
        //   type: ADD_REGISTRATION_USER_ERROR,
        //   payload: { message: "Something Went Wrong" },
        // });
      });
  };

export const undoUserRequest = (payload) => (dispatch, getState) => {
  dispatch({ type: UPDATE_USER_DETAILS_SUCCESS, payload });
};

export const updateUserProfileAsAadhaar =
  (payload, successCb) => (dispatch, getState) => {
    dispatch({ type: USER_PROFILE_UPDATE_AS_AADHAAR_START });
    fetcher({ method: "POST", request: "updateUserProfileAsAadhaar", payload })
      .then((response) => {
        if (
          response.data.status === "OK" ||
          response.data.status === "SUCCESS"
        ) {
          dispatch({
            type: USER_PROFILE_UPDATE_AS_AADHAAR_SUCCESS,
            payload: { updateUserProfileAsAadhaar: response.data.data },
          });
          successCb && successCb();
        } else {
          dispatch({
            type: USER_PROFILE_UPDATE_AS_AADHAAR_ERROR,
            payload: { message: "Something Went Wrong" },
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: USER_PROFILE_UPDATE_AS_AADHAAR_ERROR,
          payload: { message: "Something Went Wrong" },
        });
      });
  };
export const updateAddressWithOtherDepartment =
  (payload) => (dispatch, getState) => {
    dispatch({ type: UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_START });
    fetcher({
      method: "POST",
      request: "updateAddressWithOtherDepartment",
      payload,
    })
      .then((response) => {
        if (
          response.data.status === "OK" ||
          response.data.status === "SUCCESS"
        ) {
          dispatch({
            type: UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_SUCCESS,
          });
          dispatch(
            showMessage({
              title: response?.data?.message,
              variant: "success",
              description: "",
            })
          );
          dispatch(
            getUserDetailsRequest("getAddressDetails", "address", {
              makkalId: payload.makkalId,
            })
          );
        } else {
          dispatch({
            type: UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_ERROR,
            payload: { message: "Something Went Wrong" },
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: UPDATE_ADDRESS_WITH_OTHER_DEPARTMENT_ERROR,
          payload: { message: "Something Went Wrong" },
        });
      });
  };

  export const sendOTPEmail =
  (payload) => (dispatch) => {
    fetcher({
      method: "POST",
      request: "sendOtpEmail",
      payload,
    })
      .then((response) => {
        if (
          response.status === "OK" ||
          response.status === "SUCCESS"
        ) {
        
        } 
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(
          showMessage({
            title: error.data.message,
            variant: "error",
          })
        );
      });
  };

  export const verifyOTPEmail =
  (payload) => (dispatch) => {
    fetcher({
      method: "POST",
      request: "updateEmailByMakkalId",
      payload,
    })
      .then((response) => {
        if (
          response.status === "OK" ||
          response.status === "SUCCESS"
        ) {
          dispatch({
            type: EMAIL_OTP_VERIFIED,
          });
          dispatch(
            showMessage({
              title: response.message,
              variant: "success",
            })
          )
        } 
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(
          showMessage({
            title: error.data.message,
            variant: "error",
          })
        );
      });
  };

  export const ePettagam =
  (payload,successCB) => (dispatch) => {
    fetcher({
      method: "POST",
      request: "redirect-e-pettagam",
      payload,
    })
      .then((response) => {
        console.log("REsponse:",response)
        if (
          response.data.status === "OK" ||
          response.data.status === "SUCCESS"
        ) {
          successCB && successCB(response.data.data)
          console.log("Response in Token:",response);
          dispatch({
            type: EPETTAGAM_VERIFIED,
            payload: response.data.data
          });
          dispatch(
            showMessage({
              title: response.message,
              variant: "success",
            })
          )
        } 
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(
          showMessage({
            title: error.data.message,
            variant: "error",
          })
        );
      });
  };