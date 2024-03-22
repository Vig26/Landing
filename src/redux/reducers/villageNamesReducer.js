import {
  GET_VILLAGE_NAME_ERROR,
  GET_VILLAGE_NAME_START,
  GET_VILLAGE_NAME_SUCCESS,
  REMOVE_VILLAGE_NAMES,
  SET_VILLAGE_NAMES,
} from "../contants/action-types";

const initialState = {
  villageData: [],
  loading: false,
  error: "",
};

const villageNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VILLAGE_NAME_START:
      return {
        ...state,
        loading: true,
      };
    case GET_VILLAGE_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        villageData: action.payload,
      };

    case GET_VILLAGE_NAME_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_VILLAGE_NAMES:
      return {
        ...state,
        villageData: {
          ...state.villageData,
          villages: [...state?.villageData?.villages, ...action.payload],
        },
      };
    case REMOVE_VILLAGE_NAMES:
      return {
        ...state,
        villageData: [],
      };

    default:
      return state;
  }
};

export default villageNamesReducer;
