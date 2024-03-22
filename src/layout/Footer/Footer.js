import React from "react";
import Style from "./Footer.module.css";
import FaceBookIcon from "../../icons/FacebookIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import { NavLink } from "react-bootstrap";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={[Style.wrapper, "text-white"].join(" ")}>
      <div className="container d-flex text-center text-md-left justify-content-between align-items-center flex-column flex-md-row">
        <p className="mb-2 mb-md-0 line-height-medium">
          {t("footer_copy_rights")}
        </p>
        <div className="d-flex">
          <NavLink
            href="https://www.facebook.com/tnegaofficial"
            title="Facebook"
            className={[Style.icon, "p-1 mr-2"].join(" ")}
            target="_blank"
          >
            <FaceBookIcon />
          </NavLink>
          <NavLink
            href="https://www.linkedin.com/company/tnega"
            title="Linkedin"
            className={[Style.icon, "p-1 mr-2"].join(" ")}
            target="_blank"
          >
            <LinkedInIcon />
          </NavLink>
          <NavLink
            href="https://twitter.com/TNeGA_Official"
            title="Twitter"
            className={[Style.icon, "p-1 mr-2"].join(" ")}
            target="_blank"
          >
            <TwitterIcon />
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
