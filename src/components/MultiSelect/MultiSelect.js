// Common Componet for to use of React Select

import React from "react";
import Select from "react-select";

export default function MultiSelect({ ...other }) {
  return <Select {...other} />;
}
