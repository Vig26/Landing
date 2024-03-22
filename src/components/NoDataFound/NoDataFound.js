import React from "react";
import Noscheme from "../../assets/images/svg/list-vector.svg";
import Style from "./NoDataFound.module.css";

function NoDataFound({ title = "No Data Found", classes }) {
  return (
    <div className={["mt-100",Style.wrapper, "text-center", classes].join(" ")}>
      <img src={Noscheme} alt="Search" width="50px" height="50px" />
      <p className="fs-14">{title}</p>
    </div>
  );
}

export default NoDataFound;
