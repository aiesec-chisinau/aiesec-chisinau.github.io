import * as React from 'react';
import './navbar.css'
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


let lang_option="";
function set_lang(){

    //lang_option= languges_selection.slice(languges_selection.indexOf(lang_seleced)+1).join(' ');
    //console.log(lang_option)
}


function Navbar() {
    let lang_seleced:string=JSON.stringify(localStorage.getItem("i18nextLng")).split('"').join('');
    let lang_option ='';

  const { t, i18n } = useTranslation('home');


  //i18n.changeLanguage("ro"); //change the language

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

    useEffect(() => {
        if(localStorage.getItem("login")=='logged'){
console.log('logged')
        }else{
            console.log('not-logged')
        }
    }, []);
  const pages = [t("navbar.projects"), t("navbar.shop"), t("navbar.about"), t("navbar.contact")];



  return (
     <div id='navbar_div'>
       <div id='navbar_logo'> <img style={{width:'100%'}} src='/images/logo.png'/></div>
       <div id='navbar_options' className='LatoMedium'>
         <div className='navbar_menu_option'>{t("navbar.projects")}</div>
         <div className='navbar_menu_option'>{t("navbar.shop")}</div>
         <div className='navbar_menu_option'>{t("navbar.about")}</div>
         <div className='navbar_menu_option'>{t("navbar.contact")}</div>
       </div>

       <div id='navbar_lang' className='LatoMedium'>
         <div id='navbar_search_icon'><img className='navbar_svg_icons' src='/images/svg/search.svg'/></div>
         <div id='navbar_login_icon'><img className='navbar_svg_icons' src='/images/svg/login.svg'/></div>
         <div id='navbar_langiage'>{t("navbar.language")}<img id='navbar_downarrow' className='navbar_svg_icons'  src='/images/svg/down_arrow_v2.svg'/></div>

       </div>
     </div>
  );
}
export default Navbar;
