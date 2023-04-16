import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

import './login.css'
import { useTranslation } from 'react-i18next';

interface User {
  email: string;
  password: string;
}
const LoginPage: React.FC = () => {


  const { t, i18n } = useTranslation('home');


  
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [error, setError] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post('/api/login', user);
      localStorage.setItem('token', data.token);
      setError('');
      // Redirect to home page
    } catch (err) {
      //setError(err.response.data.message);
    }
  };




  return (
    <><div id='goback'><Link to="/" style={{ textDecoration: 'none' }}>
      &larr; {t("login.goback")}
    </Link>
    </div>
   
   

  
   

    



</>
);
};


      export default LoginPage;
