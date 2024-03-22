import React from "react";
import Modal from "../../../../Modal";
import Style from "../../../../../pages/SchemeEligibility/SchemeEligibilityModal/SchemeEligibilityModal.module.css";
import { CloseIcon } from "../../../../../icons";
import TableStyle from "./BenefitsModal.module.css";
import { useTranslation } from "react-i18next";

function BenefitsModal({ toggleModal, benefits, lang }) {
  const { t } = useTranslation();
  const benefitsTableHead = (
    <thead>
      <tr className={TableStyle.benefitHeader}>
        <th className={TableStyle.benefitHeader} align="center">
          S No.
        </th>
        <th className={TableStyle.benefitHeader}>{t("benefits")}</th>
      </tr>
    </thead>
  );
  return (
    <Modal toggleModal={toggleModal}>
      <div
        className={[Style.wrapper, "text-center position-relative"].join(" ")}
      >
        <div className={TableStyle.wrapper}>
          <button
            onClick={toggleModal}
            className={[Style.closeBtn, TableStyle.iconBtn].join(" ")}
          >
            <CloseIcon color="#0584f2" width="24px" height="24px" />
          </button>
          <table className={TableStyle.nestedTableWrapper}>
            {benefitsTableHead}
            <tbody>
              {benefits.map((item, index) => (
                <tr key={index} className={TableStyle.benefitRow}>
                  <td className={TableStyle.serialNo} width="8%" align="center">
                    {index + 1}
                  </td>
                  <td className={TableStyle.benefitDesc}>
                    {lang === "en" ? item.benefitDesc : item.benefitDescTamil}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}

export default BenefitsModal;
