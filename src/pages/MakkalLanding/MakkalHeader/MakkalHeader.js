import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Style from "./MakkalHeader.module.css";
import Govt_Logo from "../../../assets//images/svg/tamilnadu-logo.svg";
import { Link } from "react-router-dom";
import TneagaLogo from "../../../assets/images/svg/tnega-logo.svg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import useWindowSize from "../../../hooks/useWindowSize";
export default function MakkalHeader() {
  const currentLanguageCode = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const isDesktop = width > 991;
  return (
    <Navbar
      sticky="top"
      className={[Style.background, "py-2"].join(" ")}
      expand="lg"
    >
      <div className={[Style.navbar,"container d-flex justify-content-between font-avenir px-3 px-md-0"].join(" ")}>
        <div className="text-white font-weight-bold d-flex align-items-center">
          <img
            src={Govt_Logo}
            width="50"
            height="50"
            className={[Style.logo, "d-inline-block align-top"].join(" ")}
            alt="Makkal Sevai logo"
          />
          <p
            className={[
              "mb-0 ml-3 fs-20 d-none d-md-block",
              Style.headerText,
            ].join(" ")}
          >
            {t("makkal_logo_text")}
          </p>
          {isDesktop && (
          <Nav className="me-auto">
            <Nav.Link href="#AboutPortal" className={Style.navItem}>{t("about_makkal_sevai")}</Nav.Link>
            <Nav.Link href="#ServicesProvided" className={Style.navItem}>{t("services")}</Nav.Link>
            <Nav.Link href="#AboutTnega" className={Style.navItem}>{t("about_tnega")}</Nav.Link>

          </Nav>
          )}
        </div>
        <div
          className={[Style.rightHeader, "d-flex align-items-center"].join(" ")}
        >
          <div className="d-flex">
            <NavDropdown
              className={[Style.dropdown, "mr-3 ml-md-0"].join(" ")}
              title={currentLanguageCode === "en" ? "English" : "தமிழ்"}
            >

              <NavDropdown.Item
                eventKey="en"
                onClick={() => i18next.changeLanguage("en")}
              >
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="tn"
                onClick={() => i18next.changeLanguage("tn")}
              >
                தமிழ்
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <Link to="/login" className={Style.loginWrapper}>
            {t("login")}
          </Link>
          <Link to={{ pathname: "https://tnega.tn.gov.in/" }} target="_blank">
            <img src={TneagaLogo} alt="login" className="pt-1" />
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
