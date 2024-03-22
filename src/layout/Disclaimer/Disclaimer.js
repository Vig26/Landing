import React from "react";
import Style from "./Disclaimer.module.css";
import { useTranslation } from "react-i18next";

function Disclaimer() {
  const { t } = useTranslation();
  return (
    <div
      className={[Style.wrapper, "text-white text-center text-md-left"].join(
        " "
      )}
    >
      <div className="container line-height-medium">
        <span className="font-italic font-weight-bold">
          {t("disclaimer_title")} :&nbsp;
        </span>
        {t("disclaimer")}
      </div>
    </div>
  );
}

export default Disclaimer;
