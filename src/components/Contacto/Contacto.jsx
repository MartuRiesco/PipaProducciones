import React from 'react'
import './styles.css'
import Forms from '../Forms/Forms'
import {FiMapPin} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'

function Contacto() {
  return (
    <div className='container-contacto'>
      <h1 className='titulo-contacto'>CONTACTO</h1>
      <article className='contacto-content'>
       <div className='info-contacto'>
        <h3 className='texto'> ¡Convertí tu visión en realidad con nosotros! Como productora audiovisual, estamos listos para potenciar tu marca u organización con estrategias y comunicaciones impactantes. Suma valor a través de nuestras producciones que transforman y conectan.</h3>
        <div className='info-redes'>
        

          <h3 className='ubicacion-contacto'>
            Buenos Aires, Argentina
          </h3>

          <div className='iconos-contacto'>
            <div className='iconos-informacion'>
           <a href="https://wa.me/1158702442"> <BsWhatsapp className='icon'/></a>
            <h4 className='direccion-contacto'>
            <span className='nombre'>Pablo Arias </span>: +5491158702442
            </h4>
            </div>
            <div className='iconos-informacion'>
           <a href="https://wa.me/1161125239"> <BsWhatsapp className='icon'/></a>
            <h4 className='direccion-contacto'>
            <span className='nombre'>Santiago García Sánchez</span>: +5491161125239
            </h4>
            </div>
            <div className='iconos-informacion'>
           <a href="https://wa.me/1137883866"> <BsWhatsapp className='icon'/></a>
            <h4 className='direccion-contacto'>
            <span className='nombre'>Juan Escolar </span>: +5491137883866
            </h4>
            </div>
            </div>

        </div>

       </div>
       <div className="form">
<Forms></Forms>
       </div>
      </article>
    </div>
  )
}

export default Contacto