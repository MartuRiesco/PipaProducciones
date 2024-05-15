import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './styles.css'
import { getProyectosCompletos } from '../../services/firebase';

function ProyectoDetalle() {
    const [datos, setDatos]= useState([])
    const params = useParams();
    const { idProyecto } = params;
    const location = useLocation();
    console.log(idProyecto);
    const colorFondo = new URLSearchParams(location.search).get('color');
   async function leerDatos (){
     const respuesta = await getProyectosCompletos(idProyecto) 
     console.log(respuesta);
     setDatos(respuesta)
   }
   ;
   useEffect(() => {
    leerDatos();
  }, []);
  
  return (
    <div className='work-details' style={{backgroundColor: `#${colorFondo}`}}>
     <h1 className='title-work-details'>{datos[0]?.title}</h1> 
<iframe src={datos[0]?.src} frameborder="0" allowFullScreen className='iframe-proyectos'></iframe>
</div>
  )
}

export default ProyectoDetalle