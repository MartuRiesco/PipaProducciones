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
            <FiMapPin className='icon'/>
            <h4 className='direccion-contacto'>
            Iberá 2599 Piso 8
            </h4>
            </div>
            <div className='iconos-informacion'>
            <BsWhatsapp className='icon'/>
            <h4 className='direccion-contacto'>
            +54911 4034-7047
            </h4>

            </div>
            <div className='iconos-informacion'>
            <BsWhatsapp className='icon'/>
            <h4 className='direccion-contacto'>
            +54911 4542-2848
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