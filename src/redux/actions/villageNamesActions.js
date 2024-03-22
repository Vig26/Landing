import {
  GET_VILLAGE_NAME_ERROR,
  GET_VILLAGE_NAME_START,
  REMOVE_VILLAGE_NAMES,
  SET_VILLAGE_NAMES,
} from "../contants/action-types";
import fetcher from "../../utils/fetcher";

export const getVillageData =
  (payload, page = 0, successCB = () => {}) =>
  (dispatch) => {
    dispatch({ type: GET_VILLAGE_NAME_START });
    fetcher({
      method: "POST",
      request: `getAutoCompleteVillageNames?page=${page}&size=20`,
      payload,
    })
      .then((response) => {
        successCB(response.data.data);
      })
      .catch((error) => {
        dispatch({
          type: GET_VILLAGE_NAME_ERROR,
          payload: error,
        });
        console.log(error, "Error");
      });
  };

export const updateVillageData = (payload) => (dispatch) => {
  dispatch({ type: SET_VILLAGE_NAMES, payload });
};

export const removeVillageData = () => (dispatch) => {
  dispatch({ type: REMOVE_VILLAGE_NAMES });
};
