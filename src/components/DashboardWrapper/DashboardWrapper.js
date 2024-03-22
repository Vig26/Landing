// Wrapper Component for the dashboard pages after login

import React from "react";
import { Layout } from "../../layout";
import BannerTitle from "../BannerTitle";
import Style from "./DashboardWrapper.module.css";

function DashboardWrapper({
  children,
  title,
  showBackButton,
  classes,
  showSubtitle,
}) {
  return (
    <Layout>
      <BannerTitle
        title={title}
        showBackButton={showBackButton}
        showSubtitle={showSubtitle}
      />
      <div
        className={[
          `container d-flex flex-grow-1 flex-column ${classes}`,
          Style.wrapper,
        ].join(" ")}
      >
        {children}
      </div>
    </Layout>
  );
}

export default DashboardWrapper;
