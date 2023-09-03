import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/Navbar";

import "./home.css";
import { Link } from "react-router-dom";
const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation("home");

  return (
    <div id="home_page">
      <div className="LatoMedium" id="home_top_infobanner">
        {" "}
        Some products, functionality and/or services may not be available in
        your country.
      </div>
      <Navbar />
      <div id="home_block0_1">
        {t("home.scroll_down")} &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="13"
          viewBox="0 0 22 13"
          fill="none"
        >
          <path
            d="M0.460261 0.460261C1.07394 -0.15342 2.06892 -0.15342 2.6826 0.460261L11 8.77766L19.3174 0.460261C19.9311 -0.15342 20.9261 -0.15342 21.5397 0.460261C22.1534 1.07394 22.1534 2.06892 21.5397 2.6826L12.1112 12.1112C11.4975 12.7248 10.5025 12.7248 9.88883 12.1112L0.460261 2.6826C-0.15342 2.06892 -0.15342 1.07394 0.460261 0.460261Z"
            fill="#828282"
          />
        </svg>
      </div>
      <div id="home_block1">
        <div id="home_block1_text1">
          Subscribe to our <span id="home_instagram_text">Instagram</span> !
        </div>
        <div id="home_block1_text2">
          See more about AIESEC and get updates on projects and opportunities.
        </div>
        <Link
          id="home_block1_text3"
          to="https://www.instagram.com/aiesec_in_chisinau/"
        >
          Subscribe
        </Link>
      </div>
      <div id="home_block2">delay</div>
      <div id="home_block3">
        <div className="home_block3_divs">
          <span>-</span>
          <span>memebers</span>
        </div>
        <div className="home_block3_divs">
          <span>-</span>
          <span>memebers</span>
        </div>
        <div className="home_block3_divs">
          <span>-</span>
          <span>memebers</span>
        </div>
        <div className="home_block3_divs">
          <span>-</span>
          <span>memebers</span>
        </div>
      </div>
      <div id="home_block4">
        <div id="home_block4_1">
          <img id="home_block4_1_img1" src="/images/home/home_img1.png" />
          <div id="home_block4_1_left">
            <div id="home_block4_1_left_heading">
              What is{" "}
              <span id="home_block4_1_left_heading_gradient">AIESEC </span>?
            </div>
            <div>What is AIESEC?</div>
            <div>What is AIESEC?</div>
          </div>
        </div>

        <div id="home_block4_2"></div>
      </div>
    </div>
  );
};

export default HomePage;
