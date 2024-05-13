import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Proyectos from './components/Proyectos/Proyectos'
import SobreNosotros from './components/SobreNosotros/SobreNosotros'
import Contacto from './components/Contacto/Contacto'
import ProyectoDetalle from './components/ProyectoDetalle/ProyectoDetalle'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <div className='app'>
        

      <BrowserRouter>
      <Layout/>
      <div className='aplication'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/proyecto/:idProyecto' element={<ProyectoDetalle/>}/>
          <Route path='/proyectos/audiovisuales' element={<Proyectos type={'aud'}/>}/>
          <Route path='/proyectos/comerciales' element={<Proyectos type={'com'}/>}/>
          <Route path='/proyectos/coberturas' element={<Proyectos type={'cob'}/>}/>
          <Route path='/sobrenosotros' element={<SobreNosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </div>
      
      <Footer/>
      </BrowserRouter>
        
    </div>
    </>
  )
}

export default App
