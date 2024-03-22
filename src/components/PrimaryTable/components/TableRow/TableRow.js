import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  DownloadIcon,
  InfoIcon,
  ViewStatusIcon,
  VisibilityOffIcon,
  VisibilityOnIcon,
} from "../../../../icons";
import BenefitsModal from "./BenefitsModal";
import ViewBenifits from "./ViewBenifits";
import Style from "./TableRow.module.css";

function TableRow({ rowData, headers, tableName, dataIndex, setInnerData }) {

  console.log("Row Data : ",rowData?.schemeId);

  const [show, setShow] = useState(false);
  const [openModal, setModal] = useState(false);
  const [openBenifits, setBenifits] = useState(false);

  const lang = localStorage.getItem("i18nextLng");
  const langSuffix = lang === "en" ? "" : "Tamil";

  const [isPDS, setIsPDS] = useState(false);

  useEffect(() => {
    rowData?.parentScheme === "Public Distribution System" && setIsPDS(true)
  },[rowData])

  console.log("SetISPDS",isPDS);

  const showContentHandler = () => {
    setShow((prevState) => !prevState);
    if(rowData?.parentScheme === "Public Distribution System")
    {
      setBenifits((prevState) => !prevState);
    }
  };
  const toggleHandler = () => {
    setModal((prevState) => !prevState);
  };
  let tableRow;
  switch (tableName) {
    case "eSevai":
      tableRow = (
        <>
          <tr className={Style.wrapper}>
            <td className={Style.tdWrapper}>
              {/* Next Api Call on the  */}
              <Link to={{ pathname: `/services-availed/${rowData?.APPNO}` }}>
                {rowData?.APPNO}
              </Link>
            </td>
            <td className={Style.tdWrapper}>
              <span>{rowData?.CERTIFICATENAME}</span>
            </td>
            <td className={Style.tdWrapper}>
              <a href={rowData?.OUTPUTURL}>
                <DownloadIcon color="#0584F2" />
              </a>
            </td>
          </tr>
        </>
      );
      break;
    case "trackServiceRequest":
      tableRow = (
        <tr className={Style.wrapper}>
          <td className={Style.tdWrapper}>
            <span>{dataIndex + 1}</span>
          </td>
          <td align="center" className={Style.tdWrapper}>
            <Link
              to={{ pathname: `/track-service-request/${rowData.srNumber}` }}
              style={{ textDecoration: "underline" }}
            >
              {rowData?.srNumber}
            </Link>
          </td>
          <td align="center" className={Style.tdWrapper}>
            <span>{rowData?.createdDate || "-"}</span>
          </td>
          <td align="center" className={Style.tdWrapper}>
            <Link
              to={{ pathname: `/track-service-request/${rowData.srNumber}` }}
            >
              <ViewStatusIcon />
            </Link>
          </td>
        </tr>
      );
      break;
    case "benefits":
      tableRow = (
        <>
          <tr className={Style.wrapper}>
            <td className={Style.tdWrapper}>
              <span className={Style.overflowText}>
                {rowData[`parentScheme${langSuffix}`]}
              </span>
            </td>
            <td className={Style.tdWrapper}>
              <span className={Style.overflowText}>
                {rowData[`departmentName${langSuffix}`]}
              </span>
            </td>
            <td className={Style.tdWrapper}>
              <span className={Style.overflowText}>
                {rowData[`cardType${langSuffix}`]}
              </span>
            </td>
            <td
              className={Style.tdWrapper}
              title={!show ? "View Benefits" : "Hide Benefits"}
            >
              <div className="d-flex">
                <button className={Style.btn} onClick={showContentHandler}>
                  {isPDS ? (
                    <VisibilityOnIcon color="#0584F2" />
                  ) : (
                    <VisibilityOffIcon color='grey'/>
                  )}
                  {/* <VisibilityOnIcon color="#0584F2" /> */}
                </button>
                <button
                  className={[Style.btn, Style.infoBtn].join(" ")}
                  onClick={toggleHandler}
                  title="About Benifits"
                >
                  <InfoIcon color="#0584F2" />
                </button>
              </div>
            </td>
            {openModal && (
              <BenefitsModal
                toggleModal={toggleHandler}
                benefits={rowData?.benefitDesc}
                lang={lang}
              />
            )}
            {openBenifits && (
              <ViewBenifits
              toggleModal={showContentHandler}
              benefits={rowData?.benefitDesc}
              lang={lang}
            />
            )
            }
          </tr>
        </>
      );
      break;
    default:
      tableRow = (
        <tr className={Style.wrapper}>
          {headers?.map((item) => (
            <td
              key={item.field}
              title={rowData[item?.field]}
              className={Style.tdWrapper}
            >
              <span className={Style.overflowText}>{rowData[item?.field]}</span>
            </td>
          ))}
        </tr>
      );
  }
  return <>{tableRow}</>;
}

export default TableRow;
