import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { productReducer } from "./productReducer";
import showMessageReducer from "./showMessageReducer";
import trackServiceRequestReducer from "./trackServiceRequestReducer";
import userProfileReducer from "./userProfileReducer";
import servicesAvailedReducer from "./servicesAvailedReducer";
import certificateDetailsReducer from "./certificateDetailsReducer";
import grievanceHistoryReducer from "./grievanceHistoryReducer";
import benefitsAvailedReducer from "./benefitsAvailedReducer";
import schemeEnrolledReducer from "./schemeEnrolledReducer";
import newsDetailsReducer from "./newsDetailsReducer";
import bannerDetailsReducer from "./bannerDetailsReducer";
import schemeEligibilityReducer from "./schemeEligibilityReducer";
import schemeDetailsReducer from "./schemeDetailsReducer";
import villageNamesReducer from "./villageNamesReducer";
import socialMediaReducer from "./socialMediaReducer";
import { DESTROY_SESSION } from "../contants/action-types";
import summaryReducer from "./summaryReducer";
import SchemeStatisticsReducer from "./schemeStatisticsReducer"
const reducers = combineReducers({
  state: (state = {}) => state,
  loginReducer,
  productReducer,
  showMessageReducer,
  trackServiceRequestReducer,
  userProfileReducer,
  servicesAvailedReducer,
  certificateDetailsReducer,
  grievanceHistoryReducer,
  benefitsAvailedReducer,
  schemeEnrolledReducer,
  newsDetailsReducer,
  bannerDetailsReducer,
  schemeEligibilityReducer,
  schemeDetailsReducer,
  villageNamesReducer,
  socialMediaReducer,
  summaryReducer,
  SchemeStatisticsReducer
});

const rootReducer = (state, action) => {   
  // Clear all data in redux store to initial.
  if(action.type === DESTROY_SESSION)
     state = undefined;
  
  return reducers(state, action);
};
export default rootReducer;
