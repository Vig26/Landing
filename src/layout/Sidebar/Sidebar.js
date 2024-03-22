import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Style from "./Sidebar.module.css";
import CloseIcon from "../../icons/CloseIcon";
import ListItem from "./components/ListItem";
import ContactInfo from "./components/ContactInfo";
import { useTranslation } from "react-i18next";

const Backdrop = (props) => {
  return <div className={Style.backdrop} onClick={props.onClose} />;
};
const portalElement = document.getElementById("modal");
function Sidebar(props) {
  const { t } = useTranslation();

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.sideBarHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={Style.wrapper}>
          <div
            className={[Style.sideBarWrapper, "position-relative"].join(" ")}
          >
            <button
              className="position-absolute"
              onClick={props.sideBarHandler}
            >
              <CloseIcon color="#ffffff" />
            </button>
            <div className="mb-3">
              <p className="text-white fs-22 font-weight-bold px-3 px-lg-4 mb-2 mb-xxl-3 line-height-medium">
                {t("quick_links")}
              </p>
              <ul>
                <ListItem name={t("about_sfdb")} linkPath="/about-sfdb" />
                <ListItem
                  name={t("policies_guidelines")}
                  linkPath="https://tnega.tn.gov.in/copyright"
                  target="_blank"
                />
                <ListItem
                  name={t("tn_esevai_portal_link")}
                  linkPath="https://www.tnesevai.tn.gov.in/"
                  target="_blank"
                />
                <ListItem
                  name={t("iipgcms_link")}
                  linkPath="https://cmhelpline.tnega.org/portal/ta/home"
                  target="_blank"
                />
                <ListItem
                  name={t("faqs")}
                  linkPath="http://192.168.5.204/assets/docs/FAQ_Comments_RP.pdf"
                  target="_blank"
                />
                {/* <ListItem name={t("help")} /> */}
              </ul>
            </div>
            <div className={[Style.divider, "mx-3 mx-lg-4"].join(" ")} />
            <div className={[Style.infoWrapper, "px-lg-4 px-3"].join(" ")}>
              <ContactInfo title={t("address")} info={t("address_info")} />
              <ContactInfo
                title="email"
                info="makkalsevai@tn.gov.in"
                linkPath="mailto:makkalsevai@tn.gov.in"
                type="link"
              />
              <ContactInfo
                title="Phone"
                info="+91 - 44 - 40164907"
                linkPath="tel:+91 - 44 - 40164907"
                type="link"
              />
              <ContactInfo title="fax" info="+91 - 44 - 28521112" />
            </div>
          </div>
        </div>,
        portalElement
      )}
    </Fragment>
  );
}

export default Sidebar;
