import React from "react";
import Style from "./RadioButton.module.css";

function RadioButton({ label, title, classes, ...props }) {
  return (
    <label className={[Style.wrapper, classes].join(" ")} title={title}>
      <input type="radio" {...props} />
      <span className={Style.checkmark}>{label}</span>
    </label>
  );
}

export default RadioButton;
