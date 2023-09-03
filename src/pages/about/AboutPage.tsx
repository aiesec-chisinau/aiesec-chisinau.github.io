import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./about.css";
import { Link } from "react-router-dom";
import "bootstrap";

import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const AboutPage = () => {
  const { t, i18n } = useTranslation("home");
  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleChange = (event: { target: { value: any } }) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };
  return (
    <>
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}>{t("navbar.about")}</h1>
        <p style={{ textAlign: "center" }}>
          <i>"Activating </i>
          <b>youth leadership</b> <i> since 1948 "</i>
        </p>
        <br />
        <div id="about_page_layout">
          <div className="about_content">
            <div className="about_inline_left">
              <h2>{t("about.who_are_we")}</h2>
              &emsp; {t("about.who_are_we_text1")}
              <b>{t("about.who_are_we_text2")}</b>
              {t("about.who_are_we_text3")}
              <br />
              <br />
              &emsp;<b>{t("about.who_are_we_text4")}</b>
              {t("about.who_are_we_text5")}
              <b>{t("about.who_are_we_text6")}</b>
              <br />
              <br />
              &emsp;{t("about.who_are_we_text7")}
            </div>
            <div className="about_inline_right about_photo">
              <img src="/images/blue_logo.png" height={"20px"} />
            </div>
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="about_page_layout">
        <div className="about_content">
          <div className="about_inline_left about_photo">
            <img src="/images/blue_logo.png" height={"20px"} />
          </div>
          <div className="about_inline_right ">
            <h2>{t("about.our_volunteers")}</h2>
            &emsp; {t("about.our_volunteers_text1")}
            <br />
            <br />
            &emsp;{t("about.our_volunteers_text2")}
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default AboutPage;
