import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/Navbar";

import "./ebtwenties.css";
const EBtwentiesPage: React.FC = () => {
  const { t, i18n } = useTranslation("home");

  return (
    <div>
      <Navbar />
      <div>
        <h1>404 Page Not Found</h1>
        <p>The page you are looking for could not be found.</p>
      </div>
    </div>
  );
};

export default EBtwentiesPage;
