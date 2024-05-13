import React from 'react'
import 'ldrs/mirage'
import './styles.css'

function Loader() {
  return (
    <div className='loader-container'>
      <div className='loader'>
    <l-mirage
      size="120"
      speed="2.5"
      color="white" 
    ></l-mirage></div> </div>
    
  )
}

export default Loader