import React, { lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

const home = "Hello";
const Home = lazy(() => import("./pages/MakkalLanding"));
const Login = lazy(() => import("./pages/Home"));
const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));
const SchemeEligibility = lazy(() =>
  import("./pages/SchemeEligibility/SchemeEligibility")
);
const SchemeEligibilityNewFlow = lazy(() =>
  import("./pages/SchemeEligibilityNewFlow")
);
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const TrackServiceRequest = lazy(() => import("./pages/TrackServiceRequest"));
const TrackServiceRequestInformation = lazy(() =>
  import("./pages/TrackServiceRequestInformation")
);
const ServicesAvailed = lazy(() => import("./pages/ServicesAvailed"));
const SchemeEnrolled = lazy(() => import("./pages/SchemeEnrolled"));
const BenefitsAvailed = lazy(() => import("./pages/BenefitsAvailed"));
const GrievanceHistory = lazy(() => import("./pages/GrievanceHistory"));
const CertificatesDetails = lazy(() =>
  import("./pages/ServicesAvailed/components/CertificateDetails")
);
const Registration = lazy(() => import("./pages/Registration/Registration"));
const About = lazy(() => import("./pages/About"));
// const Test = lazy(() => import("./pages/SchemeSearch"));
const IntegratedBeneficiaryView = lazy(() =>
  import("./pages/SchemeStatistics")
);
const SchemeStatisticsDistrict = lazy(() =>
  import("./pages/SchemeStatistics/Components/SchemeStatisticsDistrict")
);
const SchemeStatisticsTaluk = lazy(() =>
  import("./pages/SchemeStatistics/Components/SchemeStatisticsTaluk")
);
const SchemeStatisticsVillage = lazy(() =>
  import("./pages/SchemeStatistics/Components/SchemeStatisticsVillage")
);
const BeneficiaryListVillageWise = lazy(()=>import("./pages/SchemeStatistics/Components/BeneficiaryListVillageWise"))
function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/scheme-eligibility">
          {/* <SchemeEligibility /> */}
          <SchemeEligibilityNewFlow />
        </Route>
        <Route path="/scheme-eligibility-new">
          <SchemeEligibilityNewFlow />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/profile" component={UserProfile} />
        <PrivateRoute
          path="/track-service-request"
          component={TrackServiceRequest}
          exact
        />
        <PrivateRoute
          path="/track-service-request/:srNumber"
          component={TrackServiceRequestInformation}
          exact
        />
        <PrivateRoute
          path="/services-availed"
          component={ServicesAvailed}
          exact
        />
        <PrivateRoute path="/scheme-enrolled" component={SchemeEnrolled} />
        <PrivateRoute path="/benefits-availed" component={BenefitsAvailed} />
        <PrivateRoute path="/grievance-history" component={GrievanceHistory} />
        <PrivateRoute
          path="/services-availed/:certificateNo"
          component={CertificatesDetails}
          exact
        />
         <Route path="/integrated-beneficiary-view">
          <IntegratedBeneficiaryView />
        </Route>
        <Route path="/schemedistrictwise">
          <SchemeStatisticsDistrict />
        </Route>
        <Route path="/schemestatisticsTalukwise">
          <SchemeStatisticsTaluk />
        </Route>
        <Route path="/schemestatisticsVillagewise">
          <SchemeStatisticsVillage />
        </Route>
        <Route path="/beneficiarylistvillagewise">
          <BeneficiaryListVillageWise />
        </Route>
        <Route path="/about-sfdb">
          <About />
        </Route>
        {/* <Route path="/scheme-search"> */}
          {/* <SchemeEligibility /> */}
          {/* <Test /> */}
        {/* </Route> */}
      </Router>
    </>
  );
}

export default App;
