import Footer from '../components/footer';
import Navbar from '../components/navbar';
import TransitionComponent from '../components/transition';
import '../css/homestyle.css';

function Contactanos() {
  return (
    <>
      <div className='pageGlobalStyle'>
        <Navbar />
        <div className="contact-container">
          <div className="text-blocks">
            <div className="text-block-contactanos">
              <p className='contactanos'><span className='span'>Contáctanos</span></p>
              <p>¿Tenés dudas? Sea sobre visados, documentos u otra índole, contactanos para ayudarte en tu proceso.</p>
            </div>
            <div className="text-block">
              <img src={`${process.env.PUBLIC_URL}/img/Frame 34.png`} alt="Texto 2" className="block-image" />
              <h4>Correo electrónico</h4>
              <p>Nuestro equipo se pondrá en contacto en 24 horas</p>
              <p>contacto@myfastvisa.com</p>
            </div>
            <div className="text-block">
              <img src={`${process.env.PUBLIC_URL}/img/Frame 36.png`} alt="Texto 3" className="block-image" />
              <h4>Instagram</h4>
              <p>Publicamos contenido relacionado a visados, mantenete informado</p>
              <p>@myfastvisa</p>
            </div>
            <div className="text-block">
              <img src={`${process.env.PUBLIC_URL}/img/Frame 36 (1).png`} alt="Texto 4" className="block-image" />
              <h4>WhatsApp</h4>
              <p>¿Necesitás una respuesta más rápida o detallada? Contactanos</p>
              <p>(11) 3783-4275</p>
            </div>
          </div>
          
          <div className='form-container-contactanos'>
            <div className="contact-form">
              <h2>Ponte en contacto</h2>
              <div className="form-group">
                <div className="input-container">
                  <img className="icon" src={`${process.env.PUBLIC_URL}/img/User_01.png`} alt="Nombre Icono" />
                  <input type="text" placeholder="Nombre" required />
                </div>
                <div className="input-container">
                  <img className="icon" src={`${process.env.PUBLIC_URL}/img/User_01.png`} alt="Apellido Icono" />
                  <input type="text" placeholder="Apellido" required />
                </div>
              </div>
              <div className="input-container">
                <img className="icon" src={`${process.env.PUBLIC_URL}/img/message.png`} alt="Correo Icono" />
                <input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="input-container">
                <img className="icon" src={`${process.env.PUBLIC_URL}/img/phone.png`} alt="Teléfono Icono" />
                <input type="tel" placeholder="Número de teléfono" required />
              </div>
              
              {/* Aquí añadimos los nuevos inputs */}
              <div className="form-group">
                <div className="input-container">
                  <input className='inputTrabajo' type="text" placeholder="Trabajo" />
                </div>
                <div className="input-container">
                  <input className='inputTrabajo' type="text" placeholder="Estudio" />
                </div>
                <div className="input-container">
                  <input className='inputTrabajo' type="text" placeholder="Turismo" />
                </div>
              </div>

              {/* Input para el mensaje */}
              <div className="input-container">
                <textarea 
                  placeholder="Deja tu mensaje (máximo 112 caracteres)" 
                  maxLength="112" 
                  rows="3"
                  required 
                />
              </div>

              <button type="submit" className="submit-button">
                Enviar
                <img className="enviar-icon" src={`${process.env.PUBLIC_URL}/img/arrow.png`} alt="Enviar Icono" />
              </button>
            </div>
          </div>
        </div>

        <TransitionComponent/>

        <Footer />
      </div>
    </>
  );
}

export default Contactanos;
