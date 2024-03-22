// For Finding Result Based on Date Filter Used in Grievance History

import React, { useState } from "react";
import Style from "../CustomDatePicker/DatePicker.module.css";

function DateFilter({ dateSearchHandler, clearDateHandler }) {
  const [date, setDate] = useState("");
  const handleChange = (e) => {
    setDate(e.target.value);
    dateSearchHandler(e.target.value);
  };
  const clearDateSearch = () => {
    setDate("");
    clearDateHandler();
  };
  return (
    <>
      <input
        type="date"
        className={Style.dateWrapper}
        value={date}
        onChange={handleChange}
      />
      {date && (
        <button
          className={[Style.clearBtn, "ml-2 px-2"].join(" ")}
          onClick={clearDateSearch}
        >
          Clear
        </button>
      )}
    </>
  );
}

export default DateFilter;
