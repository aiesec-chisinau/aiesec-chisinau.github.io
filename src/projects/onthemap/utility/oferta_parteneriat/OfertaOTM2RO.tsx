import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './OfertaOTM2.css';
import { useTranslation } from 'react-i18next';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


const OTMofertaPage: React.FC = () => {

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

      <embed style={{width:"100%", height:"100vw"}} src="https://sumanbogati.github.io/sample.pdf" type="application/pdf" />
      <Footer/>




    </>
  );
};


export default OTMofertaPage;
