import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/landingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import DeletePolicy from "./pages/DeletePolicy";

import "./App.css";

function App() {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Router>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <img src="kave.png" className="logo" alt="Kave logo" />
          </Link>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/privacy" className="nav-link" onClick={closeMobileMenu}>
                Privacidad
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/terms" className="nav-link" onClick={closeMobileMenu}>
                Términos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/delete" className="nav-link" onClick={closeMobileMenu}>
                Eliminación de Datos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/delete" element={<DeletePolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
