
import { Routes, Route} from "react-router-dom";



import Navbar from './components/navbar/Navbar';

import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        
      </Routes>
    </>
  );
}
export default App;