import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./about.css"
import { Link } from "react-router-dom"
import  'bootstrap';

import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const AboutPage =()=>{
  const { t, i18n } = useTranslation('home');
  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
}

useEffect(() => {
  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    i18n.changeLanguage(storedLanguage);
  }
}, [i18n]);

const handleChange = (event: { target: { value: any; }; }) => {
  const language = event.target.value;
  i18n.changeLanguage(language);
  localStorage.setItem("language", language);
};
      return (
        <>
        <div>
       <Navbar />
       <br/><br/><br/>
       <h1 style={{textAlign: "center"}}>{t("navbar.about")}</h1>
       <p style={{textAlign: "center"}}><i>"Activating </i><b>youth  leadership</b> <i>    since 1948 "</i></p>
       <br/>
<div id='about_page_layout'>

  
       sss

    </div>
    </div>
      </>
        
      )
}

export default AboutPage;