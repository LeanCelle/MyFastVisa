import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../css/homestyle.css';

function AcercaDeNosotros() {
  return (
    <>
      <div className='pageGlobalStyle'>
        <Navbar/>
        <div className='banner-container'>
          <div className="banner-section">
            
            <div className="banner-background">
              <img className='bannerAcerca' src={`${process.env.PUBLIC_URL}/img/Rectangle.png`} alt="Fondo" />
            </div>
            
            <img className='logoAcerca' src={`${process.env.PUBLIC_URL}/img/Group.png`} alt="Logo" />
            <p className='textoDebajoLogo'>El equipo que hace que tu proceso de visa sea más sencillo</p>
          </div>
        </div>

        
        <div className="content-section">
          <div className="text-container">
            <p className="text-content"><span className='span'>MyFastVisa</span> es un servicio diseñado para <span className='span'>simplificar</span> el proceso de obtención de la visa <span className='span'>estadounidense</span></p>
          </div>
          <div className="image-container">
            <img className='side-image' src={`${process.env.PUBLIC_URL}/img/Rectangle 17.png`} alt="Imagen lateral" />
          </div>
        </div>

        <p className='entendemos'>Entendemos la importancia del tiempo y la libertad de explorar nuevas oportunidades en el extranjero.</p>

        
        <div className='textAndIcon-section-container'>
          <div className='textAndIcon-section'>
            <div className='texto-section'>
                <p>Por eso creamos un sistema que se encarga de la parte más estresante:</p>
            </div>
            <div className="icon-section">
              <div className="icon-item">
                <img className="icon-image" src={`${process.env.PUBLIC_URL}/img/Trophy.png`} alt="Icono 1" />
                <p className="icon-text">Conseguir las citas</p>
              </div>
              <div className="icon-item">
                <img className="icon-image" src={`${process.env.PUBLIC_URL}/img/Books.png`} alt="Icono 2" />
                <p className="icon-text">Prepararte para la entrevista</p>
              </div>
            </div>
          </div>
        </div>
        <p className='lanzamienzo'>Desde nuestro lanzamiento en 2022, hemos ayudado a nuestros clientes a conseguir sus visas para EE. UU., brindando asesoría personalizada y apoyo durante todo el proceso.<br/><br/>¡Y esto es solo el comienzo!</p>

        <div className="image-alejo-container">
            <a href="https://www.linkedin.com/in/alejofiaschecormick/" target='_blank'><img className='image-alejo' src={`${process.env.PUBLIC_URL}/img/Frame 67@2x.png`} alt="Alejo Fiasche." /></a>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AcercaDeNosotros;
