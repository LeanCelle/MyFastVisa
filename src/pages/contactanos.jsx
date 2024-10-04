import React, { useState } from 'react';
import Footer from '../components/footer'; 
import Navbar from '../components/navbar';
import TransitionComponent from '../components/transition';
import '../css/homestyle.css';

function Contactanos() {
  const [selectedOption, setSelectedOption] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(''); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el envío por defecto del formulario
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Añadir la opción seleccionada al objeto de datos
    data.opcionSeleccionada = selectedOption;

    // Envío a Formspree
    fetch('https://formspree.io/f/mdkonelj', { // Reemplaza {tu-id} con tu ID de formulario
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setModalMessage('Su formulario ha sido enviado con éxito. Nos pondremos en contacto pronto.');
        setModalType('success');
        setModalVisible(true); // Mostrar el modal de éxito
        e.target.reset(); // Limpia el formulario
        setSelectedOption(''); // Reinicia la opción seleccionada
      } else {
        throw new Error('Error en el envío del formulario');
      }
    })
    .catch(error => {
      setModalType('error');
      setModalMessage('Hubo un problema al enviar el formulario: ' + error.message);
      setModalVisible(true); // Mostrar el modal de error
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className='pageGlobalStyle'>
        <Navbar />
        <div className="contact-container">
          <div className="text-blocks">
            <div className="text-block-contactanos">
              <h1 className='contactanos'><span className='span'>Contáctanos</span></h1>
              <p>¿Tenés dudas? Sea sobre visados, documentos u otra índole, contactanos para ayudarte en tu proceso.</p>
            </div>
            <div className="text-block">
              <img src={`${process.env.PUBLIC_URL}/img/Frame 34.png`} alt="Email." className="block-image" />
              <h4>Correo electrónico</h4>
              <p>Nuestro equipo se pondrá en contacto en 24 horas</p>
              <a href="mailto: contacto@myfastvisa.com" target='_blank' rel="noreferrer"><p>contacto@myfastvisa.com</p></a>
            </div>
            <div className="text-block">
              <img src={`${process.env.PUBLIC_URL}/img/Frame 36.png`} alt="Instagram." className="block-image" />
              <h4>Instagram</h4>
              <p>Publicamos contenido relacionado a visados, mantenete informado</p>
              <a href="https://www.instagram.com/myfastvisa/" target='_blank' rel="noreferrer"><p>@myfastvisa</p></a>
            </div>
            <div className="text-block">
              <img src={`${process.env.PUBLIC_URL}/img/Frame 36 (1).png`} alt="Whatsapp." className="block-image" />
              <h4>WhatsApp</h4>
              <p>¿Necesitás una respuesta más rápida o detallada? Contactanos</p>
              <a href="https://api.whatsapp.com/send/?phone=5491137834275&text&type=phone_number&app_absent=0" target='_blank' rel="noreferrer"><p>(11) 3783-4275</p></a>
            </div>
          </div>
          
          <div className='form-container-contactanos'>
            <div className="contact-form">
              <h2>Ponte en contacto</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="input-container">
                    <img className="icon" src={`${process.env.PUBLIC_URL}/img/User_01.png`} alt="Nombre Icono." />
                    <input type="text" name="nombre" placeholder="Nombre" required />
                  </div>
                  <div className="input-container">
                    <img className="icon" src={`${process.env.PUBLIC_URL}/img/User_01.png`} alt="Apellido Icono." />
                    <input type="text" name="apellido" placeholder="Apellido" required />
                  </div>
                </div>
                <div className="input-container">
                  <img className="icon" src={`${process.env.PUBLIC_URL}/img/message.png`} alt="Correo Icono." />
                  <input type="email" name="correo" placeholder="Correo electrónico" required />
                </div>
                <div className="input-container">
                  <img className="icon" src={`${process.env.PUBLIC_URL}/img/phone.png`} alt="Teléfono Icono." />
                  <input type="tel" name="telefono" placeholder="Número de teléfono" required />
                </div>
                
                <div className="form-group">
                  <div className="input-container">
                    <button 
                      type="button" 
                      className={`input-button ${selectedOption === 'Trabajo' ? 'selected' : ''}`} 
                      onClick={() => setSelectedOption('Trabajo')}
                    >
                      Trabajo
                    </button>
                  </div>
                  <div className="input-container">
                    <button 
                      type="button" 
                      className={`input-button ${selectedOption === 'Estudio' ? 'selected' : ''}`} 
                      onClick={() => setSelectedOption('Estudio')}
                    >
                      Estudio
                    </button>
                  </div>
                  <div className="input-container">
                    <button 
                      type="button" 
                      className={`input-button ${selectedOption === 'Turismo' ? 'selected' : ''}`} 
                      onClick={() => setSelectedOption('Turismo')}
                    >
                      Turismo
                    </button>
                  </div>
                </div>
                
                <div className="input-container">
                  <textarea 
                    name="mensaje" 
                    placeholder="Deja tu mensaje (máximo 112 caracteres)" 
                    maxLength="112" 
                    rows="3"
                    required 
                  />
                </div>

                <button type="submit" className="submit-button">
                  Enviar
                  <img className="enviar-icon" src={`${process.env.PUBLIC_URL}/img/arrow.png`} alt="Arrow." />
                </button>
              </form>
            </div>
          </div>
        </div>

        <TransitionComponent/>

        <Footer />

        {/* Modal para mostrar el mensaje */}
        {modalVisible && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{modalType === 'success' ? '¡Enviado!' : 'Error'}</h2>
              <p>{modalMessage}</p>
              <button onClick={closeModal} className="close-modal-button">Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contactanos;
