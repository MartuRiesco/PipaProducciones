import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect';
import { IoIosArrowDown } from "react-icons/io";
import './styles.css'

function SobreNosotros() {
const [responsive, isResponsive] = useState(false)
const items= [
  {
    text:"Creamos contenidos que no sólo promocionan productos, sino que también narran historias memorables. Buscamos conceptos frescos y ofrecemos una ejecución impecable. Con estas premisas de trabajo nos comprometemos a llevar tu mensaje al siguiente nivel."
,
      img:'https://i.imgur.com/V7FN1bj.jpg'    
  },{
    text:"En Pipa Producciones, reconocemos la singularidad de cada proyecto publicitario y la importancia de brindar un servicio especializado. Trabajamos en estrecha colaboración con nuestros clientes para comprender sus objetivos comerciales y poder desarrollar estrategias creativas que conecten de manera efectiva con sus destinatarios.",
    img:'https://i.imgur.com/ApHMiII.jpg'
  },
  {
    text: "En Pipa Producciones, no solo creamos contenido, sino que también creamos experiencias que dejan huella y que harán que tu marca brille en un mundo cada vez más visual y competitivo.",
    img:'https://i.imgur.com/exz9lcW.jpg'
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
        Bienvenidos a Pipa Producciones, somos productores de contenidos, hacemos que las ideas publicitarias se conviertan en realidad.  En Pipa Producciones contamos con profesionales experimentados tanto en grandes producciones de la industria publicitaria tradicional, como con profesionales empapados en lo último en innovaciones tecnológicas, para poder ofrecer el más alto nivel de servicio de producción.
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