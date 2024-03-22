import React from "react";
import Style from "./CMQuote.module.css";
import { useTranslation } from "react-i18next";

import CMImage from "../../../../../../assets/images/cm-photo-1.png";

function CMQuote() {
  const { t } = useTranslation();
  return (
    <div
      className={[
        "row mb-2 justify-content-between align-items-center",
        Style.wrapper,
      ].join(" ")}
    >
      <div className={[Style.quotesWrapper, "col-md-9"].join(" ")}>
        <div className={[Style.quoteBox, "mb-3"].join(" ")}>
          <p
            className={["font-weight-bold mb-1", Style.quoteHeading].join(" ")}
          >
            குறள்
          </p>
          <p className={["mb-0", Style.quote].join(" ")}>
            கொடையளி செங்கோல் குடியோம்பல் நான்கும் <br />
            உடையானாம் வேந்தர்க் கொளி.
          </p>
        </div>
        <div className={[Style.quoteBox, "mb-3"].join(" ")}>
          <p
            className={["font-weight-bold mb-1", Style.quoteHeading].join(" ")}
          >
            {t("quote_heading_2")}
          </p>
          <p className={["mb-0", Style.quote].join(" ")}>{t("quote_2")}</p>
        </div>
      </div>
      <div className={[Style.imageWrapper, "col-md-3"].join(" ")}>
        <img src={CMImage} alt="cmimage" />
      </div>
    </div>
  );
}

export default CMQuote;
