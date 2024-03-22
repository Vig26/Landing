import React from "react";
import i18next from "i18next";
import GlobeIcon from "../../../../icons/GlobeIcon";
import Style from "./LanguageDropDown.module.css";

function LanguageDropDown() {
  const currentLanguageCode = localStorage.getItem("i18nextLng") || "en";
  return (
    <div
      className={[Style.languageWrapper, "d-flex align-items-center"].join(" ")}
    >
      <GlobeIcon />
      <select
        className={Style.selectWrapper}
        onChange={(e) => i18next.changeLanguage(e.target.value)}
        value={currentLanguageCode}
      >
        <option value="en">ENG</option>
        <option value="tn">தமிழ்</option>
      </select>
    </div>
  );
}

export default LanguageDropDown;
