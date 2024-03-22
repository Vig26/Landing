import React from "react";
import Style from "./Disclaimer.module.css";
import DisclaimerImg from "../../../assets/images/Disclaimer-img.png";
import DecorationImage from "../../../assets/images/svg/services-provided-decoration.svg";
import { useTranslation } from "react-i18next";

export default function Disclaimer() {
  const { t } = useTranslation();
  return (
    <div className={[Style.Disclaimer, "position-relative"].join(" ")}>
      <div className={["container", Style.wrapper].join(" ")}>
        <div className="row align-items-center font-avenir">
          <div className="col-sm-12 col-md-6 col-lg-5">
            <img src={DisclaimerImg} alt="DisclaimerImg" loading="lazy" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 text-center text-md-left " id="AboutTnega">
            <h3 className=""> {t("about_tnega_title")} </h3>
            <p className={[Style.aboutText, "text-center text-md-left"].join(" ")}>{t("about_tnega_desc")}</p>
          </div>
        </div>
      </div>
      <div
        className={[
          Style.decorationWrapper,
          "position-absolute d-none d-lg-block",
        ].join(" ")}
      >
        <img src={DecorationImage} alt="decoration-img" loading="lazy" />
      </div>
    </div>
  );
}
