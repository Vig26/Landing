//Disply title of each dashboard page

import React from "react";
import BackButton from "./BackButton";
import Style from "./BannerTitle.module.css";
import WarningIcon from "../../icons/WarningIcon";

function BannerTitle({
  title,
  showBackButton = true,
  showSubtitle = "",
  ...props
}) {
  return (
    <div className={Style.wrapper}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className={Style.title}>
          <h1 className="mb-0"> {title}</h1>
          {showSubtitle && (
            <div className="d-flex mt-2 mt-md-3 pt-md-2 pt-1 align-items-center">
              <span className={["mr-md-3 mr-2", Style.iconBox].join(" ")}>
                <WarningIcon />
              </span>
              <h3 className="font-weight-medium mb-0 text-danger">
                {showSubtitle}
              </h3>
            </div>
          )}
        </div>
        {showBackButton && <BackButton {...props} />}
      </div>
    </div>
  );
}

export default BannerTitle;
