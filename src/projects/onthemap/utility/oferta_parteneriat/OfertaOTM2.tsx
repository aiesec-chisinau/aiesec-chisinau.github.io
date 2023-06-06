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
      <div className="OTM_contact_page">
        <h2 className={'OTM_contact_center_text'}> {t("OTM_oferta.offer")}&nbsp; </h2>
      </div>
      <div id='OTM_oferta'>

        <div id='OTM_oferta_choseperiod' >
          <div  style={{color:"#222222" }} className=' OTM_oferta_choose_title'>
            <b>{t("OTM_oferta.po_ro")} </b>

          </div>
          <div  onClick={() => {
            window.location.href = "https://aiesec-chisinau.github.io/utility/onthemap/Oferta-de-parteneriat-On-the-map-10.pdf"
          } } className='show OTM_oferta_choose_preiod'>
            <b> {t("OTM_oferta.OTM2_oferta_ro_summer")}</b> <br/>
            <span style={{color:"#888888"}}>{t("OTM_oferta.pdf_version")}</span>
          </div>

          <div  onClick={() => {
            window.location.href = "https://www.canva.com/design/DAFhtX1UZkg/O2BUmY9RgBhlj3SGzMbWiw/view?utm_content=DAFhtX1UZkg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          } } className='show OTM_oferta_choose_preiod'>
            <b> {t("OTM_oferta.OTM2_oferta_ro_summer")}</b> <br/>
            <span style={{color:"#888888"}}>{t("OTM_oferta.canva_version")}</span>
          </div>


          <div  style={{color:"#222222" }} className=' OTM_oferta_choose_title'>
            <b> {t("OTM_oferta.po_en")} </b>

          </div>
          <div  onClick={() => {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdnJzW_H1UOfmwQeMKdg03neWKN942VDyU_6cEfW6qwJM03WQ/viewform"
          } } className='show OTM_oferta_choose_preiod'>
            <b> {t("OTM_oferta.OTM2_oferta_en_summer")}</b> <br/>
            <span style={{color:"#888888"}}>{t("OTM_oferta.pdf_version")}</span>
          </div>

          <div  onClick={() => {
            window.location.href = "https://www.canva.com/design/DAFjp-6wqXU/Vcwqd2O-kitXkcSTZYLa7A/view?utm_content=DAFjp-6wqXU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          } } className='show OTM_oferta_choose_preiod'>
            <b> {t("OTM_oferta.OTM2_oferta_en_summer")}</b> <br/>
            <span style={{color:"#888888"}}>{t("OTM_oferta.canva_version")}</span>
          </div>



          <div  style={{color:"#222222" }} className=' OTM_oferta_choose_title'>
            <b> {t("OTM_oferta.po_pr")} </b>

          </div>
          <div  onClick={() => {
            window.location.href = "https://www.canva.com/design/DAFjkNU7BRA/KbyPTFrwlbXWiRJxuEREsA/view?utm_content=DAFjkNU7BRA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          } } className='show OTM_oferta_choose_preiod'>
            <b> {t("OTM_oferta.OTM2_oferta_pr")}</b> <br/>
            <span style={{color:"#888888"}}>{t("OTM_oferta.canva_version")}</span>
          </div>


          <div  style={{color:"#999999" ,marginTop:"4vw" }} className=' OTM_oferta_choose_title'>
            {t("OTM_oferta.for_more")}<br/>
            <Link to={"/onthemap/contact"}>{t("OTM_oferta.contactus")}</Link> {t("OTM_oferta.or")} <Link to={"/onthemap/more"}>{t("OTM_oferta.visit_page")}</Link>


          </div>
        </div>

      </div>
      <div id='OTM_oferta_form1'  className="hide"></div>
      
      <Footer/>




    </>
  );
};


export default OTMofertaPage;
