import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './contact.css';
import { useTranslation } from 'react-i18next';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
const OTMcontactPage: React.FC = () => {

    const { t, i18n } = useTranslation('home');

  const TikTokIcon = ({ color = "#000000" }) => {
    return (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100%"
        height="100%"
      >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    );
  };

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
          <h2 className={'OTM_contact_center_text'}> {t("otm_contact.title")}&nbsp; <ConnectWithoutContactIcon/></h2>
        </div>
        <div id='OTM_contact_midpage'><br/>
          <p><b>{t("otm_contact.ifcontact")}</b></p>
<ul style={{lineHeight:"1.5"}}>
  <li>Veronica Tusca - OCVP Delegates
    &nbsp;<Link to={'mailto:veronica.tusca@aiesec.net'}>veronica.tusca@aiesec.net </Link>
    &nbsp;<Link style={{color:"#222222"}} to={'tel::+373(79)184319'}>+373((79) 184-319 </Link></li>
  <li>Cristian Brinza - OCVP S&M
    &nbsp;<Link to={'mailto:cristian.brinza@aiesec.net'}>cristian.brinza@aiesec.net </Link>
    &nbsp;<Link style={{color:"#222222"}} to={'tel::+373(68)745434'}>+373(68) 745-434 </Link></li>
  <li>Patricia Spivacenco - OC President
    &nbsp;<Link to={'mailto:patricia.spivacenco@aiesec.net'}>patricia.spivacenco@aiesec.net </Link>
    &nbsp;<Link style={{color:"#222222"}} to={'tel::+373(60)737655'}>+373(60) 737-655 </Link></li>
</ul>
          <p><b>{t("otm_contact.iflocation")}</b></p>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="300" height="200" id="gmap_canvas"
                      src="https://maps.google.com/maps?q=Bloc%20C,%20Strada%20C%C4%83priana%2050,%20Chi%C8%99in%C4%83u,%20Moldova&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0" scrolling="no"></iframe>
             <br/>
             </div>
          </div>
          <p><b>{t("otm_contact.ifsocial")}</b></p>
          <div className='OTM_contact_social'>
            <Link  style={{margin:"0 5px 0 5px"}} to="https://www.instagram.com/aiesec.onthemap"
                   className="otm_footer__social-l">
              <InstagramIcon  style={{color:"#222222"}}/> </Link>
            |
            <Link  style={{margin:"0 5px 0 5px"}} to="https://www.facebook.com/aiesec.in.chisinau"
                   className="otm_footer__social-l">
              <FacebookIcon  style={{color:"#222222"}}/> </Link>

            <Link  style={{margin:"0 5px 0 5px"}} to="https://www.instagram.com/aiesec_in_chisinau/"
                   className="otm_footer__social-l">
              <InstagramIcon  style={{color:"#222222"}}/> </Link>
            <Link  style={{margin:"0 5px 0 5px"}} to="https://www.tiktok.com/@aiesec_in_chisinau/"
                   className="otm_footer__social-l">
              <div style={{width: "23px",
                height: "23px"}}><TikTokIcon /></div> </Link>
            <Link  style={{margin:"0 5px 0 5px"}} to="https://www.linkedin.com/showcase/aiesec-in-chisinau/"
                   className="otm_footer__social-l">
              <LinkedInIcon  style={{color:"#222222"}}/> </Link>

          </div>
        </div>

          <Footer/>




      </>
    );
};


export default OTMcontactPage;
