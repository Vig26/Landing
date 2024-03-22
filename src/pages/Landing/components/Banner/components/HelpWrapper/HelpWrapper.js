import React from "react";
import Style from "./HelpWrapper.module.css";
import HelpFeature from "../HelpFeature";
import {
  CitizenWalletIcon,
  SupportIcon,
  EligibilityIcon,
  FaqIcon,
} from "../../../../../../icons";
import { useTranslation } from "react-i18next";

function HelpWrapper() {
  const { t } = useTranslation();

  return (
    <div className="col-md-8 mx-auto mx-lg-0">
      {/* div className="col-md-8 mx-auto mx-lg-0" */}
      <div
        className={[
          Style.questionWrapper,
          "fs-30 text-white font-primary text-center font-weight-bold py-2 px-3",
        ].join(" ")}
        title={t("how_can_help")}
      >
        {t("how_can_help")}
      </div>
      <div className={[Style.boxWrapper, "bg-white row  m-0"].join(" ")}>
        <HelpFeature
          linkPath={"/scheme-eligibility"}
          icon={<EligibilityIcon />}
          feature={t("scheme_eligibility")}
        />
        {/* <HelpFeature
          icon={<SupportIcon />}
          feature={t("support_centres")}
          linkPath="mailto:tnesevaihelpdesk@tn.gov.in"
          target="_blank"
          reDirect
        /> */}
        <HelpFeature
          icon={<CitizenWalletIcon />}
          feature={t("citizen_wallet")}
          linkPath="http://wallet_tnega.simplyfi.tech/"
          target="_blank"
          reDirect
        />
        {/* <HelpFeature
          icon={<FaqIcon />}
          feature={t("faqs")}
          linkPath="http://192.168.5.204/assets/docs/FAQ_Comments_RP.pdf"
          target="_blank"
          reDirect
        /> */}
      </div>
    </div>
  );
}

export default HelpWrapper;
