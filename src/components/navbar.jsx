import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbarr">
      <div className='navbarr-container'>
        <div className="navbar-logo">
          <Link className='link' to="/">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`navbarr-links ${isOpen ? 'active' : ''}`}>
          <li className='burger-titles' style={{ display: isMobile ? 'block' : 'none' }}>Productos</li>
          <li><Link to="#servicios">Servicios</Link></li>
          <li><Link to="#reviews">Reviews</Link></li>
          <li><Link to="#requisitos">Requisitos</Link></li>
          <li><Link to="#faq">FAQ</Link></li>
          <li className='burger-titles' style={{ display: isMobile ? 'block' : 'none' }}>Compañía</li>
          <li><Link to="/acercaDeNosotros" style={{ display: isMobile ? 'block' : 'none' }}>Acerca de nosotros</Link></li>
          <li><Link to="/contactanos" style={{ display: isMobile ? 'block' : 'none' }}>Contáctanos</Link></li>
          <li><Link to="/paraAgenciasDeViaje" style={{ display: isMobile ? 'block' : 'none' }}>Para agencias de viaje</Link></li>
          <li>
            <div className="navbarr-button">
              <a href="https://api.whatsapp.com/send/?phone=5491137834275&text&type=phone_number&app_absent=0" target='_blank' rel="noreferrer"><button className="btn-empezar">Empezar</button></a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
