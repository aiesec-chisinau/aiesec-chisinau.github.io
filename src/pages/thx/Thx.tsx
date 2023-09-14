import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "./thx.css";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/Navbar";

const Thx: React.FC = () => {
  const { t, i18n } = useTranslation("home");

  return (
    <div id="thx_bg">
      &nbsp;
      <Link id="thx_goback" to="/soon">
        <svg
          id="thx_svg_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7 10"
          fill="none"
        >
          <path
            id="thx_svg_1_path"
            d="M0.818359 9L5.72745 5.07273L0.818359 0.818182"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        &nbsp;&nbsp;{t("home.goback")}
      </Link>
      <div id="thx_block">
        <div id="thx_bg_inside">
          <div className="thx_center">
            <div id="thx_send_icon_div">
              <svg
                id="thx_sent_icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  d="M9 12H11V7.85L12.6 9.425L14.025 8L10 4L6 8L7.425 9.4L9 7.825V12ZM2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM2 14H18V2H2V14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div id="thx_center_txt_1"> {t("home.send")}&nbsp; </div>
            <div id="thx_center_txt_2"> {t("home.thx")}&nbsp; </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thx;
