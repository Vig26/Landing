import { t } from "i18next";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import Style from "../components/SignInForm/SignInForm.module.css";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { saveConsent } from "../../../../../redux/actions/loginActions";
import { useDispatch } from "react-redux";

function LoginForm({ mobileNo, setMobileNo, handleSendOtp }) {
  const { t } = useTranslation();
  const recaptchaRef = React.createRef();
  const dispatch = useDispatch();

  const [token, setToken] = useState(null);

  const loading = useSelector((state) => state.loginReducer.loading);

  const handleMobileChange = (event) => {
    const { value } = event.target;
    setMobileNo(value.replace(/[^0-9]/g, ""));
  };

  const onRecaptchaLoad = () => {
    console.log("Captcha Loaded");
  };
  const handleChangeConsent=(event)=>{
    let  checked  = event.target.checked;
    console.log("checked",checked)
    if(!checked){
      checked=false
    }
    dispatch(saveConsent(checked))
  }

  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const onChange = (token) => setToken(token);

  return (
    <Form className={Style.form} onSubmit={(event) => event.preventDefault()}>
      <Form.Control
        placeholder={t("enter_mobile_number")}
        className={Style.filledInput}
        name="Mobile"
        maxLength="10"
        pattern="\d*"
        value={mobileNo}
        onChange={handleMobileChange}
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
        onLoad={onRecaptchaLoad}
      />
      <button
        className={[Style.submitButton, "w-100"].join(" ")}
        disabled={mobileNo.length !== 10 || token === null || loading}
        type="button"
        onClick={handleSendOtp}
      >
        {t("send_otp")}
      </button>
    </Form>
  );
}

export default LoginForm;
