import React from 'react';
import './styles.css'

function Footer() {
  return (
    <div className='footer container'>
        <div className='footer__content'>
            <div className='footer__content-copyright'>
                <p>©2023  PIPA PRODUCCIONES. Todos los derechos reservados.</p>
            </div>
            <div className='footer__content-developer'>
               <a className='link-inst' href="https://www.instagram.com/mymdevelopers/"> <p>Desarrollado por M&M</p></a>
            </div>
        </div>
    </div>
  )
}

export default Footer;