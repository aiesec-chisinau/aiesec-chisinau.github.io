import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './form.css';
import { useTranslation } from 'react-i18next';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const OTMformPage: React.FC = () => {

    const { t, i18n } = useTranslation('home');



    const [title, setTitle] = useState("On the Map");
    //'/images/onthemap/logo_black.png'
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = title;

    }, [title]);

const form1=()=>{
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdnJzW_H1UOfmwQeMKdg03neWKN942VDyU_6cEfW6qwJM03WQ/viewform";
}
  const show_hide = (id1: string, id2: string) => {
    const element1 = document.getElementById(id1);
    if(element1) {
      element1.classList.remove('show');
      element1.classList.add('hide');
    }
    const element2 = document.getElementById(id2);
    if(element2) {
      element2.classList.remove('hide');
      element2.classList.add('show');
    }
  }

    return (

      <>


          <Header/>

<div id='OTM_apply'>
  <div id='OTM_apply_choseperiod' >
    <div  style={{color:"#037EF3" , border: '1px solid #222222', opacity:"0.3"}} className='show OTM_apply_choose_preiod'>
      <b> {t("otm_apply.period0")}</b> <br/>
      <span style={{color:"#888888"}}>{t("otm_apply.period0dates")}</span>
    </div>
    <div  onClick={() => {
      show_hide('OTM_apply','OTM_apply_form1');
      form1()
    } }style={{color:"#037EF3" , border: '2px solid #037EF3'}} className='show OTM_apply_choose_preiod'>
      <b> {t("otm_apply.period1")}</b> <br/>
      <span style={{color:"#888888"}}>{t("otm_apply.period1dates")}</span>
    </div>

    <div  style={{color:"#FBCE14", border: '1px solid #FBCE14',opacity:"0.3"}}className='OTM_apply_choose_preiod'>
      <b> {t("otm_apply.period2")}</b> <br/>
      <span style={{color:"#888888"}}>{t("otm_apply.period2dates")}</span>
    </div>
    <div  style={{color:"#D1312F" , border: '1px solid #D1312F',opacity:"0.3"}}className='OTM_apply_choose_preiod'>
      <b> {t("otm_apply.period3")}</b> <br/>
      <span style={{color:"#888888"}}>{t("otm_apply.period3dates")}</span>
    </div>

  </div>

</div>
        <div id='OTM_apply_form1'  className="hide"></div>
          <Footer/>




      </>
    );
};


export default OTMformPage;
