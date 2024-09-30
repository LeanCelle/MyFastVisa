import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../css/homestyle.css';

function ParaAgenciasDeViaje() {
  return (
    <>
      <div className='pageGlobalStyle'>
        <Navbar />
        <h1 className='agencias'><span className='span'>Agencias de viaje</span></h1>
        <p className='ofrecemos'>Ofrecemos tarifas especiales para agencias de viaje.</p>
        <p className='complete'>Complete el formulario y en 24 horas nos pondremos en contacto con usted.</p>
        
        <div className='form-container'>
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
            <div className="input-container">
                <img className="icon" src={`${process.env.PUBLIC_URL}/img/web.png`} alt="Web Icono" />
                <input type="url" placeholder="Página web" />
            </div>
            <div className="input-container">
                <img className="icon" src={`${process.env.PUBLIC_URL}/img/city.png`} alt="Ciudad Icono" />
                <input type="text" placeholder="Ciudad donde se encuentra" required />
            </div>
            <button type="submit" className="submit-button">
            Enviar
                <img className="enviar-icon" src={`${process.env.PUBLIC_URL}/img/arrow.png`} alt="Enviar Icono" />
                
            </button>
            </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default ParaAgenciasDeViaje;
