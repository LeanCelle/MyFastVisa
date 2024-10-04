import Footer from '../components/footer';
import Navbar from '../components/navbar';
import TransitionComponent from '../components/transition';
import '../css/homestyle.css';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

function Home() {
    const wordsWithIcons = [
        { word: 'Turismo ', icon: `${process.env.PUBLIC_URL}/img/Property 1=Frame 76.png`, color: 'rgb(243, 243, 22)' },
        { word: 'Estudios ', icon: `${process.env.PUBLIC_URL}/img/Property 1=Frame 77.png`, color: 'red' },
        { word: 'Trabajo ', icon: `${process.env.PUBLIC_URL}/img/Frame 75.png`, color: 'green' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const location = useLocation();

    useEffect(() => {
        // Inicializa AOS
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Manejar scroll en base al parámetro de la URL
        const params = new URLSearchParams(location.search);
        const section = params.get('section');
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsWithIcons.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [location, wordsWithIcons.length]);

    const handleStartClick = () => {
        const section = document.getElementById('servicios');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='pageGlobalStyle'>
                <Navbar />
                <div className='body'>
                    <div className="contenido-centro" data-aos="zoom-out">
                        <div>
                            <h1>Conseguí tu visa de{' '}
                                <span style={{ color: wordsWithIcons[currentIndex].color }}>
                                    {wordsWithIcons[currentIndex].word}
                                </span>
                                <img src={wordsWithIcons[currentIndex].icon} alt="icono" className="rotating-icon" />
                            </h1>
                            <h2>con <strong className='MyFastVisa-home'>MyFastVisa</strong></h2>
                        </div>
                        <div>
                            <h5 className='yaSea'>Ya sea que viajes por placer, estudio o trabajo, conseguí tu visa sin complicaciones y empezá a cumplir tus sueños con MyFastVisa.</h5>
                        </div>
                        <div>
                            <a href="https://api.whatsapp.com/send/?phone=5491137834275&text&type=phone_number&app_absent=0" target='_blank' rel="noreferrer">
                        <button id="servicios" className='contact-button'>Empezar</button>
                    </a>
                        </div>
                    </div>
                    <p className='nuestrosServicios'><span className='span'>Nuestros Servicios</span></p>

                    <div className="card-container">
                        <div data-aos="fade-up">
                            <img className='cards' src={`${process.env.PUBLIC_URL}/img/Frame 19 (1).png`} alt="Card." />
                        </div>
                        <div data-aos="fade-up">
                            <img className='cards' src={`${process.env.PUBLIC_URL}/img/Frame 29 (1).png`} alt="Card." />
                        </div>
                        <div data-aos="fade-up">
                            <img className='cards' src={`${process.env.PUBLIC_URL}/img/Frame 30 (1).png`} alt="Card." />
                        </div>
                        <div data-aos="fade-up">
                            <img className='cards' src={`${process.env.PUBLIC_URL}/img/Frame 31 (1).png`} alt="Card." />
                        </div>
                        <div data-aos="fade-up">
                            <img className='cards' src={`${process.env.PUBLIC_URL}/img/Frame 32 (1).png`} alt="Card." />
                        </div>
                    </div>
                </div>

                <p id="reviews" className='somePeople'><span className='numberSpan'>1200+</span> personas obtuvieron<br />sus visas con nosotros</p>

                <div className="opinion-container" data-aos="fade-up">
                    <div>
                        <img className='opinion-cards' src={`${process.env.PUBLIC_URL}/img/Frame 91.png`} alt="Card." />
                    </div>
                    <div>
                        <img className='opinion-cards' src={`${process.env.PUBLIC_URL}/img/Frame 91 (1).png`} alt="Card." />
                    </div>
                    <div>
                        <img id="requisitos" className='opinion-cards' src={`${process.env.PUBLIC_URL}/img/Frame 91 (2).png`} alt="Card." />
                    </div>
                </div>

                <div className='requisitos-container-total'>
                    <div className="requisitos-container" data-aos="fade-up">
                        <div className="requisitos-titulo">
                            <p className='contactanos'><span className='span'>Requisitos</span></p>
                        </div>
                        <div className="requisitos-contenido">
                            <div className="requisitos-img">
                                <img src={`${process.env.PUBLIC_URL}/img/Rectangle 11.png`} alt="Travel bag." />
                            </div>
                            <div className="requisitos-textos">
                                <div className="texto-item">
                                    <img className='requisitos-icons' src={`${process.env.PUBLIC_URL}/img/Check Mark Button.png`} alt="Check." />
                                    <p className='requisitos-text'>Pasaporte vigente</p>
                                </div>
                                <div className="texto-item">
                                    <img className='requisitos-icons' src={`${process.env.PUBLIC_URL}/img/Family Man Woman Boy.png`} alt="Family." />
                                    <p className='requisitos-text'>Prueba de lazos con Argentina (por ejemplo, familia, propiedades o empleo).</p>
                                </div>
                                <div  className="texto-item">
                                    <img className='requisitos-icons' src={`${process.env.PUBLIC_URL}/img/Page Facing Up.png`} alt="Paper." />
                                    <p id="faq" onClick={handleStartClick} className='requisitos-text'>Si sos extranjero, también necesitas un documento de identidad (DNI)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TransitionComponent />
                <Footer />
            </div>
        </>
    );
}

export default Home;