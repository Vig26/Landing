import React from "react";
import Spinner from "react-bootstrap/Spinner";

const FullPageLoader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      size="md"
      variant="primary"
      className="spinner-loader"
    />
  );
};

export default FullPageLoader;
