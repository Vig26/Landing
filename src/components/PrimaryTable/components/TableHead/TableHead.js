import React from "react";
import Style from "./TableHead.module.css";

function TableHead({ data }) {
  return (
    <thead className={["fs-24", Style.headerWrapper].join(" ")}>
      <tr>
        {data.map((item) => (
          <th key={item.field} style={{textAlign: item.align}}>{item.headerName}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
