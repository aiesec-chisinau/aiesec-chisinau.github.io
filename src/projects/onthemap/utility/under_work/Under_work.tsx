import React, { useEffect, useState } from "react";

import "./under_work.css";
import { useTranslation } from "react-i18next";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const OTMunderworkPage: React.FC = () => {
  const { t, i18n } = useTranslation("home");

  const [title, setTitle] = useState("On the Map");
  //'/images/onthemap/logo_black.png'
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  return (
    <>
      <Header />
      <div className="OTM_underwork_page">
        <h2 className={"OTM_underwork_center_text"}>
          {" "}
          {t("otm.commigsoon")}&nbsp;{" "}
        </h2>
      </div>

      <Footer />
    </>
  );
};

export default OTMunderworkPage;
