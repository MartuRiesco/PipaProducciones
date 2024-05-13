import React, { useEffect, useState } from 'react'
import './styles.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader';
import { getProyectos, getProyectosCom, getProyectosEventos } from '../../services/firebase';

function Proyectos({type}) {
  const [datos, setDatos]=useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [coloresFondo] = useState(['#c9b19c', '#856084', '#3c887e','#c73e1d', '#548c3f','#fe7676', '#197BBD'  ]); // Array de colores
async function leerDatos() {
    let respuesta 
    switch (type) {
        case 'aud':
        respuesta = await getProyectos();
        setIsLoading(false);
          break;
          case 'com':
            respuesta = await getProyectosCom()
            setIsLoading(false);
          break;
          case 'cob':
            respuesta = await getProyectosEventos()
            setIsLoading(false);
          break;
      default: 
      alert('hola')
      break;
      
    }
  
    setDatos(respuesta);
  }

  useEffect(() => {
    leerDatos();
  }, [type]);
 
  return (
<div className='proyectos'>
    {isLoading ? (
      <Loader />
    ) : (
      datos.map((dato, index) => (
        <Link to={`/proyecto/${dato.link}?color=${coloresFondo[index % coloresFondo.length].substring(1)}`} key={dato.title}>
          <div className='work-item sticky' style={{ backgroundColor: coloresFondo[index % coloresFondo.length] }}>
            <div className='work-container'>
              <img src={dato.img} className='work-image' alt={dato.title} />
            </div>
            <div className='work-info-list'>
              <div className='title-work'>
                <h1 className='title-work-list'>{dato.title}</h1>
                <FaArrowRightLong className='flecha-proy'/>
              </div>
              <h3 className='subtitle-work-list'>{dato.info}</h3>
            </div>
            <button className='button-work'>VER PROYECTO</button>
          </div>
        </Link>
      ))
    )}
  </div>
);
}

export default Proyectos