import React from "react";

export default function NotEligibleSchemeIcon({ color = "#02b875" }) {
  return (
    <>
    {/* <b className="text-danger">
      You may not be Eligible for the selected input.
    </b> */}
    {/* <br></br> */}
    <div className="ml-0">
    <svg
      stroke={color}
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      className="text-danger"
      height="3em"
      width="3em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
    </svg> 
   </div>
    </>
  );
}
