import React from 'react'
import './styles.css'
function Home() {
  return (
    <div>  
    <div className='home-video-container'>
        <section className='home-video'>
        <React.Fragment>      
      <div className='vid'>
        <video loop autoPlay muted className='video'>
          <source src="https://frigorificomartelli.com/wp-content/uploads/2024/05/PipaReel-720.mp4" type="video/mp4" />
          </video>
        </div>
    </React.Fragment>
        </section>
    </div>
    <div className='home-text'>
        <h1 className='title-home'>PIPA</h1>
        <p  className='subtitle-home'>Producciones audiovisuales</p>
    </div>
    </div>
  )
}

export default Home