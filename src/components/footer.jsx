import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/homestyle.css';

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    // Navegar a la página de inicio con el parámetro de consulta
    navigate(`/?section=${section}`);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-section logo-section">
          <a className='link' href="/">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo." className="footer-logo" />
          </a>
          <p className='li-footer'>Expertos por más de 5 años en la gestión de visas con más de 1200 clientes satisfechos.</p>
          <div className='social-container'>
            <a href="https://api.whatsapp.com/send/?phone=5491137834275&text&type=phone_number&app_absent=0" target='_blank' rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/img/wpp.png`} alt="Whatsapp." className="social-logo" /></a>
            <a href="https://www.instagram.com/myfastvisa/" target='_blank' rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/img/instagram.png`} alt="Instagram." className="social-logo" /></a>
          </div>
        </div>

        <div className="footer-section products-section">
          <h3>Productos</h3>
          <ul>
            <li onClick={() => handleNavigation('servicios')} className='li-footer'>Servicios</li>
            <li onClick={() => handleNavigation('faq')}>Preguntas frecuentes</li>
          </ul>
        </div>

        <div className="footer-section company-section">
          <h3>Compañía</h3>
          <ul>
            <li className='li-footer'>
              <a className='link' href="/acercaDeNosotros">Acerca de nosotros</a>
            </li>
            <li>
              <a className='link' href="/contactanos">Contáctanos</a>
            </li>
            <li>
              <a className='link' href="/paraAgenciasDeViaje">Para agencias de viaje</a>
            </li>
          </ul>
        </div>
      </footer>
      <hr />
      <p className='lastFooter'>© 2024 MyFastVisa</p>
    </>
  );
}

export default Footer;
