import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "./soon.css";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/Navbar";

const SOON: React.FC = () => {
  const { t, i18n } = useTranslation("home");

  return (
    <div>
      <Navbar />
      <div className="OTM_underwork_page">
        <h2 className={"OTM_underwork_center_text"}>
          {" "}
          {t("otm.commigsoon")}&nbsp;{" "}
        </h2>
      </div>
    </div>
  );
};

export default SOON;
