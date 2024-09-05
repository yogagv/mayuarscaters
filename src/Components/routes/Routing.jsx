import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import Events from '../Events/Events'
import Gallery from '../Gallery/Gallery'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/#about' element={<About/>}/>
            <Route path='/#services' element={<Services/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
    </div>
  )
}

export default Routing