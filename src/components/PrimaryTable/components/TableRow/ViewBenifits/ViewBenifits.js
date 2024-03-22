import React, { useState, useEffect, useRef } from "react";
import Modal from "../../../../Modal";
import Style from "../../../../../pages/SchemeEligibility/SchemeEligibilityModal/SchemeEligibilityModal.module.css";
import { CloseIcon } from "../../../../../icons";
import TableStyle from "./ViewBenifits.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  getPDSTransactionalData
} from "../../../../../redux/actions/benefitsAvailedActions";
import moment from "moment";
import useMakkalId from "../../../../../hooks/useMakkalId";

function ViewBenifits({ toggleModal, benefits, lang }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [check,setCheck] = useState(false);
  const [Id,setId] = useState();
  const [hideData, setHideData]=useState();
  const makkalId = useMakkalId();

  const myRef = useRef(null)

  console.log('MyRef',myRef);

  const getCheck = (item) => {
    myRef.current?.scrollIntoView({behavior: 'smooth'});
    setCheck(true);
    setHideData(item)
    setId(item);
  }
  const hide=()=>{
    // myRef.current?.scrollIntoView({behavior: 'smooth'});
    setHideData("")
    setCheck(false);
  }
  const {
    pdsData
  } = useSelector((state) => state.benefitsAvailedReducer);

  const executeScroll = () => myRef.current.scrollIntoView()    

  const benefitsTableHead = (
    <thead>
      <tr className={TableStyle.benefitHeader}>
        <th className={TableStyle.benefitHeader} align="center">
          {t("s_no")}
        </th>
        <th className={TableStyle.benefitHeader}>
            {t("bill_number")}
        </th>
        <th className={TableStyle.benefitHeader}>
            {t("date")}
        </th>
        <th className={TableStyle.benefitHeader}>
            {t("amount")}
        </th>
        <th className={TableStyle.benefitHeader}>
            {t("select")}
        </th>
      </tr>
    </thead>
  );
  useEffect(() => {
    const payload = {
      makkalId:makkalId
    };
    console.log("useeffect")
    dispatch(getPDSTransactionalData(payload));
  }, [dispatch]);

 


  const billTableHead = (
    <thead ref={myRef}>
      <tr className={TableStyle.benefitHeader}>
        <th className={TableStyle.benefitHeader} align="center">
          {t("s_no")}
        </th>
        <th className={TableStyle.benefitHeader}>
          {t("commodity")}
        </th>
        <th className={TableStyle.benefitHeader}>
          {t("quantity")}
        </th>
        <th className={TableStyle.benefitHeader}>
          {t("unit")}
        </th>
        <th className={TableStyle.benefitHeader}>
          {t("amount")}
        </th>
      </tr>
    </thead>
  );
  let price=0

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
          <table className={[TableStyle.nestedTableWrapper, "font-monospace"].join(" ")}>
            {benefitsTableHead}
            <tbody>
                {/* <tr className={[TableStyle.benefitRow, "font-monospace"].join(" ")}> */}
                
                  {/* <td className={TableStyle.serialNo} width="8%" align="center">
                    1
                  </td>
                  <td className={TableStyle.benefitDesc}>
                    20020922001023
                  </td>
                  <td className={TableStyle.benefitDesc}>
                  28 Sep 2022 12:35 PM
                  </td>
                  <td className={TableStyle.benefitDesc}>
                  Rs. 92.50
                  </td>*/}
                 
                  {pdsData.length!=0?(pdsData.transactionData.map((item, index) => (
                <tr key={index} className={TableStyle.benefitRow}>
                  <td className={TableStyle.serialNo} width="8%" align="center">
                    {index + 1}
                  </td>
                  <td className={TableStyle.benefitDesc}>
                    {lang === "en" ? item.transactionId : item.transactionId}
                  </td>
                  <td className={TableStyle.benefitDesc}>
                    {lang === "en" ? moment(item.transaction_date,"DDMMYYYY").format("DD/MM/YYYY") : moment(item.transaction_date,"DDMMYYYY").format("DD/MM/YYYY")}
                  </td>
                  <td className={TableStyle.benefitDesc}>
                    {/* {item.txtlist.map((price)=>{
                      console.log("test",++price.product_price)
                      price=++price.product_price
                    })} */}
                    Rs.{price = item.txtlist.reduce((accumulator, object) => {
                      return accumulator + object.product_price;
                      }, 0)}
                    {/* {price} */}
                  </td>
                  <td className={TableStyle.benefitDesc}> 
                        {hideData===item?.transactionId ? (
                          <button className="btn round4 btn btn-outline-primary fs-18" onClick={hide}>  
                          {t("hide")}
                          </button>
                          ) : (<button className="btn round4 primary-contained-btn fs-18" onClick={() => getCheck(item?.transactionId)}>  
                          {t("view")}
                          </button>)}
                           </td>
                </tr>
              ))):""}
                {/* </tr> */}
            </tbody>
            <br></br>
            </table>
            {check &&
            <table className={TableStyle.nestedTableWrapper}>
            {billTableHead}
            { <tbody >
              { pdsData?.transactionData.filter((obj) => obj.transactionId === Id)[0].txtlist?.map((item,index) => (
                console.log("Transactional Data : ",item),
                <tr className={TableStyle.benefitRow}>
                  <td className={TableStyle.serialNo} width="8%" align="center">
                    {index + 1}
                  </td>
                  <td className={TableStyle.benefitDesc}>
                  {lang === "en" ? item?.product_name : item?.product_name_tamil}
                  </td>
                  <td className={TableStyle.benefitDesc}>
                  {item?.distributed_quanitity ? item?.distributed_quanitity : ""}
                  </td>
                  <td className={TableStyle.benefitDesc}>
                  {item?.product_unit ? item?.product_unit : ""}
                  </td>
                  <td className={TableStyle.benefitDesc}>
                  Rs.{(item?.product_price || item?.product_price === 0)  ? item?.product_price : ""}
                  </td>
                </tr>
              ))}
            </tbody>
            }
            </table>
            }
        </div>
      </div>
    </Modal>
  );
}

export default ViewBenifits;
