import React from "react";

export default function EligibleSchemeIcon({ color = "#02b875" }) {
  return (
    <svg
      stroke={color}
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      className="text-success"
      height="3em"
      width="3em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
    </svg>
  );
}
