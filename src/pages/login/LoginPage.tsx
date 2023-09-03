import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

import "./login.css";
import { useTranslation } from "react-i18next";

interface User {
  email: string;
  password: string;
}
const LoginPage: React.FC = () => {
  const { t, i18n } = useTranslation("home");

  return (
    <>
      <div id="goback">
        <Link to="/" style={{ textDecoration: "none" }}>
          &larr; {t("login.goback")}
        </Link>
      </div>

      <div className="container">
        <div className="child">comming soon</div>
      </div>
    </>
  );
};

export default LoginPage;
