import React from "react";
import Style from "./AboutPortal.module.css";
import AboutPortalImage from "../../../assets/images/about-portal.png";
import AboutCollage from "../../../assets/images/about-collage.jpg";
import { useTranslation } from "react-i18next";

function AboutPortal() {
  const { t } = useTranslation();

  return (
    <div className={Style.sectionWrapper} id="AboutPortal">
      {/* <img
        src={AboutCollage}
        alt="collage-img"
        className="w-100"
        loading="lazy"
      /> */}
      <div className={["font-avenir", Style.wrapper].join(" ")}>
        <div className="container">
          <div className="row">
            <div className={["col-md-6", Style.aboutLeftWrapper].join(" ")}>
              <h3
                className={[
                  "mb-4 mb-lg-5 text-center text-md-left",
                  Style.heading,
                ].join(" ")}
              >
                {t("about_makkal_portal_title")}
              </h3>
              <p
                className={[
                  Style.aboutText,
                  "fs-16 text-center text-md-left",
                ].join(" ")}
              >
                {t("about_makkal_portal_desc")}
              </p>
            </div>
            <div className={["col-md-6", Style.aboutImageWrapper].join(" ")}>
              <img
                src={AboutPortalImage}
                alt="portal"
                className={Style.aboutImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPortal;
