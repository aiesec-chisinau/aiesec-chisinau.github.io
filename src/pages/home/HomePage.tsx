import React from 'react';
import { useTranslation } from "react-i18next";
import Navbar from '../../components/navbar/Navbar';

import './home.css'
const HomePage: React.FC = () => {

  const { t, i18n } = useTranslation('home');

  

  return (
    <div>
      <div className='LatoMedium' id='home_top_infobanner'> Some products, functionality and/or services may not be available in your country.</div>
      <Navbar />
<img id='home_header' src='/images/home/home_header_nr1.png'/>

      <div id='home_main'>
<div id='home_scrol_down'>
  Scroll Down &nbsp;&nbsp;<img className='navbar_svg_icons' src='/images/svg/down_arrow_v3.svg'/>
</div>
        <hr className='home_hr'/>
        <div id='home_insta_block'>
          <div id='home_seeinsta_logo'> <img src='/images/media/instagram_logo.png' width="40%"/></div>
          <div id='home_seeinsta_text'><span>{t("otm.seeinsta1")} <span id='home_insta'>{t("otm.instagram")}</span> {t("otm.seeinsta2")} </span></div>

        </div>
      </div>


    </div>
  );
};

export default HomePage;
