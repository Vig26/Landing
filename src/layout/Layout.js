import React, { useState } from "react";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";
import Header from "./Header";
import Style from "./Layout.module.css";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Toast from "../components/Toast";

function Layout({ children, showDisclaimer = false }) {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSidebar = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const { showMessage } = useSelector(
    ({ showMessageReducer }) => showMessageReducer
  );

  return (
    <>
      {showMessage.title && (
        <Toast
          title={showMessage.title}
          variant={showMessage.variant}
          description={showMessage.description}
          linkText={showMessage.linkText}
          link={showMessage.link}
        />
      )}
      <main
        className={[
          Style.mainWrapper,
          "d-flex jusify-content-center flex-column",
        ].join(" ")}
      >
        <Header onMenuClick={toggleSidebar} />
        <section className={Style.wrapper}>{children}</section>
        {showSideBar && <Sidebar sideBarHandler={toggleSidebar} />}
        {showDisclaimer && <Disclaimer />}
        <Footer />
      </main>
    </>
  );
}

export default Layout;
