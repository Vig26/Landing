// Used as to display date of birth field in scheme eligibility Primary Filter

import React, { useEffect,useState } from "react";
import moment from "moment";
import Style from "./DatePicker.module.css";

function CustomDatePicker({ ...props }) {
  // const currentDate = props.value
  //   ? moment(props.value).format("YYYY-MM-DD")
  //   : "";
  const date = new Date()
  const today = moment(date).format("YYYY-MM-DD")
  const [age,setAge]=useState('')
  useEffect(()=>{
    const currentDate = props.value !="" ? (props.value[0].selectedValue !=null) ? moment(props.value[0].selectedValue,"DD-MM-YYYY").format("YYYY-MM-DD") : (props.value[0].selectedDate !="null" && props.value[0].selectedDate !="") ? moment(props.value[0].selectedDate,"DD-MM-YYYY").format("YYYY-MM-DD") :"" : ""
    setAge(currentDate)
  })
  const handleChange = (event) => {
    if (props?.schemeEligibility) {
      const ageDate = moment(event.target.value).format("YYYY-MM-DD");
      setAge(ageDate)
      props?.handleOnChange(ageDate);
    }
  };

  const handleClick = (event) => {
    if (event.type === "focus") {
      event.target.type = "date";
      event.target.showPicker();
      event.target.label="YYYY-MM-DD"
    } else {
      event.target.type = "text";
    }
  };

  return (
    <input
      type="text"
      className={Style.dateWrapper}
      onFocus={handleClick}
      onBlur={handleClick}
      style={{
        borderColor: props?.schemeEligibility ? "#fff" : "",
        boxShadow: props?.schemeEligibility
          ? "rgb(0 79 172 / 10%) 0px 3px 6px"
          : "",
        width: props?.schemeEligibility ? "100%" : "",
        backgroundColor: props?.schemeEligibility ? "#fff" : "",
      }}
      {...props}
      value={age}
      max={props?.schemeEligibility ? today : ""}
      onChange={handleChange}
      placeholder={
        props?.schemeEligibility && !props.value ? "Select Date of Birth" : "" ||
        age=="" ? "Select Date of Birth" : ""
      }
    />
  );
}

export default CustomDatePicker;
