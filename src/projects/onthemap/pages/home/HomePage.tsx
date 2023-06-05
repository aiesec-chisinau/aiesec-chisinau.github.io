import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './home.css';
import { useTranslation } from 'react-i18next';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const OTMhomePage: React.FC = () => {

    const { t, i18n } = useTranslation('home');

  const toinsta=()=>{
    window.location.href = "https://www.instagram.com/aiesec.onthemap";
  }
    const [title, setTitle] = useState("On the Map");
    //'/images/onthemap/logo_black.png'
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = title;

    }, [title]);




    return (

        <>






<Header/>


            <div id='otm-home-join'>

                <div id='otm-home-join_div'>
                    <div id='otm-home-join_div_center'>
                        <a href="https://www.instagram.com/aiesec.onthemap"><img id="otm_site__img" src="/images/onthemap/main.png"/></a>
                        <div id='otm_home-joinus'>
                          <div id="otm_home_line_buttons">
                          <Link to='/onthemap/apply' id='otm_home-joinus-button'   className="otm_home_btn">{t("otm.joinus")}</Link>
                          <Link to='/onthemap/contact' id='otm_home-joinus-button2'   className="otm_home_btn">Contact</Link>
</div>
<Link to={'/onthemap/more'} style={{color:"#8198ae", fontSize:'14px', width:"200px", marginTop:"1vw", fontFamily:"Lato"}}>{t("otm.more")} </Link>
                        </div>

                         </div>


</div>


                <ArrowDownwardIcon id='otm_home_down_arrow'/>
            </div>
            <div id='otm_home_about'>
              <hr style={{width:"80%", marginLeft:"10%", border:" 0.1vw solid rgb(227 227 227 / 63%)",marginTop:"4vw", marginBottom:"4vw"}}/>
<div id='OTM_seeinsta'  onClick={() => {
  toinsta()
} }>
  <div id='OTM_seeinsta_logo'> <img src='/images/media/instagram_logo.png' width="40%"/></div>
  <div id='OTM_seeinsta_text'><span>{t("otm.seeinsta1")} <span id='OTM_home_insta'>{t("otm.instagram")}</span> {t("otm.seeinsta2")} </span></div>
</div>
              <hr style={{width:"80%", marginLeft:"10%", border:" 0.1vw solid rgb(227 227 227 / 63%)",marginTop:"4vw", marginBottom:"4vw"}}/>

            </div>
          <div id='OTM_home_photos'>
            <p id='OTM_home_photo_title'> Photos</p>

            <div className='OTM_home_photos_row'>
              <img src='/images/onthemap/events/IMG_8542.JPG' className='OTM_home_photos'/>
              <img src='/images/onthemap/events/IMG_8812.JPG' className='OTM_home_photos'/>
              <img src='/images/onthemap/events/IMG_9161.JPG' className='OTM_home_photos'/>
              <img src='/images/onthemap/events/IMG_7037.JPG' className='OTM_home_photos'/>
              <img src='/images/onthemap/events/IMG_8831.JPG' className='OTM_home_photos'/>
              <img src='/images/onthemap/events/IMG_9082.JPG' className='OTM_home_photos'/>
            </div>

          </div>
          <div style={{height:"3vw"}}>&nbsp;</div>
<Footer/>




        </>
    );
};


export default OTMhomePage;
