import React, {useState} from "react";
import './styles.css'
import { Link } from "react-router-dom";
import CardProyect from "../Card/Card";

const  Menu= () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [isProyectClicked, setIsProyectClicked] = useState(false)
    const [proyectMenu, setProyectMenu] = useState("proyect hidden")
    const proyects = [
        {
            name:'Audiovisuales',
            img: '/images.jpeg',
            id:1,
            link:'audiovisuales',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor.'
        },
        {
            name:'Comerciales',
            id:2,
            link:'comerciales',
            img: '/publi.jpeg',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor.'
        },
        {
            name:'Coberturas',
            id:3,
            link:'coberturas',
            img: '/cob.jpeg',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor.'
        },
    ]
 const menuProyects = () =>{ 
    if(!isProyectClicked) {
        setProyectMenu("proyect visible")
    }
    else {
        setProyectMenu("proyect hidden")
    }
    setIsProyectClicked(!isProyectClicked)
}
 
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
            setIsProyectClicked(false)
            setProyectMenu('hidden')
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div >
            <div  className="menu-hamb-click">
            <nav className="burguer-menu-hover"  >
                <div className="burger-menu"   onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
            </div>
            <div className={menu_class}>
                <div>
                    <div className="menu-desplegable">
                    <button  onClick={menuProyects} className={isProyectClicked ? ' proyect-clicked': 'menu-item'} >PROYECTOS</button>
                <Link to={'/sobrenosotros'}  onClick={updateMenu}>   <button className="menu-item">SOBRE NOSOTROS</button></Link>
                <Link to={'/contacto'}  onClick={updateMenu}>   <button className="menu-item">CONTACTO</button></Link>

                    </div>
                    <div className= {proyectMenu}>
                        <div className="carousel-proyects">
                            {
                                proyects.map((p)=>{
                                    return <Link to={`/proyectos/${p.link}`} onClick={updateMenu} ><CardProyect  img={p.img} key={p.id} name={p.name} text={p.text}/></Link>
                                })
                            }
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu