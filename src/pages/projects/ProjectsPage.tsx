import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import "./projects.css"
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar'

const ProjectsPage: React.FC = () => {

  const { t, i18n } = useTranslation('home');


  const [title, setTitle] = useState("On the Map");
  //'/images/onthemap/logo_black.png'
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;

  }, [title]);


  return (

    <>


      <Navbar />
      <div className="OTM_contact_page">
        <h2 className={'OTM_contact_center_text'}> {t("projects.aboutprojects")}</h2>

        <p className={'OTM_contact_center_text'}> {t("projects.actual")}</p>

<hr style={{marginLeft:"10%", width:"80%"}}/>
        <br/>
        <div id='projects_midpage'>
<div className='project_div'>
<div className='projectfloatleft'><img width="100%" src='/images/onthemap/logo_black.png'/>
</div>
  <div className='projectfloatright'>
<div className='project_name'><b>On the map</b></div>
    <br/>
      #SDG8, tourism, Moldtava, GV, EXPA, <Link to={'/onthemap'}>{t("projects.seemore")}</Link>
  </div>
</div>
          <hr style={{marginLeft:"10%", width:"80%"}}/>
          <br/>
        </div>
      </div>

    </>
  );
};


export default ProjectsPage;
