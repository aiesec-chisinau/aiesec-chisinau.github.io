import React, { useEffect, useState } from "react";

import "./more.css";
import { useTranslation } from "react-i18next";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OTMmorePage: React.FC = () => {
  const { t, i18n } = useTranslation("home");
  var q1stte = 0;
  const show_hide1 = (id1: string, id2: string, arrnr: string) => {
    const element1 = document.getElementById(id1);
    const element2 = document.getElementById(id2);
    const element3 = document.getElementById(arrnr);
    if (q1stte == 0) {
      if (element1) {
        q1stte = 1;
        element1.classList.remove("hide");
        element1.classList.add("show");
      }
      if (element2) {
        element2.classList.remove("show");
        element2.classList.add("hide");
      }
      if (element3) {
        element3.classList.remove("rotate0");
        element3.classList.add("rotate180");
      }
    } else {
      if (element1) {
        q1stte = 0;
        element1.classList.remove("show");
        element1.classList.add("hide");
      }
      if (element2) {
        element2.classList.remove("hide");
        element2.classList.add("show");
      }
      if (element3) {
        element3.classList.remove("rotate180");
        element3.classList.add("rotate0");
      }
    }
  };
  var q2stte = 0;
  const show_hide2 = (id1: string, id2: string, arrnr: string) => {
    const element1 = document.getElementById(id1);
    const element2 = document.getElementById(id2);
    const element3 = document.getElementById(arrnr);
    if (q2stte == 0) {
      if (element1) {
        q2stte = 1;
        element1.classList.remove("hide");
        element1.classList.add("show");
      }
      if (element2) {
        element2.classList.remove("show");
        element2.classList.add("hide");
      }
      if (element3) {
        element3.classList.remove("rotate0");
        element3.classList.add("rotate180");
      }
    } else {
      if (element1) {
        q2stte = 0;
        element1.classList.remove("show");
        element1.classList.add("hide");
      }
      if (element2) {
        element2.classList.remove("hide");
        element2.classList.add("show");
      }
      if (element3) {
        element3.classList.remove("rotate180");
        element3.classList.add("rotate0");
      }
    }
  };
  const [title, setTitle] = useState("On the Map");
  //'/images/onthemap/logo_black.png'
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  return (
    <>
      <Header />

      <div className="OTM_more_page">
        <h2 className={"OTM_more_center_text"}>
          {" "}
          {t("otm_more.title")}&nbsp;{" "}
        </h2>
        <p id="OTM_more_discover">
          <i>Moldova - waiting to be found On The Map!</i>
        </p>

        <div
          className="OTM_more_qa"
          onClick={() => {
            show_hide1("OTM_more_ans1", "OTM_more_ans1empty", "OTM_more_arr1");
          }}
        >
          <div className="OTM_more_qa_row">
            <div className="OTM_more_qa_text">{t("otm_more.q1")}</div>
            <div className="OTM_more_qa_arrow">
              <ExpandMoreIcon id="OTM_more_arr1" />
            </div>
          </div>
          <div id="OTM_more_ans1" className=" OTM_more_ans hide">
            {" "}
            &nbsp;&nbsp;&nbsp;{t("otm_more.a1")}
          </div>
          <div id="OTM_more_ans1empty"></div>
        </div>

        <div
          className="OTM_more_qa"
          onClick={() => {
            show_hide1("OTM_more_ans2", "OTM_more_ans2empty", "OTM_more_arr2");
          }}
        >
          <div className="OTM_more_qa_row">
            <div className="OTM_more_qa_text">
              {t("otm_more.q2")}{" "}
              <span style={{ fontFamily: "Pacifico" }}>On the map</span>
            </div>
            <div className="OTM_more_qa_arrow">
              <ExpandMoreIcon id="OTM_more_arr2" />
            </div>
          </div>
          <div id="OTM_more_ans2" className=" OTM_more_ans hide">
            {" "}
            &nbsp;&nbsp;&nbsp;{t("otm_more.a2")}
          </div>
          <div id="OTM_more_ans2empty"></div>
        </div>
      </div>
      <div id="OTM_more_midpage">
        <br />
      </div>
      <Footer />
    </>
  );
};

export default OTMmorePage;
