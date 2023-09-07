import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";
import { useTranslation } from "react-i18next";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const OTMhomePage: React.FC = () => {
  const { t } = useTranslation("home");

  const toinsta = () => {
    window.location.href = "https://www.instagram.com/aiesec.onthemap";
  };
  const [title] = useState("On the Map");
  //'/images/onthemap/logo_black.png'
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;

    if (localStorage.getItem("one_time_gif_home_page_OTM") === "true") {
      const element1 = document.getElementById("OTM_onetiome_gif");
      if (element1) {
        element1.classList.remove("show");
        element1.classList.add("hide");
      }
      const element2 = document.getElementById("OTM_homepage");
      if (element2) {
        element2.classList.remove("hide");
        element2.classList.add("show");
      }
    }

    const timer = setTimeout(() => {
      if (localStorage.getItem("one_time_gif_home_page_OTM") !== "true") {
        localStorage.setItem("one_time_gif_home_page_OTM", "true");
        const element1 = document.getElementById("OTM_onetiome_gif");
        if (element1) {
          element1.classList.remove("show");
          element1.classList.add("hide");
        }
        const element2 = document.getElementById("OTM_homepage");
        if (element2) {
          element2.classList.remove("hide");
          element2.classList.add("show");
        }
      }

      console.log("aaaa");
    }, 4000);

    // Clear the timeout if the component unmounts before the 3 seconds.
    return () => clearTimeout(timer);
  }, [title]);

  return (
    <>
      <div id="OTM_onetiome_gif">
        <img
          src="/images/onthemap/logo_gif_black_trasnparent_bg_onetime_loop.gif"
          style={{ height: "150px", width: "150px" }}
          alt=''
        />
      </div>

      <div id="OTM_homepage" className="hide" style={{ width: "100%" }}>
        <Header />

        <div id="otm-home-join">
          <div id="otm-home-join_div">
            <div id="otm-home-join_div_center">
              <a href="https://www.instagram.com/aiesec.onthemap">
                <img id="otm_site__img" src="/images/onthemap/main.png" alt='On the map' />
              </a>
              <div id="otm_home-joinus">
                <div id="otm_home_line_buttons">
                  <Link
                    to="/onthemap/apply"
                    id="otm_home-joinus-button"
                    className="otm_home_btn"
                  >
                    {t("otm.joinus")}
                  </Link>
                  <Link
                    to="/onthemap/contact"
                    id="otm_home-joinus-button2"
                    className="otm_home_btn"
                  >
                    Contact
                  </Link>
                </div>
                <Link
                  to={"/onthemap/more"}
                  style={{
                    color: "#8198ae",
                    fontSize: "14px",
                    width: "200px",
                    marginTop: "1.5vw",
                    fontFamily: "Lato",
                  }}
                >
                  {t("otm.more")}{" "}
                </Link>
              </div>
            </div>
          </div>

          <ArrowDownwardIcon id="otm_home_down_arrow" />
        </div>
        <div id="otm_home_about">
          <hr
            style={{
              width: "80%",
              marginLeft: "10%",
              border: " 0.1vw solid rgb(227 227 227 / 63%)",
              marginTop: "4vw",
              marginBottom: "4vw",
            }}
          />
          <div
            id="OTM_seeinsta"
            onClick={() => {
              toinsta();
            }}
          >
            <div id="OTM_seeinsta_logo">
              {" "}
              <img src="/images/media/instagram_logo.png" width="40%"  alt='Instagram'/>
            </div>
            <div id="OTM_seeinsta_text">
              <span>
                {t("otm.seeinsta1")}{" "}
                <span id="OTM_home_insta">{t("otm.instagram")}</span>{" "}
                {t("otm.seeinsta2")}{" "}
              </span>
            </div>
          </div>
          <hr
            style={{
              width: "80%",
              marginLeft: "10%",
              border: " 0.1vw solid rgb(227 227 227 / 63%)",
              marginTop: "4vw",
              marginBottom: "4vw",
            }}
          />
        </div>
        <div id="OTM_home_photos">
          <p id="OTM_home_photo_title"> {t("otm.photos")}</p>

          <div className="OTM_home_photos_row">
            <img
              src="/images/onthemap/events/IMG_8542.JPG"
              className="OTM_home_photos"
              alt='OnTheMap imege1'
            />
            <img
              src="/images/onthemap/events/IMG_8812.JPG"
              className="OTM_home_photos"
              alt='OnTheMap imege2'
            />
            <img
              src="/images/onthemap/events/IMG_9161.JPG"
              className="OTM_home_photos"
              alt='OnTheMap imege3'
            />
            <img
              src="/images/onthemap/events/IMG_7037.JPG"
              className="OTM_home_photos"
              alt='OnTheMap imege4'
            />
            <img
              src="/images/onthemap/events/IMG_8831.JPG"
              className="OTM_home_photos"
              alt='OnTheMap imege4'
            />
            <img
              src="/images/onthemap/events/IMG_9082.JPG"
              className="OTM_home_photos"
              alt='OnTheMap imege5'
            />
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div
              onClick={() => {
                window.location.href =
                  "https://aiesec-chisinau.github.io/on-the-map";
              }}
              id="OTM_home_photobutton"
            >
              <b> {t("otm.photobutton")}</b> <br />
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "80%",
            marginLeft: "10%",
            border: " 0.1vw solid rgb(227 227 227 / 63%)",
            marginTop: "4vw",
            marginBottom: "4vw",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p id="OTM_home_photo_title">
            {" "}
            {t("otm.become_pr")}
            <span id="OTM_home_partner">{t("otm.partner")}</span>?
          </p>
          <div
            onClick={() => {
              window.location.href =
                "https://aiesec-chisinau.github.io/#/onthemap/partnership";
            }}
            id="OTM_home_photobutton"
          >
            <b> {t("otm.see_more_info")}</b> <br />
          </div>
        </div>

        <div style={{ height: "3vw" }}>&nbsp;</div>

        <div style={{ height: "3vw" }}>&nbsp;</div>
        <Footer />
      </div>
    </>
  );
};

export default OTMhomePage;
