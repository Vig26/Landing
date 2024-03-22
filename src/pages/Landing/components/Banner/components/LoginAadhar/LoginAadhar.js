import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import ButtonLoader from "../../../../../../components/ButtonLoader";
import { encrypt } from "../../../../../../utils/common";
import Style from "../SignInForm/SignInForm.module.css";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { saveConsent } from "../../../../../../redux/actions/loginActions";

export default function LoginAadhar({ handleSendAadhaarSms }) {
  const [aadharNumber, setAadharNumber] = useState("");
  const [token, setToken] = useState(null);
  const recaptchaRef = React.createRef();
  const {loading} = useSelector((state) => state.loginReducer);
  console.log("loading",loading)
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [disable,setDisable] = useState(false);

  const Aadhar = encrypt(aadharNumber);

  const handleChangeAadhar = (event) => {
    const { value } = event.target;
    // (e) => setVal(e.target.)
    setAadharNumber(value.replace(/[^0-9]/g, ""));
  };
  const handleGetDataAadhar = () => {
    setDisable(true)
    const payload = {
      aadharNo: Aadhar.toString(),
    };
    handleSendAadhaarSms(payload, setDisable);
  };
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const onChange = (token) => setToken(token);

const handleChangeConsent=(event)=>{
  let  checked  = event.target.checked;
  console.log("checked",checked)
  if(!checked){
    checked=false
  }
  dispatch(saveConsent(checked))
}

  return (
    <>
      <Form.Control
        placeholder={t("login_with_aadhar")}
        className={Style.filledInput}
        name="userAadhar"
        value={aadharNumber}
        maxLength="12"
        onChange={handleChangeAadhar}
      />
      <Form.Check
        inline
        label={t("consent_label")}
        name="consent"
        className={Style.consentBox}
        type='checkbox'
        onChange={(e)=>handleChangeConsent(e)}
      />
      <ReCAPTCHA
        onChange={onChange}
        sitekey={siteKey}
        className={Style.captchaWrapper}
        ref={recaptchaRef}
      />
      <button
        className={[Style.submitButton, "w-100"].join(" ")}
        onClick={handleGetDataAadhar}
        disabled={aadharNumber.length !== 12 || token === null || loading || disable}
      >
        {loading ? <ButtonLoader/> : t("send_otp")}
      </button>
    </>
  );
}
