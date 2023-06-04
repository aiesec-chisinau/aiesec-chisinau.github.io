import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './more.css';
import { useTranslation } from 'react-i18next';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


const OTMmorePage: React.FC = () => {

    const { t, i18n } = useTranslation('home');



    const [title, setTitle] = useState("On the Map");
    //'/images/onthemap/logo_black.png'
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = title;

    }, [title]);


    return (

      <>


          <Header/>



        <div className="OTM_more_page">
          <h2 className={'OTM_more_center_text'}> {t("otm_more.title")}&nbsp; </h2>
        </div>
        <div id='OTM_more_midpage'><br/>
        </div>
          <Footer/>




      </>
    );
};


export default OTMmorePage;
