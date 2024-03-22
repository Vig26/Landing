// Display Filter Row in dashboard pages.

import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import SearchIcon from "../../icons/SearchIcon";
import { convertLowerCase } from "../../utils/convertCase";
import SelectEntries from "../SelectEntries";
import Style from "./FilterRowWrapper.module.css";
const entriesOptions = [
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
];
function FilterRowWrapper({
  children,
  searchTitle,
  searchHandler,
  entriesHandler,
  showLeft = false,
}) {
  const { width } = useWindowSize();
  const isDesktop = width > 991;
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    searchHandler(convertLowerCase(e.target.value));
  };

  const handleChangeEntries = (e) => {
    console.log("Entries:",e.value);
    entriesHandler(e.value);
  }
  return (
    <div
      className={[
        "d-flex flex-column flex-md-row align-items-md-center align-items-start justify-content-between",
        Style.wrapper,
      ].join(" ")}
    >
      <div
        className={[
          `d-flex flex-column flex-md-row pt-md-0 ${
            children && "mb-4"
          } mb-md-0 fs-22 align-items-center`,
          Style.filterLeft,
        ].join(" ")}
      >
        {children}
      </div>

      <div
        className={[
          "d-md-flex d-block fs-18 mb-4 mb-md-0 px-0 justify-content-end",
          Style.filterRight,
        ].join(" ")}
      >
        <div className="row w-100">
          {isDesktop && (
            <div className="col-lg-5  d-flex justify-content-md-end justify-content-start">
              <SelectEntries
                options={entriesOptions}
                defaultValue={entriesOptions[0]}
                onChange={handleChangeEntries}
              />
            </div>
          )}
          <div className="col-12 col-md-12 col-lg-7 px-3 px-md-0 px-xl-3">
            <div
              className={["position-relative", Style.searchBoxWrapper].join(
                " "
              )}
            >
              <input
                placeholder={searchTitle}
                type="text"
                title={searchTitle}
                className={Style.searchWrapper}
                value={search}
                onChange={handleChange}
              />
              <span className="position-absolute">
                <SearchIcon color="#0584f2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterRowWrapper;
