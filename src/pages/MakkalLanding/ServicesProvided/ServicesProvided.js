import React from "react";
import CardsGrid from "./components/CardsGrid";
import Style from "./ServicesProvided.module.css";
import DecorationImage from "../../../assets/images/svg/services-provided-decoration.svg";
import { useTranslation } from "react-i18next";
import AboutCollage from "../../../assets/images/about-collage.jpg";

function ServicesProvided() {
  const { t } = useTranslation();
  return (
    <div
      className={[
        Style.serviceWrapper,
        "position-relative overflow-hidden font-avenir",
      ].join(" ")} id="ServicesProvided"
    >
      <div className={["container", Style.wrapper].join(" ")}>
        <h3
          className={[
            "mb-3 mb-lg-5 text-center text-lg-left",
            Style.heading,
          ].join(" ")}
        >
          {t("services_provided")}
        </h3>
        <CardsGrid />
        <div
          className={[
            "position-absolute d-none d-lg-block",
            Style.decorationWrapper,
          ].join(" ")}
        >
          <img src={DecorationImage} alt="decoration-img" />
        </div>
      </div>
      <img
        src={AboutCollage}
        alt="collage-img"
        className="w-100"
        loading="lazy"
      />
    </div>
  );
}

export default ServicesProvided;
