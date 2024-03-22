import React from "react";
import { NavLink } from "react-router-dom";
import EmailIcon from "../../icons/EmailIcon";
import HamMenuIcon from "../../icons/HamMenuIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import ContactInfo from "./components/ContactInfo";
import LanguageDropDown from "./components/LanguageDropDown";
import LoginUser from "./components/LoginUser";
import { useTranslation } from "react-i18next";
import Style from "./Header.module.css";
import LogoImage1 from "../../assets/images/933px-TamilNadu_Logo.svg.png";
import LogoImage2 from "../../assets/images/TNeGAlogo-new.png";
import { useSelector } from "react-redux";

function Header(props) {
  const { t } = useTranslation();
  const { isLoggedIn } = useSelector((state) => state.loginReducer);

  return (
    <header className={[Style.header, "position-fixed w-100"].join(" ")}>
      <div className="container d-flex justify-content-between align-items-center">
        <div
          className={[Style.leftHeader, "d-flex align-items-center"].join(" ")}
        >
          <button
            className={["p-0", Style.menuIcon].join(" ")}
            onClick={props.onMenuClick}
          >
            <HamMenuIcon />
          </button>
          <div className={[Style.imagesWrapper, "d-flex"].join(" ")}>
            <NavLink to={`${isLoggedIn ? "/dashboard" : "/"}`}>
              <img
                src={LogoImage1}
                alt="headerimage"
                width={80}
                className={Style.reduceLogoSize}
              />
            </NavLink>
            {/* <img src={LogoImage1} alt="headerimage" /> */}
          </div>
        </div>
        <div
          className={[Style.rightHeader, "d-flex align-items-center"].join(" ")}
        >
          <ContactInfo
            iconPath={<PhoneIcon />}
            title="1800-425-1333 / 1100"
            subtitle={t("toll_free")}
            linkTarget="tel:180-0425-1333 | 1100"
          />
          <ContactInfo
            iconPath={<EmailIcon />}
            title="makkalsevai@tn.gov.in"
            subtitle={t("contact_us")}
            linkTarget="mailto:makkalsevai@tn.gov.in"
          />
          <LanguageDropDown />
          <LoginUser />
          <img
            src={LogoImage2}
            alt="headerimage"
            className={Style.logoRight}
            width={80}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
