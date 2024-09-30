import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import '../css/homestyle.css';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-section logo-section">
        <Link className='link' to="/">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" className="footer-logo" />
        </Link>
          <p className='li-footer'>Expertos por más de 5 años en la gestión de visas con más de 1200 clientes satisfechos.</p>
          <div className='social-container'>
            <a href="https://api.whatsapp.com/send/?phone=5491137834275&text&type=phone_number&app_absent=0" target='_blank'><img src={`${process.env.PUBLIC_URL}/img/wpp.png`} alt="Logo" className="social-logo" /></a>
            <a href="https://www.instagram.com/myfastvisa)./" target='_blank'><img src={`${process.env.PUBLIC_URL}/img/instagram.png`} alt="Logo" className="social-logo" /></a>
          </div>
        </div>

        <div className="footer-section products-section">
          <h3>Productos</h3>
          <ul>
            <li className='li-footer'>Servicios</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>

        <div className="footer-section company-section">
          <h3>Compañía</h3>
          <ul>
            <li className='li-footer'>
              <Link className='link' to="/acercaDeNosotros">Acerca de nosotros</Link>
            </li>
            <li>
              <Link className='link' to="/contactanos">Contáctanos</Link>
            </li>
            <li>
              <Link className='link' to="/paraAgenciasDeViaje">Para agencias de viaje</Link>
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
