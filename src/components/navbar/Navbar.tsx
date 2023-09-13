import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { title: "navbar.projects", path: '/projects' },
  { title: "navbar.shop", path: '/shop' },
  { title: "navbar.about", path: '/about' },
  { title: "navbar.contact", path: '/contact' }
];

function TopNav() {

  const location = useLocation();
  const { t, i18n } = useTranslation("home");
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleNav = () => {
    setIsResponsive(!isResponsive);
  };

  const onClickLanguageChange = () => {
    const storedLanguage = localStorage.getItem("i18nextLng");
    if (storedLanguage === "ro") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ro");
    }
  };

  return (
      <div>
        <div className={isResponsive ? "topnav responsive" : "topnav"} id="myTopnav">

          <Link  to='/' className='topnav a'>
           <img className='navbar_icon_img' src="/images/logo.png" alt=''/>
          </Link>
          {navLinks.map(link => (
              <Link key={link.title} to={link.path}   style={{ color: location.pathname === "contact" ? '#ffffff' : '#222222' }}>
                {t(link.title)}
              </Link>

          ))}
          <div className='navbar_right'>
          <div  id="navbar_login_icon" ><img className='navbar_icon_img' alt=''
                                                                src="/images/svg/login.svg"/></div>
          <div  onClick={onClickLanguageChange}>
            <span id="apply_lang_bold">{t("apply.lang")}</span> |{" "}
            <span id="apply_lang_thin">{t("apply.nolang")}</span>
          </div>
            <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" className='navbar_icon_img' viewBox="0 0 18 12" fill="none">
                <path d="M17 5H1C0.4 5 0 5.4 0 6C0 6.6 0.4 7 1 7H17C17.6 7 18 6.6 18 6C18 5.4 17.6 5 17 5ZM1 2H17C17.6 2 18 1.6 18 1C18 0.4 17.6 0 17 0H1C0.4 0 0 0.4 0 1C0 1.6 0.4 2 1 2ZM17 10H1C0.4 10 0 10.4 0 11C0 11.6 0.4 12 1 12H17C17.6 12 18 11.6 18 11C18 10.4 17.6 10 17 10Z" fill="black"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
  );
}

export default TopNav;
