import React from "react";
import { NavLink } from "react-bootstrap";
import Style from "./ContactInfo.module.css";

function ContactInfo({ title, info, type, linkPath }) {
  let contactInfo;
  switch (type) {
    case "link":
      contactInfo = (
        <NavLink
          href={linkPath}
          className={[Style.wrapper, "text-white mb-3 p-0"].join(" ")}
        >
          <p className="font-weight-bold text-uppercase mb-0 mb-lg-2 line-height-medium">
            {title}
          </p>
          <p className="mb-0 font-weight-light line-height-medium">{info}</p>
        </NavLink>
      );
      break;
    default:
      contactInfo = (
        <div className={[Style.wrapper, "text-white mb-3"].join(" ")}>
          <p className="font-weight-bold text-uppercase mb-0 mb-lg-2 line-height-medium">
            {title}
          </p>
          <p className="mb-0 font-weight-light line-height-medium">{info}</p>
        </div>
      );
  }
  return <>{contactInfo}</>;
}

export default ContactInfo;
