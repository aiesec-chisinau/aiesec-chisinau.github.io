import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './home.css';
import { useTranslation } from 'react-i18next';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

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


            <div className=".otm_home_totaldiv">



<Header/>

                <main>
<div id='otm-home-join'>

</div>
                </main>
<Footer/>

            </div>


        </>
    );
};


export default OTMhomePage;
