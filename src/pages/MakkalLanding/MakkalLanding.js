import React from "react";
import AboutPortal from "./AboutPortal";
import ServicesProvided from "./ServicesProvided";
import Disclaimer from "./Disclaimer";
import Banner from "./Banner";
import LandingFooter from "./LandingFooter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLandingData } from "../../redux/actions/landingPageActions";

export default function MakkalLanding() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLandingData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Banner />
      <AboutPortal />
      <ServicesProvided />
      <Disclaimer />
      <LandingFooter />
    </React.Fragment>
  );
}
