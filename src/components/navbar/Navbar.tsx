import { Link } from "react-router-dom"
import './navbar.css'
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const Navbar =()=>{
  const { t, i18n } = useTranslation('home');
  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
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
      return (
        <>
        <header className="header">
        <a href="" className="logo"><img src='/images/logo.png' height={'20px'}/></a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          
        <li><Link to="/projects">{t("navbar.projects")}</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">{t("navbar.about")}</Link></li>
        
          <li><Link to="/contact">{t("navbar.contact")}</Link></li>
          <li><Link to="/login">{t("navbar.login")}</Link></li>
          <li>
            <select  value={i18n.language} onChange={onClickLanguageChange}>
        <option value="en" >en</option>
        <option value="ro" >ro</option>
       
        </select>
        </li>
        </ul>
      </header>
      <div id="under_nav_header"></div>
      </>
        
      )
}

export default Navbar;