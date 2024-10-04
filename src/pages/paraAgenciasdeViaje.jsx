import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../css/homestyle.css';
import { useState } from 'react';

function ParaAgenciasDeViaje() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    try {
      const response = await fetch('https://formspree.io/f/mdkonelj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setModalMessage('Su formulario ha sido enviado con éxito. Nos pondremos en contacto pronto.');
        setModalType('success');
        setModalOpen(true);
        event.target.reset(); // Limpia el formulario
      } else {
        throw new Error('Error al enviar el mensaje.');
      }
    } catch (error) {
      setModalMessage('Hubo un error al enviar el mensaje. Inténtelo de nuevo más tarde.');
      setModalType('error');
      setModalOpen(true);
    }
  };

  return (
    <>
      <div className='pageGlobalStyle'>
        <Navbar />
        <h1 className='agencias'><span className='span'>Agencias de viaje</span></h1>
        <p className='ofrecemos'>Ofrecemos tarifas especiales para agencias de viaje.</p>
        <p className='complete'>Complete el formulario y en 24 horas nos pondremos en contacto con usted.</p>
        
        <div className='form-container'>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Ponte en contacto</h2>
            <div className="form-group">
              <div className="input-container">
                <img className="icon" src={`${process.env.PUBLIC_URL}/img/User_01.png`} alt="Nombre Icono" />
                <input type="text" name="nombre" placeholder="Nombre" required />
              </div>
              <div className="input-container">
                <img className="icon" src={`${process.env.PUBLIC_URL}/img/User_01.png`} alt="Apellido Icono" />
                <input type="text" name="apellido" placeholder="Apellido" required />
              </div>
            </div>
            <div className="input-container">
              <img className="icon" src={`${process.env.PUBLIC_URL}/img/message.png`} alt="Correo Icono" />
              <input type="email" name="correo" placeholder="Correo electrónico" required />
            </div>
            <div className="input-container">
              <img className="icon" src={`${process.env.PUBLIC_URL}/img/phone.png`} alt="Teléfono Icono" />
              <input type="tel" name="telefono" placeholder="Número de teléfono" required />
            </div>
            <div className="input-container">
              <img className="icon" src={`${process.env.PUBLIC_URL}/img/web.png`} alt="Web Icono" />
              <input type="url" name="web" placeholder="Página web" />
            </div>
            <div className="input-container">
              <img className="icon" src={`${process.env.PUBLIC_URL}/img/city.png`} alt="Ciudad Icono" />
              <input type="text" name="ciudad" placeholder="Ciudad donde se encuentra" required />
            </div>
            <button type="submit" className="submit-button">
              Enviar
              <img className="enviar-icon" src={`${process.env.PUBLIC_URL}/img/arrow.png`} alt="Enviar Icono" />
            </button>
          </form>
        </div>
        
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{modalType === 'success' ? '¡Enviado!' : 'Error'}</h2>
              <p>{modalMessage}</p>
              <button onClick={() => setModalOpen(false)} className="close-modal-button">Cerrar</button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

export default ParaAgenciasDeViaje;
