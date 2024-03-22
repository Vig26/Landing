import React, { useRef, useState } from "react";
import Style from "./AccordionItem.module.css";
import AngledownIcon from "../../../../icons/AngledownIcon";
import { DownloadIcon, ViewStatusIcon } from "../../../../icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ViewBenifits from "../../../PrimaryTable/components/TableRow/ViewBenifits";

const AccordionItem = ({ accordionItem, active, onToggle, accordionName }) => {
  const contentEl = useRef();

  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [openBenifits, setBenifits] = useState(false);

  const lang = localStorage.getItem("i18nextLng");

  const showContentHandler = () => {
    setShow((prevState) => !prevState);
    if(accordionItem?.parentScheme === "Public Distribution System")
    {
      setBenifits((prevState) => !prevState);
    }
  };

  let titleLeft, titleRight, content;

  const benifitHeaderNames = [
    { field: "parentScheme", headerName: t("scheme_name") },
    { field: "departmentName", headerName: t("department_name") },
    { field: "cardType", headerName: t("benefit_type") },
  ];
  const schemeHeaderNames = [
    { field: "schemeName", headerName: "Benefit Name" },
    { field: "schemeDescription", headerName: "Benefit Description" },
    { field: "departmentName", headerName: "Department" },
  ];

  switch (accordionName) {
    case "grievance":
      titleLeft = "Grievance ID";
      titleRight = accordionItem.grievanceId.slice(-8, -1);
      content = (
        <>
          <div className="mb-3">
            <label className="mb-0">Grievance Id</label>
            <p className="mb-0">{accordionItem.grievanceId}</p>
          </div>
          <div className="mb-3">
            <label className="mb-0">Status</label>
            <p className="mb-0">{accordionItem.status}</p>
          </div>
          <div className="mb-3">
            <label className="mb-0">Created Time</label>
            <p className="mb-0">{accordionItem.createdTime}</p>
          </div>
        </>
      );
      break;
    case "services":
      titleLeft = "Certificate No";
      titleRight = accordionItem.APPNO;
      content = (
        <>
          <div className="mb-3">
            <label className="mb-0">Certificate No</label>
            <Link
              to={{ pathname: `/services-availed/${accordionItem?.APPNO}` }}
              className={["mb-0 d-block", Style.underLine].join(" ")}
              exact
            >
              {accordionItem.APPNO}
            </Link>
          </div>
          <div className="mb-3">
            <label className="mb-0">Certificate Name</label>
            <p className="mb-0">{accordionItem.CERTIFICATENAME}</p>
          </div>
          <div className="mb-3">
            <a
              href={accordionItem.OUTPUTURL}
              className={Style.btn}
              title="download-certificate"
            >
              <span className="mr-1">
                <DownloadIcon color="#fff" />
              </span>
              Download
            </a>
          </div>
        </>
      );
      break;
    case "trackServiceRequest":
      titleLeft = "SR. Number";
      titleRight = accordionItem.srNumber;
      content = (
        <>
          <div className="mb-3">
            <label className="mb-0">Date</label>
            <p className="mb-0">{accordionItem?.createdDate}</p>
          </div>
          <div className="mb-3">
            <label className="mb-1 d-block">View Status</label>
            <Link
              to={{
                pathname: `/track-service-request/${accordionItem.srNumber}`,
              }}
              className={[Style.btn, "px-3"].join(" ")}
              title="view-track-request"
            >
              <span className="mr-1">
                <ViewStatusIcon color="#fff" width="20px" height="20px" />
              </span>
              View
            </Link>
          </div>
        </>
      );
      break;
    case "benifits":
      titleLeft = accordionItem.parentScheme;
      titleRight = "";
      content = (
        <>
          {benifitHeaderNames.map((item) => (
            <>
              <div className="mb-3" key={item.field}>
                <label className="mb-0">{item.headerName}</label>
                <p className="mb-0">{accordionItem[item.field]}</p>
              </div>
            </>
          ))}
          <div className="mb-3">
            <div className={Style.benefitsListWrapper}>
              <label className="mb-0">Benefits Included</label>
              <ul className={Style.ListWrapper}>
                {accordionItem?.benefitDesc.map((item, index) => (
                  <li key={index}>
                    <p className="mb-0">
                      {lang === "en" ? item.benefitDesc : item.benefitDescTamil}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="mb-3">
            <label className="mb-1 d-block">View Status</label>
            <button>
              <span className="mr-1">
                <ViewStatusIcon color="#fff" width="20px" height="20px" />
              </span>
              View
            </button>
          </div> */}
          <div className="mb-3">
            <label className="mb-1 d-block">View Benefits</label>
            <Link
              className={[Style.btn, "px-3"].join(" ")}
              title="View Benefits"
              onClick={
                showContentHandler
            }
            >
              <span className="mr-1">
                <ViewStatusIcon color="#fff" width="20px" height="20px" />
              </span>
              View
            </Link>
          </div>
          {openBenifits && (
              <ViewBenifits
              toggleModal={showContentHandler}
              benefits={accordionItem?.benefitDesc}
              lang={lang}
            />
            )
            }
        </>
      );
      break;
    case "schemes":
      titleLeft = accordionItem.schemeName;
      titleRight = "";
      content = (
        <>
          {schemeHeaderNames.map((item) => (
            <div className="mb-3" key={item.field}>
              <label className="mb-0">{item.headerName}</label>
              <p className="mb-0">{accordionItem[item.field]}</p>
            </div>
          ))}
        </>
      );
      break;
    default:
  }

  return (
    <li className={`${Style.accordionItem} ${active ? Style.active : ""}`}>
      <button className={Style.button} onClick={onToggle}>
        <p className="mb-0">{titleLeft}</p>

        <div className={[Style.control, "d-flex align-items-center"].join(" ")}>
          <p className="font-weight-bold mb-0 mr-3">{titleRight}</p>
          <span className={Style.icon}>
            <AngledownIcon width="16px" height="16px" />
          </span>
        </div>
      </button>
      <div
        ref={contentEl}
        className={Style.answerWrapper}
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className={Style.answer}>{content}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
