import React from "react";
import Style from "./SelectEntries.module.css";
import { MultiSelect } from "../MultiSelect";
import ArrowDown from "../../icons/ArrowDown";
import { useTranslation } from "react-i18next";

function SelectEntries({ ...props }) {
  const { t } = useTranslation();

  return (
    <div
      className={[
        Style.wrapper,
        "d-flex align-items-center justify-content-center",
      ].join(" ")}
    >
      <label className="mb-0">{t("show")}</label>
      <MultiSelect
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => <ArrowDown />,
        }}
        className={Style.entries}
        {...props}
      />
      <label className="mb-0">{t("entries")}</label>
    </div>
  );
}

export default SelectEntries;
