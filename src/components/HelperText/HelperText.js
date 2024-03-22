//Display Helper text for the respective field, Used in Login Flow.

import React from "react";

function HelperText({ title, className }) {
  return (
    <p
      className={[
        "position-absolute text-danger font-weight-medium",
        className,
      ].join(" ")}
    >
      {title}
    </p>
  );
}
export default HelperText;
