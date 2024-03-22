import { encrypt } from "../../utils/common";
import fetcher from "../../utils/fetcher";
import {
  AADHAAR_SMS_KYC,
  AADHAAR_USERS_LIST,
  ERROR,
  GET_AADHAAR_DATA,
  IS_LOGGED_IN,
  LOADING,
  LOGOUT_USER,
  SEND_AADHAAR_SMS,
  SEND_OTP,
  USER_DETAILS,
  USER_TOKEN,
  DESTROY_SESSION,
  SAVE_CONSENT
} from "../contants/action-types";
import { showMessage } from "./showMessage";

export const aadhaarUsersList = (payload) => {
  return {
    type: AADHAAR_USERS_LIST,
    payload,
  };
};

export const updateUserDetails = (payload) => {
  return {
    type: USER_DETAILS,
    payload,
  };
};

export const sendOtp = (payload, successCB, saveconsent) => (dispatch) => {
  dispatch({ type: LOADING });
  payload["isConsent"] = saveconsent
  fetcher({ method: "POST", request: `sendSms`, payload, isToken: false })
    .then((response) => {
      dispatch({
        type: SEND_OTP,
        payload: response.data.data,
      });
      successCB();
    })
    .catch((error) => {
      dispatch({
        type: ERROR,
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

export const getToken = (payload, successCBOfToken) => async (dispatch) => {
  return new Promise(async(resolve, reject) => {
  dispatch({ type: LOADING });
  await fetcher({ method: "POST", request: `getToken`, payload, isToken: false })
    .then(async (response) => {
      // console.log("response", response);
      await localStorage.setItem("token", response.data.data.token);
      await dispatch({
        type: USER_TOKEN,
        payload: response.data.data,
      });
      await successCBOfToken && successCBOfToken(response.data.data);
      console.log(" true")
      resolve(true)
    })
    .catch((error) => {
      dispatch({
        type: ERROR,
        payload: error,
      });
      console.log("here", error);
      console.log("getToken false")
      reject(false)

    });
  })
};

export const getAadhaarData =
  (payload, type, successCB, errorCB) => async (dispatch) => {
    return new Promise(async(resolve, reject) => {

    dispatch({ type: LOADING });
    
    await fetcher({ method: "post", request: `getAdharDataByMobOrAdhar`, payload })
      .then(async (response) => {
        if (!response.data.data && response.data.message) {
          await dispatch(
            showMessage({
              title: response?.data?.message,
              variant: "warning",
              description: "",
            })
          );
        }
        await dispatch({
          type: GET_AADHAAR_DATA,
          payload: response.data.data,
        });
        if (response.data.data?.length > 0) {
          if (type === "Aadhaar") {
            const makkalId = response.data.data[0]["makkalId"];
            localStorage.setItem("MakkalId", makkalId);
            await dispatch(updateUserDetails(response.data.data[0] || null));
            await dispatch({ type: IS_LOGGED_IN });
          } else {
            // console.log("response.data.data", response.data.data);
            dispatch(aadhaarUsersList(response.data.data || []));
          }
          successCB && successCB();
        } else {
          errorCB && errorCB();
        }
        console.log("getAadhaarData true")
        resolve(true)
      })
      .catch((error) => {
        dispatch({
          type: ERROR,
          payload: error,
        });
        dispatch(
          showMessage({
            title: error?.data?.message,
            variant: "error",
            description: "",
            linkText: "Register Now",
            link: "/registration",
          })
        );
        console.log(error);
        console.log("getAadhaarData false")
        reject(false)
      });
    })
  };

export const sendAadhaarSms = (payload, successCB, saveconsent, setDisable) => (dispatch) => {
  dispatch({ type: LOADING,
  loading : true });
  payload["isConsent"] = saveconsent
  console.log("payload", payload)
  fetcher({ method: "post", request: `sendAadharSms`, payload, isToken: false })
    .then((response) => {
      if (!response.data.data && response.data.code === 500) {
        setDisable(false)
      }
      else{
        dispatch({
          type: SEND_AADHAAR_SMS,
          payload: response.data.data,
        });
        successCB();
      }
    })
    .catch((error) => {
      setDisable(false)
      dispatch({
        type: ERROR,
        payload: error,
      });
      console.log(error);
      if (undefined === error) {
        setDisable(false)
        dispatch(
          showMessage({
            title: "Something went wrong",
            variant: "error",
          })
        );
      } else {
        setDisable(false)
        dispatch(
          showMessage({
            title: error.data.message ? error.data.message : "Please try again",
            variant: "error",
          })
        );
      }
    });
};

export const sendAadharSmsKyc =
  (payload, type, successCB, saveconsent, errorCB) => async (dispatch, getState) => {
    
    const { user, aadhaarSmsData } = getState().loginReducer;
    dispatch({ type: LOADING });
    payload["isConsent"] = saveconsent
    await fetcher({
      method: "post",
      request: `sendAadharSmsKyc`,
      payload,
      isToken: false,
    })
      .then(async (response) => {
        await dispatch({
          type: AADHAAR_SMS_KYC,
          payload: response.data.data,
        });
        if (type === "Aadhaar") {
          let aadharNum = encrypt(response.data.data.aadhaarNo)
          localStorage.setItem('aadharNum', aadharNum)
          const payload = {
            aadharNo: aadhaarSmsData.aadharNo,
          };

          const successCBOfToken = async () => {
            await dispatch(getAadhaarData(payload, type, successCB, errorCB));
          };

          const tokenPayload = {
            userName: aadhaarSmsData.aadharNo,
          };

          // console.log("tokenPayload aad", tokenPayload);
        // await dispatch(getToken(tokenPayload, setTimeout(successCBOfToken,2000)));
         let gettoken =  await dispatch(getToken(tokenPayload));
         if(gettoken){
          setTimeout(
            async() =>await dispatch(getAadhaarData(payload, type, successCB, errorCB)),
            2000,
            dispatch({
              type : LOADING,
              loading : true
            }),
          );
         }
        } else {
          localStorage.setItem("MakkalId", encrypt(user.makkalId).toString());
          dispatch({
            type: IS_LOGGED_IN,
          });
          successCB();
        }
      })
      .catch((error) => {
        dispatch({
          type: ERROR,
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

export const logout = () => {
  localStorage.setItem("i18nextLng", "en")
  localStorage.removeItem("selectedDepartmentId")
  return {
    type: LOGOUT_USER,
  };
};
export const clearAll = () => {
  return { type: DESTROY_SESSION };
};
export const saveConsent = (payload) => (dispatch) => {
  dispatch({
    type: SAVE_CONSENT,
    payload: payload
  });
}
