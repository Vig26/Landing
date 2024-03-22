import React from "react";
import Style from "./ContactInfo.module.css";
import { NavLink } from "react-bootstrap";

function ContactInfo({ iconPath, title, subtitle, linkTarget }) {
  return (
    <NavLink
      className={[
        Style.contactInfoWrapper,
        "d-md-flex align-items-center p-0 d-none",
      ].join(" ")}
      href={linkTarget}
    >
      <span className={Style.iconWrapper}>{iconPath}</span>
      <div className={Style.info}>
        <p className="line-height-medium">{title}</p>
        <p className={["line-height-medium", Style.labelName].join(" ")}>
          {subtitle}
        </p>
      </div>
    </NavLink>
  );
}

export default ContactInfo;
