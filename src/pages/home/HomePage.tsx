import React from 'react';
import Navbar from '../../components/navbar/Navbar';

import './home.css'
const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
     
      <h1>Home</h1>
      <p>Here's some information about me.</p>
    </div>
  );
};

export default HomePage;
