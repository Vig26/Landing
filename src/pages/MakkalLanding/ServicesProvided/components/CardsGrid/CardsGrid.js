import React from "react";
import { useTranslation } from "react-i18next";
import {
  CardUserProfileIcon,
  BenefitsAvailedIcon,
  EligibilityIcon,
  HelpLineIcon,
  ServiceAvailedIcon,
  CitizenWalletNewIcon,
} from "../../../../../icons";
import Card from "../Card";
import statistics from "../../../../../assets/images/statistics.png";
import IntegratedBeneficiaryIcon from "../../../../../icons/IntegratedBeneficiaryIcon";
function CardsGrid() {
  const { t } = useTranslation();
  const routingCards = [
    {
      title: t("landing_profile_update_card_title"),
      description: t("landing_profile_update_card_desc"),
      path: "/profile",
      icon: <CardUserProfileIcon color="#E4A951" width="40px" height="40px" />,
    },
    {
      title: t("landing_benefits_card_title"),
      description: t("landing_benefits_card_desc"),
      path: "/benefits-availed",
      icon: <BenefitsAvailedIcon color="#E4A951" width="40px" height="40px" />,
    },
    {
      title: t("landing_schemeEligibility_card_title"),
      description: t("landing_schemeEligibility_card_desc"),
      path: "/scheme-eligibility",
      icon: <EligibilityIcon color="#E4A951" width="40px" height="40px" />,
      isPublic: true,
    },
    {
      title: t("landing_cmHelpline_card_title"),
      description: t("landing_cmHelpline_card_desc"),
      path: "/grievance-history",
      icon: <HelpLineIcon color="#E4A951" width="40px" height="40px" />,
    },
    {
      title: t("landing_eSevai_card_title"),
      description: t("landing_eSevai_card_desc"),
      path: "/services-availed",
      icon: <ServiceAvailedIcon color="#E4A951" width="40px" height="40px" />,
    },
    {
      title: t("landing_nambikkai_card_title"),
      description: t("landing_nambikkai_card_desc"),
      path: "https://www.epettagam.tn.gov.in/",
      icon: <CitizenWalletNewIcon color="#E4A951" width="40px" height="40px" />,
      target: "_blank",
    },
  ];
  const integratedBeneficirayCards=[
    {
      title: t("integrated_beneficiary_view"),
      description: t("integrated_beneficiary_view_desc"),
      path: "/integrated-beneficiary-view",
      icon: <IntegratedBeneficiaryIcon color="#E4A951" width="40px" height="40px" />,
      isPublic: true,
      isBeneficiary: true

    },
  ]
  return (
    <div className="row justify-content-center align-items-center pt-md-4 pt-3">
      <div className="col-lg-10 col-md-12 row">
        {routingCards.map((item, index) => (
          <Card cardDetail={item} key={index} />
        ))}
      </div>
      {/* <div className="col-lg-10 col-md-12 row">
        {integratedBeneficirayCards.map((item, index) => (
          <Card cardDetail={item} key={index} />
        ))}
      </div> */}
    </div>
  );
}

export default CardsGrid;
