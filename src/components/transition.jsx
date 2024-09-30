import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function TransitionComponent() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  return (
    <>
      <div className='faq-container'>
        <div className='faq1'>
          <p className='faq-title'>Preguntas Frecuentes</p>
          <p className='doubts'>¿Aún tenés dudas? Contactanos...</p>
          <a href="https://api.whatsapp.com/send/?phone=5491137834275&text&type=phone_number&app_absent=0" target='_blank' rel="noreferrer"><button className='contact-button'>Contactar</button></a>
        </div>
        <div className='faq2'>
          
          <div className='div-transition' style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => {
              setShowFirst(!showFirst);
              setShowSecond(false);
              setShowThird(false);
              setShowFourth(false);
            }}>
            <img className='arrow' src={`${process.env.PUBLIC_URL}/img/Vector.png`} alt="Logo" />
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            ¿Necesito comprar boletos antes de mi entrevisa?
            </button>
          </div>
          <Collapse in={showFirst}>
            <div>
              <p>No es necesario.</p>
            </div>
          </Collapse>

          
          <div className='div-transition' style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => {
              setShowSecond(!showSecond);
              setShowFirst(false);
              setShowThird(false);
              setShowFourth(false);
            }}>
            <img className='arrow' src={`${process.env.PUBLIC_URL}/img/Vector.png`} alt="Logo" />
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            ¿Por cuánto tiempo es válida la visa?
            </button>
          </div>
          <Collapse in={showSecond}>
            <div>
              <p>10 años.</p>
            </div>
          </Collapse>

          
          <div className='div-transition' style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => {
              setShowThird(!showThird);
              setShowFirst(false);
              setShowSecond(false);
              setShowFourth(false);
            }}>
            <img className='arrow' src={`${process.env.PUBLIC_URL}/img/Vector.png`} alt="Logo" />
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            ¿Cuándo puedo volver a solicitar una visa si es rechazada?
            </button>
          </div>
          <Collapse in={showThird}>
            <div>
              <p>Recomendamos esperar al menos 6 meses.</p>
            </div>
          </Collapse>

          
          <div className='div-transition' style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => {
              setShowFourth(!showFourth);
              setShowFirst(false);
              setShowSecond(false);
              setShowThird(false);
            }}>
            <img className='arrow' src={`${process.env.PUBLIC_URL}/img/Vector.png`} alt="Logo" />
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            ¿Cuáles son las razones más comunes para el rechazo de la visa?
            </button>
          </div>
          <Collapse in={showFourth}>
            <div>
              <p>Los rechazos suelen ocurrir por errores en el formulario DS-160, documentos faltantes, prueba insuficiente de lazos con país de origen o inconsistencias en tu información.<br/>Para evitar estos problemas, recomendamos que tramites tu visa con nosotros. Nos encargamos de todos los detalles para garantizar una solicitud completa y precisa. ¡Contáctanos para recibir asistencia personalizada!</p>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default TransitionComponent;
