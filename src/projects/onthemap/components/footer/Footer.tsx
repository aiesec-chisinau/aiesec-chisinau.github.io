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

            <div id='otm-footer-bg-space'></div>
            <footer id="otm_footer">
                <div className="otm_footer_container">
                    <div className="otm_footer_row">
                        <div className='otm_footer-vertical-center' id='otm_footer-left-side'>
                            <img className="otm_footer__img" src="/images/onthemap/logo_gif_white_transparent_bg.gif" height='40px;' width='40px'/><h1 className="otm_footer__title">On
                                The Map<span className="otm_footer__light"><br/>powered by AIESEC</span></h1></div>
                        <div className='otm_footer-vertical-center' id='otm_footer-right-side'>
                            <div className="otm_footer__social">

                                <a href="https://www.facebook.com/aiesec.in.chisinau" className="otm_footer__social-l">

                                    <FacebookIcon className='otm_footer-meniu-icon'/></a>


                                <a href="https://www.instagram.com/aiesec.onthemap" className="otm_footer__social-l">
                                    <InstagramIcon className='otm_footer-meniu-icon'/></a>

                                <a href="https://www.linkedin.com/showcase/aiesec-in-chisinau/"
                                   className="otm_footer__social-l">
                                    <LinkedInIcon className='otm_footer-meniu-icon'/> </a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};


export default Footer;
