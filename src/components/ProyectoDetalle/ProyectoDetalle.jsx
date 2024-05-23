import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './styles.css';
import { getProyectosCompletos } from '../../services/firebase';
import Loader from '../Loader/Loader'; // Asegúrate de tener un componente Loader

function ProyectoDetalle() {
    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { idProyecto } = useParams();
    const location = useLocation();
    const colorFondo = new URLSearchParams(location.search).get('color');
    console.log(idProyecto);

    useEffect(() => {
        async function leerDatos() {
            try {
                const respuesta = await getProyectosCompletos(idProyecto);
                console.log(respuesta);
                setDatos(respuesta);
            } catch (error) {
                console.error("Error al obtener los datos del proyecto:", error);
            } finally {
                setIsLoading(false);
            }
        }
        leerDatos();
    }, [idProyecto]);

    return (
        isLoading ? (
            <Loader />
        ) : (
            <div className='work-details' style={{ backgroundColor: colorFondo ? `#${colorFondo}` : undefined }}>
                <h1 className='title-work-details'>{datos[0]?.title}</h1>
                <iframe
                    src={datos[0]?.src}
                    frameBorder="0"
                    allowFullScreen
                    className='iframe-proyectos'
                    title={datos[0]?.title}
                ></iframe>
            </div>
        )
    );
}

export default ProyectoDetalle;