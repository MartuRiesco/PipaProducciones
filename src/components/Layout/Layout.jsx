import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import './style.css'
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
function Layout() {

  return (
    <div className='header'>
       <Link to={'/'} ><img src="/PipaWhite.svg" alt="logo" className='logo' /></Link>
        <Menu/>
    </div>
  )
}

export default Layout