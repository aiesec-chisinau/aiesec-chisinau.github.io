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
                            <Link to='/onthemap/apply' id='otm_home-joinus-button'   className="otm_home_btn">{t("otm.joinus")}</Link>

<Link to={'/onthemap/more'} style={{color:"#666666", fontSize:'10px', width:"200px", marginTop:"1vw", fontFamily:"Lato"}}>{t("otm.more")} </Link>
                        </div>

                         </div>


</div>


                <ArrowDownwardIcon id='otm_home_down_arrow'/>
            </div>
            <div id='otm_home_about'>

            </div>


<Footer/>




        </>
    );
};


export default OTMhomePage;
