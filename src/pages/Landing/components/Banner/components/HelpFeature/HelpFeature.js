import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./HelpFeature.module.css";

function HelpFeature({ icon, feature, linkPath = "/", target, reDirect }) {
  return (
    <NavLink
      to={!reDirect && linkPath}
      className={[Style.feature, "text-center col-6"].join(" ")}
      // col-md-3
      onClick={() => {
        reDirect && window.open(linkPath, target);
      }}
    >
      <div className={[Style.featureIcon, "mb-2"].join(" ")}>{icon}</div>
      <p className={[Style.featureName, "mb-0 text-uppercase"].join(" ")}>
        {feature}
      </p>
    </NavLink>
  );
}

export default HelpFeature;
