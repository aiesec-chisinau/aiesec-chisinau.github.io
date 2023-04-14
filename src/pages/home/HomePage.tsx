import React from 'react';
import { useTranslation } from "react-i18next";
import Navbar from '../../components/navbar/Navbar';

import './home.css'
const HomePage: React.FC = () => {

  const { t, i18n } = useTranslation('home');

  

  return (
    <div>
      <Navbar />

      <div >
       

           
                {t("home.welcome")} <br/>
                
            
            
        </div>
     
      <h1>Home</h1>
      <p>Here's some information about me.</p>
    </div>
  );
};

export default HomePage;
