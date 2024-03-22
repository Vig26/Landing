import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Style from "../Banner.module.css";

function NewsUpdate() {
  const { t } = useTranslation();
// <<<<<<< HEAD
  const d = new Date();
  const fd = d.toLocaleString("en-GB", {
  hour: "numeric",
  minute: "numeric",
  hour12: true
  });
  const hrs = fd.toLocaleUpperCase();
// =======
  const { newsData } = useSelector((state) => state.newsDetailsReducer);
  const localLang = localStorage.getItem("i18nextLng");
  const langSuffix = localLang === "en" ? "" : "Tamil";
// >>>>>>> 7ca67e46b7527437ac0ecd0ef452dc80d4d0c977
  return (
    <div className={Style.newsWrapper}>
      <div className={"container fs-16"}>
        <div className="row text-white">
          <div
            className={[
              "col-12 col-md-12 d-flex align-items-center",
              Style.leftWrapper,
            ].join(" ")}
          >
            <p className={["mb-0 font-weight-bold", Style.title].join(" ")}>
              {t("news_update")}
              <span className="ml-1 ml-md-3 ml-xl-4">:</span>
            </p>
            <div className={Style.marquee}>
              <ul className={Style.marqueeContent}>
                {newsData.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      index === newsData.length - 1 ? "mr-0" : "mr-5"
                    }`}
                  >
                    {item[`newsDesc${langSuffix}`]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
{/* <<<<<<< HEAD */}
          {/* Need To Display Current Time in this Format */}
          <div className="col-md-4 col-12 text-md-right">

{/* ======= */}
          {/* <div className="col-md-4 col-12 text-md-right">
>>>>>>> 7ca67e46b7527437ac0ecd0ef452dc80d4d0c977
            Time : 12:34 PM / Day : 23/07/2022 Thursday
          </div> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default NewsUpdate;
