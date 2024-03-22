import React from "react";
import Style from "./BackButton.module.css";
// import {}
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BackButton(props) {
  const { t } = useTranslation();

  const history = useHistory();
  return (
    <button
      className={[
        Style.btnWrapper,
        "fs-20 d-flex align-items-center justify-content-center position-relative fs-20",
      ].join(" ")}
      onClick={history.goBack}
      {...props}
    >
      {t("back")}
    </button>
  );
}

export default BackButton;
