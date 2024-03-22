import fetcher from "../../utils/fetcher";
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
    LOADING
} from "../contants/action-types";
import { showMessage } from "./showMessage";


export const getAllDeapartmentSchemeStats = (payload, successCbToken) => (dispatch) => {
  dispatch({ type: SCHEME_STAT_DEPARTMENT_START });
  dispatch({type: LOADING})
  fetcher({
    method: "GET",
    request: `SchemeStatistics/departmentWiseStat`,
    payload ,
  })
    .then((response) => {
      console.log("response1", response.data);
   
      if (
        response.data.status === true || response.data.statusCode === '200' ||
        response.data.status === "SUCCESS"
      ) {

        dispatch({
            type: SCHEME_STAT_DEPARTMENT_SUCCESS,
            payload: response.data,
          });
      } 
      if (response.data.statusCode === 400) {
        dispatch(
          showMessage({
            title: response.data.message,
            variant: "error",
          }));
      }
    })
    .catch((error) => {
      console.log("error", error.data);

        dispatch({
          type: SCHEME_STAT_DEPARTMENT_ERROR,
          payload: error,
        });
        dispatch(
          showMessage({
            title: error.data.message,
            variant: "error",
          }));
      });
};
export const getAllDistrictWiseSchemeData = (payload, successCbToken) => (dispatch) => {
  dispatch({ type: SCHEME_STAT_DEPARTMENT_District_START });
  dispatch({type: LOADING})
  fetcher({
    method: "GET",
    request: `SchemeStatistics/getDistrictWiseStat/${payload}`,
    payload ,
  })
    .then((response) => {
      console.log("response1", response.data);
   
      if (
        response.data.status === true || response.data.statusCode === '200' ||
        response.data.status === "SUCCESS"
      ) {

        dispatch({
            type: SCHEME_STAT_DEPARTMENT_District_SUCCESS,
            payload: response.data,
          });
      } 
      if (response.data.statusCode === 400) {
        dispatch(
          showMessage({
            title: response.data.message,
            variant: "error",
          }));
      }
    })
    .catch((error) => {
        dispatch({
          type: SCHEME_STAT_DEPARTMENT_District_ERROR,
          payload: error,
        });
        dispatch(
          showMessage({
            title: error.data.message,
            variant: "error",
          }));
      });
};

export const getAllTalukWiseSchemeData = (deptId,districtId, successCbToken) => (dispatch) => {
  dispatch({ type: SCHEME_STAT_DEPARTMENT_Taluk_START });
  dispatch({type: LOADING})
  fetcher({
    method: "GET",
    request: `SchemeStatistics/getTalukWiseStat/${deptId}/${districtId}`,
  })
    .then((response) => {
      console.log("response1", response.data);
   
      if (
        response.data.status === true || response.data.statusCode === '200' ||
        response.data.status === "SUCCESS"
      ) {

        dispatch({
            type: SCHEME_STAT_DEPARTMENT_Taluk_SUCCESS,
            payload: response.data,
          });
      } 
      if (response.data.statusCode === 400) {
        dispatch(
          showMessage({
            title: response.data.message,
            variant: "error",
          }));
      }
    })
    .catch((error) => {
        dispatch({
          type: SCHEME_STAT_DEPARTMENT_Taluk_ERROR,
          payload: error,
        });
        dispatch(
          showMessage({
            title: error.data.message,
            variant: "error",
          }));
      });
};

export const getAllVillageWiseSchemeData = (deptId,districtId,talukId, successCbToken) => (dispatch) => {
  dispatch({ type: SCHEME_STAT_DEPARTMENT_Village_START });
  dispatch({type: LOADING})
  fetcher({
    method: "GET",
    request: `SchemeStatistics/getVillageWiseStat/${deptId}/${talukId}`,
  })
    .then((response) => {
      console.log("response1", response.data);
   
      if (
        response.data.status === true || response.data.statusCode === '200' ||
        response.data.status === "SUCCESS"
      ) {

        dispatch({
            type: SCHEME_STAT_DEPARTMENT_Village_SUCCESS,
            payload: response.data,
          });
      } 
      if (response.data.statusCode === 400) {
        dispatch(
          showMessage({
            title: response.data.message,
            variant: "error",
          }));
      }
    })
    .catch((error) => {
        dispatch({
          type: SCHEME_STAT_DEPARTMENT_Village_ERROR,
          payload: error,
        });
        dispatch(
          showMessage({
            title: error.data.message,
            variant: "error",
          }));
      });
};
export const getAllVillageBeneficiaryDetails = (deptId,villageId, successCbToken) => (dispatch) => {
  dispatch({ type: SCHEME_STAT_BENEFICIARY_Village_START });
  dispatch({type: LOADING})
  fetcher({
    method: "GET",
    request: `SchemeStatistics/getVillageBeneficiaries/${deptId}/${villageId}`,
  })
    .then((response) => {
      console.log("response1", response.data);
   
      if (
        response.data.status === true || response.data.statusCode === '200' ||
        response.data.status === "SUCCESS"
      ) {

        dispatch({
            type: SCHEME_STAT_BENEFICIARY_Village_SUCCESS,
            payload: response.data,
          });
      } 
      if (response.data.statusCode === 400) {
        dispatch(
          showMessage({
            title: response.data.message,
            variant: "error",
          }));
      }
    })
    .catch((error) => {
        dispatch({
          type: SCHEME_STAT_BENEFICIARY_Village_ERROR,
          payload: error,
        });
        dispatch(
          showMessage({
            title: error.data.message,
            variant: "error",
          }));
      });
};
