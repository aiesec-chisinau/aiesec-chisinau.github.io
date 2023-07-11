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

     


    </div>
  );
};

export default HomePage;
