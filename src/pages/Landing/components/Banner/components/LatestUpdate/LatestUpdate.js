import React from "react";
import Style from "./LatestUpdate.module.css";
import { useTranslation } from "react-i18next";
import MarqueeStyle from "../../../../../MakkalLanding/Banner/Banner.module.css";
function LatestUpdate() {
  const { t } = useTranslation();

  return (
    <div className={[Style.wrapper, "text-white font-primary"].join(" ")}>
      <div className="container ">
        <div className="d-flex w-100 align-items-center overflow-hidden">
          <div className={Style.title} title={t("latest_updates")}>
            {t("latest_updates")}
          </div>
          <div className={[MarqueeStyle.marquee, "d-flex w-100"].join(" ")}>
            <ul
              className={[
                MarqueeStyle.marqueeContent,
                "justify-content-start",
              ].join(" ")}
            >
              <li>{t("disclaimer_addvertisement")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestUpdate;
