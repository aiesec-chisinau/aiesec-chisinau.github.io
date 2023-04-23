import React from 'react';
import { useTranslation } from "react-i18next";
import Navbar from '../../components/navbar/Navbar';

import './home.css'
const HomePage: React.FC = () => {

  const { t, i18n } = useTranslation('home');

  

  return (
    <div>
      <Navbar />


     
      <h1>{t("home.home")}</h1>

    </div>
  );
};

export default HomePage;
