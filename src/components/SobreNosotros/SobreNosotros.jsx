import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect';
import { IoIosArrowDown } from "react-icons/io";
import './styles.css'

function SobreNosotros() {
const [responsive, isResponsive] = useState(false)
const items= [
  {
    text:"Nos especializamos en la creación de comerciales que no solo promocionan productos, sino que también cuentan historias memorables. Desde la concepción de conceptos frescos hasta la ejecución impecable,  nos comprometemos a llevar tu mensaje al siguiente nivel y garantizar que se destaque en un mercado saturado " ,
      img:'https://i.imgur.com/V7FN1bj.jpg'    
  },{
    text:"En Pipa Producciones, reconocemos la singularidad de cada proyecto publicitario y la importancia de brindar una atención especializada. Trabajamos en estrecha colaboración contigo para comprender tus objetivos comerciales y luego desarrollar estrategias creativas que conecten de manera auténtica y efectiva con tu audiencia.",
    img:'https://i.imgur.com/ApHMiII.jpg'
  },
  {
    text: "En Pipa Producciones, no solo creamos contenido, sino que también creamos experiencias que dejan huella. Confía en nosotros para llevar tus ideas publicitarias al siguiente nivel y hacer que tu marca brille en un mundo cada vez más visual y competitivo.",
    img:'/foto-png.png'
  }
]
function esMobile(){
if(isMobile){
  isResponsive(true)
}else{
  isResponsive(false)
}

 }
 useEffect(() => {
  const handleScroll = () => {
    const itemsElements = document.querySelectorAll('.items');
    itemsElements.forEach((item) => {
      const distanciaDesdeTop = item.getBoundingClientRect().top;
      if (distanciaDesdeTop < window.innerHeight) {
        item.classList.add('aparecer');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); 

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [false]);
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
    <div className='sobrenos-container'>
        <p className='texto-sobrenos'>
        Bienvenidos a Pipa Producciones, un centro de creatividad donde las ideas publicitarias se convierten en realidad. 
Conformada por un equipo de tres experimentados productores - Juan Escolar, Santiago García Sánchez y Pablo Arias -, 
Pipa Producciones fusiona la riqueza de la experiencia con la innovación para ofrecer el más alto nivel de servicio en el mundo de la publicidad.
        </p>
        <IoIosArrowDown className='flecha'/>
      </div>
    <div className='item-servicio'>
        
        {items.map((item, index)=>(
            // eslint-disable-next-line react/jsx-key
            <section className='items'>
                {index % 2 === 0 || responsive ? (
                  <React.Fragment>
                    <div className='item-img' style={{
                    
                    }}>
                       <img className='imagen-servicio' src={item.img}  />
                    </div>
                    <div className='item-info' style={{
                    
                    }} >
                        
                        <p className='descripcion-servicio'>{item.text}</p>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className='item-info'  style={{
                     
                    }}>
                        
                        <p className='descripcion-servicio'>{item.text}</p>
                       
                    </div>
                    <div className='item-img' style={{
                    
                    }}>
                       <img  className='imagen-servicio' src={item.img}  />
                    </div>
                  </React.Fragment>
                )}
            </section>
        ))}

    </div>
    </div>
  )
  /* return (
    <div>
      
      <div>
        <div className='foto-info-container'>
          <img src='/foto-png.png' alt="foto cuadrado" className='foto-info' />
          <p>Nos especializamos en la creación de comerciales que no solo promocionan productos, sino que también cuentan historias memorables. 
Desde la concepción de conceptos frescos hasta la ejecución impecable,  nos comprometemos a llevar tu mensaje al siguiente nivel y garantizar que se destaque en un mercado saturado.</p>
        </div>
      </div>
    </div>
  ) */
}

export default SobreNosotros