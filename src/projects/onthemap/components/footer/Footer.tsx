import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import { useTranslation } from 'react-i18next';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {

    const { t, i18n } = useTranslation('home');








    return (
        <>


            <footer id="footer">
                <div className="footer_container">
                    <div className="footer_row">
                        <div className='footer-vertical-center' id='footer-left-side'>
                            <img className="footer__img" src="/images/onthemap/logo-white-gif.gif" height='40px;' width='40px'/><h1 className="footer__title">On
                                The Map<span className="footer__light"><br/>powered by AIESEC</span></h1></div>
                        <div className='footer-vertical-center' id='footer-right-side'>
                            <div className="footer__social">

                                <a href="https://www.facebook.com/aiesec.in.chisinau" className="footer__social-l">

                                    <FacebookIcon className='footer-meniu-icon'/></a>


                                <a href="https://www.instagram.com/aiesec.onthemap" className="footer__social-l">
                                    <InstagramIcon className='footer-meniu-icon'/></a>

                                <a href="https://www.linkedin.com/showcase/aiesec-in-chisinau/"
                                   className="footer__social-l">
                                    <LinkedInIcon className='footer-meniu-icon'/> </a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};


export default Footer;
