import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './apply.css';

const Apply: React.FC = () => {


  let lang_seleced:string=JSON.stringify(localStorage.getItem("i18nextLng")).split('"').join('');

  let lang_option ='';

  const { t, i18n } = useTranslation('home');
  const onClickLanguageChange = (
  ) => {
    let storedLanguage = localStorage.getItem("i18nextLng");

    if (storedLanguage == 'ro') {

      i18n.changeLanguage("en");
      lang_seleced= 'EN|RO';
      //change the language
    } else {
      lang_seleced= 'RO|EN';
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
  return (
    <div id='apply_page'>


<div id='apply_page_inside'>
  <div id='apply_top'>
    <img id='apply_nav_img' src='/images/logo.png'/>
    <div  id='apply-lang'   onClick={onClickLanguageChange}><span id='apply_lang_bold'>{t("apply.lang")}</span> | <span id='apply_lang_thin'>{t("apply.nolang")}</span></div>

  </div>


  <div id='apply_div2'> <img id='apply_block2_img1' src='/images/apply/block2_img1.png'/></div>
<div id='apply_div3'> <div id='apply_div3_title'>
    Plase check the boxes if you: <span id='apply_div3_title_gray'>(will not influence the results)</span>
  </div>
  <div className='apply_check_div'> <input  type='checkbox' className='apply_checkbox'/><span>I speak English</span></div>

  <div className='apply_check_div'><input type='checkbox' className='apply_checkbox'/><span>I study at university</span></div>
    <div className='apply_check_div'><input type='checkbox' className='apply_checkbox'/><span>I live in Chisinau</span></div>
      <div className='apply_check_div'><input type='checkbox' className='apply_checkbox'/><span>I am working (have a job)</span></div>
  </div>
</div>












    </div>
  );
};

export default Apply;
