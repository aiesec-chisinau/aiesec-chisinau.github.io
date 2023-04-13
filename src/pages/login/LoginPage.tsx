import React from 'react';
import { Link } from 'react-router-dom';


import './login.css'
const LoginPage: React.FC = () => {
  return (
    <><Link to="/">
      <img id="logo_img_login" src='/images/logo.png' height={'20px'} />
    </Link></>
  );
};

export default LoginPage;
