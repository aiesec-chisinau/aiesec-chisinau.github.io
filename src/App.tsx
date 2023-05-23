
import { Routes, Route , Navigate} from "react-router-dom";


import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from "./pages/contact/ContactPage";
import LoginPage from "./pages/login/LoginPage";
import NotFound from "./pages/404/NotFound";


//project routing imports

//on the map
import OntheMap from './projects/onthemap/pages/home/HomePage';
import LogoOTM from './projects/onthemap/utility/back_logo/logo'
import React from "react";



function App() {


  return (
    <>

  
     
      <Routes >

        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/login" element={<LoginPage/>} />


          // projects

            //on-the-map

        <Route path="/on-the-map" element={<Navigate to="/onthemap" replace />}/>
        <Route path="/onthemap" element={<OntheMap/>} />

        // utility
        <Route path="/onthemap/logo" element={<LogoOTM/>} />

      </Routes>
    </>
  );
}
export default App;