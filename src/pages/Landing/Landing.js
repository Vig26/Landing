import React from "react";
import { Layout } from "../../layout";
import Banner from "./components/Banner";

function Landing() {
  return (
    <Layout showDisclaimer>
      <Banner />
    </Layout>
  );
}

export default Landing;
