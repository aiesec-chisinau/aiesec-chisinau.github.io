
import { Routes, Route, useLocation} from "react-router-dom";



import Navbar from './components/navbar/Navbar';

import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from "./pages/contact/ContactPage";
import LoginPage from "./pages/login/LoginPage";
import NotFound from "./pages/404/NotFound";

function App() {

  
  const location = useLocation();
  // Check if the current route is either the Home or About page
  const showNavbar = 
     location.pathname === '/' 
  || location.pathname === '/about'
  || location.pathname === '/contact';

  return (
    <>

    
    {showNavbar && <Navbar />}
     
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/login" element={<LoginPage/>} />

        
      </Routes>
    </>
  );
}
export default App;