import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import Events from '../Events/Events'
import Gallery from '../Gallery/Gallery'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
            <Route path='/contact' element={<Footer/>}/>
        </Routes>
    </div>
  )
}

export default Routing