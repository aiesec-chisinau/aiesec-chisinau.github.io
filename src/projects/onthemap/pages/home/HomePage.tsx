import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './home.css';
import { useTranslation } from 'react-i18next';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

interface User {
    email: string;
    password: string;
}
const OTMhomePage: React.FC = () => {

    const { t, i18n } = useTranslation('home');








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
