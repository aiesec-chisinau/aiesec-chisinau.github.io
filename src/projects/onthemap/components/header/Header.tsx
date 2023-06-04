import React, {useEffect, useState, useRef } from "react";
import {Link, useLocation} from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import InstagramIcon from '@mui/icons-material/Instagram';
import './header.css'


const Header: React.FC = () => {




    let lang_seleced:string=JSON.stringify(localStorage.getItem("i18nextLng")).split('"').join('');
    let lang_option ='';

    const { t, i18n } = useTranslation('home');
    const onClickLanguageChange = (
    ) => {
        let storedLanguage = localStorage.getItem("i18nextLng");

        if (storedLanguage == 'ro') {

            i18n.changeLanguage("en");
            //change the language
        } else {

            i18n.changeLanguage("ro"); //change the language
        }
    }

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            i18n.changeLanguage(storedLanguage);

        }

    }, [i18n]);




    const handleChange = (event: { target: { value: any; }; }) => {
        const language = event.target.value;
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);


    };
    const toOTM=()=>{
        window.location.href = "/#/onthemap";
    }
    const location = useLocation();
    return (
        <>


            <header className="otm_home_header">

                <div className=" otm_home_container otm_home_header__container">
                    <Link to={'/onthemap'} style={{color:"#222222"}}>
                    <div className="otm_home_header__logo" ><img className="otm_home_header__img" height="25px" width="25px"
                                                                src="/images/onthemap/logo_black.png"/><h1 className="otm_home_header__title">On the map<span
                        className="otm_home_header__light"></span></h1></div>
                    </Link>

                    <div className="otm_home_header__menu">
                        <nav id="navbar" className="otm_home_header__nav collapse">
                            <ul className="otm_home_header__elenco">

                                <li className="otm_home_header__el"> <Link to='/*'  className=" otm_home_header__link ">{t("otm.contact")}
                                    </Link></li>
                                {location.pathname == '/onthemap' && (
                                    <li className="otm_home_header__el otm_home_header__el--blue"  >
                                        <Link to='/*'  className="otm_home_btn otm_home_btn--white">{t("otm.signin")} →</Link>

                                    </li>
                                )}

                                <li className="otm_home_header__el otm_home_header__link" id='otm-header-lang' style={{padding: '0 '}}  onClick={onClickLanguageChange}>| &nbsp; {lang_seleced}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    );
};


export default Header;

